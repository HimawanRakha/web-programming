document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".carousel-container")) {
    const slides = document.querySelector(".carousel-slides");
    const slideImages = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 0;
    const slideCount = slideImages.length;
    let slideInterval;
    function createDots() {
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = i;
        dot.addEventListener("click", () => {
          showSlide(i);
          resetInterval();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    function showSlide(index) {
      if (index >= slideCount) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = slideCount - 1;
      } else {
        currentIndex = index;
      }

      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startCarousel() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startCarousel();
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    createDots();
    showSlide(currentIndex);

    startCarousel();
  }
});
