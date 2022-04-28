const {Grid} = require('../src/minesweeper');

const x = 5;
const y = 5;
const map = [
    ["*", ".", ".", "."],
    [".", ".", ".", "."],
    [".", "*", ".", "."],
    [".", ".", ".", "."]
];

describe("minesweeper", () => {

    it("correct dimensions", () => {
        const grid = new Grid();
        expect(() => {
            grid.grid_parser(x, y, map)
        }).toThrow('incorrect dimensions');
    });

});