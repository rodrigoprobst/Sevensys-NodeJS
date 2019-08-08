"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const http = require("http");
dotenv.config();
class Server {
    constructor(port, app) {
        this.PORT = port;
        this.app = app;
        this.start();
    }
    start() {
        http.createServer(this.app).listen(this.PORT, () => {
            console.log(`Started as ${this.PORT}`);
        });
    }
    Hello() {
        console.log("Hello World!");
    }
}
exports.default = Server;
//# sourceMappingURL=server.class.js.map