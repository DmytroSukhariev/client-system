type Err =
    | 'errors'

type Data =
    | 'name'

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
}

const companyErrors = (error: Record<Err, Record<Data, String>>) => {
    const {name} = error.errors
    const message: PartialRecord<Data, String> = {}
    
    if(name){
        message.name = "Название содержит недопустимые символы"
    }
    if(name.length<3){
        message.name = "Название слишком короткое"
    }
    if(name.length>40){
        message.name = "Название слишком длинное"
    }
}
export default companyErrors
