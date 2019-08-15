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
class ProductController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield Product_1.Product.findAndCountAll();
                return res.json(list);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id);
                if (product == null) {
                    return res.status(404).json({ message: "Produto não encontrado!" });
                }
                const category = yield product.getCategory();
                product.category = category;
                return res.status(200).json(product);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.Product.create(req.body);
                return res.status(200).json(product);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id);
                if (product == null) {
                    return res.status(404).json({ message: "Produto não encontrado!" });
                }
                const result = yield product.update(req.body);
                return res.status(200).json(result);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield Product_1.Product.findByPk(id);
                if (product == null) {
                    return res.status(404).json({ message: "Produto não encontrado!" });
                }
                const result = yield Product_1.Product.destroy({
                    where: { id }
                });
                if (result === 1) {
                    return res.status(200).json({ message: "Registro removido com sucesso!" });
                }
                else {
                    return res.status(404).json({ message: "Produto não encontrado!" });
                }
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map