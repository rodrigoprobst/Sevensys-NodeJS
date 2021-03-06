import * as http from "http";
import * as express from "express";
import * as httpProxy from "express-http-proxy";
import * as dotenv from "dotenv";
import * as basicAuth from "express-basic-auth";
import { Request, Response, NextFunction } from "express";

import * as os from "os";
const hostname = os.hostname();
console.log(hostname);

const app = express();
dotenv.config();

const basicAuthMiddleware = require("../middlewares/basicAuth");
const auth = require("../middlewares/auth");

const testServiceProxy = httpProxy(
  `http://test:${process.env.TEST_PORT || 3001}`
);
const productServiceProxy = httpProxy(
  `http://product:${process.env.PRODUCT_PORT || 3002}`
);
const userServiceProxy = httpProxy(
  `http://user:${process.env.USER_PORT || 3003}`
);

app.all(
  ["/test", "/test/*"],
  auth.verifyJWT,
  (req: Request, res: Response, next: NextFunction) => {
    testServiceProxy(req, res, next);
  }
);

app.all(
  ["/product", "/product/*"],
  auth.verifyJWT,
  (req: Request, res: Response, next: NextFunction) => {
    productServiceProxy(req, res, next);
  }
);

app.all(
  "/user/login",
  basicAuth({
    authorizer: basicAuthMiddleware.defaultAuth,
    authorizeAsync: true
  }),
  (req: Request, res: Response, next: NextFunction) => {
    userServiceProxy(req, res, next);
  }
);

app.all(
  ["/user", /^\/user\/(?!login).*$/],
  auth.verifyJWT,
  (req: Request, res: Response, next: NextFunction) => {
    userServiceProxy(req, res, next);
  }
);

const server = http.createServer(app);
server.listen(process.env.GATEWAY_PORT || 3000);
