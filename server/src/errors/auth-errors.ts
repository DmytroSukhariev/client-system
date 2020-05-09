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
        const {email, phoneNumber, firstName, secondName} : Record<Data, String> = error.errors
        const message: PartialRecord<Data, String> = {}
        if(email){
            message.email = "Неверный формат email"
        }
        if(phoneNumber){
            message.phoneNumber = "Неверный формат телефона"
        }
        if(firstName){
            message.firstName = "Имя содержит недопустимые символы"
        }
        if(secondName){
            message.secondName = "Фамилия содержит недопустимые символы"
        }
        console.log(error)
        return message
        
}
export default authErrors