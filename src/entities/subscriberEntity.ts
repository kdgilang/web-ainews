import { Schema, model, Types, models } from 'mongoose'
import { ISubscriberModel } from '@src/models/subscriberModel'
import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
} from '@src/consts/config'

export const isEmail = {
  validator: (email: string): boolean => EMAIL_REGEX.test(email),
  message: EMAIL_ERROR_MESSAGE,
}

const SubscriberEntity = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email is already in use.'],
    lowercase: [true, 'Email require lowercase'],
    validate: isEmail,
  },
  userId: Types.ObjectId
})

// UserEntity.pre('save', async function (next: any) {

//   // only hash the password if it has been modified (or is new)
//   if (!this.isModified('password')) return next()

//   try {
//     // generate a salt
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
//     // store hash password
//     this.password = await bcrypt.hash(this.password, salt)
//     return next()
//   } catch (err) {
//     console.log(err)
//     return next(err)
//   }
// })

// UserEntity.methods.comparePassword = async function (password: string)  {
//   return bcrypt.compare(password, this.password);
// };

// type ComparePasswordType = (password: string) => boolean

// interface IUserEntity extends IUserModel {
//   comparePassword: ComparePasswordType
// }

export default models.Subscriber || model<ISubscriberModel>('Subscriber', SubscriberEntity)
