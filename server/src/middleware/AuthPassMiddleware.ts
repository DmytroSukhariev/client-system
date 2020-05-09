import {Request, Response, NextFunction} from 'express'
type Data =
    | 'password'
    | 'firstName'
    | 'secondName'
type PartialRecord<K extends keyof any, T> = {
        [P in K]?: T;
    }

const checkLength = async (req: Request, res: Response, next: NextFunction) => {

    const {password, firstName, secondName} : Record<Data, String> = req.body
    const error: PartialRecord<Data, String> = {}

    if(password.length<8) {
         error.password = "Пароль слишком короткий. Минимальная длина - 8 символов"
    }
    if(firstName.length<2){
        error.firstName = "Имя слишком короткое. Минимальная длина - 2 символа"
    }
    if(secondName.length<2){
        error.secondName = "Фамилия слишком короткая. Минимальная длина - 2 символа"
    }
    if(Object.keys(error).length !== 0){
        console.log(error)
        res.status(500).json( error ) 
    }
    next()
}

export default checkLength
