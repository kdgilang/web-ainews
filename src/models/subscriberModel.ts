import { Types } from 'mongoose'

export interface ISubscriberModel {
    _id?: Types.ObjectId
    firstName?: string
    lastName?: string
    email: string
    userId?: string
}

export class SubscriberModel implements ISubscriberModel {
    _id?: Types.ObjectId
    firstName: string
    lastName: string
    email: string
    userId?: string
    constructor() {
        this._id = new Types.ObjectId()
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.userId = ''
    }
}