export class Age {
  constructor(age) {
    this.age = age;
  }

  mercYears(years) {
    const mercYears = .24;
    let newYears = years / mercYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;
  }

  venYears(years) {
    const venYears = .62;
    let newYears = years / venYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;
  }

  marYears(years) {
    const marYears = 1.88;
    let newYears = years / marYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;

  }

  jupYears(years) {
    const jupYears = 11.86;
    let newYears = years / jupYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;

  }


  //( Math.floor(num * 100) / 100 )
}