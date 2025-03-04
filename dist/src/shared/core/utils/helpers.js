"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValuesEmpty = exports.isEmpty = exports.isStringBlank = exports.requestRateLimit = void 0;
const tslib_1 = require("tslib");
const express_rate_limit_1 = tslib_1.__importDefault(require("express-rate-limit"));
const requestRateLimit = () => {
    return (0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 100 // limit each IP to 100 requests per windowMs
    });
};
exports.requestRateLimit = requestRateLimit;
const isStringBlank = (value) => {
    return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
};
exports.isStringBlank = isStringBlank;
const isEmpty = (value) => {
    return (value === null || value === undefined || value === '');
};
exports.isEmpty = isEmpty;
const isValuesEmpty = (values) => {
    let result = false;
    for (let key in values) {
        if ((0, exports.isEmpty)(values[key])) {
            result = true;
        }
    }
    return result;
};
exports.isValuesEmpty = isValuesEmpty;
//# sourceMappingURL=helpers.js.map