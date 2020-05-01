import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import {Request, Response} from 'express'
import checkTakenEmail from '../middleware/AuthMiddleware'
import authErrors from '../errors/auth-errors'
import User from '../models/User'

const router = Router()

router.post(
    '/register', 
    checkTakenEmail, 
    async (req: Request, res: Response) => {
        try{
            const {email, password, firstName, secondName, phoneNumber} = req.body
            const hashPass = await bcrypt.hash(password, 12)
            
            await User.create({
                email,
                password: hashPass, 
                firstName, 
                secondName,
                phoneNumber
            })
            
            res.status(201).json({message: "Пользователь создан"})

        } catch (error){
            res.status(500).json(authErrors(error))
        }
})


    router.post('/login', async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body
       
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: "Пользователь не найден"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(500).json({message: "Неверный пароль"})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h'}
        )

        res.json({ token, userId: user.id })

    } catch (e){
        res.status(500).json( {message: "Что-то пошло не так"} )
    }
    })

    module.exports = router