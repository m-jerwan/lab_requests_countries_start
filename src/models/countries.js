const Request = require('../helpers/request');
const PubSub = require('../helpers/pub_sub');

const Countries = function(){
    this.countriesData = [];
}

Countries.prototype.bindEvents= function(){
    this.getAllCountriesFromApiAndPublish();
    
    PubSub.subscribe('SelectView:change', (event) => {
        console.log(event.detail)
    })
};


Countries.prototype.getAllCountriesFromApiAndPublish = function(){
    const request = new Request('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
        this.countriesData = data;
        this.publishCountryNames();
        this.publishCountryNativeNames();
    })
};


Countries.prototype.publishCountryNames = function(){
    const onlyNames = [];
    this.countriesData.forEach(country => {
        onlyNames.push(country.name);
    });
    PubSub.publish('Countries:names-ready', onlyNames);
};

Countries.prototype.publishCountryNativeNames = function (){
    const onlyNativeNames = [];
    this.countriesData.forEach(country => {
        onlyNativeNames.push(country.nativeName);

    });
    PubSub.publish('Countries:native-names-ready', onlyNativeNames);
};


module.exports = Countries;