const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    registerDate: {type: Date, default: Date.now, required: true},
    registeredBy: {type: Types.ObjectId, ref: 'OwnerId', required: true},
    name: {type: String, required: true, unique: true},
    description: {type: String},
    occupation: {type: String},
    brands: [{type: Types.ObjectId, ref: 'Brand'}],
    contactPersons:[{type: Types.ObjectId, ref: ''}]
})

module.exports = model('Company', schema)