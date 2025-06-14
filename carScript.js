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

// gallery 1
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
    gallerySlider.scrollLeft += gallerySlider.offsetWidth /2;
}

const slidePrev = () => {
    gallerySlider.scrollLeft -= gallerySlider.offsetWidth / 2;
}

gallerySlider.addEventListener("mousedown", dragStart);
gallerySlider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

// gallery 2
const gallerySliderSecond = document.querySelector(".gallery-wrapper-second");
const prevButtonSecond = document.querySelector(".prev-second");
const nextButtonSecond = document.querySelector(".next-second");

let isDraggingSecond = false, startXSecond, startScrollLeftSecond;

const dragStartSecond = (e) => {
    isDraggingSecond = true;
    gallerySliderSecond.classList.add("dragging");
    startXSecond = e.pageX;
    startScrollLeftSecond = gallerySliderSecond.scrollLeft;
}

const draggingSecond = (e) => {
    if (!isDraggingSecond) return;
    e.preventDefault();
    const x = e.pageX - startXSecond;
    gallerySliderSecond.scrollLeft = startScrollLeftSecond - x;
}

const dragStopSecond = () => {
    isDraggingSecond = false;
    gallerySliderSecond.classList.remove("dragging");
}

const slideNextSecond = () => {
    gallerySliderSecond.scrollLeft += gallerySliderSecond.offsetWidth / 2;
}

const slidePrevSecond = () => {
    gallerySliderSecond.scrollLeft -= gallerySliderSecond.offsetWidth / 2;
}

gallerySliderSecond.addEventListener("mousedown", dragStartSecond);
gallerySliderSecond.addEventListener("mousemove", draggingSecond);
document.addEventListener("mouseup", dragStopSecond);

nextButtonSecond.addEventListener("click", slideNextSecond);
prevButtonSecond.addEventListener("click", slidePrevSecond);

document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'loginPage.html';
});