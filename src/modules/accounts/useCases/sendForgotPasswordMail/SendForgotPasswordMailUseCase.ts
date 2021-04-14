import { resolve } from 'path'
import { v4 as uuidV4 } from 'uuid'

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider'
import { AppError } from '@shared/errors/AppError'

class SendForgotPasswordMailUseCase {
  constructor(
    private userRepository: IUserRepository,
    private userTokenRepository: IUserTokenRepository,
    private dateProvider: IDateProvider,
    private mailProvider: IMailProvider
  ) { }

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email)

    const templatePath = resolve(__dirname, '..', '..', 'views', 'emails', 'forgotPassword.hbs')

    if (!user) {
      throw new AppError('User does not exists')
    }

    const token = uuidV4()

    const expiresDate = this.dateProvider.addHours(3)

    await this.userTokenRepository.create({
      refreshToken: token,
      userId: user.id,
      expiresDate
    })

    const variables = {
      name: user.name,
      link: `${process.env.FORGOT_MAIL_URL}${token}`
    }

    await this.mailProvider.sendMail(
      email,
      'Recuperação de senha',
      variables,
      templatePath
    )
  }
}

export { SendForgotPasswordMailUseCase }
