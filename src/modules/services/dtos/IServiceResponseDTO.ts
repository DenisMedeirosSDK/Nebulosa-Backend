import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO'

interface IServiceResponseDTO {
  id: string
  name: string
  description: string
  price: number
  available: boolean
  duration: number
  categoryId: string
  user: IUserResponseDTO
}

export { IServiceResponseDTO }
