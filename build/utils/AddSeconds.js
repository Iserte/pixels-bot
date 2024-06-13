"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSeconds = void 0;
function AddSeconds(date, seconds) {
    return new Date(date.getTime() + 1000 * seconds);
}
exports.AddSeconds = AddSeconds;
