/** Array Functions **/
/*
0. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/

function typeCastAndAdd(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = parseFloat(array[i]) + 2;
	}

	return array;
}

var strArr = ["13", "2", "34", "14", "5", "86", "3.46"];

console.log("Typecast: ", typeCastAndAdd(strArr));

/* 
1. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/

function pluck(array, color) {
	var aux = [],
		j = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i].color === color) {
			aux.splice(j, 0, array[i]);
			j++;
		}
	}

	return aux;
}

const demoArr = [
	{ id: 1, color: "red", height: 15, width: 20, distance: 10 },
	{ id: 2, color: "green", height: 5, width: 30, distance: 15 },
	{ id: 3, color: "turqoize", height: 7, width: 9, distance: 8 },
	{ id: 4, color: "blue", height: 2, width: 3, distance: 3 },
	{ id: 5, color: "red", height: 10, width: 10, distance: 2 },
	{ id: 6, color: "crimson", height: 7, width: 8, distance: 16 }
];

console.log(pluck(demoArr, "color")); // => ['red', 'green', 'turqoize' .......];

/*
2. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

function calculateArea(array) {
	var aux = [],
		j = 0;

	for (var i = 0; i < array.length; i++) {
		aux.splice(j, 0, array[i].height * array[i].width);
		j++;
	}

	return aux;
}

console.log(calculateArea(demoArr));

/*
3. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

function filterArr(array) {
	const areas = calculateArea(demoArr);
	var aux = [],
		j = 0;

	for (var i = 0; i < array.length; i++) {
		if (areas[i] <= 100) {
			aux.splice(j, 0, areas[i]);
			j++;
		}
	}

	return aux;
}

console.log(filterArr(demoArr));

/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

function reject(array, iterator) {
	var aux = [],
		j = 0;

	let it = iterator.next();
	while (it.value != undefined) {
		if (it.value.height < 10) {
			aux.splice(j, 0, it.value);
			j++;
		}
		it = iterator.next();
	}

	return aux;
}

let iterator = demoArr[Symbol.iterator]();

console.log(reject(demoArr, iterator)); // return an array of objects with height < 10

/*
5. Write a function that return the element with the color 'crimson'
*/

function findColor(array, color) {
	var aux = [],
		j = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i].color === color) {
			aux.splice(j, 0, array[i]);
			j++;
		}
	}

	return aux;
}

console.log(findColor(demoArr, "crimson"));

/*
6. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

function areasAreBigger(array, value) {
	let areas = calculateArea(array),
		OK = 0;

	for (var i = 0; i < areas.length; i++) {
		if (areas[i] < value) {
			OK = 1;
			return false;
		}
	}

	return true;
}

console.log(areasAreBigger(demoArr, 10));

/*
7. Write a function that returns true if at least one of the array elements has the color 'green';
*/

function atLeastOneIsOfColor(array, color) {
	for(var i = 0; i < array.length; i++) {
		if(array[i].color === color) {
			return true;
		}
	}

	return false;
}

console.log(atLeastOneIsOfColor(demoArr, "balarie"));

/*
8. Write a function that returns the total distance (the sum of the element distances)
*/
console.log("Sum of distances: ", sumOfDistances(demoArr));

/*
9. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/
console.log("Number of colors: ", noColors(demoArr));

/*
10. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/
console.log("Unique Colors: ", uniqueColors(demoArr));

/*
11. Write a function which inverts two numbers.
*/
let a = 5,
	b = 8;

console.log("A:", a, "B:", b);

/*
12. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
	["Chemistry", "9AM", "Mr. Darnick"],
	["Physics", "10:15AM", "Mrs. Lithun"],
	["Math", "11:30AM", "Mrs. Vitalis"]
];

const objClasses = [];

console.log(objClasses);
