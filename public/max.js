/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/
var a = 4
var b = 9
function max(a, b) {
	if (a > b){
		return a
	}
	else{
		return b
	}
	
	if (a < b){
		return b	
	}
	else{
		return a
	}
	
	return max
}
/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/
var c = 10
var a = 4
var b = 9
function maxOfThree(a, b, c) {
   var maxOfThree = Math.max(a, b, c);
   return maxOfThree
 }

