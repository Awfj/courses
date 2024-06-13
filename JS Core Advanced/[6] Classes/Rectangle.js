class Rectangle {
    #width;
    #height;
    
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    getPerimeter() {
        return (this.#width + this.#height) * 2;
    }

    getArea() {
        return this.#width * this.#height;
    }
}

let rectangle = new Rectangle(5, 3);

let perimeter = rectangle.getPerimeter();
console.log(perimeter); // 16

let area = rectangle.getArea();
console.log(area); // 15