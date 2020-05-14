import express from 'express'
import config, {IConfig} from 'config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'

const corsWhitelist : string[] = config.get('corsWhiteList')
const app = express()

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        console.log(origin)
        if (corsWhitelist.includes(origin!)) {
            callback(null, true)
        } else {
            callback(new Error(`${origin} Not allowed by CORS`))
        }
    }
}
const PORT = config.get('port')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/auth', require('./routes/AuthRoutes'))
app.use('/user', require('./routes/UsersRoutes'))
app.use('/companies', require('./routes/CompaniesRoutes'))
app.use('/brands', require('./routes/BrandsRoutes'))
app.use('/projects', require('./routes/ProjectsRoutes'))
app.use(cors(corsOptions));

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

