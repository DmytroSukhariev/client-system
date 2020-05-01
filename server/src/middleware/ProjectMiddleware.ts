import Project from '../models/Project'
import {Request, Response, NextFunction} from 'express'

const checkTakenProjectName = async (req: Request, res: Response, next: NextFunction) => {

    const candidate = await Project.findOne({email: req.body.name})

    if(candidate) {
         return res.status(400).json({message: "Название проекта занято"})
    }
    next()
}

export default checkTakenProjectName
