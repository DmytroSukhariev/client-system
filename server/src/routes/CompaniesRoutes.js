const {Router} = require('express')
const config = require('config')
const company = require('../models/Company')

const router = Router()

// /api/companies/:id

router.get(
    '/:id',
    async (req, res) => {
        try {

        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })

// /api/companies/edit
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })
// /api/companies/delete
router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

