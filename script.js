// script.js - fixes mobile viewport sizing and attaches form AJAX to Formspree response handling

// Fix mobile viewport height issues (Safari top/bottom UI) by creating --vh
(function setVh() {
  function updateVh() {
    // 1% of the viewport height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  updateVh();
  window.addEventListener('resize', updateVh);
})();

// Smooth scroll helper used by the button
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Formspree AJAX submission + feedback
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(form);
    var responseEl = document.getElementById('formResponse');
    responseEl.textContent = '';

    fetch(form.action, {
      method: form.method || 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function(res){
      if (res.ok) {
        responseEl.textContent = 'Thank you! Your message has been sent.';
        form.reset();
      } else {
        res.json().then(function(json){
          responseEl.textContent = (json && json.error) ? json.error : 'Oops! Something went wrong.';
        }).catch(function(){
          responseEl.textContent = 'Oops! Something went wrong.';
        });
      }
    }).catch(function(){
      responseEl.textContent = 'Network error. Please try again.';
    });
  });
});
