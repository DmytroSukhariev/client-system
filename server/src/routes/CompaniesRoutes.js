const {Router} = require('express')
const config = require('config')
const company = require('../models/Company')

const router = Router()

// /api/companies/:id

router.get(
    '/:id',
    async (req, res) => {
        try {
            const companyId = req.params.id

            const company = await Сompany.findOne({ id: companyId })

            if(!company){
                res.status(404).json({message: "Компания не найдена"})
            }

            res.status(200).json({ company })
        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })

// /api/companies/edit
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
                const companyId = req.params.id

                const company = req.body

                if(!company){
                    res.status(404).json({message: "Компания не найдена"})
                }

                // тут должно быть изменение компании в монго
                res.status(200).json({ message: "Данные компании изменены" })
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })
// /api/companies/delete
router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
                const companyId = req.params.id

                const company = req.body

                if(!company){
                    res.status(404).json({message: "Компания не найдена"})
                }

                // тут должно быть удаление компании в монго
                res.status(200).json({ message: "Компания удалена" })
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router
