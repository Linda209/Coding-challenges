
function FindVowels(str) {

  var vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {

    if (vowels.includes(char)) {

      console.log(char);


    }

  }

}
console.log(FindVowels("llinda"));