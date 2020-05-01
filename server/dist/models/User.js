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
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const justPattern = /^[^_]\w[^_]+/;
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
class UserClass {
}
__decorate([
    typegoose_1.prop({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], UserClass.prototype, "registerDate", void 0);
__decorate([
    typegoose_1.prop({ required: true, match: emailPattern }),
    __metadata("design:type", String)
], UserClass.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], UserClass.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ required: true, match: justPattern }),
    __metadata("design:type", String)
], UserClass.prototype, "firstName", void 0);
__decorate([
    typegoose_1.prop({ required: true, match: justPattern }),
    __metadata("design:type", String)
], UserClass.prototype, "secondName", void 0);
__decorate([
    typegoose_1.prop({ match: justPattern }),
    __metadata("design:type", String)
], UserClass.prototype, "patronymic", void 0);
__decorate([
    typegoose_1.prop({ ref: 'Companies' }),
    __metadata("design:type", Array)
], UserClass.prototype, "companies", void 0);
__decorate([
    typegoose_1.prop({ match: phonePattern }),
    __metadata("design:type", String)
], UserClass.prototype, "phoneNumber", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], UserClass.prototype, "telegramId", void 0);
const User = typegoose_1.getModelForClass(UserClass);
exports.default = User;
//# sourceMappingURL=User.js.map