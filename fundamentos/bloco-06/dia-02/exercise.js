const submitButton = document.querySelector("#submit-btn");
const agreement = document.querySelector("#agreement");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const reason = document.querySelector("#why");

function textInputValidation() {
  const nameLen = fullName.value.length;
  const emailLen = email.value.length;
  const reasonLen = reason.value.length;
  const invalidName = nameLen < 10 || nameLen > 40;
  const invalidEmail = emailLen < 10 || emailLen > 50;
  const invalidReason = reasonLen > 500;

  if (invalidName || invalidEmail || invalidReason) {
    return false;
  } else {
    return true;
  }
}

function preventSubmit(event) {
  event.preventDefaut();
  const validation = textInputValidation();

  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

function enableSubmitButton() {
  if (agreement.checked) {
    submitButton.disable = false;
  }
}

window.onload = function load() {
  submitButton.addEventListener("click", preventSubmit);
  agreement.addEventListener("change", enableSubmitButton);
};
