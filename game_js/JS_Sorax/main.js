// Простые типы

var myNumber = 25,
	myString = "Some String",
	myBool = true,
	myNull = null,
	myUndef = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);

// Объектные типы

var obj = { name: "kryakva" },
	array = [1, 2, 3],
	regexp = /w+/g,
	func = function () { };

console.log("");
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

obj.name = "passive star";
array[1] = 212563;

console.log(array);

console.log(typeof myString.toUpperCase());
console.log(typeof myString);









