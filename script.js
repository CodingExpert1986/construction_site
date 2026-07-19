function registerUser(userData) {
  console.log("Registering user with data:", userData);

  alert(`Account created successfully for ${userData.name}!`);

  window.location.href = "login.html";
}

function loginUser(loginData) {
  console.log("Logging in user with data:", loginData);

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", loginData.identity);

  alert("Login successful! Welcome back.");

  window.location.href = "home.html";
}

function submitContactForm(formData) {
  console.log("Contact form submitted:", formData);
  alert("Thank you! Your message has been sent successfully.");
}

function submitFaqForm(formData) {
  console.log("FAQ form submitted:", formData);
  alert("Thank you! Your question has been submitted. We'll respond soon.");
}
