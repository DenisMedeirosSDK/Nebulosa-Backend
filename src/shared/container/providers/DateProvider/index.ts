import { container } from 'tsyringe'

import { IDateProvider } from './IDateProvider'
import { DateDaysJSProvider } from './implementations/DateDaysJSProvider'

container.registerSingleton<IDateProvider>(
  'DateProvider',
  DateDaysJSProvider
)
