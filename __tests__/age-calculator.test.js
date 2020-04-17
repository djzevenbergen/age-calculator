import { Age } from './../src/planets.js';

describe('ageCalc', function () {
  let thisAge;
  let birthDate;
  beforeEach(function () {
    birthDate = '2010-04-17'
    thisAge = new Age("United States", birthDate);
    thisAge.calculateAge();

  });

  test('verifies that the Age object is created with the correct age property', function () {
    expect(thisAge.age).toEqual(10);

  });

  test('calculates users age based on birthday', function () {
    expect(thisAge.age).toEqual(10);
  });

  test('verifies that calculate mercYears returns the users age in mercury years', function () {
    var mercuryYears = thisAge.mercYears(thisAge.age);
    expect(mercuryYears).toEqual(41.67);
  });

  test('verifies that venYears returns the users age in venus years', function () {
    var venusYears = thisAge.venYears(thisAge.age);
    expect(venusYears).toEqual(16.13);
  });

  test('verifies that marYears returns the users age in Mars years', function () {
    var marsYears = thisAge.marYears(thisAge.age);
    expect(marsYears).toEqual(5.32);
  });

  test('verifies that jupYears returns the users age in jupiter years', function () {
    var jupiterYears = thisAge.jupYears(thisAge.age);
    expect(jupiterYears).toEqual(.84);
  });

  test('verifies that ageEverywher creates an array of all ages from all planets', function () {
    expect(thisAge.ageEverywhere()).toEqual([10, 41.7, 16.1, 5.3, .8])
  });

  test('converts users country selection into a string with no spaces or capital letters', function () {
    var convertInput = thisAge.convertInput("United States");
    expect(convertInput).toEqual("unitedstates");
  });

  test('determines users life expectancy based on country of origin', function () {
    var lifeExpect = thisAge.findLifeExpectancy("United States");
    expect(lifeExpect).toEqual(["unitedstates", 78.9]);
  });

  test('determines users life expectancy based on country of origin', function () {
    var lifeExpect = thisAge.findLifeExpectancy("HoNg KoNg");
    expect(lifeExpect).toEqual(["hongkong", 84.7]);
  });

  test('determines how long the user has left to live on earth based on key value pair', function () {
    var howLongLeft = thisAge.timeLeftOnEarth(["unitedstates", 78.9]);
    expect(howLongLeft).toEqual(68.9);
  });

  test('determines how long the user has left to live on earth based on the user input only', function () {
    var lifeExpect = thisAge.findLifeExpectancy(thisAge.country);
    var howLongLeft = thisAge.timeLeftOnEarth(lifeExpect);
    expect(howLongLeft).toEqual(68.9);
  });

  test('determines how long the user has left to live on earth based on the user input only, returning a negative number if they are over the expectancy', function () {
    thisAge.age = 90;
    var lifeExpect = thisAge.findLifeExpectancy(thisAge.country);
    var howLongLeft = thisAge.timeLeftOnEarth(lifeExpect);
    expect(howLongLeft).toEqual(-11.1);
  });

  test('determines how many years left to live on all planets, returning an array', function () {
    thisAge.timeLeftOnEarth(thisAge.findLifeExpectancy(thisAge.country));
    expect(thisAge.timeLeftEverywhere()).toEqual([68.9, 287.1, 111.1, 36.7, 5.8]);
  });

  test('determines how many years lived past life expectancy, returning an array', function () {
    thisAge.age = 79.9;
    thisAge.timeLeftOnEarth(thisAge.findLifeExpectancy(thisAge.country));
    expect(thisAge.timeLeftEverywhere()).toEqual([-1, -4.2, -1.6, -.5, -.1]);
  });

});