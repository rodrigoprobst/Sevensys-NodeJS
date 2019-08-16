"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const mysql_1 = require("../../../config/mysql");
mysql_1.mysqlDefaults.options.models = [__dirname + '/../models'];
exports.sequelize = new sequelize_typescript_1.Sequelize(mysql_1.mysqlDefaults.database, mysql_1.mysqlDefaults.user, mysql_1.mysqlDefaults.password, 
// @ts-ignore
mysql_1.mysqlDefaults.options);
//# sourceMappingURL=mysql.js.map