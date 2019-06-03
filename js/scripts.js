var sentence = prompt("Type a sentence");
alert("The user wrote: " + sentence);

// capitalize the first letter
function capitalizeLetters(sentence){
  var letter0 = sentence.charAt(0);
  alert("first letter is : " + letter0);
  letter0 = letter0.toUpperCase(); // now first letter is capitalized
  var result = sentence.slice(1);
  return letter0 + result;
};


alert(capitalizeLetters(sentence));
