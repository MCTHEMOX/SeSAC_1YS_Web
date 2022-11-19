//const Car = require("./07.js");
const { Car } = require("./07.js");
console.log( Car );
//new 클래스() 생성자를 실행함
var car1 = new Car("red");
console.log( car1.returnColor() );
var car2 = new Car("blue");
console.log( car2.returnColor() );
var car3 = new Car("yellow");
console.log( car3.returnColor() );