const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add('visible');
    }
  });
});
