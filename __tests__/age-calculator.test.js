import { Age } from './../src/planets.js';

describe('ageCalc', function () {
  let thisAge;

  beforeEach(function () {
    thisAge = new Age(10);


  });

  test('verifies that the Age object is created with the correct age property', function () {
    expect(thisAge.age).toEqual(10);

  });

  test('verifies that calculate mercYears returns the users in mercury years', function () {

  });


});