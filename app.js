var name = 'malik';
console.log(name);

var mylocation = 'North Carolina';
console.log(mylocation);

var favoritenumber = 29;
console.log(favoritenumber);

var teams = ['patriots', 'giants', 'saints', 'panthers'];
console.log(teams);
var cars = ['Pagani', 'lamborghini', 'ferrari', 'Bugatti'];
console.log(cars);

// While loops
var number = 10;
var otherNumber = 1;

while (otherNumber < number) {
    console.log(otherNumber);
    //othernNumber +=1;
    otherNumber = otherNumber + 1; //
}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber); // 10, 11, 12
    myOtherNumber += 1; // 11, 12, 13
}

var numberThree = 30;
var numberFour = 15;

while (numberFour < numberThree) {
    console.log(numberFour);
    numberFour += 1;
}

// for loops
for (var i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3...
}

// print teams
for (var i = 0; i < teams.length; i++ ) {
    var eachTeam = teams[i];
    console.log(eachTeam);
}

// print cars
for (var i = 0; i < cars.length; i++ ) {
    var eachCar = cars[i];
    console.log(eachCar);
}

const food = ['pizza', 'steak', 'burger'];
console.log(food);

for (let i = 0; i < food.length; i++) {
    let eachFood = food[i]; // pizza, steak ...
    console.log(eachFood);
}

// objects
//key: value pairs

const Malik = {
    fullName: 'Malik Turnbull',
    age: 21,
    mylocation: 'North Carolina',
    placesTraveled: ['Miami', 'Richmond', 'DC', 'New York']
}

console.log(Malik);

//myLocation
console.log(Malik.mylocation);

// print New York
console.log(Malik.placesTraveled[3]);

const myinstagramPost = {
    username: '@tbull',
    likes: 3200,
    comments: ['really cool post', 'nice', 'woah'],
    caption: 'Day 3 in NY',
    picture: 'http://instagram.com',
    shares: 12
}
// console.log(myReallyCoolPost);

myinstagramPost.location = 'New York';

//Likes,Captions, Shares, Comments, Username, Pictures

//functions
//standard
console.log('Hello');

function sayHello() {
    // write my code
    // write your logic
    console.log('Hello');
}

sayHello();
sayHello();

// function expression
const sayHelloAgain = function() {
    console.log('Hello Again');
};
sayHelloAgain();

//arrow Function
const sayHelloFinal = () => {
    console.log('Hello for the last time');
}

sayHelloFinal();

const otherNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function printNumbers(numbers) {
    console.log(numbers);
}

printNumbers(numbers);

//Returning
printNumbers(otherNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addNumbers(array) {
    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
       let num = array[i];// 1, 2, 3, 4, 5

       result += num; // 1, 3, 6, 10, 15, ...
    }

   return result;
}