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