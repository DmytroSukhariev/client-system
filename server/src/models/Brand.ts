import {prop, getModelForClass} from '@typegoose/typegoose'
import {Types} from 'mongoose'

const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/

class Brand{
    @prop({required: true, default: Date.now()})
    registerDate!: Date

    @prop({required: true, ref: 'OwnerId'})
    registeredBy!: Types.ObjectId

    @prop({required: true, match: pattern})
    brandName!: string

    @prop()
    brandDescription?: string

    @prop({required: true})
    ownerCompany!: [Types.ObjectId]
}
const brand = getModelForClass(Brand)

export default brand