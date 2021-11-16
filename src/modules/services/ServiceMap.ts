import { classToClass } from 'class-transformer'

import { IServiceResponseDTO } from './dtos/IServiceResponseDTO'
import { Service } from './infra/typeorm/entities/Service'

class ServiceMap {
  static toDTO({
    id,
    name,
    description,
    price,
    available,
    duration,
    categoryId,
    user: { id: userId, name: userName, email, avatar, role, avatarURL }
  }: Service): IServiceResponseDTO {
    const service = classToClass({
      id,
      name,
      description,
      price,
      available,
      duration,
      categoryId,
      user: {
        id: userId,
        name: userName,
        email,
        avatar,
        role,
        avatarURL
      }
    })

    return service
  }
}

export { ServiceMap }
