import { Age } from "./planets";

$(document).ready(function () {


  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userAge = parseInt($("#ageForm").val());
    var userCountry = $("#country").val();

    var thisAge = new Age(userAge, userCountry);

    console.log(thisAge);


  })

});