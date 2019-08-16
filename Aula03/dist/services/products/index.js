"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_class_1 = require("../../server.class");
const dotenv = require("dotenv");
const mysql_1 = require("./config/mysql");
dotenv.config();
const app_1 = require("./app");
const PORT = process.env.PRODUCTS_PORT || 3002;
(() => __awaiter(this, void 0, void 0, function* () {
    yield mysql_1.sequelize.sync({ force: false });
    const server = new server_class_1.default(PORT, app_1.default);
}))();
//# sourceMappingURL=index.js.map