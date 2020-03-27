import React from "react";
import "../../common-styles.css";
import "./registration.css";

const RegistrationForm : React.FC = () => {
    return (
      <div className="registration block-background">
          <div className="background background_black">
              <div className="container">
                <div className="registration__inner">
                    <h1 className="header">Регистрация</h1>
                    <div className="registration-form__block">
                        <div className="registration-form__row">
                            <div className="registration-form__point">
                                <input type="text" id="name" placeholder="Ваше имя"/>
                            </div>
                            <div className="registration-form__point">
                                <input type="text" id="surname" placeholder="Ваша фамилия"/>
                            </div>
                        </div>
                        <div className="registration-form__point">
                            <input type="email" id="email" placeholder="Ваш email"/>
                        </div>
                        <div className="registration-form__point">
                            <input type="password" id="password" placeholder="Ваш пароль"/>
                        </div>
                        <div className="registration-form__point">
                            <input type="email" id="password-repeat" placeholder="Подтвердите ваш пароль"/>
                        </div>
                        <div className="registration-form__point">
                            <input type="text" id="firm" placeholder="Название вашей фирмы"/>
                        </div>
                        <div className="registration-form__point">
                            <textarea placeholder="Чем занимаетя ваша фирма?"></textarea>
                        </div>
                        <div className="registration-form__point">
                            <input type="submit" id="go-register" value="Зарегистрироваться" disabled/>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
}

export default  RegistrationForm;