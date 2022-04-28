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
        if(counter !== this.x * this.y) {
            return true
        } else {
            throw new Error("No mine on field !")
        }
    }

    notFilled() {
        let counter = 0
        this.map.map(line => {
            line.map(point => {
                if (point === ".") {
                    counter++
                }
            })
        })
        console.log('Counter:', counter)
        if(counter > this.x * this.y / 2) {
            return true
        } else {
            throw new Error("Too much mine !")
        }
    }

}

module.exports = {
    Grid
}