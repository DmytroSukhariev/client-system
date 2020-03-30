const {Router} = require('express')
const User = require('../models/User')

const router = Router()


router.put(
    '/put',
    async (req, res) => {
         try{
            const {email, password, firstName, secondName} = req.body
            const newUser = new User({
                registerDate: Date.now(),
                email,
                password,
                firstName,
                secondName
             })
             newUser.save()
             
             res.status(201).json({message: "Пользователь добавлен"})
            if(!req.body) return res.status(400)
            
         } catch (e){
            res.status(500).json({message: "Что-то пошло не так"})
            throw new Error(e)
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
                console.dir(newData, {depth: null})
                console.log(typeof newData)

                // User.updateOne({_id: userId}, newData, (error) => {
                //     if(error){
                //         res.status(500).json({message: "Ошибка при редактировании данных"})
                //         throw new Error(error)
                //     }
                //     res.status(200).json({ message: `Данные пользователя изменены на ${newData}` })
                // })

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
                        res.status(500).json({ message: "Пользователь почему-то не удалён" });
                        throw new Error(error);
                    }

                    res.status(200).json({ message: "Пользователь удалён" });

                })

            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router