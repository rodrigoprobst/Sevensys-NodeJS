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
const Product_1 = require("../models/Product");
const Category_1 = require("../models/Category");
class ProductController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield Product_1.Product.findAndCountAll();
                return res.status(200).json({
                    response: "OK",
                    list
                });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id, {
                    include: [{ model: Category_1.Category }]
                });
                if (!product) {
                    return res
                        .status(400)
                        .json({ response: "error", message: "Product not found!" });
                }
                return res.status(200).json({
                    response: "OK",
                    product
                });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.Product.create(req.body);
                return res.status(201).json({ response: "OK", product });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id);
                if (!product) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "Product not found!" });
                }
                const updated = yield product.update(req.body);
                return res.status(200).json({ response: "OK", updated });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id);
                if (!product) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "Product not found!" });
                }
                const destroyed = yield product.destroy();
                return res.status(200).json({ response: "OK", destroyed });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map