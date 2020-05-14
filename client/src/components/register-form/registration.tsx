import React,{Component} from "react";
import {Input,Form} from "../helpers/input";


import "../../common-css/inputs.scss";
import '../../common-css/action-page.scss';



interface IState {
    name:string,
    surname:string,
    email:string,
    password:string,
    passwordRepeat:string,
    firm:string,
    occupation:string
}

interface IDataServer {
    firstName:string,
    secondName:string,
    email:string,
    password:string,
    phoneNumber:string
}


export default class RegistrationForm extends Component<any,IState> {

    state = {
        name:'',
        surname:'',
        email:'',
        password:'',
        passwordRepeat:'',
        firm:'',
        occupation:''
    }


    onChangeField = (field : string) => (fieldValue : string) : void => {
        const newState = { [field] : fieldValue} as Pick<IState, keyof IState>
        this.setState(newState)
    }

    onSubmitForm = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();

        const objectForm : IDataServer = {
            email:this.state.email,
            password:this.state.password,
            firstName:this.state.name,
            secondName:this.state.surname,
            phoneNumber:''
        }

        fetch('http://localhost:5000/auth/register',{
            method:'POST',
            body:JSON.stringify(objectForm),
            headers : {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
            .then(() => console.log('done'))
    }





    render() {

        return (
            <div className="action-page">
                <div className="container container_cent container_sm">
                    <div className="action-page__inner">
                        <h1 className="action-page__title action-page__title_center">Регистрация</h1>

                        <Form class="registration" onSubmitForm={this.onSubmitForm}>

                            <Input type="text"
                                   placeholder="Ваше имя"
                                   modifyClassBlock="form_registration__input form_registration__input_name"
                                   onChangeField={this.onChangeField('name')}/>

                            <Input type="text"
                                   placeholder="Ваша фамилия"
                                   modifyClassBlock="form_registration__input form_registration__input_surname"
                                   onChangeField={this.onChangeField('surname')}/>

                            <Input type="email"
                                   placeholder="Ваша почта"
                                   modifyClassBlock="form_registration__input form_registration__input_email"
                                   onChangeField={this.onChangeField('email')}/>

                            <Input type="password"
                                   placeholder="Ваш пароль"
                                   modifyClassBlock="form_registration__input form_registration__input_password"
                                   onChangeField={this.onChangeField('password')}/>

                            <Input type="password"
                                   placeholder="Подтвердите ваш пароль"
                                   modifyClassBlock="form_registration__input form_registration__input_password-repeat"
                                   onChangeField={this.onChangeField('passwordRepeat')}/>

                            <Input type="text"
                                   placeholder="Название вашей фирмы"
                                   modifyClassBlock="form_registration__input form_registration__input_firm"
                                   onChangeField={this.onChangeField('firm')}/>

                            <Input type="submit"
                                   value="Зарегистрироваться"
                                   modifyClassBlock="form_registration__input form_registration__input_submit"
                                   modifyClassInput="input__field_submit"/>

                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}
