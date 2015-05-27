/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {
	return(a*b)
}

/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {

	if (exponent===1) {
		return base
	} 

	if (exponent === 0) {
		return 1
	}

	else {
		var product = base;
		for (i = 2; i <= exponent; i++) {
			product = multiply(product,base)	
		}

	}

	return product

}

