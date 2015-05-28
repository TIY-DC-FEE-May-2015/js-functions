/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
var arr = [3, 6, 9, 6]
function sum (array) {
	for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
	return sum
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
var arr =[3, 6, 9, 6]
function average (array) {
	var sumOfArray = sum(array);
	var average = sumOfArray/array.length;
	 
	return average
}



