type Err =
    | 'errors'

type Data =
    | 'email'
    | 'password'
    | 'phoneNumber'
    | 'firstName'
    | 'secondName'

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
}

const authErrors = (error: Record<Err, Record<Data, String>>) => {
        const {email, password, phoneNumber, firstName, secondName} = error.errors
        const message: PartialRecord<Data, String> = {}
        if(email){
            message.email = "Неверный формат email"
        }
        if(password){
            message.password = "Пароль слишком короткий. Минимальная длина - 8 символов"
        }
        if(phoneNumber){
            message.phoneNumber = "Неверный формат телефона"
        }
        if(firstName){
            message.firstName = "Имя содержит недопустимые символы"
        }
        if(firstName.length<2){
            message.firstName = "Имя слишком короткое. Минимальная длина - 2 символа"
        }
        if(firstName.length>20){
            message.firstName = "Имя слишком длинное. Максимальная длина - 20 символов"
        }
        if(secondName){
            message.secondName = "Фамилия содержит недопустимые символы"
        }
        if(secondName.length<2){
            message.secondName = "Фамилия слишком короткая. Минимальная длина - 2 символа"
        }
        if(secondName.length>20){
            message.secondName = "Фамилия слишком длинная. Максимальная длина - 20 символов"
        }
        console.log(error)
        return message
        
}
export default authErrors