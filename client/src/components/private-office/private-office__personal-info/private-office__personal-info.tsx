import React,{Fragment} from "react";

const PersonalInfo : React.FC = () => {
    return (
        <Fragment>
            <fieldset className="content__block">
                <legend className="content__title">Общая информация</legend>
                <div className="content__inner">
                    <div className="content__point content__point_full">
                        <div className="content__label">ФИО</div>
                        <div className="content__value">Никитюк Богдан Олегович</div>
                    </div>
                    <div className="content__point content__point_half">
                        <div className="content__label">Почта</div>
                        <div className="content__value">bodya5868@gmail.com</div>
                    </div>
                    <div className="content__point content__point_half">
                        <div className="content__label">Пароль</div>
                        <div className="password">
                            <div className="content__value">********</div>
                            <button className="button button_inline">Показать</button>
                            <button className="button button_inline button_noleftbrd">Сменить</button>
                        </div>
                    </div>
                    <div className="content__point content__point_half">
                        <div className="content__label">Номера телефонов</div>
                        <div className="content__value content__value_paddleft">+38(099)-107-59-04</div>
                        <div className="content__value content__value_paddleft">+38(066)-406-40-29</div>
                        <div className="content__value content__value_paddleft">+38(063)-022-58-49</div>
                    </div>
                    <div className="content__point content__point_half">
                        <div className="content__label">Социальные сети</div>
                        <div className="content__value content__value_paddleft">Bogdaa</div>
                        <div className="content__value content__value_paddleft">__.nikomy_ne_izvesten._</div>
                    </div>
                </div>
            </fieldset>
            <div className="button-container">
                <button className="button button_large">Редактировать</button>
                <button className="button button_large button_noleftbrd">Добавить заказ</button>
            </div>
        </Fragment>
    );
}

export default PersonalInfo;