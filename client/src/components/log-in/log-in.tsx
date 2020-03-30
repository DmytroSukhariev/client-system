import React from 'react';
import '../../common-css/common-styles__registration-login.css';
import '../../common-css/common-styles__for-everything.css';
import './log-in.css';

const LogIn : React.FunctionComponent = () => {
    return (
        <div className="form block-background">
            <div className="background background_black">
                <a className="form__go-sign-up">Зарегистрироваться</a>
                <div className="container">
                    <div className="form__inner">
                        <h1 className="form__header">Добро пожаловать в CRM систему</h1>
                        <span className="form__form-label label">Чтобы продолжить,пожайлуста авторизуйтесь</span>
                        <div className="form__content">
                            <form id="formJS">
                                <div className="form__email">
                                    <label htmlFor="email_authorize">Ваш email:</label>
                                    <input type="text" id="email_authorize"
                                           pattern="[A-Za-z0-9.:;]{6,25}@(gmail.com|ukr.net|mail.ru|mail.yandex.ru)"
                                           required autoFocus/>
                                    <span className="form__errors" id="for-emailJS">Неверный формат email.</span>
                                </div>
                                <div className="form__password">
                                    <label htmlFor="password_authorize">Ваш пароль:</label>
                                    <input type="password" id="password_authorize" pattern=".{8,100}" required/>
                                    <span className="form__errors" id="for-passwordJS">
                                        Пароль должен быть от 8 до 100 символов!</span>
                                </div>
                                <div className="form__log-in">
                                    <input type="submit" value="Войти"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;