"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const pattern = /^(?:[a-zA-Z0-9_«»“”"' ])+/;
class CompanyClass {
}
__decorate([
    typegoose_1.prop({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], CompanyClass.prototype, "registerDate", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'OwnerId' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CompanyClass.prototype, "registeredBy", void 0);
__decorate([
    typegoose_1.prop({ required: true, match: pattern }),
    __metadata("design:type", String)
], CompanyClass.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], CompanyClass.prototype, "description", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], CompanyClass.prototype, "occupation", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], CompanyClass.prototype, "brands", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], CompanyClass.prototype, "contactPersons", void 0);
const Company = typegoose_1.getModelForClass(CompanyClass);
exports.default = Company;
//# sourceMappingURL=Company.js.map