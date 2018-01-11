$(document).ready(function(){
  $("#info-form").submit(function)(even) {
    var name = $("input#name").val();
    var income = $("input#income").val();
    var education = $("input#education").val();
    var gender = $("input#gender").val();
    var birth = $("input#birth").val();
    var race = $("input#race").val();
    var information = $("input#info").val();

    $(".name").text(name);
    $(".income").text(income);
    $(".education").text(education);
    $(".gender").text(gender);
    $(".birth").text(brith);
    $("race").text(race);
    $(".information").text(information);
    $("#survey").fadeToggle();

    event.preventDefault();
  });
});
