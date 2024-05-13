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
var filePath = path_1.default.join(__dirname, "D512557EC47FDCDC6C47992670298C06.txt");
var file = fs_1.default.readFileSync(filePath);
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/.well-known/pki-validation/D512557EC47FDCDC6C47992670298C06.txt", function (req, res) {
    res.sendFile(filePath);
});
// Use data routes
app.use(routes_1.default);
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
