import {prop, getModelForClass} from '@typegoose/typegoose'
import {Types} from 'mongoose'

const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/

class Project{
    @prop({required: true, default: Date.now()})
    registerDate!: Date

    @prop({required: true, ref: 'UserId'})
    registeredBy!: Types.ObjectId

    @prop({required: true, match: pattern})
    name!: string

    @prop({required: true})
    companyOwner!: Types.ObjectId

    @prop()
    amount?: number

    @prop({default: Date.now()})
    startTerm?: Date

    @prop()
    finishTerm?: Date
}
const project = getModelForClass(Project)

export default project