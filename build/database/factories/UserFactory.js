"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UserFactory = Factory_1.default.define(User_1.default, ({ faker }) => {
    return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: 'senha123',
    };
}).build();
exports.UserFactory = UserFactory;
//# sourceMappingURL=UserFactory.js.map