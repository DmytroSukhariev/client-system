"use strict";
const AuthErrors = (error) => {
    const { email, phoneNumber, firstName, secondName } = error.errors;
    const message = {};
    if (email) {
        message.email = "Неверный формат email";
    }
    if (phoneNumber) {
        message.phoneNumber = "Неверный формат телефона";
    }
    if (firstName) {
        message.firstName = "Имя содержит недопустимые символы";
    }
    if (secondName) {
        message.secondName = "Фамилия содержит недопустимые символы";
    }
    console.log(error);
    return message;
};
module.exports = AuthErrors;
//# sourceMappingURL=auth-errors.js.map