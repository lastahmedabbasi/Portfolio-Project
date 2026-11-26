// 1. Mobile menu: show/hide the links when the button is clicked
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
// close the menu after choosing a link
navLinks.addEventListener("click", () => navLinks.classList.remove("open"));

// 2. Typing effect in the hero: types and deletes each role in turn
const roles = ["AI student", "problem solver", "C and Python coder", "web developer"];
const typed = document.getElementById("typed");
let roleIndex = 0, charIndex = 0, deleting = false;
function type() {
  const word = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typed.textContent = word.slice(0, charIndex);
  let delay = deleting ? 50 : 100;
  if (!deleting && charIndex === word.length) { deleting = true; delay = 1400; }
  else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 400; }
  setTimeout(type, delay);
}
type();

// 3. Skill bars: fill to data-level when the skills section scrolls into view
const bars = document.querySelectorAll(".bar i");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bars.forEach((bar) => (bar.style.width = bar.dataset.level + "%"));
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });
observer.observe(document.getElementById("skillList"));

// 4. Contact form: validate, then open the visitor's email app with the message filled in
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("formError");
  if (!name || !email || !message) { error.textContent = "Please fill in all fields."; return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { error.textContent = "Please enter a valid email address."; return; }
  error.textContent = "";
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
  window.location.href = "mailto:ahmedabbasiyt@gmail.com?subject=" + subject + "&body=" + body;
});
