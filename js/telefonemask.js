
const telefoneInput = document.getElementById('phone');

telefoneInput.addEventListener('input', (e) => {
  let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
  
  // Limita o tamanho máximo para 11 dígitos (DDD + 9 dígitos do celular)
  valor = valor.substring(0, 11);

  // Aplica a máscara dependendo da quantidade de dígitos
  if (valor.length > 2) {
    valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
  }
  if (valor.length > 10) {
    valor = `${valor.substring(0, 10)}-${valor.substring(10)}`;
  }

  e.target.value = valor;
});

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