const {Grid} = require('../src/minesweeper');

const map = [
    ["*", ".", ".", "."],
    [".", ".", ".", "."],
    [".", "*", ".", "."],
    [".", ".", ".", "."]
];

const map2 = [
    ["*", "1", "0", "0"],
    ["2", "2", "1", "0"],
    ["1", "*", "1", "0"],
    ["1", "1", "1", "0"]
]

describe("minesweeper", () => {

    it("correct dimensions", () => {
        const grid = new Grid();
        expect(() => {
            grid.grid_parser(5, 5, map)
        }).toThrow('incorrect dimensions');
    });

    it("check correct numbers", () => {
        const grid = new Grid();
        expect(grid.fill_numbers(map)).toBe(map2);
    });

});