"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_class_1 = require("../../server.class");
const app_1 = require("./app");
const PORT = process.env.TEST_PORT || 3000;
const server = new server_class_1.default(PORT, app_1.default);
server.Hello();
//# sourceMappingURL=index.js.map