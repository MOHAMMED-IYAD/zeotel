// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 500 ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
});

// AOS init
AOS.init();

// Slick carousel
$(document).ready(function () {
  $(".card-carousel").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    infinite: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
});

// Counter animation
const counters = document.querySelectorAll(".counter");
const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let current = 0;
  const update = () => {
    const increment = target / 200;
    if (current < target) {
      current += increment;
      counter.innerText = Math.ceil(current);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach((counter) => observer.observe(counter));
