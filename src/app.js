const InfoView = require('./views/info_view');
const Countries = require('./models/countries');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const countries = new Countries;
  countries.bindEvents();

const dropdown = document.querySelector('#countries')
  const selectView = new SelectView(dropdown);
  selectView.bindEvents();

const countryInfo = document.querySelector('#country')
  const infoView = new InfoView(countryInfo);
  infoView.bindEvents();

});