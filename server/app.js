const express = require ('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/auth', require('./src/routes/AuthRoutes'))
app.use('/user', require('./src/routes/UsersRoutes'))
app.use('/companies', require('./src/routes/CompaniesRoutes'))
app.use('/brands', require('./src/routes/BrandsRoutes'))

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

