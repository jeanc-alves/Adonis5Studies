"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
class ProfileSeeder extends Seeder_1.default {
    async run() {
        const uniqueKey = 'name';
        const itens = [
            {
                name: 'ROOT',
            },
            {
                name: 'DEFAULT',
            },
        ];
        await Profile_1.default.updateOrCreateMany(uniqueKey, itens);
    }
}
exports.default = ProfileSeeder;
//# sourceMappingURL=ProfileSeeder.js.map