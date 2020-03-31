const {Router} = require('express')
const bcrypt = require('bcryptjs')
const AuthErrors = require('../errors/errors')
const User = require('../models/User')
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const router = Router()

router.put(
    '/put',
    async (req, res) => {
         try{
            const {email, password, firstName, secondName, phoneNumber} = req.body
            const hashPass = await bcrypt.hash(password, 12)

            const newUser = new User({
                registerDate: Date.now(),
                email,
                password: hashPass,
                firstName,
                secondName,
                phoneNumber
             })

             await newUser.save()
             
             res.status(201).json({message: "Пользователь добавлен"})
             if(!req.body) return res.status(400)
            
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
    
});
router.get(
    '/:id',
    async (req, res) => {
        try {
            const userId = req.params.id

            const user = await User.findOne( {_id: userId} )

            if(!user){
                res.status(404).json({message: "Пользователь не найден"})
            }

            res.status(200).json({ user })

        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })

/**
 * EDIT EXAMPLE:
 * 
 * Headers:
 * • Content-Type: application/json
 * • Accept: application/json
 * 
 * body example:
 * {
    "companies":[],
    "email":"bodyaloh@gmail.kok",
    "password":"seriytoje",
    "firstName":"nameUser10",
    "secondName":"surnameUser10"
    }
 */

router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
                const userId = req.params.id

                const user = await User.findOne({_id: userId})

                if(!user){
                    res.status(404).json({message: "Пользователь не найден"})
                }          
                const newData = req.body
                // User.updateOne({_id: userId}, newData, (error) => {
                //     if(error){
                //         res.status(500).json({message: "Ошибка при редактировании данных"})
                //         throw new Error(error)
                //     }
                //     res.status(200).json({ message: `Данные пользователя изменены на ${newData}` })
                // })
                const validEmail = emailPattern.test(newData.email)
                const takenEmail = await User.find(newData.email)
                const validPhone = phonePattern.test(newData.phone)
                const takenPhone = await User.find(newData.phone)
    
                if(!validEmail || !validPhone){
                    return res.status(400).json({message: "Неверный формат"})
                }

                if(takenEmail){
                    return res.status(400).json({message: "Этот email занят другим пользователем"})
                }
                if(takenPhone){
                    return res.status(400).json({message: "Этот телефон занят другим пользователем"})
                }

                User.updateOne({_id: userId}, newData, function(err, user){
                    if(err) return console.log(err); 
                    res.send(user);
                });
                    
            } catch (e){
                res.status(500).json({message: "Что-то пошло не так"})
                throw new Error(e)
            }
        
        })

router.delete(
        '/delete/:id',
        async (req, res) => {
            try {
    
                const userId = req.params.id

                const user = await User.findOne({_id: userId})

                if(!user){
                    res.status(404).json({message: "Пользователь не найден"})
                }

                User.deleteOne({_id: userId}, (error) => {

                    if (error) {
                        res.status(500).json({ message: "Пользователь почему-то не удалён" })
                        throw new Error(error)
                    }

                    res.status(200).json({ message: "Пользователь удалён" })

                })

            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router