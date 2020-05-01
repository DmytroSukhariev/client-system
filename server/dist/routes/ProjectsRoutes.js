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
const Project_1 = __importDefault(require("../models/Project"));
const router = express_1.Router();
router.put('/put', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { registeredBy, name, startTerm, finishTerm } = req.body;
        const project = yield Project_1.default.create({
            registerDate: Date.now(),
            registeredBy,
            name,
            startTerm,
            finishTerm
        });
        yield project.save();
        res.status(201).json({ message: "Проект добавлен" });
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
        const projectId = req.params.id;
        const project = yield Project_1.default.findOne({ _id: projectId });
        if (!project) {
            res.status(404).json({ message: "Проект не найдена" });
        }
        res.status(200).json({ project });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
router.patch('/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.id;
        const project = yield Project_1.default.findOne({ _id: projectId });
        if (!project) {
            res.status(404).json({ message: "Проект не найден" });
        }
        const newData = req.body;
        Project_1.default.updateOne({ _id: projectId }, newData, function (err, project) {
            if (err)
                return console.log(err);
            res.send(project);
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.id;
        const project = yield Project_1.default.findOne({ _id: projectId });
        if (!project) {
            res.status(404).json({ message: "Проект не найден" });
        }
        Project_1.default.deleteOne({ _id: projectId }, (error) => {
            if (error) {
                res.status(500).json({ message: "Проект не удален" });
                throw new Error(error);
            }
            res.status(200).json({ message: "Проект удалён" });
        });
    }
    catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
}));
module.exports = router;
//# sourceMappingURL=ProjectsRoutes.js.map