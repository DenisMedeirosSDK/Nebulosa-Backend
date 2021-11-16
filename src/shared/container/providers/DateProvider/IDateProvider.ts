interface IDateProvider {
  addDays(days: number): Date
  addHours(hours: number): Date
  compareIfBefore(startDate: Date, endDate: Date): boolean
  dateNow(): Date
}

export { IDateProvider }
