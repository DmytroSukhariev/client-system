import React from "react";

const Welcome : React.FC = () => {

    const styleForLabel : object = {
        display:'inline-block',
        marginTop:'20px'
    }

    return (
        <div>
            <h1>Добро пожаловать в ваш личный кабинет.</h1>
            <span style={styleForLabel}>Чтобы продолжить,выберите интересующий вас раздел.</span>
        </div>
    );
}

export default Welcome;