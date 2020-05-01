import React,{Fragment} from "react";
import "../../common-css/inputs.scss";
import "./registration.scss";


const RegistrationForm : React.FC = () => {
    return (
        <Fragment>
            <div className="background-image">
                <div className="background-image__background"></div>
            </div>

              <div className="registration-form">
                  <div className="container container_cent container_sm">
                    <div className="registration-form__inner">
                        <h1 className="registration-form__header">Регистрация</h1>
                        <div className="registration-form__block">
                            <div className="registration-form__row">
                                <div className="registration-form__input input">
                                    <input type="text" id="name" placeholder="Ваше имя" className="input__field"/>
                                </div>
                                <div className="registration-form__input input">
                                    <input type="text" id="surname" placeholder="Ваша фамилия" className="input__field"/>
                                </div>
                            </div>
                            <div className="registration-form__input input">
                                <input type="email" id="email" placeholder="Ваш email" className="input__field"/>
                            </div>
                            <div className="registration-form__input input">
                                <input type="password" id="password" placeholder="Ваш пароль" className="input__field"/>
                            </div>
                            <div className="registration-form__input input">
                                <input type="email" id="password-repeat" placeholder="Подтвердите ваш пароль" className="input__field"/>
                            </div>
                            <div className="registration-form__input input">
                                <input type="text" id="firm" placeholder="Название вашей фирмы" className="input__field"/>
                            </div>
                            <div className="registration-form__input registration-form__input_txtar input">
                                <textarea placeholder="Чем занимаетя ваша фирма?" className="input__field input__field_txtar"></textarea>
                            </div>
                            <div className="registration-form__input">
                                <input type="submit" id="go-register" value="Зарегистрироваться" disabled className="input__field input__field_submit"/>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
        </Fragment>

    );
}

export default  RegistrationForm;