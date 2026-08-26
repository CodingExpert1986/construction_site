document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const currentPage = window.location.pathname.split("/").pop();

  const isHomePage =
    currentPage === "home.html" ||
    currentPage === "" ||
    currentPage === "index.html";
  const isAuthPage =
    currentPage === "login.html" || currentPage === "register.html";
  if (!isHomePage && !isAuthPage && !isLoggedIn) {
    alert("You must login or register to view this page!");
    window.location.href = "login.html";
    return;
  }

  if (isLoggedIn) {
    document.body.classList.add("logged-in");

    const authLinks = document.getElementById("authLinks");
    if (authLinks) {
      authLinks.innerHTML =
        '<a class="button-btn1" href="#" id="logoutBtn">Logout</a>';

      document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        document.body.classList.remove("logged-in");
        window.location.href = "home.html"; // Go home after logout
      });
    }
  }
});

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
