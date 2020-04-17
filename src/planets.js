export class Age {
  constructor(country, birthDate) {
    this.age = 0;
    this.country = country;
    this.birthDate = birthDate;
    this.timeLeftEarth = 0;
  }

  // calculates age based on birthdate
  calculateAge() {
    let today = new Date();
    let thisBirthday = new Date(this.birthDate);
    let age = today.getFullYear() - thisBirthday.getFullYear();
    let m = today.getMonth() - thisBirthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < thisBirthday.getDate())) {
      age--;
    }

    this.age = age;
  }

  // converts earth years to mercury years
  mercYears(years) {
    const mercYears = .24;
    let newYears = years / mercYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;
  }

  // converts earth years to venus years
  venYears(years) {
    const venYears = .62;
    let newYears = years / venYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;
  }

  // converts earth years to mars years
  marYears(years) {
    const marYears = 1.88;
    let newYears = years / marYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;

  }

  // converts earth years to jupiter years
  jupYears(years) {
    const jupYears = 11.86;
    let newYears = years / jupYears;
    newYears = (Math.round(newYears * 100) / 100);
    return newYears;

  }

  // compiles the ages from all of the planets into an array
  ageEverywhere() {
    let thisAge = this.age;
    let yearsAll = [thisAge, (Math.round(this.mercYears(thisAge) * 10) / 10), (Math.round(this.venYears(thisAge) * 10) / 10), (Math.round(this.marYears(thisAge) * 10) / 10), (Math.round(this.jupYears(thisAge) * 10) / 10)];
    return yearsAll;
  }

  //takes the country names and removes spaces and turns to lowercase to more easily search through lifeExpectancies array
  convertInput(country) {
    let countryNew = (country.replace(/\s/g, '')).toLowerCase();
    return countryNew;
  }

  //determines how much time the user has left on earth
  timeLeftOnEarth(valuePair) {
    let lifeExp = valuePair[1];
    let timeLeft = lifeExp - this.age;
    let time = (Math.round(timeLeft * 10) / 10);
    this.timeLeftEarth = time;
    return time;
  }

  //determines how much time the user has left on the ther planets and returns an array of those times
  timeLeftEverywhere() {
    let time = this.timeLeftEarth;
    let yearsLeft = [time, (Math.round(this.mercYears(time) * 10) / 10), (Math.round(this.venYears(time) * 10) / 10), (Math.round(this.marYears(time) * 10) / 10), (Math.round(this.jupYears(time) * 10) / 10)];
    return yearsLeft;
  }

  //searches the lifeExpectancies object for the correct key value pair
  findLifeExpectancy(country) {
    let countryLower = this.convertInput(country);
    let lifeExp = lifeExpectancies[countryLower];
    let countryLifeExp = [countryLower, lifeExp];
    return countryLifeExp;
  }
}

