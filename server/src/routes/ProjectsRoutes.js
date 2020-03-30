const {Router} = require('express')
const config = require('config')
const Project = require('../models/Project')

const router = Router()

router.put(
    '/put',
    async (req, res) => {
         try{
             const {registeredBy, name, startTerm, finishTerm} = req.body

            const newProject = new Project({
                registerDate: Date.now(),
                registeredBy,
                name,
                startTerm,
                finishTerm
             })
             newProject.save()

             res.status(201).json({message: "Проект добавлен"})
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
            const projectId = req.params.id

            const project = await Project.findOne({_id: projectId })

            if(!project){
                res.status(404).json({message: "Проект не найдена"})
            }

            res.status(200).json({ project })
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
                const projectId = req.params.id

                const project = await Project.findOne({_id: projectId})

                if(!project){
                    res.status(404).json({message: "Проект не найден"})
                }
                const newData = req.body

                Project.updateOne({_id: projectId}, newData, function(err, project){
                    if(err) return console.log(err); 
                    res.send(project);
                    
                })
                
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

router.delete(
        '/delete/:id',
            async (req, res) => {
            try {
                const projectId = req.params.id

                const project = await Project.findOne({_id: projectId})

                if(!project){
                    res.status(404).json({message: "Проект не найден"})
                }

                Project.deleteOne({_id: projectId}, (error) => {

                    if (error) {
                        res.status(500).json({ message: "Проект не удален" });
                        throw new Error(error);
                    }

                    res.status(200).json({message: "Проект удалён"})

                });
                
            } catch (e){
                res.status(500).json( {message: "Что-то пошло не так"})
            }
        
        })

module.exports = router
