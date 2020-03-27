const {Router} = require('express')
const config = require('config')
const brand = require('../models/Brand')

const router = Router()

// /api/brands/:id

router.get(
    '/:id',
    async (req, res) => {
        try {

        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })

// /api/brands/edit
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })
// /api/brands/delete
router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

