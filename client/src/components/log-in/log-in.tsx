import React,{FunctionComponent} from 'react';
import {Input,Form} from "../helpers/input";


import '../../common-css/inputs.scss';
import '../../common-css/action-page.scss';

const LogIn : FunctionComponent = () => {
    return (
        <div className="action-page">
            <a className="action-page__go-sign-up">Зарегистрироваться</a>
            <div className="container container_cent container_big">
                <div className="action-page__inner">
                    <h1 className="action-page__title">Добро пожаловать в CRM систему</h1>
                    <div className="action-page__addlabel">Чтобы продолжить,пожайлуста авторизуйтесь</div>

                    <Form class="log-in">
                        <Input type="email"
                               label="Ваш email"/>

                        <Input type="password"
                               label="Ваш пароль"/>

                        <Input type="submit"
                               value="Войти"
                               modifyClassInput="input__field_submit"/>
                    </Form>

                </div>
            </div>
        </div>
    );
}

export default LogIn;