interface IUserResponseDTO {
  id: string
  name: string
  email: string
  avatar: string
  phone: string
  avatarURL(): string
}
export { IUserResponseDTO }
