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

    const flag = document.createElement('img');
    flag.src = countryData.flag;
    this.htmlElement.appendChild(flag);

    const region = document.createElement('h3');
    region.textContent = `Region: ${countryData.region}`;
    this.htmlElement.appendChild(region);

    const languagestitle = document.createElement('h3');
    languagestitle.textContent = 'Languages:';
    this.htmlElement.appendChild(languagestitle);

    const langUl = document.createElement('ul');
    this.htmlElement.appendChild(langUl);

    countryData.languages.forEach(language => {
        const langLi = document.createElement('li');
        langLi.textContent = language.name;
        this.htmlElement.appendChild(langLi);
    });

}


module.exports = InfoView;