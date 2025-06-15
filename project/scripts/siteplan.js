// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// Contact form feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('form-response');

  if (name && message) {
    response.textContent = `Thanks, ${name}! We'll get back to you shortly.`;
    response.style.color = 'green';
    this.reset();
  } else {
    response.textContent = 'Please fill out both fields.';
    response.style.color = 'red';
  }
});
