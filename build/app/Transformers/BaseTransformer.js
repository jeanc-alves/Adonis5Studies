"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bumblebee_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bumblebee");
class BaseTransformer extends Bumblebee_1.TransformerAbstract {
    transform(model) {
        console.log(model);
        return {
            id: model.id,
            status: model.status,
            createdAt: model.createdAt,
        };
    }
}
exports.default = BaseTransformer;
//# sourceMappingURL=BaseTransformer.js.map