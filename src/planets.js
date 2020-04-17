export class Age {
  constructor(age, country) {
    this.age = age;
    this.country = country;
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

  convertInput(country) {
    let countryNew = (country.replace(/\s/g, '')).toLowerCase();
    return countryNew;
  }

  timeLeftOnEarth(valuePair) {
    let lifeExp = valuePair[1];
    let timeLeft = lifeExp - this.age;

    return (Math.round(timeLeft * 10) / 10);

  }


  findLifeExpectancy(country) {
    let countryLower = this.convertInput(country);
    let lifeExp = lifeExpectancies[countryLower];

    let countryLifeExp = [countryLower, lifeExp];

    return countryLifeExp;

  }


  //( Math.floor(num * 100) / 100 )
}

const lifeExpectancies = {

  hongkong: 84.7,
  japan: 84.5,
  switzerland: 83.6,
  singapore: 83.7,
  italy: 83.4,
  spain: 83.4,
  australia: 83.3,
  iceland: 82.9,
  israel: 82.8,
  southkorea: 82.8,
  sweden: 82.7,
  france: 82.5,
  malta: 82.4,
  canada: 82.3,
  norway: 82.3,
  luxembourg: 82.1,
  ireland: 82.1,
  newzealand: 82.1,
  netherlands: 82.1,
  greece: 82.1,
  portugal: 81.9,
  andorra: 81.8,
  finland: 81.7,
  belgium: 81.5,
  austria: 81.4,
  germany: 81.2,
  unitedkingdom: 81.2,
  slovenia: 81.2,
  cyprus: 80.8,
  denmark: 80.8,
  liechtenstein: 80.5,
  costarica: 80.1,
  chile: 80,
  czechrepublic: 79.2,
  barbados: 79.1,
  lebanon: 78.9,
  unitedstates: 78.9,
  cuba: 78.6,
  poland: 78.5,
  panama: 78.3,
  croatia: 78.3,
  unitedarabemirates: 77.8,
  uruguay: 77.8,
  oman: 77.6,
  slovakia: 77.4,
  turkey: 77.4,
  bosniaandherzegovina: 77.3,
  bahrain: 77.2,
  colombia: 77.1,
  antiguaandbarbuda: 76.9,
  thailand: 76.9,
  ecuador: 76.8,
  montenegro: 76.8,
  srilanka: 76.8,
  algeria: 76.7,
  peoplesrepublicofchina: 76.7,
  hungary: 76.7,
  argentina: 76.5,
  iran: 76.5,
  morocco: 76.5,
  peru: 76.5,
  tunisia: 76.5,
  saintlucia: 76.1,
  malaysia: 76,
  romania: 75.9,
  serbia: 75.8,
  brazil: 75.7,
  brunei: 75.7,
  lithuania: 75.7,
  northmacedonia: 75.7,
  kuwait: 75.4,
  vietnam: 75.3,
  latvia: 75.2,
  honduras: 75.1,
  mexico: 75,
  saudiarabia: 75,
  armenia: 74.9,
  bulgaria: 74.9,
  mauritius: 74.9,
  belarus: 74.6,
  saintkittsandnevis: 74.6,
  belize: 74.5,
  jamaica: 74.4,
  jordan: 74.4,
  nicaragua: 74.3,
  guatemala: 74.1,
  paraguay: 74.1,
  dominicanrepublic: 73.9,
  marshallislands: 73.9,
  palestine: 73.9,
  bahamas: 73.8,
  palau: 73.7,
  georgia: 73.6,
  trinidadandtobago: 73.4,
  seychelles: 73.3,
  kazakhstan: 73.2,
  samoa: 73.2,
  elsalvador: 73.1,
  azerbaijan: 72.9,
  caboverde: 72.8,
  solomonislands: 72.8,
  libya: 72.7,
  grenada: 72.4,
  russia: 72.4,
  stvincentandthegrenadines: 72.4,
  bangladesh: 72.3,
  venezuela: 72.1,
  ukraine: 72,
  egypt: 71.8,
  moldova: 71.8,
  syria: 71.8,
  suriname: 71.6,
  uzbekistan: 71.6,
  bhutan: 71.5,
  indonesia: 71.5,
  kyrgyzstan: 71.3,
  bolivia: 71.2,
  philippines: 71.1,
  tajikistan: 70.9,
  tonga: 70.8,
  iraq: 70.5,
  nepal: 70.5,
  vanuatu: 70.3,
  saotomeandprincipe: 70.2,
  guyana: 69.8,
  mongolia: 69.7,
  cambodia: 69.6,
  india: 69.4,
  botswana: 69.3,
  timorleste: 69.3,
  rwanda: 68.7,
  kiribati: 68.1,
  turkmenistan: 68.1,
  federatedstatesofmicronesia: 67.8,
  senegal: 67.7,
  laos: 67.6,
  fiji: 67.3,
  pakistan: 67.1,
  myanmar: 66.9,
  madagascar: 66.7,
  djibouti: 66.6,
  ethiopia: 66.2,
  gabon: 66.2,
  yemen: 66.1,
  eritrea: 65.9,
  sudan: 65.1,
  tanzania: 65,
  mauritania: 64.7,
  afghanistan: 64.5,
  congorepublicof: 64.3,
  papuanewguinea: 64.3,
  comoros: 64.1,
  southafrica: 63.9,
  ghana: 63.8,
  malawi: 63.8,
  haiti: 63.7,
  liberia: 63.7,
  zambia: 63.5,
  namibia: 63.4,
  kenya: 63.3,
  uganda: 63,
  niger: 62,
  gambia: 61.7,
  benin: 61.5,
  burkinafaso: 61.2,
  burundi: 61.2,
  guinea: 61.2,
  zimbabwe: 61.2,
  angola: 60.8,
  togo: 60.8,
  congodemocraticrepublicofthe: 60.4,
  mozambique: 60.2,
  eswatini: 59.4,
  mali: 58.9,
  cameroon: 58.9,
  equatorialguinea: 58.4,
  guineabissau: 58,
  southsudan: 57.6,
  cotedivoire: 57.4,
  nigeria: 54.3,
  sierraleone: 54.3,
  chad: 54,
  lesotho: 53.7,
  centralafricanrepublic: 52.8,
}      
