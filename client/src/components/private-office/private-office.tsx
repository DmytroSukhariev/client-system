import React,{Component} from "react";
import './personal-area.scss';
import BrandInfo from "./brand";
import Welcome from "./welcome";
import AsideBar from "./sidebar";
import CompaniesAll from "./intro-companies";
import CompanyInfo from "./company";
import PersonalInfo from "./personal-info";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {CompanyInfoForData,ArrayCompanyData} from "./test-data/text-data";



interface IState {
    info:Array<CompanyInfoForData>
}
interface IProps {

}



class PersonalArea extends Component<IProps, IState>{


    state = {
        info:[]
    }


    componentDidMount(): void {
        this.setState({
            info:ArrayCompanyData
        })
    }




    render() {

        const { info } = this.state;

        return (
            <Router>
                <div className="background-image">
                    <div className="background-image__background"></div>
                </div>
                <div className="container container_big container_cent">
                    <div className="personal-area">
                        <AsideBar/>
                        <div className="personal-area__content content">
                            <Route path="/" exact component={Welcome} />
                            <Route path="/personal-info" component={PersonalInfo}/>
                            <Route path="/companies"  exact render={({match}) => {
                                return <CompaniesAll arrayOfCompanyInfo={info} match={match} />
                                }
                            }/>
                            <Route path="/companies/:company" render={({match}) => {
                                const { company } = match.params;
                                return <CompanyInfo company={company} />
                            }} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default PersonalArea;