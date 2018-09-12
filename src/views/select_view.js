const PubSub = require('../helpers/pub_sub');

const SelectView = function (htmlElement) {
    this.htmlElement = htmlElement;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:names-ready', (event) => {
        // PubSub.subscribe('Countries:native-names-ready', (event) =>{
        this.makeDropdown(event.detail);
    });

    this.htmlElement.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    })
}



SelectView.prototype.makeDropdown = function (countriesNames) {
    countriesNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.textContent = name;
        if (name === "Poland"){
            option.selected = "selected";
        }
        option.value = index;
        this.htmlElement.appendChild(option);
    });
}

module.exports = SelectView;