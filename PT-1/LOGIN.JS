// login.js

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Predefined username and password for demo purposes
    const validUsername = "admin";
    const validPassword = "password123";

    // Get user input values
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if credentials match
    if (
      enteredUsername === validUsername &&
      enteredPassword === validPassword
    ) {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to main page
    } else {
      // Show error message
      document.getElementById("error-message").style.display = "block";
    }
  });