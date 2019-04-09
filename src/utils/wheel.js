class Wheel {
    constructor(n, r, deg) {
        this.n = n
        this.r = r
        this.deg = deg

        this.cIndex = Math.ceil(n / 2)
    }

    getRotateY(i) {
        return (this.cIndex - i) * this.deg
    }
}

export default Wheel