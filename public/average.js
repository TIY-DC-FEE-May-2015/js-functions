/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
var sum = function(array) {

	var total = 0

	for (var counter = 0; counter < array.length; counter++){
		total = array[counter] + total
	}

	return total
}	


/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
var average= function(array) {

	if (array.length === 0) {
		return 0
	}

	var total = 0

	for (var counter = 0; counter < array.length; counter++){
		total = array[counter] + total
	}
	
	var average = total/array.length
	return average;	
}
