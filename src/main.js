import { Age } from "./planets";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {


  $("#formOne").submit(function (event) {
    event.preventDefault();
    var userAge = parseInt($("#ageForm").val());
    var userCountry = $("#country").val();

    var thisAge = new Age(userAge, userCountry);

    console.log(thisAge);


  })

});