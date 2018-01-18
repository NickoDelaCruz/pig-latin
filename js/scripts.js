$(document).ready(function(){
  $("form#translate").submit(function(event) {
    var english = $("input#translator").val();



    $("#result").text(english);
    alert(english);

    event.preventDefault();
  });
});
