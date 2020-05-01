import React,{FunctionComponent,Fragment} from 'react';
import '../../common-css/inputs.scss';
import './log-in.scss';

const LogIn : FunctionComponent = () => {
    return (
        <Fragment>
            <div className="background-image">
                <div className="background-image__background"></div>
            </div>
            <div className="form">
                    <a className="form__go-sign-up">Зарегистрироваться</a>
                    <div className="container container_cent container_big">
                        <div className="form__inner">
                            <h1 className="form__header">Добро пожаловать в CRM систему</h1>
                            <span className="form__form-label label">Чтобы продолжить,пожайлуста авторизуйтесь</span>
                            <div className="form__content">
                                <form id="formJS">
                                    <div className="form__input input">
                                        <label htmlFor="email_authorize" className="input__label">Ваш email:</label>
                                        <input type="text" id="email_authorize" className="form__field input__field"/>
                                    </div>
                                    <div className="form__input input">
                                        <label htmlFor="password_authorize" className="input__label">Ваш пароль:</label>
                                        <input type="password" id="password_authorize" className="form__field input__field" required/>
                                    </div>
                                    <div className="form__input input">
                                        <input type="submit" value="Войти" className="input__field input__field_submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}

export default LogIn;