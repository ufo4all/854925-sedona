var button = document.querySelector(".search-popup-button");
var popup = document.querySelector(".search-form");
var inputarrive = popup.querySelector("#arrive");
var inputdeparture = popup.querySelector("#departure");
var inputadults = popup.querySelector("#adults");
var inputkids = popup.querySelector("#kids");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
  });
    popup.addEventListener("submit", function (evt) {
        if (!inputarrive.value || !inputdeparture.value || !inputadults.value || !inputkids.value) {
            evt.preventDefault();
            popup.classList.remove("popup-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("popup-error");   
  }});
