/* =========================================================
   GLOBAL STATE
   ========================================================= */
let slideIndex = 0;
let slides = [];
let dots = [];

let testimonialIndex = 0;
let testimonialsSlider = null;
let testimonialCards = [];

/* =========================================================
   PROPERTY DATA (used by projects.html)
   ========================================================= */
const propertyData = {
  property1: {
    name: "Residential Villa",
    description:
      "A professionally designed residential villa built with quality materials, practical planning, and careful attention to detail. The project demonstrates Stonewise Construction's commitment to durable workmanship and modern building standards.",
    cost: "$2,850,000",
    features: [
      "Spacious Living Room & Dining",
      "Fully fitted kitchen with Island",
      "Maisonette Master bedroom",
      "Walk-in closet",
      "5 En-suite bedrooms",
      "2 Rooms BQ ensuite",
      "Double volume spaces",
      "Gymnasium",
      "Swimming Pool",
    ],
  },
  property2: {
    name: "Residential Development",
    description:
      "A residential development planned and constructed with a focus on quality, functionality, and lasting value. The project combines practical building design with careful construction and attention to detail.",
    cost: "$1,950,000",
    features: [
      "Open-concept living spaces",
      "Gourmet kitchen with quartz countertops",
      "4 spacious bedrooms",
      "3 modern bathrooms",
      "Private study/office",
      "Two-car garage",
      "Landscaped front yard",
      "Community park access",
    ],
  },
  property3: {
    name: "Modern Building Project",
    description:
      "A modern building project developed with a focus on strong construction, functional design, and quality finishes. The project reflects careful planning and professional execution from the foundation through completion.",
    cost: "$3,200,000",
    features: [
      "Spacious Living Room & Dining",
      "Fully fitted kitchen with Island",
      "Maisonette Master bedroom",
      "Walk-in closet",
      "5 En-suite bedrooms",
      "2 Rooms BQ ensuite",
      "Double volume spaces",
      "Gymnasium",
      "Swimming Pool",
    ],
  },
  property4: {
    name: "Contemporary Construction",
    description:
      "A contemporary construction project designed with practical layouts, quality materials, and modern finishes. The project reflects careful planning, skilled workmanship, and attention to detail throughout the construction process.",
    cost: "$1,450,000",
    features: [
      "Open floor plan",
      "Gourmet kitchen with stainless steel appliances",
      "Spa-like master bathroom",
      "Private balcony",
      "Hardwood floors throughout",
      "In-unit laundry",
      "Building fitness center access",
      "24/7 concierge service",
    ],
  },

  property5: {
    name: "Residential Construction",
    description:
      "A residential construction project developed with attention to quality, durability, and practical design. The project combines reliable construction methods with thoughtful finishing and careful attention to the surrounding environment.",
    cost: "$1,680,000",
    features: [
      "Indoor-outdoor living spaces",
      "Vegetable garden area",
      "Rainwater harvesting system",
      "Natural stone finishes",
      "4 bedrooms with garden views",
      "3 full bathrooms",
      "Outdoor kitchen patio",
      "Sustainable bamboo flooring",
    ],
  },
  property6: {
    name: "Urban Development",
    description:
      "An urban development project planned with a focus on practical design, quality construction, and efficient use of space. The project demonstrates careful planning, reliable workmanship, and attention to detail throughout the development process.",
    cost: "$980,000",
    features: [
      "Panoramic city views",
      "Private gym access",
      "Rooftop garden terrace",
      "Modern kitchen appliances",
      "2 spacious bedrooms",
      "2 contemporary bathrooms",
      "In-building parking",
      "Doorman security",
    ],
  },
};

const propertyImages = {
  property1: [
    { src: "images/icon/pa1-2.jpeg", caption: "Exterior View" },
    { src: "images/icon/pa1-12.jpeg", caption: "Living Room" },
    { src: "images/icon/pa1-3.jpeg", caption: "Kitchen" },
    { src: "images/icon/pa1-9.jpeg", caption: "Master Bedroom" },
    { src: "images/icon/pa1-7.jpeg", caption: "Toilet" },
  ],
  property2: [
    { src: "images/icon/pa2.jpeg", caption: "Exterior View" },
    { src: "images/icon/pa2-1.jpeg", caption: "Living Room" },
    { src: "images/icon/kitcheen.jpeg", caption: "Kitchen" },
    { src: "images/icon/Master-bedrom2.webp", caption: "Master Bedroom" },
  ],
  property3: [
    { src: "images/icon/vieww.jpg", caption: "Exterior View" },
    { src: "images/icon/dinning.jpg", caption: "Living Room" },
    { src: "images/icon/Kitchen.jpg", caption: "Kitchen" },
    { src: "images/icon/master-bedroom.jpg", caption: "Master Bedroom" },
    { src: "images/icon/master-bathroom..jpeg", caption: "Master Bathroom" },
  ],
  property4: [
    { src: "images/icon/pa4.jpg", caption: "Exterior View" },
    { src: "images/icon/pa16-1.jpg", caption: "Living Room" },
    { src: "images/icon/Kitchin.jpg", caption: "Kitchen" },
    { src: "images/icon/modern-Bedroom.jpg", caption: "Master Bedroom" },
  ],
  property5: [
    { src: "images/icon/pa5.jpg", caption: "Exterior View" },
    { src: "images/icon/masterroom.jpg", caption: "Living Room" },
    { src: "images/icon/kitchen1.jpg", caption: "Kitchen" },
    { src: "images/icon/master.jpg", caption: "Master Bedroom" },
  ],
  property6: [
    { src: "images/icon/pa6.jpg", caption: "Exterior View" },
    { src: "images/icon/living-room.jpg", caption: "Living Room" },
    { src: "images/icon/kitcheen.jpeg", caption: "Kitchen" },
    { src: "images/icon/master1.jpg", caption: "Master Bedroom" },
  ],
};

