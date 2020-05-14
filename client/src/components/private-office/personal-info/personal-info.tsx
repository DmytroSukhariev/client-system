import React,{Fragment,FunctionComponent} from "react";
import Edit from "./edit";
import {InfoBlock,Info,PasswordInfo} from "../../helpers/info";

const PersonalInfo : FunctionComponent = () => {
    return (
        <Fragment>

            <InfoBlock title="Общая информация">

                <Info label="ФИО"
                      value="Никитюк Богдан Олегович"
                      modifyClassBlock="full" />

                <Info label="Почта"
                      value="bodya5868@gmail.com"
                      modifyClassBlock="half" />

                <PasswordInfo value="ghbaqh13"
                              modifyClassBlock="half"/>

                <Info label="Номера телефонов"
                      value={['+380991075904','+380664064029','+380630225849']}
                      modifyClassBlock="half"
                      modifyClassValue="content__value_paddleft"/>


                <Info label="Социальные сети"
                      value={['Bogdaa','Bogdaa']}
                      modifyClassBlock="half"
                      modifyClassValue="content__value_paddleft"/>
            </InfoBlock>

            <Edit />

        </Fragment>
    );
}

export default PersonalInfo;