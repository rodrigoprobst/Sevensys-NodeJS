"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_class_1 = require("../../app.class");
const routes_1 = require("./routes");
const routes = new routes_1.userRoutes();
class App extends app_class_1.default {
    constructor(routes) {
        super(routes);
        this.config();
    }
}
exports.default = new App(routes).app;
//# sourceMappingURL=app.js.map