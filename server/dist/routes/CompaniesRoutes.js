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
const Company_1 = __importDefault(require("../models/Company"));
const router = express_1.Router();
router.put('/put', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { registeredBy, name, description } = req.body;
        const company = yield Company_1.default.create({
            registeredBy,
            name,
            description
        });
        yield company.save();
        res.status(201).json({ message: "Компания добавлена" });
        if (!req.body)
            return res.status(400);
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
        throw new Error(e);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        const company = yield Company_1.default.findOne({ _id: companyId });
        if (!company) {
            res.status(404).json({ message: "Компания не найдена" });
        }
        res.status(200).json({ company });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
router.patch('/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        const company = yield Company_1.default.findOne({ _id: companyId });
        if (!company) {
            res.status(404).json({ message: "Компания не найдена" });
        }
        const newData = req.body;
        Company_1.default.updateOne({ _id: companyId }, newData, function (err, company) {
            if (err)
                return console.log(err);
            res.send(company);
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        const company = yield Company_1.default.findOne({ _id: companyId });
        if (!company) {
            res.status(404).json({ message: "Компания не найдена" });
        }
        Company_1.default.deleteOne({ _id: companyId }, (error) => {
            if (error) {
                res.status(500).json({ message: "Компания не удалена" });
                throw new Error(error);
            }
            res.status(200).json({ message: "Компания удалена" });
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
module.exports = router;
//# sourceMappingURL=CompaniesRoutes.js.map