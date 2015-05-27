/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/
var max = function(a, b) {
	
	if (a < b){
		return b
	}

	return a
}



/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

var maxOfThree= function (a, b, c) {

	if (c < b){
		return b;
	}
		if (c > a){
		return c;
	}

	if (c > b) {
		return c;
	}

	if (c === a){
		return c;
	}
}

