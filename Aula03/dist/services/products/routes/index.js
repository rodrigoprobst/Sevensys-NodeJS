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
const CategoryController_1 = require("../controllers/CategoryController");
const ProductController_1 = require("../controllers/ProductController");
class productRoutes {
    constructor() {
        this.path = '/product';
        this.productController = new ProductController_1.ProductController();
        this.categoryController = new CategoryController_1.CategoryController();
    }
    routes(app) {
        app.route(`${this.path}/category/:id`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.categoryController.show.bind(this.categoryController))
            .put((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.categoryController.edit.bind(this.categoryController))
            .delete((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.categoryController.delete.bind(this.categoryController));
        app.route(`${this.path}/category`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.categoryController.index.bind(this.categoryController))
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.categoryController.save.bind(this.categoryController));
        app.route(`${this.path}/:id`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.productController.show.bind(this.productController))
            .put((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.productController.edit.bind(this.productController))
            .delete((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.productController.delete.bind(this.productController));
        app.route(`${this.path}`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.productController.index.bind(this.productController))
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.productController.save.bind(this.productController));
    }
}
exports.productRoutes = productRoutes;
//# sourceMappingURL=index.js.map