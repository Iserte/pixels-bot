"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetCurrentTime() {
    const actualDate = new Date();
    const hours = padZero(actualDate.getHours());
    const minutes = padZero(actualDate.getMinutes());
    return `${hours}:${minutes}`;
}
exports.default = GetCurrentTime;
function padZero(_number) {
    return _number < 10 ? `0${_number}` : `${_number}`;
}
