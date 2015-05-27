/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/

function max(a, b) {
	if (a>b){
		return a
		maxNumber=a
	}
	else
		return b
	maxNumber=b
}

max(2, 3);
max(10, 4);
max(-9, -11);
max(0, 0);

/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

function maxOfThree(a, b, c) {
	var maxNumber=0;
	if(a>b){
		maxNumber=a
	}
	else{
		maxNumber=b
	}


 	if( maxNumber> c){
 		return maxNumber
 	}
 	else{
 		return c
 	}

}
maxOfThree(1, 2, 3);
maxOfThree(4, 7, -5);
maxOfThree(21, 21, 20);
maxOfThree(-1, -1, -1);