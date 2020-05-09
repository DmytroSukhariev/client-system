import User from '../models/User'
import {Request, Response, NextFunction} from 'express'

const checkTakenEmail = async (req: Request, res: Response, next: NextFunction) => {

    const candidate = await User.findOne({email: req.body.email})

    if(candidate) {
         return res.status(400).json({message: "Такой пользователь уже существует"})
    }

    next()
}

export default checkTakenEmail
