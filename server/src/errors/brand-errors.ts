type Err =
    | 'errors'

type Data =
    | 'brandName'

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
}

const brandErrors = (error: Record<Err, Record<Data, String>>) => {
    const {brandName} = error.errors
    const message: PartialRecord<Data, String> = {}
    
    if(brandName){
        message.brandName = "Название содержит недопустимые символы"
    }
    if(brandName.length<3){
        message.brandName = "Название слишком короткое"
    }
    if(brandName.length>40){
        message.brandName = "Название слишком длинное"
    }
}
export default brandErrors
