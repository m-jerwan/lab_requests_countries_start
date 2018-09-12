const PubSub = require('../helpers/pub_sub');

const InfoView = function(htmlElement){
    this.htmlElement = htmlElement;
}

InfoView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:country-ready', (event) => {
        this.htmlElement.textContent = "";
        this.display(event.detail);
    })
}

InfoView.prototype.display = function (countryData){
    const title = document.createElement('h1');
    title.textContent = countryData.nativeName;
    this.htmlElement.appendChild(title);
    console.log(this.htmlElement);

}


module.exports = InfoView;