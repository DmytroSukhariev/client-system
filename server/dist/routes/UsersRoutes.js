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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
router.put('/put', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        res.status(201).json({ message: "Пользователь добавлен" });
        if (!req.body)
            return res.status(400);
    }
    catch (error) {
        res.status(500).json(AuthErrors(error));
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield User_1.default.findOne({ _id: userId });
        if (!user) {
            res.status(404).json({ message: "Пользователь не найден" });
        }
        res.status(200).json({ user });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
router.patch('/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield User_1.default.findOne({ _id: userId });
        if (!user) {
            res.status(404).json({ message: "Пользователь не найден" });
        }
        const newData = req.body;
        User_1.default.updateOne({ _id: userId }, newData, function (err, user) {
            if (err)
                return console.log(err);
            res.send(user);
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
        throw new Error(e);
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield User_1.default.findOne({ _id: userId });
        if (!user) {
            res.status(404).json({ message: "Пользователь не найден" });
        }
        User_1.default.deleteOne({ _id: userId }, (error) => {
            if (error) {
                res.status(500).json({ message: "Пользователь почему-то не удалён" });
                throw new Error(error);
            }
            res.status(200).json({ message: "Пользователь удалён" });
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
module.exports = router;
//# sourceMappingURL=UsersRoutes.js.map