const Countries = require('./models/countries');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const countries = new Countries;
countries.getAllCountriesFromApi();






});
