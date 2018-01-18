function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"],
    result = str.split('');  // split words into different elements

    if (vowels.includes(str.charAt(0))) {
      return str += 'ay';  // if vowel is, append 'ay' at the end
    } else {  //
      for (var i = 0; i < str.length; i++) {
       if (!vowels.includes(str[i])) {
         result.push(result.shift());
       } else {
         result.push('ay');
         return result.join('');
       }
       }
      }
    }

var results = (translatePigLatin("oil"));
alert(results);
