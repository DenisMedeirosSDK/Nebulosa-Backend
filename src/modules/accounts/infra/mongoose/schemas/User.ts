import mongoose, { Schema } from 'mongoose'

import { User } from '@modules/accounts/entities/User'

const UserSchema = new Schema<User>({
  name: {
    type: 'String',
    required: true
  },
  email: {
    type: 'String',
    required: true
  },
  password: {
    type: 'String',
    required: true
  },
  avatar: {
    type: 'String',
    required: false
  },
  role: {
    type: 'String',
    required: false
  },
  createdAt: {
    type: 'Date',
    default: new Date(Date.now())
  },
  updatedAt: {
    type: 'Date'
  }
})

export const UserMongo = mongoose.model<User>('users', UserSchema)
