/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {

	return a*b
}
multiply(2, 3);
multiply(10, 4);
multiply(-9, 5);
multiply(1, 0);
/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {
	return Math.pow(base, exponent)

}
power(5, 2);
power(7, 1);
power(4, 3);
power(3, 4);
