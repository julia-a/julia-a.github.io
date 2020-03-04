// Popup
var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

var formWrite = popup.querySelector(".write");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var writeError = document.querySelector(".write__error");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  if (storage) {
    username.value = storage;
    message.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  popup.classList.remove("modal__error");
});

formWrite.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) { 
    evt.preventDefault();
    writeError.classList.add("write__error_show");
    popup.classList.remove("modal__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    }
  }
});

// Slider
var slider = document.querySelector(".slider");

var SLIDE_HIDDEN = "visually-hidden";
var BUTTON_ACTIVE = "slider__control_current";

var slideOne = document.querySelector(".slider__item_expensive");
var slideTwo = document.querySelector(".slider__item_exact");
var slideThree = document.querySelector(".slider__item_unique");
var buttonOne = document.querySelector(".slider__control:nth-child(1)");
var buttonTwo = document.querySelector(".slider__control:nth-child(2)");
var buttonThree = document.querySelector(".slider__control:nth-child(3)");

if (slider) {
  buttonOne.addEventListener("click", function () {
    buttonTwo.classList.remove(BUTTON_ACTIVE);
    buttonThree.classList.remove(BUTTON_ACTIVE);
    buttonOne.classList.add(BUTTON_ACTIVE);
    slideTwo.classList.add(SLIDE_HIDDEN);
    slideThree.classList.add(SLIDE_HIDDEN);
    slideOne.classList.remove(SLIDE_HIDDEN);
  });

  buttonTwo.addEventListener("click", function () {
    buttonOne.classList.remove(BUTTON_ACTIVE);
    buttonThree.classList.remove(BUTTON_ACTIVE);
    buttonTwo.classList.add(BUTTON_ACTIVE);
    slideOne.classList.add(SLIDE_HIDDEN);
    slideThree.classList.add(SLIDE_HIDDEN);
    slideTwo.classList.remove(SLIDE_HIDDEN);
  });

  buttonThree.addEventListener("click", function () {
    buttonTwo.classList.remove(BUTTON_ACTIVE);
    buttonOne.classList.remove(BUTTON_ACTIVE);
    buttonThree.classList.add(BUTTON_ACTIVE);
    slideOne.classList.add(SLIDE_HIDDEN);
    slideTwo.classList.add(SLIDE_HIDDEN);
    slideThree.classList.remove(SLIDE_HIDDEN);
  });
}
