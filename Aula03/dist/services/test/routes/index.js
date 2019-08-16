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
const TestController_1 = require("../controllers/TestController");
class testRoutes {
    constructor() {
        this.path = '/test';
        this.testController = new TestController_1.TestController();
    }
    routes(app) {
        app.route(`${this.path}/:id`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.testController.show.bind(this.testController))
            .put((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.testController.edit.bind(this.testController))
            .delete((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.testController.delete.bind(this.testController));
        app.route(this.path)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.testController.index.bind(this.testController))
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.testController.save.bind(this.testController));
    }
}
exports.testRoutes = testRoutes;
//# sourceMappingURL=index.js.map