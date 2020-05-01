import {prop, getModelForClass} from '@typegoose/typegoose'
import {Types} from 'mongoose'

const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const justPattern = /^[^_]\w[^_]+/
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

class User{
    @prop({required: true, default: Date.now()})
    registerDate!: Date

    @prop({required: true, match: emailPattern})
    email!: string

    @prop({required: true})
    password!: string

    @prop({required: true, match: justPattern})
    firstName!: string

    @prop({required: true, match: justPattern})
    secondName!: string

    @prop({match: justPattern})
    patronymic?: string

    @prop({ref: 'Companies'})
    companies?: [Types.ObjectId]

    @prop({match: phonePattern})
    phoneNumber?: string

    @prop()
    telegramId?: string
}
const user = getModelForClass(User)

export default user
