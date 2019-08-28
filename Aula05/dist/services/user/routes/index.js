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
const UserController_1 = require("../controllers/UserController");
class userRoutes {
    constructor() {
        this.path = "/user";
        this.userController = new UserController_1.UserController();
    }
    routes(app) {
        app
            .route(`${this.path}/:id`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.show.bind(this.userController))
            .put((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.edit.bind(this.userController))
            .delete((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.delete.bind(this.userController));
        app
            .route(`${this.path}`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.index.bind(this.userController))
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.save.bind(this.userController));
        app
            .route(`${this.path}/login`)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.userController.login.bind(this.userController));
    }
}
exports.userRoutes = userRoutes;
//# sourceMappingURL=index.js.map