"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultAuth(username, password, cb) {
    if (username === "nodejs" && password === "sevensys") {
        return cb(null, true);
    }
    return cb(null, false);
}
exports.defaultAuth = defaultAuth;
//# sourceMappingURL=basicAuth.js.map