/* =========================================================
   PROPERTY VIEW FUNCTIONS (global — called from onclick)
   ========================================================= */
function showPropertyDetails(propertyId) {
  const property = propertyData[propertyId];
  if (!property) return;

  const mainGallery = document.getElementById("mainGallery");
  const propertyDetails = document.getElementById("propertyDetails");
  const backBtn = document.getElementById("backBtn");
  const galleryPanel = document.getElementById("galleryPanel");
  if (!mainGallery || !propertyDetails || !galleryPanel) return;

  mainGallery.style.display = "none";
  propertyDetails.style.display = "block";
  if (backBtn) backBtn.style.display = "block";

  const nameEl = document.getElementById("propertyName");
  const descEl = document.getElementById("propertyDescription");
  const costEl = document.getElementById("propertyCost");
  if (nameEl) nameEl.textContent = property.name;
  if (descEl) descEl.textContent = property.description;
  if (costEl) {
    const amount = costEl.querySelector(".cost-amount");
    if (amount) amount.textContent = property.cost;
  }

  const featuresList = document.getElementById("featuresList");
  if (featuresList) {
    featuresList.innerHTML = "";
    property.features.forEach((feature) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="check-icon">✓</span> ${feature}`;
      featuresList.appendChild(li);
    });
  }

  galleryPanel.innerHTML = "";
  (propertyImages[propertyId] || []).forEach((item) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" />
      <div class="img-caption">${item.caption}</div>
    `;
    galleryPanel.appendChild(div);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMainGallery() {
  const mainGallery = document.getElementById("mainGallery");
  const propertyDetails = document.getElementById("propertyDetails");
  const backBtn = document.getElementById("backBtn");

  if (mainGallery) mainGallery.style.display = "grid";
  if (propertyDetails) propertyDetails.style.display = "none";
  if (backBtn) backBtn.style.display = "none";
}

function getUrlParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* =========================================================
   HERO SLIDER / VIDEO (home.html)
   ========================================================= */
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  if (slides[index]) slides[index].classList.add("active");
  if (dots[index]) dots[index].classList.add("active");
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

function autoSlide() {
  if (slides.length === 0) return;
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    slideIndex = slideIndex === 2 ? 1 : 2;
  } else {
    slideIndex = (slideIndex + 1) % 2;
  }
  showSlide(slideIndex);
}

/* =========================================================
   TESTIMONIALS
   ========================================================= */
function showTestimonial(index) {
  if (!testimonialsSlider || !testimonialCards.length) return;
  const cardWidth = testimonialCards[0].offsetWidth + 20;
  testimonialsSlider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextTestimonial() {
  if (!testimonialCards.length) return;
  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  if (!testimonialCards.length) return;
  testimonialIndex =
    (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
  showTestimonial(testimonialIndex);
}

/* =========================================================
   AUTH + FORM HELPERS (global — called from forms)
   ========================================================= */
function registerUser(userData) {
  alert(
    `Demo registration complete for ${userData.name}. No account was saved.`,
  );
  window.location.href = "login.html";
}

function loginUser(loginData) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", loginData.identity);
  alert("Demo sign-in complete. This session is stored only in this browser.");
  window.location.href = "home.html";
}

function submitContactForm(formData) {
  alert(
    "This demo form does not send messages. No information was transmitted.",
  );
}

function submitFaqForm(formData) {
  alert(
    "This demo form does not send questions. No information was transmitted.",
  );
}

function animateCounter(element, target, suffix = "", duration = 2000) {
  let start = 1;
  const increment = (target - 1) / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + suffix;
    }
  }, 16);
}

