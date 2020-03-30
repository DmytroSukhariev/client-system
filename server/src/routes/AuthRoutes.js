const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const router = Router()


    router.post('/register', async (req, res) => {
    
    try{
        const {firstName, secondName, email, password} = req.body
        
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({message: "Такой пользователь уже существует"})
        }

        const hashPass = await bcrypt.hash(password, 12)
        const user = new User({
            firstName,
            secondName, 
            email, 
            password: hashPass
        })
        const validEmail = emailPattern.test(email)
    

        if(!validEmail){
            return res.status(400).json({message: "Неверный формат"})
        }

        await user.save()

        res.status(201).json({message: "Пользователь создан"})

    } catch (e){
         res.status(500).json({message: "Что-то пошло не так"})
         throw new Error(e)
    }
})


    router.post(
    '/login', 
    async (req, res) => {
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