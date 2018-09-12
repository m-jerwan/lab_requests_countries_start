const Request = require('../helpers/request');

const Countries = function(){
    this.countriesData = null;
}

Countries.prototype.getAllCountriesFromApi = function(){
    
    const request = new Request('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
        this.countriesData = data;

    })
};


module.exports = Countries;