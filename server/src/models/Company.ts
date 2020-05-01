import {prop, getModelForClass} from '@typegoose/typegoose'
import {Types} from 'mongoose'

const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/

class Company{
    @prop({required: true, default: Date.now()})
    registerDate!: Date

    @prop({required: true, ref: 'OwnerId'})
    registeredBy!: Types.ObjectId

    @prop({required: true, match: pattern})
    name!: string

    @prop()
    description?: string

    @prop()
    occupation?: string

    @prop()
    brands?: [Types.ObjectId]

    @prop()
    contactPersons?: [Types.ObjectId]
}
const company = getModelForClass(Company)

export default company