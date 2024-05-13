"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.js
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var https_1 = __importDefault(require("https"));
var keyPath = path_1.default.join(__dirname, "private.key");
var certPath = path_1.default.join(__dirname, "certificate.crt");
var key = fs_1.default.readFileSync(keyPath);
var cert = fs_1.default.readFileSync(certPath);
var cred = {
    key: key,
    cert: cert,
};
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Use data routes
app.use(routes_1.default);
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
var httpsServer = https_1.default.createServer(cred, app);
httpsServer.listen(8443);
