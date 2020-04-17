import { Age } from './../src/planets.js';

describe('ageCalc', function () {
  let thisAge;

  beforeEach(function () {
    thisAge = new Age(10);


  });

  test('verifies that the Age object is created with the correct age property', function () {
    expect(thisAge.age).toEqual(10);

  });


  // * Output: Mercury Age: 41.67
  // Venus Age: 16.13
  // Mars Age: 5.32
  // Jupiter Age: .84


  test('verifies that calculate mercYears returns the users age in mercury years', function () {
    var mercuryYears = thisAge.mercYears(thisAge.age);
    expect(mercuryYears).toEqual(41.67);
  });

  test('verifies that venYears returns the users age in venus years', function () {
    var venusYears = thisAge.venYears;
    expect(venusYears).toEqual(16.13);
  });

  test('verifies that marYears returns the users age in Mars years', function () {
    var marsYears = thisAge.marYears;
    expect(marsYears).toEqual(5.32);
  });

  test('verifies that venYears returns the users age in venus years', function () {
    var jupiterYears = thisAge.jupYears;
    expect(jupiterYears).toEqual(.84);
  });




});