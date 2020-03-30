import React from "react";
import '../../common-css/common-styles__for-everything.css';
import '../../common-css/common-styles__personal-area.css';
import PersonalInfo from "./private-office__personal-info/private-office__personal-info";
import CompanyInfo from "./private-office__company/private-office__company";
import Welcome from "./private-office__welcome/private-office__welcome";
import AsideBar from "./private-office__sidebar/private-office__sidebar";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {ICompanyInfo,ArrayCompanyData} from "./private-office__test-data/private-office__test-data";



interface IState {
    info:Array<ICompanyInfo>
}
interface IProps {

}



class PersonalArea extends React.Component<IProps, IState>{



    constructor(props : IProps) {
        super(props);
        this.state = {
            info:[]
        }
    }


    componentDidMount(): void {
        this.setState({
            info:ArrayCompanyData
        })
    }




    render() {


        const arrayOfCompanyRoutes : React.ReactNode[] = ArrayCompanyData.map(data => {
            const {logo,description} = data;
            const url = `/companies/${logo}`;
            return (
               <Route key={logo} path={url} render={() => {
                   return <CompanyInfo logo={logo} info={description}/>
               }}/>
           );
        });



        const arrayOfCompanies : string[] = ArrayCompanyData.map(data => {
                return data.logo;
            }
        )





        return (
            <Router>
                <div className="background-test">
                    <div className="black"></div>
                </div>
                <div className="container">
                    <div className="personal-area">
                        <AsideBar companies={arrayOfCompanies}/>
                        <div className="content">
                            <Route path="/" exact component={Welcome} />
                            <Route path="/personal-info" component={PersonalInfo}/>
                            {arrayOfCompanyRoutes}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default PersonalArea;