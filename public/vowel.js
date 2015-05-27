/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {

	var x = letter.toLowerCase();

	if(x==="a" || x==="e" || x==="i" || x==="o" || x==="u"){
		return true
	}
	else{
		return false
	}
}
isVowel("a");
isVowel("d");
isVowel("y");
isVowel("E");
isVowel("Q");
isVowel(" ");
isVowel("");

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {
	var x=word.toLowerCase();
	var counter=0;
	for (var i = 0; i < x.length; i++) {
	if(x[i]==="a" || x[i]==="e" || x[i]==="i" || x[i]==="o" || x[i]==="u"){
		counter  ++
	}
	
  }
  return counter
}
countVowels("Hello, World");
countVowels("The Iron Yard");
countVowels("JavaScript Is Great");




