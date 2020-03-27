const {Schema, model, Types} = require('mongoose')

const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const schema = new Schema({
    _id: {type: Types.ObjectId, ref: 'User'},
    registerDate: {type: Date, default: Date.now, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName:{type: String, required: true},
    secondName: {type: String, required: true},
    patronymic:{type: String},
    companies: [{type: Types.ObjectId, ref: 'Company'}],
    phoneNumber: {type: String},
    telegramId: {type: String}
})

module.exports = model('User', schema)