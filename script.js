const form = document.querySelector("form");
const emailInputField = document.querySelector("#userEmail");
const errorTextElement = document.querySelector("#errorText");

form.addEventListener("submit", function (e) {
  if (!emailInputField.value) {
    errorTextElement.innerText =
      "Whoops! It looks like you forgot to add your email";
    e.preventDefault();
    return;
  }
  const regex =
    /^([A-Za-z]+(\d*[_.-]?[A-Za-z]*)*)@([A-Za-z]+(\d*[_.-]?[A-Za-z]*)*)\.[\w]+$/;
  if (!regex.test(emailInputField.value)) {
    errorTextElement.innerText = "Please provide a valid email address";
    e.preventDefault();
    return;
  }
});
