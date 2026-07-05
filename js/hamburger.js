const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("#cabecario nav");

hamburger.addEventListener("click", function () {
  this.classList.toggle("change");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#cabecario nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 900) {
      hamburger.classList.remove("change");
      navMenu.classList.remove("active");
    }
  });
});

document.addEventListener("click", function (event) {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnHamburger &&
    navMenu.classList.contains("active")
  ) {
    hamburger.classList.remove("change");
    navMenu.classList.remove("active");
  }
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const phoneError = document.querySelector("#phone-error");

    nameError.style.display = "none";
    emailError.style.display = "none";
    phoneError.style.display = "none";

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    phoneInput.classList.remove("error");

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      nameInput.classList.add("error");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      emailInput.classList.add("error");
      isValid = false;
    }

    const phonePattern = /^\d{10,11}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
      phoneError.style.display = "block";
      phoneInput.classList.add("error");
      isValid = false;
    }

    if (isValid) {
      alert("Formulário enviado com sucesso!");
      this.submit();
    }
  });
}
