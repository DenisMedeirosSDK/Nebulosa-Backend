import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ServiceController {
  async index(request: Request, response: Response) {
    const filters = request.query

    const skill = filters.skill as string
    const week_day = filters.week_day as string
    const time = filters.time as string

    if (!filters.week_day || !filters.skill || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search services'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const service = await db('services')
      .whereExists(function () {
        this.select('service_schedule.*')
          .from('service_schedule')
          .whereRaw('`service_schedule`.`service_id` = `services`.`id`')
          .whereRaw('`service_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`service_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`service_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('services.skill', '=', skill)
      .join('users', 'services.user_id', '=', 'users.id')
      .select(['services.*', 'users.*'])

    return response.json(service)
  }

  async create(request: Request, response: Response) {
    const { name, avatar, bio, whatsapp, skill, cost, schedule } = request.body

    const trx = await db.transaction()

    try {
      const insertedUsersIds = await trx('users').insert({
        name, avatar, bio, whatsapp
      })

      const user_id = insertedUsersIds[0]

      const insertedServiceIds = await trx('services').insert({
        skill, cost, user_id
      })

      const service_id = insertedServiceIds[0]

      const serviceSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          service_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })

      await trx('service_schedule').insert(serviceSchedule)

      await trx.commit()
      return response.status(201).send()
    } catch (error) {
      await trx.rollback()

      return response.status(400).json({
        error: 'Unexpected error while creating new service'
      })
    }
  }
}
