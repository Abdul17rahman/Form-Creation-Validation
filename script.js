window.onload = function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username too short.");
    }
    if (!(email.includes(".") && email.includes("@"))) {
      isValid = false;
      messages.push("Email should be a valid Email.");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password is too short.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      let res = messages.join("<br>");
      feedbackDiv.innerHTML = res;
      feedbackDiv.style.color = "#dc3545";
    }

    form.reset();
  });
};
