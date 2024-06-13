"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMinutes = void 0;
function AddMinutes(date, minutes) {
    return new Date(date.getTime() + 1000 * 60 * minutes);
}
exports.AddMinutes = AddMinutes;
