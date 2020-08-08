"use strict";
exports.__esModule = true;
var Emp_1 = require("./Emp");
var emp = new Emp_1.Emp('Sailes boi');
console.log(emp.getName());
function printmessage(message) {
    console.log(message);
}
var message = 'hello';
printmessage(message);
//declare variable
var a;
var b;
var c;
var d;
var e = [1, 2];
var f = [1, true];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 6] = "yellow";
})(Color || (Color = {}));
;
//  by default value of enums are 0,1,2
var bkColor = Color.red;
console.log(bkColor);
var mes;
mes = 'sailes'; //here the type of mes in any
var pos = mes.indexOf('l', 1); //type assertion because mes is a type of any
var alternativeway = mes.indexOf('l', 1); //type assertion because mes is a type of any
console.log(pos);
//create class
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log('my name is ' + this.name + ' and age is ' + this.age);
    };
    return Student;
}());
var stu = new Student();
stu.age = 16;
stu.name = 'sailes';
stu.display();
var Tree = /** @class */ (function () {
    //we can create only single constructor in typescript
    function Tree(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    //normal getter setter
    Tree.prototype.getName = function () {
        return this.name;
    };
    Tree.prototype.setQuantity = function (value) {
        if (value < 1)
            throw new Error('value cannot be less than one');
        this.quantity = value;
    };
    Object.defineProperty(Tree.prototype, "Quantity", {
        //properties
        get: function () {
            return this.quantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "Name", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    //methods
    Tree.prototype.displayName = function () {
        console.log('Tree name is ' + this.name);
    };
    Tree.prototype.displayNameAndQunty = function () {
        console.log('Tree name is ' + this.name + ' and quantity is ' + this.quantity);
    };
    return Tree;
}());
var plnt1 = new Tree(); //we can create object using default constructor because we have declared variable with ? (question mark)
plnt1.displayName();
var plnt = new Tree('Neem tree', 1);
plnt.displayNameAndQunty();
plnt.setQuantity(21);
var qnty = plnt.Quantity; //access property like variable
plnt.Name = 'Amba'; //set property like normal variable
plnt.displayNameAndQunty();
plnt.setQuantity(0);
