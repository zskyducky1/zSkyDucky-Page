const contactForm = document.querySelector("#contact-form");
const nameInput = contactForm?.querySelector("#name");
const emailInput = contactForm?.querySelector("#email");
const phoneInput = contactForm?.querySelector("#phone");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  if (email === "" || !validateEmail(email)) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (phone === "" || !validatePhone(phone)) {
    phoneError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Mensagem enviada com sucesso!");
    contactForm.reset();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\(\d{2}\) \d{5}-\d{4}$/;
  return re.test(phone);
}

const contactForm = document.querySelector("#contact-form");
const nameInput = contactForm?.querySelector("#name");
const emailInput = contactForm?.querySelector("#email");
const phoneInput = contactForm?.querySelector("#phone");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  if (email === "" || !validateEmail(email)) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (phone === "" || !validatePhone(phone)) {
    phoneError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Mensagem enviada com sucesso!");
    contactForm.reset();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\(\d{2}\) \d{5}-\d{4}$/;
  return re.test(phone);
}