import { Age } from "./planets";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {


  $("#formOne").submit(function (event) {
    event.preventDefault();
    let userBirthday = $("#birthdayForm").val();
    let userCountry = $("#country").val();
    let thisAge = new Age(userCountry, userBirthday);

    thisAge.calculateAge();

    let alienAge = thisAge.ageEverywhere();

    $("#earth-age").text(alienAge[0]);
    $("#mercury-age").text(alienAge[1]);
    $("#venus-age").text(alienAge[2]);
    $("#mars-age").text(alienAge[3]);
    $("#jupiter-age").text(alienAge[4]);

    thisAge.timeLeftOnEarth(thisAge.findLifeExpectancy(thisAge.country));

    let lifeExpect = thisAge.findLifeExpectancy(thisAge.country);
    let yearsLeftTot = thisAge.timeLeftEverywhere();

    if (yearsLeftTot[0] < 0) {
      $(".older").removeClass("hidden");
      $(".younger").addClass("hidden");
      yearsLeftTot = yearsLeftTot.map(x => x * -1);
    } else {
      $(".younger").removeClass("hidden");
      $(".older").addClass("hidden");
    }

    $("#user-country").text(userCountry);
    $("#user-expect").text(lifeExpect[1]);

    $("#earth-time").text(yearsLeftTot[0]);
    $("#mercury-time").text(yearsLeftTot[1]);
    $("#venus-time").text(yearsLeftTot[2]);
    $("#mars-time").text(yearsLeftTot[3]);
    $("#jupiter-time").text(yearsLeftTot[4]);

    $(".row").removeClass("hidden");

  });

});