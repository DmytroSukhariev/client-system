import React from "react";


interface ICompanyInfo {
    logo:string,
    info:string
}

const CompanyInfo: React.FC<ICompanyInfo> = (props) => {

    const {logo,info} = props;

    return (
        <fieldset className="content__block">
            <legend className="content__title">{logo}</legend>
            <div className="content__inner">
                <div className="content__point content__point_full">
                    <div className="content__label">Название кампании</div>
                    <div className="content__value">{logo}</div>
                </div>
                <div className="content__point content__point_full">
                    <div className="content__label">Владелец кампании</div>
                    <div className="content__value">Никитюк Богдан Олегович</div>
                </div>
                <div className="content__point content__point_full">
                    <span className="content__label">Описание кампании</span>
                    <p className="content__value">{info}</p>
                </div>
                <div className="content__point content__point_full">
                    <div className="content__label">Род деятельности кампании</div>
                    <p className="content__value">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vivamus venenatis varius turpis,
                        vitae dignissim nisl hendrerit a.
                        Curabitur faucibus urna nec pretium fringilla.
                        Cras tristique turpis lectus, et volutpat nunc consequat vel.
                    </p>
                </div>
                <div className="content__point content__point_full">
                    <div className="content__label">Список контактных лиц</div>
                    <div className="content__value content__value_paddleft">Сухарев Дмитрий Семёнович</div>
                    <div className="content__value content__value_paddleft">Никитюк Богдан Олегович</div>
                    <div className="content__value content__value_paddleft">Осуский Артём Викторович</div>
                    <div className="content__value content__value_paddleft">Белоус Сергей Александрович</div>
                    <div className="button-container button-container_mrgtop">
                        <button className="button button_large">Добавить контакт</button>
                        <button className="button button_large button_noleftbrd">Удалить контакт</button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

export default CompanyInfo;