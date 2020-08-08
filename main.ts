
import { Emp } from './Emp'; //importing emp module

let emp = new Emp('Sailes boi');
console.log(emp.getName());

function printmessage(message){
    console.log(message);
    
}
var message ='hello';
printmessage(message);

//declare variable
let a:number;
 let b:boolean;
 let c:string;
 let d:any;
 let e: number[] =[1,2];
 let f: any[]=[1,true];
 
 enum Color{red ,green =2 ,yellow =6};
//  by default value of enums are 0,1,2
 
 let bkColor = Color.red;
 console.log(bkColor);
 
 let mes ;
 mes='sailes';//here the type of mes in any

let pos =  (<string>mes).indexOf('l',1); //type assertion because mes is a type of any
let alternativeway =  (mes as string).indexOf('l',1); //type assertion because mes is a type of any

console.log(pos);

//create class
class Student{
     name:string;
     age:number;

    display(){
        console.log('my name is '+this.name +' and age is '+this.age);
        
    }
}

let stu = new Student();
stu.age=16;
stu.name = 'sailes';
stu.display();


class Tree{

    //we can create only single constructor in typescript
    constructor(private name?:string,private quantity?:number){// question mark for optional property while creating object,

    }

    //normal getter setter
    getName(){
        return this.name;
    }

    setQuantity(value:number){
        if (value <1 )
        throw new Error('value cannot be less than one')
        this.quantity = value;
    }

    //properties
    get Quantity(){
        return this.quantity;

    }

    set Name(value:string){
        this.name = value;
    }

    //methods

    displayName(){
        console.log('Tree name is '+this.name);
 
    }

   displayNameAndQunty(){
       console.log('Tree name is '+this.name +' and quantity is '+this.quantity);
       
   }
}
let plnt1 = new Tree(); //we can create object using default constructor because we have declared variable with ? (question mark)
plnt1.displayName();
let plnt = new Tree('Neem tree',1);
plnt.displayNameAndQunty();
plnt.setQuantity(21);
let qnty = plnt.Quantity; //access property like variable
plnt.Name = 'Amba'; //set property like normal variable
plnt.displayNameAndQunty();
plnt.setQuantity(0);
























