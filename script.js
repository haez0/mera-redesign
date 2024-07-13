function login(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "user" && password === "pass") {
      window.location.href = "home.html";
  } else {
      alert("Invalid username or password");
  }
}

function togglePassword() {
  var passwordField = document.getElementById("password");
  var passwordToggle = document.querySelector(".password-toggle");
  if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.classList.remove("bx-show");
      passwordToggle.classList.add("bx-hide");
  } else {
      passwordField.type = "password";
      passwordToggle.classList.remove("bx-hide");
      passwordToggle.classList.add("bx-show");
  }
}

// script.js

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
