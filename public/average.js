/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
function sum (array) {

  var addition = 0
  var counter = 0

  while(counter < array.length) {

    addition += array[counter]
    counter++
  }

  return addition

}
/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
function average (array) {

  return sum(array) / array.length

}