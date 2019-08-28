"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.StockSchema = new Schema({
    type: {
        type: String,
        required: "Informe se é entrada(IN) ou saída(OUT)",
        enum: ["IN", "OUT"]
    },
    product: {
        type: Number,
        required: "Informe o código do produto"
    },
    quantity: {
        type: Number,
        required: "Informe a quantidade"
    },
    status: {
        type: String,
        required: "Informe um status",
        default: "PENDING",
        enum: ["PENDING", "PROCESSING", "PROCESSED", "ERROR"]
    },
    result: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=stockSchema.js.map