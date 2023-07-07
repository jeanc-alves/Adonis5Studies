"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bumblebee_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bumblebee");
const ProfileTransformer_1 = __importDefault(require("./ProfileTransformer"));
class UserTransformer extends Bumblebee_1.TransformerAbstract {
    constructor() {
        super(...arguments);
        this.defaultInclude = ['profiles', 'empresa'];
    }
    async includeProfiles(model) {
        const profiles = await model.related('profiles').query().select(['id', 'name']);
        return this.collection(profiles, ProfileTransformer_1.default);
    }
    transform(model) {
        return {
            id: model.id,
            nome: model.nome,
            email: model.email,
            cpf: model.cpf,
            createdAt: model.createdAt,
            status: model.status,
            telefone: model.telefone,
        };
    }
}
exports.default = UserTransformer;
//# sourceMappingURL=UserTransformer.js.map