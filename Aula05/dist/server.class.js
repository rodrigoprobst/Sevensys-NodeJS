"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const http = require("http");
dotenv.config();
class Server {
    constructor(port, app) {
        this.app = app;
        this.PORT = port;
        this.start();
    }
    start() {
        http.createServer(this.app).listen(this.PORT, () => {
            console.log(`Express server listening on port ${this.PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.class.js.map