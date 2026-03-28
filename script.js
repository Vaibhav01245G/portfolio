// Small JS for interactivity: nav toggle, year, contact form stub
document.addEventListener("DOMContentLoaded", () => {
  // Show year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Nav toggle for small screens
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // Close nav on link click (mobile)
  document.querySelectorAll(".nav-link").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 640) nav.style.display = "none";
    });
  });
});

// Contact form handler (simple)
// Replace with backend / form service in production
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const el = document.getElementById("form-msg");

  // Basic validation
  if(!name || !email || !message){
    el.textContent = "Please fill all fields.";
    el.style.color = "#ffb4b4";
    return;
  }

  // For now open mail client with prefilled content (works without backend)
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
  window.location.href = `mailto:vaibhav.email@example.com?subject=${subject}&body=${body}`;

  el.textContent = "Opening your mail client…";
  el.style.color = "#c6f6d5";
  form.reset();
}
