const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    registerDate: {type: Date, default: Date.now, required: true},
    registeredBy: {type: Types.ObjectId, ref: 'User', required: true},
    brandName: {type: String},
    brandDescription: {type: String},
    ownerCompany: {type: Types.ObjectId, ref: 'Company', required: true}
})

module.exports = model('Brand', schema)