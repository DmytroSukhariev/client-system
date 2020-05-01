import Brand from '../models/Brand'
import {Request, Response, NextFunction} from 'express'

const checkTakenBrandName = async (req: Request, res: Response, next: NextFunction) => {

    const candidate = await Brand.findOne({email: req.body.brandName})

    if(candidate) {
         return res.status(400).json({message: "Название бренда занято"})
    }

    next()
}

export default checkTakenBrandName
