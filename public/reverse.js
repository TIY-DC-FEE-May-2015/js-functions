/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {
	var newString="";
	for (var i = word.length - 1; i >= 0; i--) {
		newString += word[i]
	};
	return newString;
}
reverseWord("hello");
reverseWord("testing");
reverseWord("");

/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/


var reverseSentence = function(sentence) {
	var x= sentence.split(" ");
	
	for( var i=0; i<x.length; i++){
		x[i] = reverseWord(x[i])

	}
	return x.join(" ");
 	
}
reverseSentence("one two three four");
reverseSentence("hello, world");
reverseSentence("use an array");
