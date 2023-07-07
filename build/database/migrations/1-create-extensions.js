"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Extensions extends Schema_1.default {
    async up() {
        await this.db.rawQuery('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').knexQuery;
    }
    async down() { }
}
exports.default = Extensions;
//# sourceMappingURL=1-create-extensions.js.map