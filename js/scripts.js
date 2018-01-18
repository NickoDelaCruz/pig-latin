
// other variables
// var re = /["0","9"]+/;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var notPigLatinNumber = ("Not Pig Latin, it's a number");


numbers.forEach(function(before){
  if (numbers === before){
  return notPigLatinNumber;
  }
});


$(document).ready(function(){
  $("form#translate").submit(function(event) {

    var english = $("#translator").val();
    alert(english);

    $("#result").text(english);
    var output = translation(english);
    alert(output);
    event.preventDefault();

  });
});
