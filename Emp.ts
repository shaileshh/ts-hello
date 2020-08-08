
//we declare class as export so that we can access it out side the file 
//this class is called as module in type script
export class Emp{
    constructor(private _name?:string){

    }
   
    getName(){
        return 'Employee name is '+this._name;
    }
}

// what is typescript?
// superset of javascript

// features : strong typng ,oo , compiletime error

// typescript to javascript in browser (transpile)

// ng serve transpile ts to js under the hood

// we can declare variable using let and var keyword
 
//  var :  can access through out the function
//  let : like java vaariable can access where declared

// function printmessage(message){
//     console.log(message);
    
// }
// var message ='hello';
// printmessage(message);

// let a:number;
//  let b:boolean;
//  let c:string;
//  let d:any;
//  let e: number[] =[1,2];
//  let f: any[]=[1,true];
 
//  enum Color{red ,green =2 ,yellow =6};
// //  by default value of enums are 0,1,2
 
//  let bkColor = Color.red;
//  console.log(bkColor);
 
 
//  Type assertions : 
 
//  let mes ;
//  mes='sailes';

// let pos =  (<string>mes).indexOf('l',1); //type assertion because mes is a type of any
// let alternativeway =  (mes as string).indexOf('l',1); //type assertion because mes is a type of any

// console.log(pos);











