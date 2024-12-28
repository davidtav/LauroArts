document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburguer');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('expanded');
  });
});