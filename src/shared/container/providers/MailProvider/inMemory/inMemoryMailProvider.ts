import { IMailProvider } from '../IMailProvider'

class inMemoryMailProvider implements IMailProvider {
  private message: any[] = []

  async sendMail(to: string, subject: string, variables: any, path: string): Promise<void> {
    this.message.push({
      to, subject, variables, path
    })
  }
}
export { inMemoryMailProvider }
