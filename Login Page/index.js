
// let person = {
//     name: 'Nabin',
//     age:30
// };

// console.log(person);
// // Dot Notation
// person.name = 'John':

// console.log(person.name);
// // Bracket Notation
// let selection = 'name'
// person[selection] = 'Mary';

// console.log(person.name)

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors.length);


// function greet(name,lastName) {
//     //body of the function
//     console.log('Hello' + name + ' ' + lastName);
// }
// // calculates a value
// function square(number) {
//     return number*number

// }
// square(2);
// console.log(square(2));

// console.log('Hello World')

// greet('John', 'Smith');

//Object literala syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// }; 

// circle.draw()

//Factories

// function createCircle(radius){
//     return {
//         radius,
//        draw: function() {
//            console.log('draw');
//        }
//     };
       
// }
// const circle = createCircle(1)

// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// // const Circle1 = new Function('radius', `
// // this.radius = radius;
// // this.draw = function() {
// //     console.log('draw');
// //     }
// //     `);

// //  const circle = new Circle1(1);
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);
// const another = new Circle(1);
// //In JavaScript Functions are Objects
// let x = {};
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1,2,3

// let x = { value: 10};
// let y = x;

// x.value = 20;

// let obj = {value: 10};
// function increase(obj) {
//     obj.value++
// }

// increase(obj);
// console.log(obj);

//Abstraction

// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = {x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }
//     // let computeOptimumLocation = function() {
//     //     //.....
//     // }

//     this.draw = function() {
//         // computeOptimumLocation(0.1);
//         //defaultLocation

//         //this.radius

//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//             throw new Error('Invalid  location')
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();


// circle.location = {x: 1};

// const propertyName = 'location'
// circle[propertyName] = {X: 1};
// circle['location'] = {x: 1};

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) 
//     console.log('THe circle has radius');

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function (){
//         if (running)
//         throw new Error('Stopwatch has already started');

//         running = true;

//         startTime = new Date();

//     };

//     this. stop = function () {
//         if (!running)
//         throw new Error('Stopwatch is not running');

//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) /1000; 

//         duration += seconds
//     };

//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
    
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() {
//             return duration;
//         }
//     });
// }

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";

// let myVariable = document.querySelector("h1");
// myVariable.textContent = "Well, Hello there!";

/*let a = "Hello";
let b = "World!";

let right = document.querySelector("h1");

if (!(a.length === b.length)){
    right.textContent = "Greetings";
    } else {
        right.textContent = "Damn!";
    }

    alert(a);

document.querySelector("h1").addEventListener("click", function(){
    alert("Stop Poking Me!");    
});

const x = 1;
const y = 2;

let c = (x,y) => {
    sum = x+y;
    return sum;
}

console.log(c());
*/

// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "assets/images/tab-icon.jpg") {
//         myImage.setAttribute("src", "assets/images/image_1.jpg");
//     } else{
//         myImage.setAttribute("src", "assets/images/tab-icon.jpg");
//     }
// };

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");


// function setUserName(){
//     const myName = prompt("Please enter your first name"?., "Please enter your last name");
    
//     if (!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem("name", myName);
//         myHeading.textContent = `Java Script is cool, ${myName}`;
//     }
    
// }

// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
//   }
  

// myButton.onclick = () =>{
//     setUserName();
// }


            
