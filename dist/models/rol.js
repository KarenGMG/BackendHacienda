"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Rol = config_1.default.define('Roles', {
    tipo_rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
});
exports.default = Rol;
//# sourceMappingURL=rol.js.map