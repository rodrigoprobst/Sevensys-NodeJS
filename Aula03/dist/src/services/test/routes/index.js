"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testeRoutes {
    constructor() {
        this.path = "/test";
    }
    routes(app) {
        app
            .route(`${this.path}`)
            .get((req, res, next) => {
            res.status(200).json({ msg: "OK" });
        });
    }
}
exports.testeRoutes = testeRoutes;
//# sourceMappingURL=index.js.map