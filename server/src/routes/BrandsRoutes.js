const {Router} = require('express')
const config = require('config')
const Brand = require('../models/Brand')

const router = Router()

router.put(
    '/put',
    async (req, res) => {
         try{
            const {registeredBy, brandName, brandDescription, ownerCompany} = req.body
            const newBrand = new Brand({
                registerDate: Date.now(),
                registeredBy,
                brandName,
                brandDescription,
                ownerCompany
             })
             newBrand.save()
             
             res.status(201).json({message: "Бренд добавлен"})
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
            const brandId = req.params.id

            const brand = await Brand.findOne( {_id: brandId} )

            if(!brand){
                res.status(404).json({message: "Бренд не найден"})
            }

            res.status(200).json({ brand })
            

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
    "brandName": "BrandLoh",
    "brandDescription": "Ахуенное описание бренда"
 * }
 */
router.patch(
        '/edit/:id',
        async (req, res) => {
            try {
                   const brandId = req.params.id

                    const brand = await Brand.findOne({_id: brandId})

                    if(!brand){
                        res.status(404).json({message: "Бренд не найден"})
                    }
                    const newData = req.body

                    Brand.updateOne({_id: brand}, newData, function(err, brand){
                        if(err) return console.log(err); 
                        res.send(brand);

                })
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        })

router.delete(
    '/delete/:id',
        async (req, res) => {
            try {
                const brandId = req.params.id

                const brand = await Brand.findOne( {_id: brandId} )

                if(!brand){
                res.status(404).json({message: "Бренд не найден"})
                }

                Brand.deleteOne({_id: brandId}, (error) => {

                    if (error) {
                        res.status(500).json({ message: "Бренд не удалён" });
                        throw new Error(error);
                    }
                    res.status(200).json({ message: "Бренд удалён" });
                })

            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        })
        
        module.exports = router
