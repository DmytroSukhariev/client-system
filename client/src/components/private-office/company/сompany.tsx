import React from "react";
import {InfoBlock,Info} from "../../helpers/info";
import {ArrayCompanyData,CompanyInfoForData} from "../test-data/text-data";




interface IState {
    company: CompanyInfoForData
}


interface IProps {
    company : string
}







export default class CompanyInfo extends React.Component<IProps,IState> {


    state = {
        company : {
            logo:'',
            description:''
        }
    }

    componentDidMount(): void {
        const { company } = this.props;
        const companyData : CompanyInfoForData[] = ArrayCompanyData.filter((companyInfo) => {
           return companyInfo.logo === company;
        });


        this.setState({
            company:companyData[0]
        })
    }


    render() {

        const { company : {logo,description}} = this.state

        return (
            <InfoBlock title={logo}>
                <Info label="Название компании"
                      value={logo}
                      modifyClassBlock="full"/>

                <Info label="Владелец компании"
                      value="Никитюк Богдан Олегович"
                      modifyClassBlock="full"/>

                <Info label="Список контактных лиц"
                      value={['Сухарев Дмитрий Семёнович','Никитюк Богдан Олегович','Осуский Артём Викторович','Белоус Сергей Александрович']}
                      modifyClassBlock="full"
                      modifyClassValue="content__value_paddleft"/>


                <Info label="Описание кампании"
                      value={description}
                      modifyClassBlock="full"
                      modifyClassValue="content__value_paddleft"/>

                <Info label="Род деятельности кампании"
                      value="Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vivamus venenatis varius turpis,
                        vitae dignissim nisl hendrerit a.
                        Curabitur faucibus urna nec pretium fringilla.
                        Cras tristique turpis lectus, et volutpat nunc consequat vel."
                      modifyClassBlock="full"/>


                <div className="content__point content__point_full">
                    <div className="content__label">Бренды</div>
                    <div className="button-container button-container_mrgtop">
                        <button className="button button_large">Добавить бренд</button>
                    </div>
                </div>
            </InfoBlock>

        );
    }
}
