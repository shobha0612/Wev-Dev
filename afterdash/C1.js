// let x = 10;
// let y = 5;
// if (x>y){
//     alert("x is greater then y.")
// }else if(x==y){
//     alert("X and Y are equal")
// }else{
//     alert("Not Greater")
// }


//Ternary Operator
// (x>y)?console.log("greater"):console.log("Not greater") 

// let day="sunday";
// (day=="saturday")?alert("Today is holiday"):alert("today is not")

//Switch Statement
// let day = "monday";
// switch(day){
//     case 'sunday':
//         console.log("Today is Sunday");
//         break;
//     case 'monday':
//         console.log("Today is Monday");
//         break;
//     case 'tuesday':
//         console.log("Today is tuesday");
//         break;
//     case 'wednesday':
//         console.log("Today is wednesday");
//         break;
//     case 'thursday':
//         console.log("Today is thursday");
//         break;
//     case 'friday':
//         console.log("Today is friday");
//         break;
//     case 'saturday':
//         console.log("Today is saturday");
//         break;
//     defaul:
//         console.log("Not a Day.")
// }


//Temlete Literals
// firstName = 'Shobha'
// lastName = 'Adhikari'
// fullName = `${firstName} ${lastName}`;
//     console.log(fullName)

// let x=5;
// let y=6;
// let output=`The sum is ${x+y}`;
//     console.log(output)

//DOM  (Document Object Model) Manipulation----> take from shreeya
// const title = document.getElementById('title');
// title.innerHTML='This is title added using JS.';


// Array
// let animals = ['cat','dog','horse'];
//     // animals[2]='camel'
//     // console.log(animals[2])
//         animals.pop(1) //pop lye lastko element laai delete garchha
//         animals.push('tiger') //push lye pachaade element add gardenchha
//         animals.shift() //removes the first element and returned that element
//         animals.unshift("monkey","tree") //agaade nai element add gardenchha ani naya length return gardenchha
//             console.log(animals)
//     document.body.innerHTML = animals;


// //Splice
// let animals = ['cat','dog','horse','tiger','lion','bear'];
// //let slicedAnimals = animals.slice()
// animals.splice(1,2,'jungle', 'tree');   
//     console.log(animals);
//     // console.log(slicedAnimals);

//Concat
const array1 = ["a","b","c",];
const array2 = ["d","e","f",];
const array3 = array1.concat(array2);
    console.log(array3)