const express = require ('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./src/routes/AuthRoutes'))
app.use('/api/user', require('./src/routes/UserRoutes'))
app.use('/api/companies', require('./src/routes/CompaniesRoutes'))
app.use('/api/brands', require('./src/routes/BrandsRoutes'))

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log (`App has been started on ${PORT}`))
    } catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

