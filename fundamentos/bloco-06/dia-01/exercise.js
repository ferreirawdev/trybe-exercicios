const button = document.querySelector("#submit-btn");

function preventSubmit(event) {
  event.preventDefaut();
}

window.onload = function load() {
  button.addEventListener("click", preventSubmit);
};
