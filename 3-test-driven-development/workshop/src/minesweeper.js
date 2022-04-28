class Grid {

    constructor(x, y, map) {
        this.x = x;
        this.y = y;
        this.map = map
    }

    grid_parser(x, y, grid) {
        if(grid.length != y) {
            throw new Error('incorrect dimensions');
        }
        if(grid[0].length != x) {
            throw new Error('incorrect dimensions');
        }
    }

    fill_numbers(grid) {

    }

    isTooBig() {
        if(this.x > 100 || this.y > 100) {
            throw new Error("Dimensions too big !")
        }
    }

    isTooSmall() {
        if(this.x < 1 || this.y < 1) {
            throw new Error("Dimensions cannot be zero !")
        }
    }

}

module.exports = {
    Grid
}