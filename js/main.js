// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load the Header partial
  fetch("partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the header HTML at the very top of the body
      document.body.insertAdjacentHTML("afterbegin", data);

      // Once loaded, initialize other header scripts (like the cart count)
      initializeHeader();
    })
    .catch((error) => console.error("Error loading header:", error));
});

function initializeHeader() {
  const menuBtn = document.getElementById("menu-toggle");
  const overlay = document.getElementById("sidebar-overlay");
  const sidebar = document.getElementById("sidebar-menu");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }
  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  menuBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  window.closeSidebar = closeSidebar;
}

/* --- Hero Slider --- */
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-play every 5 seconds
setInterval(nextSlide, 5000);

// --- Menu Expand / Collapse ---
document.addEventListener("click", function (e) {
  // --- Departments ---
  const seeAllBtn = document.getElementById("see-all-btn");
  const seeLessBtn = document.getElementById("see-less-btn");
  const expandedList = document.getElementById("expanded-departments");

  if (seeAllBtn && seeLessBtn && expandedList) {
    // Click "See all"
    if (e.target.closest("#see-all-btn")) {
      expandedList.classList.add("open");
      seeAllBtn.style.display = "none";
    }
    // Click "See less"
    if (e.target.closest("#see-less-btn")) {
      expandedList.classList.remove("open");
      seeAllBtn.style.display = "flex";
    }
  }

  // --- Programs ---
  const seeAllBtnProg = document.getElementById("see-all-btn-programs");
  const seeLessBtnProg = document.getElementById("see-less-btn-programs");
  const expandedListProg = document.getElementById("expanded-programs");

  if (seeAllBtnProg && seeLessBtnProg && expandedListProg) {
    // Click "See all"
    if (e.target.closest("#see-all-btn-programs")) {
      expandedListProg.classList.add("open");
      seeAllBtnProg.style.display = "none";
    }
    // Click "See less"
    if (e.target.closest("#see-less-btn-programs")) {
      expandedListProg.classList.remove("open");
      seeAllBtnProg.style.display = "flex";
    }
  }
});
