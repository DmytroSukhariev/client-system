const {Router} = require('express')
const config = require('config')
const user = require('../models/User')

const router = Router()

// /api/users/:id

router.get(
    '/:id',
    async (req, res) => {
        try {

        } catch (e){
            res.status(500).json( {message: "Что-то пошло не так"})
        }
    
    })

// /api/users/edit
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })
// /api/users/delete
router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
    
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

