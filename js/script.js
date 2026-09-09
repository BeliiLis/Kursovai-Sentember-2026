// ===== БУРГЕР-МЕНЮ =====
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ===== ПОПАП =====
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupForm = document.getElementById('popupForm');

document.querySelector('.btn--large').addEventListener('click', function(e) {
  e.preventDefault();
  overlay.classList.add('active');
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
});

popupClose.addEventListener('click', closePopup);

overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePopup();
});

function closePopup() {
  overlay.classList.remove('active');
  popup.classList.remove('active');
  document.body.style.overflow = '';
}

popupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо! Ваше сообщение отправлено.');
  closePopup();
  popupForm.reset();
});