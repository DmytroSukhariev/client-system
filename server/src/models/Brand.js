const {Schema, model, Types} = require('mongoose')
const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/

const schema = new Schema({
    registerDate: {type: Date, default: Date.now, required: true},
    registeredBy: {type: Types.ObjectId, ref: 'User', required: true},
    brandName: {type: String, match: pattern},
    brandDescription: {type: String},
    ownerCompany: {type: Types.ObjectId, ref: 'Company', required: true}
})

module.exports = model('Brand', schema)