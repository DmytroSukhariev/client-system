import {Router} from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/User'
import authErrors from '../errors/auth-errors'
import {Request, Response} from 'express'
import checkTakenEmail from '../middleware/AuthMiddleware'

const router = Router()

router.put(
    '/put', 
    checkTakenEmail,
    async (req: Request, res: Response) => {
         try{
            const {email, password, firstName, secondName, phoneNumber} = req.body
            const hashPass = await bcrypt.hash(password, 12)

            const user = await User.create({
                email,
                password: hashPass, 
                firstName, 
                secondName,
                phoneNumber
            })
    
            await user.save()
             
             res.status(201).json({message: "Пользователь добавлен"})
             if(!req.body) return res.status(400)
            
            } catch (error){
                res.status(500).json(authErrors(error))
            }
});
router.get(
    '/:id', 
    async (req: Request, res: Response) => {
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
    async (req: Request, res: Response) => {
            try {
                const userId = req.params.id

                const user = await User.findOne({_id: userId})

                if(!user){
                    res.status(404).json({message: "Пользователь не найден"})
                }          
                const newData = req.body
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
     async (req: Request, res: Response) => {
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