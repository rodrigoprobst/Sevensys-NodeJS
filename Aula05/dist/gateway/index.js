"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const httpProxy = require("express-http-proxy");
const dotenv = require("dotenv");
const basicAuth = require("express-basic-auth");
const os = require("os");
const hostname = os.hostname();
const app = express();
dotenv.config();
const basicAuthMiddleware = require("../middlewares/basicAuth");
const auth = require("../middlewares/auth");
const testServiceProxy = httpProxy(`http://localhost:${process.env.TEST_PORT || 3001}` //test
);
const productServiceProxy = httpProxy(`http://localhost:${process.env.PRODUCT_PORT || 3002}` //product
);
const userServiceProxy = httpProxy(`http://localhost:${process.env.USER_PORT || 3003}` //user
);
const stockServiceProxy = httpProxy(`http://localhost:${process.env.STOCK_PORT || 3004}` //stock
);
app.all(["/test", "/test/*"], auth.verifyJWT, (req, res, next) => {
    testServiceProxy(req, res, next);
});
app.all(["/product", "/product/*"], auth.verifyJWT, (req, res, next) => {
    productServiceProxy(req, res, next);
});
app.all("/user/login", basicAuth({
    authorizer: basicAuthMiddleware.defaultAuth,
    authorizeAsync: true
}), (req, res, next) => {
    userServiceProxy(req, res, next);
});
app.all(["/user", /^\/user\/(?!login).*$/], auth.verifyJWT, (req, res, next) => {
    userServiceProxy(req, res, next);
});
app.all(["/stock", "/stock/*"], auth.verifyJWT, (req, res, next) => {
    stockServiceProxy(req, res, next);
});
const server = http.createServer(app);
server.listen(process.env.GATEWAY_PORT || 3000);
//# sourceMappingURL=index.js.map