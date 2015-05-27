/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {

	var vowel = ["a", "e", "i", "o", "u"]

	for (var i = 0; i < vowel.length; i++) {

		if (letter.toLowerCase() === vowel[i]) {
			return true
		}
	}
	return false
}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {

	var array = word.split("")
	var numberVowel = 0

	for (var i = 0; i < array.length; i++){

		if ( isVowel( array[i] ) ) {
			
			numberVowel += 1

		}
	}
	return numberVowel
}
