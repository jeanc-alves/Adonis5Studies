"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bumblebee_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bumblebee");
class ProfileTransformer extends Bumblebee_1.TransformerAbstract {
    transform(model) {
        return {
            id: model.id,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            status: model.status,
            name: model.name,
        };
    }
}
exports.default = ProfileTransformer;
//# sourceMappingURL=ProfileTransformer.js.map