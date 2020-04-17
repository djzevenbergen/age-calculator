import { Age } from './../src/planets.js';

describe('ageCalc', function () {
  let thisAge;

  beforeEach(function () {
    thisAge = new Age(10);


  });

  test('verifie that the Age object is created with the correct age property', function () {
    expect(thisAge.age).toEqual(10);

  });


});