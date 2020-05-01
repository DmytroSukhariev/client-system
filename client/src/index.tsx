import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from "./components/log-in";
import RegistrationForm from "./components/register-form/registration";
import PersonalArea from "./components/private-office";
import "./common-css/general.scss"



const App : React.FC = () => {
    return (
        <PersonalArea />
    );
}

ReactDOM.render(<App />,document.getElementById('root'));