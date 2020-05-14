import React, {Fragment,FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import LogIn from "./components/log-in";
import RegistrationForm from "./components/register-form/registration";
import PersonalArea from "./components/private-office";
import "./common-css/general.scss"



const App : FunctionComponent = () => {
    return (
        <Fragment>
            <div className="background-image">
                <div className="background-image__background"></div>
            </div>
            <RegistrationForm />
        </Fragment>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));