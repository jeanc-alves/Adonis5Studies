"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
class UserSeeder extends Seeder_1.default {
    async run() {
        const root = await Profile_1.default.findBy('name', 'ROOT');
        const defaultProfile = await Profile_1.default.findBy('name', 'DEFAULT');
        const itens = [
            {
                id: (0, uuid_1.v4)(),
                name: 'root',
                email: 'root@root.com',
                password: 'root123',
            },
            {
                id: (0, uuid_1.v4)(),
                name: 'default',
                email: 'default@default.com',
                password: 'default123',
            },
        ];
        const newUserRoot = itens[0];
        const createdUserRoot = await User_1.default.create(newUserRoot);
        await createdUserRoot.related('profiles').attach([root?.id || '']);
        const newDefault = itens[1];
        const createdDefault = await User_1.default.create(newDefault);
        await createdDefault.related('profiles').attach([defaultProfile?.id || '']);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=UsersSeeder.js.map