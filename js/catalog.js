var buyButtons = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".buy_add-modal");
var buyClose = document.querySelector(".close-buy-button");

buyButtons.forEach(function( button)  {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        buyPopup.classList.add("modal-show");
    });
});

buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (buyPopup.classList.contains("modal-show")) {
            buyPopup.classList.remove("modal-show");
        }
    }
});