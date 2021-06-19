interface ICreateAppointmentDTO{
  date:Date
  serviceId:string
  customerId:string
  providerId?:string
  status?:string
}

export { ICreateAppointmentDTO }
