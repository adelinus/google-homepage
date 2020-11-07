let closeX = document.querySelector(".close-icon");
let vertBar = document.querySelector(".vertical-bar");
let inputText = document.querySelector('input[type="text"]');

inputText.addEventListener("input", closeBtnToggle);

closeX.addEventListener("click", deleteInputValue);

function closeBtnToggle() {
  if (inputText.value != "") {
    hideShow(closeX, "block");
    hideShow(vertBar, "block");
  } else {
    hideShow(closeX, "none");
    hideShow(vertBar, "none");
  }
}

function deleteInputValue() {
  inputText.value = "";
  hideShow(closeX, "none");
  hideShow(vertBar, "none");
}

function hideShow(el, state) {
  return (el.style.display = state);
}
