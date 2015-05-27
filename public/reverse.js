/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {

	var splitWord = word.split("");
	var newSplit = []
	
	for (var i = 0; i < splitWord.length; i++) {

        var current = splitWord[i]
        
		newSplit.unshift(current)
	    
	}
	return newSplit.join("")
}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {
	
	var splitSentence = sentence.split(" ");
	var newWords = [];

	for(var i = 0; i < splitSentence.length; i++){
    	var word = splitSentence[i];

    	var wordScramble = reverseWord(word);
    	
    	newWords.push(wordScramble);
    	
    }
    
    var newSentence = newWords.join(" ")
    
    return newSentence

}