let pets = ['goldfish', 'dog', 'rhino'];
console.log(pets.length);
pets[0] =  'bunny';
console.log(pets);
pets.push('lizard');
console.log(pets);
pets.pop();
console.log(pets);
pets.unshift('turtle');
console.log(pets);
pets.shift();
console.log(pets);

const steps = ['one', 'two', 'three'];

//.forEach call a function for each item in the array

steps.forEach(showStep);

function showStep(step) {
    console.log(step);
}


//.map creates a new array by calling a function for each item in the array

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplayte);

function listTemplayte(step) {
    return `<li>${step}</li>`;
}

myList.innerHTML = stepsHtml.join('');

//.map

let grades = ['A', 'B', 'D'];

let points;

let gpaPoints = grades.map(convert);


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);


// .reduce reduces an array to a single value by calling a function for each item in the array
let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}
console.log(totalPoints);
let averagePoints = totalPoints / gpaPoints.length;
console.log(averagePoints);

//.fiter make a new array but only items that pass a certian condition

 
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortWords = words.filter(isShort);

function isShort(word) {
    return word.length < 6;
}

console.log(shortWords);

let longWords = words.filter(isLong);

function isLong(word) {
    return word.length >= 6;
}
console.log(longWords);
          

