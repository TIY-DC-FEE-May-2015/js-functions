/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {

	var drow = ""

	for (var i = 0; i < word.length; i++) {
		drow = word[i] + drow
	}

	return drow

}

console.log(reverseWord("hello"))
//expect to equal "olleh" - store in an array backward by unshifting, 
//then a second loop to populate a string... or just populate the string


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {

	var ecnetnes = []
	array = sentence.split(" ")

	for (var i = 0; i < array.length; i++) {

		ecnetnes.push(reverseWord(array[i]))


	}

	return ecnetnes.join(" ")
}


console.log(reverseSentence("Ain't it, Jay?"))
//Should return "t'niA ,ti ?yaJ" by splitting sentence into a array, and pushing each index value ("drow") into 
//a ecnetnes array, then join


//This is wrong, do not use: making individual drows, hitting a space, starting a new drow 
// run drow, store it, add a space, add another drow