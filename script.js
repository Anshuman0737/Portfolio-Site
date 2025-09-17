// Animate sections on scroll (delayed for glass fade)
document.querySelectorAll('.animate-fade').forEach((el, i) => {
  el.style.animationDelay = `${0.2 + i * 0.15}s`;
});

const animatedSections = document.querySelectorAll('.animate-fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(el => observer.observe(el));

// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
  } else {
    navbar.style.boxShadow = '';
  }
});

// Contact form handler with animation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const resp = document.getElementById('formResponse');
      resp.textContent = "Message sent! Thank you 😊";
      contactForm.reset();
      resp.style.opacity = 0;
      setTimeout(() => { resp.style.opacity = 1; }, 200);
    });
  }
});
