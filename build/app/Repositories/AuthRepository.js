"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class AuthRepository {
    constructor() {
        this.model = User_1.default;
    }
    async login({ email, password, auth }) {
        await this.checkUserActive({ email });
        const token = await auth.use('api').attempt(email, password);
        return token;
    }
    async checkUserActive({ email }) {
        const user = await this.model.findBy('email', email);
        if (!user?.status) {
            throw new Error('Inative Users cant login');
        }
    }
    async me({ user }) {
        const fullUser = await this.model.query().preload('profiles').where('id', user.id).first();
        console.log('fullUser :', fullUser);
        return fullUser;
    }
}
exports.default = AuthRepository;
//# sourceMappingURL=AuthRepository.js.map