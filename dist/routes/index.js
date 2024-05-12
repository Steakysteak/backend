"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/dataRoutes.js
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
// Define routes
router.post("/backend", controllers_1.addDataController);
router.put("/backend", controllers_1.updateDataController);
router.get("/", controllers_1.getCountOfCallsController);
router.use(function (err, req, res, next) {
    console.error(err); // Log the error
    res.status(500).json({ error: "Internal Server Error" }); // Send a generic error response
});
exports.default = router;
