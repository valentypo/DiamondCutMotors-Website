document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'loginPage.html';
});

// carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    const transformValue = -currentSlide * 100;
    const carouselInner = document.querySelector('.carousel-inner');
    
    carouselInner.style.transform = `translateX(${transformValue}%)`;
    
    
    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);

// gallery

const gallerySlider = document.querySelector(".gallery-wrapper");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    gallerySlider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = gallerySlider.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - startX;
    gallerySlider.scrollLeft = startScrollLeft - x;
}

const dragStop = () => {
    isDragging = false;
    gallerySlider.classList.remove("dragging");
}

const slideNext = () => {
    gallerySlider.scrollLeft += gallerySlider.offsetWidth / 4;
}

const slidePrev = () => {
    gallerySlider.scrollLeft -= gallerySlider.offsetWidth / 4;
}

gallerySlider.addEventListener("mousedown", dragStart);
gallerySlider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);