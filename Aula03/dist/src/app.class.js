"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const RateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
class AppClass {
    constructor(routes) {
        this.routes = routes;
        this.app = express();
    }
    config() {
        const apiLimiter = RateLimit({
            windowMs: 1 * 60 * 1000,
            max: 20000,
            dalayMs: 0,
            message: 'Limite de request para o IP, Por favor tente novamente mais tarde.'
        });
        this.app.use(`${this.routes.path}/`, apiLimiter);
        this.app.use(bodyParser.json({ limit: '1000mb', type: 'application/json' }));
        this.app.use(bodyParser.raw({ limit: '1000mb', type: 'application/json' }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // gzip comprjson2xlsession
        this.app.use(compress());
        // secure apps by setting various HTTP headers
        this.app.use(helmet());
        this.app.route(`${this.routes.path}/teste`)
            .get((req, res, next) => {
            res.json({ message: 'Chegou' });
        });
        // enable CORS - Cross Origin Resource Sharing
        this.app.use(cors());
        // Apidoc
        this.app.use(`${this.routes.path}/apidoc`, express.static('dist/apidoc'));
        this.app.use(`${this.routes.path}/`, express.static('public'));
        // Load Routes
        this.routes.routes(this.app);
        // Add error formating
        this.app.use(function (err, req, res, next) {
            res.status(400).json(err);
        });
    }
}
exports.default = AppClass;
//# sourceMappingURL=app.class.js.map