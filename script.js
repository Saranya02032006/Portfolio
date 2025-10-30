// Toggle mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Show current year
document.getElementById("year").textContent = new Date().getFullYear();