/* =========================================================
   INITIALISATION — runs once the DOM is ready
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  /* ---------- Logged-in UI ---------- */
  if (isLoggedIn) {
    document.body.classList.add("logged-in");
    const authLinks = document.getElementById("authLinks");
    if (authLinks) {
      authLinks.innerHTML =
        '<a class="button-btn1" href="#" id="logoutBtn">Logout</a>';
      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userEmail");
          document.body.classList.remove("logged-in");
          window.location.href = "home.html";
        });
      }
    }
  }

  /* ---------- Hamburger / mobile nav ---------- */
  const hamburger = document.getElementById("hamburgerMenu");
  const navbar = document.querySelector(".navbar");
  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      const isOpen = navbar.classList.contains("nav-open");
      navbar.classList.toggle("nav-open");
      hamburger.setAttribute("aria-expanded", String(!isOpen));
    });
    navbar.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && (link.closest(".nav-links") || link.closest(".auth-links"))) {
        navbar.classList.remove("nav-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- FAQ accordions ---------- */
  document.querySelectorAll(".accordion-header").forEach((header) => {
    const answer = header.nextElementSibling;
    if (!answer?.classList.contains("accordion-body")) return;

    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;

      const arrow = header.querySelector(".accordion-arrow");
      if (arrow) arrow.textContent = isExpanded ? "↓" : "↑";
    });
  });

  /* ---------- Property view: open from ?property= URL ---------- */
  const propertyId = getUrlParameter("property");
  if (propertyId && propertyData[propertyId]) {
    showPropertyDetails(propertyId);
  }

  /* ---------- Hero slider / video ---------- */
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  if (slides.length > 0) {
    slideIndex = isLoggedIn ? 2 : 0;
    showSlide(slideIndex);
    setInterval(autoSlide, 4000);
  }

  /* ---------- Latest projects horizontal scroll (home.html) ---------- */
  const homeGallery = document.getElementById("mainGallery");
  const projectScroller = document.getElementById("projectsScroller");
  const previousProjects = document.getElementById("projectsPrevious");
  const nextProjects = document.getElementById("projectsNext");
  const projectItems = document.querySelectorAll(".project-item");

  function updateProjectControls() {
    if (!projectScroller || !previousProjects || !nextProjects) return;
    previousProjects.disabled = projectScroller.scrollLeft <= 0;
    nextProjects.disabled =
      projectScroller.scrollLeft + projectScroller.clientWidth >=
      projectScroller.scrollWidth - 1;
  }

  function scrollProjects(direction) {
    if (!projectScroller || !homeGallery || !projectItems.length) return;
    const galleryGap = parseFloat(getComputedStyle(homeGallery).gap) || 0;
    const itemWidth = projectItems[0].getBoundingClientRect().width;
    projectScroller.scrollBy({
      left: direction * (itemWidth + galleryGap),
      behavior: "smooth",
    });
  }

  previousProjects?.addEventListener("click", () => scrollProjects(-1));
  nextProjects?.addEventListener("click", () => scrollProjects(1));
  projectScroller?.addEventListener("scroll", updateProjectControls);
  window.addEventListener("resize", updateProjectControls);
  updateProjectControls();

  /* ---------- Counters ---------- */
  document.querySelectorAll(".stat-number").forEach((element) => {
    const target = parseInt(element.getAttribute("data-target"), 10);
    if (Number.isNaN(target)) return;
    const id = element.parentElement ? element.parentElement.id : "";
    let suffix = "";
    if (id === "projectsBtn") suffix = "+";
    else if (id === "awardsBtn") suffix = "k";
    animateCounter(element, target, suffix);
  });

  /* ---------- Testimonials ---------- */
  testimonialsSlider = document.getElementById("testimonialsSlider");
  testimonialCards = document.querySelectorAll(".testimonial-card");

  /* ---------- Service cards ---------- */
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("active"));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("active");
      }
    });
  });

  /* ---------- Contact form ---------- */
  const contactSubmit = document.getElementById("contactSubmit");
  if (contactSubmit) {
    contactSubmit.addEventListener("click", () => {
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim();
      const department = document.getElementById("contactDepartment").value;
      const message = document.getElementById("contactMessage").value.trim();
      if (!name || !email || !message) {
        return alert("Please fill in all required fields.");
      }
      submitContactForm({ name, email, subject, department, message });
    });
  }

  /* ---------- FAQ form ---------- */
  const faqForm = document.getElementById("faqForm");
  if (faqForm) {
    faqForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("faqName").value.trim();
      const email = document.getElementById("faqEmail").value.trim();
      const subject = document.getElementById("faqSubject").value.trim();
      const department = document.getElementById("faqDepartment").value;
      const question = document.getElementById("faqQuestion").value.trim();
      if (!name || !email || !question) {
        return alert("Please fill out all required fields.");
      }
      submitFaqForm({ name, email, subject, department, question });
      faqForm.reset();
    });
  }

  /* ---------- Contact toggle button ---------- */
  const contactToggle = document.getElementById("contact-toggle");
  if (contactToggle) {
    contactToggle.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }

  /* ---------- Icon circle -> projects page ---------- */
  const iconCircle = document.querySelector(".icon-circle");
  if (iconCircle) {
    iconCircle.style.cursor = "pointer";
    iconCircle.addEventListener("click", () => {
      window.location.href = "projects.html";
    });
  }
});
