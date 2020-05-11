import User from '../models/User'
import {Request, Response, NextFunction} from 'express'

const checkTakenData = async (req: Request, res: Response, next: NextFunction) => {

    const emailTaken = await User.findOne({email: req.body.email})
    const phoneTaken = await User.findOne({phoneNumber: req.body.phoneNumber})

    if(emailTaken) {
         return res.status(400).json({message: "Такой пользователь уже существует"})
    }
    if(phoneTaken){
        return res.status(400).json({message: "Этот телефон принадлежит другому пользователю"})
    }

    next()
}

export default checkTakenData
