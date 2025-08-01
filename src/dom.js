import { getLocation } from "./logic";

export const DOM = (function () {
  //input and date
  const userInput = document.querySelector("#input");
  const date = document.querySelector("#date");

  //current day informations
  const currentDayWeather = document.querySelector(".day-weather");
  const currentNightWeather = document.querySelector(".night-weather");
  const currentWeather = document.querySelector(".current-weather");
  const currentHumidity = document.querySelector(".humidity");
  const currentPrecipitation = document.querySelector(".precipitation");

  //buttons
  const forDaysBtn = document.querySelector(".for-days");
  const forHoursBtn = document.querySelector(".for-hourse");

  //in case: for days
  const anotherDays = document.querySelectorAll(".days");
  const whichDay = document.querySelectorAll(".which-day");
  const dayWeather = document.querySelectorAll(".dayy");
  const nightWeather = document.querySelectorAll(".night");
  const description = document.querySelectorAll(".description");

  //pop-up for location
  const accept = document.querySelector("#accept-location");
  const refuse = document.querySelector("#deny-location");
  const popup = document.querySelector("#location-popup");

  return {
    userInput,
    date,
    currentDayWeather,
    currentNightWeather,
    currentWeather,
    currentHumidity,
    currentPrecipitation,
    forDaysBtn,
    forHoursBtn,
    anotherDays,
    whichDay,
    dayWeather,
    nightWeather,
    description,
    accept,
    refuse,
    popup
  };
})();


(function () {
    DOM.accept.addEventListener("click", () => {
        getLocation().then(result => {
            console.log(result)
            DOM.popup.style.position = "";
            DOM.popup.style.display = "none";
        })
    })

    DOM.refuse.addEventListener("click", () => {
        
            DOM.popup.style.position = "";
            DOM.popup.style.display = "none";
        
    })
})();