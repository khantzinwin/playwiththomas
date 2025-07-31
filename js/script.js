
const controlCenter = document.getElementById("controlCenter");
const backToTopBtn = document.getElementById("backToTopBtn");
const messengerBtn = document.getElementById("messengerBtn");
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("searchBtn");

//Back to Top Button Script
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}); 
//END

//Messenger Icon Button Start
function openMessenger() {
  window.open('http://m.me//playwiththomas', '_blank');
}

//Redirect to Home page
homeBtn.addEventListener('click', function () {
window.location.href = 'index.html';
});

//click in the search input box
function focusInput() {
  const input = document.getElementById('searchInput');
  input.focus();
}

//go back to previous page
function goBack() {
  window.history.back();
}

// Hard refresh simulation: bypass browser cache on page refresh
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length > 0 && navEntries[0].type === "reload") {
  const baseUrl = window.location.href.split('?')[0];
  window.location.replace(`${baseUrl}?v=${Date.now()}`);
}

//hamburger menu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const header = document.querySelector("header");
  navLinks.classList.toggle('active');
  header.classList.toggle("menu-open");
  navLinks.classList.add('dropdown');
}

//welcome slider script
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');
next.addEventListener('click', function(){
  let slide = document.querySelectorAll('.slide');
  slider.appendChild(slide[0]);
})
prev.addEventListener('click', function(){
  let slide = document.querySelectorAll('.slide');
  slider.prepend(slide[slide.length - 1]);
})

//info slider script
const infoSlider = document.getElementById('infoSlider');
const totalInfoSlides = infoSlider.children.length;
let currentIndex = 0;
let interval = setInterval(nextSlide, 3000);
const infoNextBtn = document.getElementById('infoNextBtn');
const infoPrevBtn = document.getElementById('infoPrevBtn');
function updateSlider() {
  infoSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalInfoSlides;
  updateSlider();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalInfoSlides) % totalInfoSlides;
  updateSlider();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}
infoNextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
infoPrevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
// Touch Swipe
let startX = 0;
let isDragging = false;
const infoSliderContainer = document.getElementById('infoSliderContainer');
infoSliderContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(interval);
});
infoSliderContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const diff = touchX - startX;
  if (Math.abs(diff) > 50) {
    if (diff < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isDragging = false;
  }
});
infoSliderContainer.addEventListener('touchend', () => {
  isDragging = false;
  resetInterval();
});

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//viber phone show message
function showViberMessage() {
  alert("Viber ထဲက Add Friend ထဲမှာ +66825502571 လို့ရိုက်ထည့်ပြီး Play with Thomas ကို Viber ကနေ ဆက်သွယ်နိင်ပါတယ်။");
}