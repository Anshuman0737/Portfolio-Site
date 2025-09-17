// Animate sections on scroll
const animatedSections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = '1';
    entry.target.style.transform = 'translateY(0)';
  });
}, { threshold: 0.2 });

animatedSections.forEach(el => observer.observe(el));

// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 12px rgba(30,58,138,0.18)';
  } else {
    navbar.style.boxShadow = '';
  }
});

// Contact form handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('formResponse').textContent = "Message sent! Thank you 😊";
      contactForm.reset();
    });
  }
});
