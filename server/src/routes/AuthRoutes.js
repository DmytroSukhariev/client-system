const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const AuthErrors = require('../errors/errors')
const User = require('../models/User')

const router = Router()


    router.post('/register', async (req, res) => {
    try{
        const {email, password, firstName, secondName, phoneNumber} = req.body
        
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({message: "Такой пользователь уже существует"})
        }

        const hashPass = await bcrypt.hash(password, 12)
        const user = new User({
            email,
            password: hashPass, 
            firstName, 
            secondName,
            phoneNumber
        })
        await user.save()

        res.status(201).json({message: "Пользователь создан"})

    } catch (error){
        const {email, phoneNumber, firstName, secondName} = error.errors
        const message = {}
        if(email){
            message.email = AuthErrors.validationEmailError
        }
        if(phoneNumber){
            message.phoneNumber = AuthErrors.validationPhoneError
        }
        if(firstName){
            message.firstName = AuthErrors.validationNameError
        }
        if(secondName){
            message.secondName = AuthErrors.validationSurnameError
        }
         res.status(500).json(message)
         console.log(error)
    }
})


    router.post('/login', async (req, res) => {
    try{
        // const errors = validationResult(req)

        // if (!errors.isEmpty){
        //     return res.status(400).json({
        //         errors: errors.array(),
        //         message: 'Некорректные данные при регистрации'
        //     })
        // }

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