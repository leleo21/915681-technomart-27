
var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback-form");
var feedbackClose = document.querySelector(".close-feedback-button");

var user_name = document.querySelector("[name=user_name]");
var email = document.querySelector("[name=email]");
var message = document.querySelector("[name=message]");



feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  user_name.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

feedbackPopup.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Заполните все поля");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});


var mapLink = document.querySelector(".feedback-map-button");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close-map-button");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

