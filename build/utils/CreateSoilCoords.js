"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSoilCoords = void 0;
const CreateSoilCoords = (masterSoilCoord, width, height) => {
    const _soilcoords = [];
    for (let i = 0; i < width; i++) {
        let x = 0;
        if (i === 0) {
            x = masterSoilCoord.x;
        }
        else {
            x = masterSoilCoord.x + (64 * i);
        }
        for (let j = 0; j < height; j++) {
            let y = 0;
            if (j === 0) {
                y = masterSoilCoord.y;
            }
            else {
                y = masterSoilCoord.y + (64 * j);
            }
            _soilcoords.push({ x, y });
        }
    }
    return [...new Set(_soilcoords)];
};
exports.CreateSoilCoords = CreateSoilCoords;
