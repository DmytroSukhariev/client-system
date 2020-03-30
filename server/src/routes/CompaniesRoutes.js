const {Router} = require('express')
const config = require('config')
const Company = require('../models/Company')

const router = Router()

router.put(
    '/put',
    async (req, res) => {
         try{
             const {registeredBy, name, description} = req.body

            const newCompany = new Company({
                registerDate: Date.now(),
                registeredBy,
                name,
                description
             })
             newCompany.save()

             res.status(201).json({message: "Компания добавлена"})
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
            const companyId = req.params.id

            const company = await Company.findOne({_id: companyId })

            if(!company){
                res.status(404).json({message: "Компания не найдена"})
            }

            res.status(200).json({ company })
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
 *  "name": "LohProduction",
    "description": "Bodya vsyo takje kok"
 * }
 */
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
                const companyId = req.params.id

                const company = await Company.findOne({_id: companyId})

                if(!company){
                    res.status(404).json({message: "Компания не найдена"})
                }
                const newData = req.body

                Company.updateOne({_id: companyId}, newData, function(err, company){
                    if(err) return console.log(err); 
                    res.send(company);
                    
                })
                
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

router.delete(
        '/delete/:id',
            async (req, res) => {
            try {
                const companyId = req.params.id

                const company = await Company.findOne({_id: companyId})

                if(!company){
                    res.status(404).json({message: "Компания не найдена"})
                }

                Company.deleteOne({_id: companyId}, (error) => {

                    if (error) {
                        res.status(500).json({ message: "Компания не удалена" });
                        throw new Error(error);
                    }

                    res.status(200).json({message: "Компания удалена"})

                });
                
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router
