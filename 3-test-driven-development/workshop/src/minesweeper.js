class Grid {

    constructor() {

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

}

module.exports = {
    Grid
}