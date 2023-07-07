"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UserProfiles extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'user_profiles';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.uuid('user_id').unsigned().references('users.id');
            table.uuid('profile_id').unsigned().references('profiles.id');
            table.unique(['user_id', 'profile_id']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
            table.timestamp('deleted_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UserProfiles;
//# sourceMappingURL=1629770878205_user_profiles.js.map