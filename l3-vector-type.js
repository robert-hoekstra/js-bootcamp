class vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(another) {
        return new vec(this.x + another.x, this.y + another.y);
    }

    minus(another) {
        return new vec(this.x - another.x, this.y - another.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

console.log(new vec(1, 2).plus(new vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new vec(1, 2).minus(new vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new vec(3, 4).length);
// → 5