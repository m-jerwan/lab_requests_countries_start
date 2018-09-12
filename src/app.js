const InfoView = require('./views/info_view');
const Countries = require('./models/countries');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const countries = new Countries;
countries.bindEvents();

const dropdown = document.querySelector('#countries')
const infoView = new InfoView(dropdown);
infoView.bindEvents();




});
