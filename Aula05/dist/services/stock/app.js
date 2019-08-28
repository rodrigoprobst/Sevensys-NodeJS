"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_class_1 = require("../../app.class");
const routes_1 = require("./routes");
const mongoose = require("mongoose");
const mongodb_1 = require("../../config/mongodb");
const routes = new routes_1.stockRoutes();
class App extends app_class_1.default {
    constructor(routes) {
        super(routes);
        this.mongoSetup();
        this.config();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(mongodb_1.configMongo.uri);
    }
}
exports.default = new App(routes).app;
//# sourceMappingURL=app.js.map