/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
function sum (array) {
 
	var sum=0;
	for(var i=0; i<array.length;i++){
		sum= sum + array[i];
		}
     return sum
}

sum ([1, 2, 3, 4]);
sum([20, 30, 15, 45]);
sum([-5, 0, 5]);
sum([]);

/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
function average (array) {
	var sum=0;
	if(isNaN(array[0])){
		return 0;
	}
	else{
	for(var i=0; i<array.length;i++){
		sum= sum + array[i];
	}
       return sum/array.length
    }
}
average([1, 2, 3, 4]);
average([10, 8, 12, 6, 14]);
average([3, 3, 3, 3, 3, 3, 3]);
average([])