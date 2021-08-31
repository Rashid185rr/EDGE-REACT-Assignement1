// Rest

function addNumbers(a,b, ...rest)
{
    console.log(rest)
    return a+b;
}
addNumbers(2,4,3,4,5,6,7,8);

// Rest 

let ufc={
    name:"khabib",
    nickName:"The Eagle",
    age:31,
    religion:"Islam",
    country:"Russia",
    TotalWins:29,
    loss:0
};
const { age,loss,  ...restUfc} =ufc;
console.log(restUfc)



// Spread

function playersNames(name1,name2,name3)
{
    console.log(name1, name2, name3)
}
let namess=['Rashid','Fahad','sajid','Hussain','Arslan']

playersNames(namess[0], namess[1], namess[4])

console.log(...namess)

//Spread

let newUfcPlayer= {
    ...ufc,
    name:"Rashid"
}
console.log(newUfcPlayer);