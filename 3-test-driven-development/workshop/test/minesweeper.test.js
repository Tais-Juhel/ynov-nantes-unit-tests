const {Grid} = require('../src/minesweeper');

const map = [
    ["*", ".", ".", "."],
    [".", ".", ".", "."],
    [".", "*", ".", "."],
    [".", ".", ".", "."]
];
const emptyMap = [
    [".", ".", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
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
    it("Not too big", function() {
      const grid1 = new Grid(10,110);
      expect(()=>{grid1.isTooBig()}).toThrow("Dimensions too big !");
      const grid2 = new Grid(110,10);
      expect(()=>{grid2.isTooBig()}).toThrow("Dimensions too big !");
    });
    
    it("Not zero", function() {
        const grid1 = new Grid(0,10);
        expect(()=>{grid1.isTooSmall()}).toThrow("Dimensions cannot be zero !");
        const grid2 = new Grid(10,0);
        expect(()=>{grid2.isTooSmall()}).toThrow("Dimensions cannot be zero !");
    });

    it("Min 1 mine", function() {
        const grid = new Grid(x, y, emptyMap);
        expect(()=>{grid.haveMine()}).toThrow("No mine on field !");
    });

});
