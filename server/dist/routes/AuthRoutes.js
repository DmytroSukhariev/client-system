"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
router.post('/register', AuthMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, firstName, secondName, phoneNumber } = req.body;
        const hashPass = yield bcryptjs_1.default.hash(password, 12);
        const user = yield User_1.default.create({
            email,
            password: hashPass,
            firstName,
            secondName,
            phoneNumber
        });
        yield user.save();
        res.status(201).json({ message: "Пользователь создан" });
    }
    catch (error) {
        res.status(500).json(AuthErrors(error));
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Пользователь не найден" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({ message: "Неверный пароль" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.default.get('jwtSecret'), { expiresIn: '1h' });
        res.json({ token, userId: user.id });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
module.exports = router;
//# sourceMappingURL=AuthRoutes.js.map