const lifeExpectancies = {
  afghanistan: 64.5,
  algeria: 76.7,
  andorra: 81.8,
  angola: 60.8,
  antiguaandbarbuda: 76.9,
  argentina: 76.5,
  armenia: 74.9,
  australia: 83.3,
  austria: 81.4,
  azerbaijan: 72.9,
  bahamas: 73.8,
  bahrain: 77.2,
  bangladesh: 72.3,
  barbados: 79.1,
  belarus: 74.6,
  belgium: 81.5,
  belize: 74.5,
  benin: 61.5,
  bhutan: 71.5,
  bolivia: 71.2,
  bosniaandherzegovina: 77.3,
  botswana: 69.3,
  brazil: 75.7,
  brunei: 75.7,
  bulgaria: 74.9,
  burkinafaso: 61.2,
  burundi: 61.2,
  caboverde: 72.8,
  cambodia: 69.6,
  cameroon: 58.9,
  canada: 82.3,
  centralafricanrepublic: 52.8,
  chad: 54,
  chile: 80,
  colombia: 77.1,
  comoros: 64.1,
  democraticrepublicofthecongo: 60.4,
  republicofcongo: 64.3,
  costarica: 80.1,
  cotedivoire: 57.4,
  croatia: 78.3,
  cuba: 78.6,
  cyprus: 80.8,
  czechrepublic: 79.2,
  denmark: 80.8,
  djibouti: 66.6,
  dominicanrepublic: 73.9,
  ecuador: 76.8,
  egypt: 71.8,
  elsalvador: 73.1,
  equatorialguinea: 58.4,
  eritrea: 65.9,
  eswatini: 59.4,
  ethiopia: 66.2,
  federatedstatesofmicronesia: 67.8,
  fiji: 67.3,
  finland: 81.7,
  france: 82.5,
  gabon: 66.2,
  gambia: 61.7,
  georgia: 73.6,
  germany: 81.2,
  ghana: 63.8,
  greece: 82.1,
  grenada: 72.4,
  guatemala: 74.1,
  guineabissau: 58,
  guinea: 61.2,
  guyana: 69.8,
  haiti: 63.7,
  honduras: 75.1,
  hongkong: 84.7,
  hungary: 76.7,
  iceland: 82.9,
  india: 69.4,
  indonesia: 71.5,
  iran: 76.5,
  iraq: 70.5,
  ireland: 82.1,
  israel: 82.8,
  italy: 83.4,
  jamaica: 74.4,
  japan: 84.5,
  jordan: 74.4,
  kazakhstan: 73.2,
  kenya: 63.3,
  kiribati: 68.1,
  kuwait: 75.4,
  kyrgyzstan: 71.3,
  laos: 67.6,
  latvia: 75.2,
  lebanon: 78.9,
  lesotho: 53.7,
  liberia: 63.7,
  libya: 72.7,
  liechtenstein: 80.5,
  lithuania: 75.7,
  luxembourg: 82.1,
  madagascar: 66.7,
  malawi: 63.8,
  malaysia: 76,
  mali: 58.9,
  malta: 82.4,
  marshallislands: 73.9,
  mauritania: 64.7,
  mauritius: 74.9,
  mexico: 75,
  moldova: 71.8,
  mongolia: 69.7,
  montenegro: 76.8,
  morocco: 76.5,
  mozambique: 60.2,
  myanmar: 66.9,
  namibia: 63.4,
  nepal: 70.5,
  netherlands: 82.1,
  newzealand: 82.1,
  nicaragua: 74.3,
  niger: 62,
  nigeria: 54.3,
  northmacedonia: 75.7,
  norway: 82.3,
  oman: 77.6,
  pakistan: 67.1,
  palauisland: 73.7,
  palestine: 73.9,
  panama: 78.3,
  papuanewguinea: 64.3,
  paraguay: 74.1,
  china: 76.7,
  peru: 76.5,
  philippines: 71.1,
  poland: 78.5,
  portugal: 81.9,
  romania: 75.9,
  russia: 72.4,
  rwanda: 68.7,
  saintkittsandnevis: 74.6,
  saintlucia: 76.1,
  samoa: 73.2,
  saotomeandprincipe: 70.2,
  saudiarabia: 75,
  senegal: 67.7,
  serbia: 75.8,
  seychelles: 73.3,
  sierraleone: 54.3,
  singapore: 83.7,
  slovakia: 77.4,
  slovenia: 81.2,
  solomonislands: 72.8,
  southafrica: 63.9,
  southkorea: 82.8,
  southsudan: 57.6,
  spain: 83.4,
  srilanka: 76.8,
  stvincentandthegrenadines: 72.4,
  sudan: 65.1,
  suriname: 71.6,
  sweden: 82.7,
  switzerland: 83.6,
  syria: 71.8,
  tajikistan: 70.9,
  tanzania: 65,
  thailand: 76.9,
  timorleste: 69.3,
  togo: 60.8,
  tonga: 70.8,
  trinidadandtobago: 73.4,
  tunisia: 76.5,
  turkey: 77.4,
  turkmenistan: 68.1,
  uganda: 63,
  ukraine: 72,
  unitedarabemirates: 77.8,
  unitedkingdom: 81.2,
  unitedstates: 78.9,
  uruguay: 77.8,
  uzbekistan: 71.6,
  vanuatu: 70.3,
  venezuela: 72.1,
  vietnam: 75.3,
  yemen: 66.1,
  zambia: 63.5,
  zimbabwe: 61.2,
};