const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')

const router = Router()


    router.post(
    '/register', 
    [
        check('email', 'Неверный формат').isEmail(),
        check('password', 'Минимальная длина пароля - 8 символов').isLength({min: 8})
            
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {firstName, secondName, email, password} = req.body
        
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({message: "Такой пользователь уже существует"})
        }

        const hashPass = await bcrypt.hash(password, 12)
        const user = new User({firstName, secondName, email, password: hashPass})

        await user.save()

        res.status(201).json({message: "Пользователь создан"})

    } catch (e){
        res.status(500).json( {message: "Что-то пошло не так"} )
        throw new Error(e)
    }
    })


    router.post(
    '/login', 
    [
        check('email', 'Некорректный формат').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
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