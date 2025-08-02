//dom-logic.js
import { DOM } from "./dom.js";
import { time } from "./logic.js";
import { getLocation, getWeather, locationToJson } from "./logic.js";


const popupButtons = function () {
DOM.accept.addEventListener("click", () => {
    getLocation().then(async location => {
        await locationToJson(location);
        DOM.popup.classList.add("hidden");
    })
})

DOM.refuse.addEventListener("click", () => {
    DOM.popup.classList.add("hidden");
})
};



function jsonToDom() {
    
}
