"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthRepository_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/AuthRepository"));
class AuthController {
    constructor() {
        this.repository = new AuthRepository_1.default();
    }
    async updatePassword(ctx) {
        return this.repository.updatePassword(ctx);
    }
    async resetPassword(ctx) {
        return this.repository.resetPassword(ctx);
    }
    async login(ctx) {
        const { auth, request, response } = ctx;
        const email = request.input('email');
        const password = request.input('password');
        try {
            return this.repository.login({ email, password, auth });
        }
        catch (error) {
            return response.status(401).json({ message: error.message });
        }
    }
    async me(ctx) {
        const { user } = ctx.auth;
        return this.repository.me({ user });
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map