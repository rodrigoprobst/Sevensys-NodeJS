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
const User_1 = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password } = req.body;
                const user = yield User_1.User.findOne({
                    where: {
                        login
                    }
                });
                if (!user) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "User not found!" });
                }
                const result = yield bcrypt.compare(password, user.password);
                if (!result) {
                    return res
                        .status(403)
                        .json({ message: "User and Password not match!" });
                }
                var token = jwt.sign({ id: user.id }, process.env.SECRET || "anything", {
                    expiresIn: 300 // 5 minutos
                });
                return res.status(200).json({
                    auth: true,
                    token
                });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield User_1.User.findAndCountAll();
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
                const user = yield User_1.User.findByPk(id);
                if (!user) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "User not found!" });
                }
                return res.status(200).json({
                    response: "OK",
                    user
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
                req.body.password = yield bcrypt.hash(req.body.password, 6);
                const user = yield User_1.User.create(req.body);
                return res.status(201).json({ response: "OK", user });
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
                const user = yield User_1.User.findByPk(id);
                if (!user) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "User not found!" });
                }
                const updated = yield user.update(req.body);
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
                const user = yield User_1.User.findByPk(id);
                if (!user) {
                    return res
                        .status(404)
                        .json({ response: "error", message: "User not found!" });
                }
                const destroyed = yield user.destroy();
                return res.status(200).json({ response: "OK", destroyed });
            }
            catch (error) {
                return res.status(400).json({ response: "error", error });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map