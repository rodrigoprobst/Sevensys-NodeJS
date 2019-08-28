"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res
            .status(401)
            .json({ auth: false, mensagem: "Autenticação Inválida!" });
    }
    jwt.verify(token, process.env.SECRET || "anything", function (err, decoded) {
        if (err) {
            return res
                .status(500)
                .json({ auth: false, mensagem: "Autenticação Inválida!" });
        }
        // se tudo der certo, salvar o id dousuariuo na requisição
        // @ts-ignore
        req.userId = decoded.id;
    });
    next();
}
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=auth.js.map