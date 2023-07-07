"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = global[Symbol.for('ioc.use')]("AdonisCrud/Crud/Controller");
const _ioc_UserRepository_1 = __importDefault(global[Symbol.for('ioc.use')]("UserRepository"));
const BaseTransformer_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Transformers/BaseTransformer"));
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
let UserController = class UserController {
};
UserController = __decorate([
    (0, Controller_1.Crud)({
        event: Event_1.default,
        repository: _ioc_UserRepository_1.default,
        storeProps: [],
        updateProps: [],
        transformer: BaseTransformer_1.default,
        validators: {},
    })
], UserController);
exports.default = UserController;
//# sourceMappingURL=UserController.js.map