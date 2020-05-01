import React, {FunctionComponent,ReactNode} from "react";
import {Link} from "react-router-dom";
import {CompanyInfoForData} from "../test-data/text-data";

interface IProps {
    arrayOfCompanyInfo : Array<CompanyInfoForData>,
    match: {
        path:string,
        url:string
    }

}


const CompaniesAll : FunctionComponent<IProps> = (props) => {


        const { arrayOfCompanyInfo } = props;

        let { url } = props.match;


         const arrayOfLinksToCompany : ReactNode = arrayOfCompanyInfo.map(company => {
            return (
                 <Link to={`${url}/${company.logo}`} className="sidebar__nav-item">
                     {company.logo}
                 </Link>
             );
         });


        return (
            <fieldset className="content__block">
                <legend className="content__title">Мои компании</legend>
                <div className="content__subtitle">Добро пожаловать в меню ваших компаний.</div>
                <div>Ваши компании:</div>
                <div className="content__companylinks">{arrayOfLinksToCompany}</div>
            </fieldset>

        );
}

export default CompaniesAll;



