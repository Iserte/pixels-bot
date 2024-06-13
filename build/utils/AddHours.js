"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHours = void 0;
function AddHours(date, hours) {
    return new Date(date.getTime() + 1000 * 60 * 60 * hours);
}
exports.AddHours = AddHours;
