var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

var formwrite = popup.querySelector(".write");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var writeerror = document.querySelector(".write__error");

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

formwrite.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) { 
    evt.preventDefault();
    writeerror.classList.add("write__error_show");
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


