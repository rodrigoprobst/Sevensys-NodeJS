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
const mongoose = require("mongoose");
const stockSchema_1 = require("../schemas/stockSchema");
//import {ProductApiRequester} from "../../../requesters/productApiRequester";
const Stock = mongoose.model("Stock", stockSchema_1.StockSchema);
class StockController {
    //public productApiRequester: ProductApiRequester = new ProductApiRequester();
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = Stock.find(req.query, (err, rows) => {
                    if (err) {
                        return res
                            .status(400)
                            .json({ message: "Ops... Ocorreu um erro!", err: err.message });
                    }
                    return res.json(rows);
                });
            }
            catch (e) {
                return res
                    .status(400)
                    .json({ message: "Ops... Ocorreu um erro!", error: e.message });
            }
        });
    }
    stockIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.type = "IN"; //Fixed IN value
                let newStock = new Stock(req.body);
                newStock.save((err, stock) => {
                    if (err) {
                        res.status(400).json(err);
                    }
                    res.status(201).json(stock);
                });
            }
            catch (e) {
                return res
                    .status(400)
                    .json({ message: "Ops... Ocorreu um erro!", error: e.message });
            }
        });
    }
    stockOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.type = "OUT"; //Fixed OUT value
                let newStock = new Stock(req.body);
                newStock.save((err, stock) => {
                    if (err) {
                        res.status(400).json(err);
                    }
                    res.status(201).json(stock);
                });
            }
            catch (e) {
                return res
                    .status(400)
                    .json({ message: "Ops... Ocorreu um erro!", error: e.message });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                Stock.remove({}, (err, response) => {
                    return res.status(200).json({ err, response });
                });
            }
            catch (e) {
                return res
                    .status(400)
                    .json({ message: "Ops... Ocorreu um erro!", error: e.message });
            }
        });
    }
}
exports.StockController = StockController;
//# sourceMappingURL=StockController.js.map