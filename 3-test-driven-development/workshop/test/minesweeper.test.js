const {Grid} = require('../src/minesweeper')

describe("Gilded Rose", function() {
    
    it("Not too big", function() {
      const grid1 = new Grid(10,110);
      expect(grid1.isTooBig()).toThrow("Dimensions too big !");
      const grid2 = new Grid(110,10);
      expect(grid2.isTooBig()).toThrow("Dimensions too big !");
    });

    it("Not zero", function() {
        const grid1 = new Grid(0,10);
        expect(grid1.isTooSmall()).toThrow("Dimensions cannot be zero !");
        const grid2 = new Grid(0,10);
        expect(grid2.isTooSmall()).toThrow("Dimensions cannot be zero !");
      });

})