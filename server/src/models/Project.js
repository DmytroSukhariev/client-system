const {Schema, model, Types} = require('mongoose')
const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/

const schema = new Schema({
    registerDate: {type: Date, default: Date.now, required: true}, 
    registeredBy: {type: Types.ObjectId, required: true}, /* UserId */
    name: {type: String, required: true, match: pattern},
    companyOwner: {type: Types.ObjectId}, /* CompanyId */
    amount: {type: Number},
    startTerm: {type: Date, default: Date.now()},
    finishTerm: {type: Date}
})

module.exports = model('Project', schema)