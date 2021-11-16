interface IUserResponseDTO {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  avatarURL(): string
}
export { IUserResponseDTO }
