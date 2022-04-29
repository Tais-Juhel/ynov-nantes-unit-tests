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
        let around = 0;
        for(var i = 0; i < grid.length; i++ ) {
            for(var j = 0; j < grid[i].length; j++ ) {
                if (grid[i][j] != "*") {
                    //----- for each number -----
                    console.log(grid[i][j]);
                    around = 0;
                    for(var search_i = i - 1; search_i <= i + 1; search_i ++ ) {
                        if (search_i >= 0 && search_i < grid.length) {
                            console.log("pass search i " + search_i);
                            for(var search_j = j - 1; search_j <= j + 1; search_j ++ ) {
                                if (search_j >= 0 && search_j < grid[search_i].length) {
                                    console.log("pass search j " + search_j);
                                    // ----- search for each row and column around, -----
                                    // ----- ignores if it goes on non-existing spaces -----
                                    if (grid[search_i][search_j] == "*") {
                                        around++;
                                    }
                                }
                            }
                        }
                    }
                    // ----- gets an array of "*" around the number -----
                    grid[i][j] = around.toString();
                } 
            }
        }
        return grid;
    }


    haveMine() {
        let counter = 0
        this.map.map(line => {
            line.map(point => {
                if (point === ".") {
                    counter++
                }
            })
        })
        console.log('Counter:', counter)
        if(counter === this.x * this.y) {
            throw new Error("No mine on field !")
        } else if (counter < this.x * this.y / 2){
            throw new Error("Too much mine !")
        } else {
            return true
        }
    }

}

module.exports = {
    Grid
}