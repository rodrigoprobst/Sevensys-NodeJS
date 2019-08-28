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
const Category_1 = require("../models/Category");
class CategoryController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield Category_1.Category.findAndCountAll();
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
                const category = yield Category_1.Category.findByPk(id, {
                    include: [{ model: Category_1.Category }]
                });
                if (!category) {
                    return res
                        .status(400)
                        .json({ response: "error", message: "Category not found!" });
                }
                return res.status(200).json({
                    response: "OK",
                    category
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
                const category = yield Category_1.Category.create(req.body);
                return res.status(201).json({ response: "OK", category });
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
                const category = yield Category_1.Category.findByPk(id);
                if (!category) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "Category not found!" });
                }
                const updated = yield category.update(req.body);
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
                const category = yield Category_1.Category.findByPk(id);
                if (!category) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "Category not found!" });
                }
                const destroyed = yield category.destroy();
                return res.status(200).json({ response: "OK", destroyed });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map