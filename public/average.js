/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
function sum (array) {
	var total = 0

	for (i = 0; i < array.length; i+=1) {
		total = array[i] + total

	}
  
  return total

}

sum([30, 20, 30])
//should return 10 = 1 + 2 = 3 + 3 = 6 + 4 = 10

/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
function average (array) {

	if (array.length < 1) {

		return 0

	} else {

		return sum(array) / array.length
	}
}