//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	// set width(width){
	// 	this.width = width;
	// }
	get width(){
		return this.width;
	}
		get height(){
		return this.height;
	}
	getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
	constructor(side) {
    super(side, side); // Call the superclass constructor with the same value for width and height
  }

  getPerimeter() {
    return 4 * this.width; // Perimeter of a square is 4 times the side length
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
