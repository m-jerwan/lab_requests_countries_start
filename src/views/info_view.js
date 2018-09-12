const PubSub = require('../helpers/pub_sub');

const InfoView = function(htmlElement){
    this.htmlElement = htmlElement;
}

InfoView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:names-ready', (event) => {
    // PubSub.subscribe('Countries:native-names-ready', (event) =>{
        this.makeDropdown(event.detail);
    });
}

InfoView.prototype.makeDropdown = function(countriesNames){
    countriesNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.textContent = name;
        option.value = index;
        this.htmlElement.appendChild(option);
    });
}

module.exports = InfoView;