const data = require('./data.json');

const task11Result = (animals) => {
    const result = {};
    let cats = 0;
    let dogs = 0;
    let ages = [];
    animals.forEach((e) => {
        if (e.type === 'cat') {
            cats += 1;
            ages.push(e.age);
        } else {
            dogs += 1;
            ages.push(e.age);
        }
    })

    let avgage = Math.round(ages.reduce((previousVal, currentVal) => previousVal + currentVal) / ages.length);
    result.cats = cats;
    result.dogs = dogs;
    result.avgage = avgage;

    return result;
};

// console.log(task11Result(data));


const task12Result = (animals) => {
    let result = 0;
    animals.forEach((e) => {
        if (e.type === 'dog' && e.breed === 'true') {
            result += 1;
        }
    })
    return result;
};

// console.log(task12Result(data));

const task13Result = (animals) => {
    let result = [];
    result = animals.filter((animal) => {
        return (animal.type === 'cat' && animal.features.includes('white')) || (animal.type === 'dog' && animal.features.includes('black'));
    })
    return result;
};

// console.log(task13Result(data));

const task14Result = (animals) => {
    function compare(a, b) {
        if (a.type === 'cat' && b.type === 'cat') {
            if (a.age > b.age) {
                return -1;
            }
        } else if (a.type === 'dog' && b.type === 'dog') {
            if (a.age < b.age) {
                return -1;
            }
        } else if (a.type === 'cat' && b.type === 'dog') {
            return -1;
        }
    }
    return animals.sort(compare);
};

// console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    for (let i = 1; i < n; i++) {
        result *= number;
    }
    return result;
};

// console.log(myPowFunc(5, 8));

let flatArray = [];
const myFlatFunc = (inputArray) => {
    inputArray.forEach((e) => {
        if (!Array.isArray(e)) {
            flatArray.push(e);
        } else {
            myFlatFunc(e);
        }
    })
};

// let inputArray = [1,2,[3,4,[5,6],[7,8,[9,10]]]]
// myFlatFunc(inputArray);
// console.log(flatArray);