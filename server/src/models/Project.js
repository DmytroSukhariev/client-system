const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    registerDate: {type: Date, default: Date.now, required: true}, 
    registeredBy: {type: Types.ObjectId, required: true}, /* UserId */
    name: {type: String, required: true},
    companyOwner: {type: Types.ObjectId}, /* CompanyId */
    amount: {type: Number},
    startTerm: {type: Date, default: Date.now()},
    finishTerm: {type: Date}
})

module.exports = model('Project', schema)