document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextButtons = document.querySelectorAll(".next");
  let currentSlide = 0;

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    });
  });

  // Initialize the first slide
  slides[currentSlide].classList.add("active");
});
