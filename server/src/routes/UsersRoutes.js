const {Router} = require('express')
const User = require('../models/User')

const router = Router()

// /api/user/:id


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

// /api/user/edit
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
                const userId = req.params.id

                 const user = await User.findOne({_id: userId})

                if(!user){
                    res.status(404).json({message: "Пользователь не найден"})
                }

                // тут должно быть изменение юзера в монго
                user.updateOne({user}, res.status(200).json({ message: "Данные пользователя изменены" }))

            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })
// /api/user/delete
router.delete(
        '/delete/:id',
        async (req, res) => {
            try {
    
                const userId = req.params.id

                const user = await User.findOne({_id: userId})

                if(!user){
                    res.status(404).json({message: "Пользователь не найден"})
                }

                // тут уже есть удаление юзера из монго
                User.deleteOne({_id: userId}, (error) => {

                    if (error) {
                        res.status(500).json({ message: "Пользователь почему-то не удалён" });
                        throw new Error(error);
                    }

                    res.status(200).json({ message: "Пользователь удалён" });

                });
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router