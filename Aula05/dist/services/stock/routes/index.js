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
const StockController_1 = require("../controllers/StockController");
class stockRoutes {
    constructor() {
        this.path = "/stock";
        this.stockController = new StockController_1.StockController();
    }
    routes(app) {
        app
            .route(`${this.path}`)
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.stockController.index.bind(this.stockController));
        app
            .route(`${this.path}/in`)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.stockController.stockIn.bind(this.stockController));
        app
            .route(`${this.path}/out`)
            .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.stockController.stockOut.bind(this.stockController));
        app
            .route(`${this.path}/delete`)
            .delete((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            next();
        }), this.stockController.deleteAll.bind(this.stockController));
    }
}
exports.stockRoutes = stockRoutes;
//# sourceMappingURL=index.js.map