import Company from '../models/Company'
import {Request, Response, NextFunction} from 'express'

const checkTakenCompanyName = async (req: Request, res: Response, next: NextFunction) => {

    const candidate = await Company.findOne({email: req.body.name})

    if(candidate) {
         return res.status(400).json({message: "Название компании занято"})
    }
    next()
}

export default checkTakenCompanyName
