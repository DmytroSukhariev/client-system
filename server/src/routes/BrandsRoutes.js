const {Router} = require('express')
const config = require('config')
const brand = require('../models/Brand')

const router = Router()



router.get(
    '/:id',
    async (req, res) => {
        try {

            

        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })


router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        })

router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
                
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        })
        
        module.exports = router
