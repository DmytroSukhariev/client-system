import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from "./components/log-in";
import RegistrationForm from "./components/register-form/registration";

const App : React.FC = () => {
    return (
        <RegistrationForm />
    );
}

ReactDOM.render(<App />,document.getElementById('root'));