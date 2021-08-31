const colors=['blue','black','white','yellow'];

const [c1, c9, c6,c4]= colors;
console.log("MY FAV: color is :"+c6);

console.log("=====================");


let colorList=['brown','pink','gray','silver'];
let[a,,,v]=colorList;
console.log("this is your selected color man: : "+a,v);

console.log("=====================");

let mobiles =['Samsung','Iphone','Oppo','metrolla','showMI','china','blackBerry'];
let[tahir,,pooja, ...rest]=mobiles;
console.log("this is your mobille :"+ rest);

console.log("=====================");

function sumAndMultiply(valueA,valueB)
{
    return [valueA+valueB, valueA*valueB]
}
const[sum,multiply]=sumAndMultiply(2,3);

console.log(sum);
console.log(multiply);

console.log("======object===============");

let emp = {  
    id : 185,  
    name : 'Rashid',
    works(){
        console.log('Employee works')
    }  
}  


console.log(emp.id);
console.log(emp.name);
emp.works(); 

console.log("======object===============");

var department = 'dep_name';  
var emp2 = {  
    id : 10,  
    name : 'Bilal',  
    [department]:'Computer Systems'  
}  
console.log(emp2); 

