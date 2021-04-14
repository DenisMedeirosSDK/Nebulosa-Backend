import dayjs from 'dayjs'

import { IDateProvider } from '../IDateProvider'

class DateDaysJSProvider implements IDateProvider {
  addHours(hours: number): Date {
    return dayjs().add(hours, 'hours').toDate()
  }

  addDays(days: number): Date {
    return dayjs().add(days, 'days').toDate()
  }
}

export { DateDaysJSProvider }
