"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var typescript = "foo";
console.log(typescript);
axios_1.default.get('https://api.upbit.com/v1/market/all').then(function (res) { return console.log(res["data"]); });
//# sourceMappingURL=app.js.map