const slides = document.querySelectorAll(".slide");
const thumbs = document.querySelectorAll(".thumb");

let index = 0;

/* SHOW SLIDE */
function showSlide(i) {
  slides.forEach((s) => s.classList.remove("active"));
  thumbs.forEach((t) => t.classList.remove("active"));

  slides[i].classList.add("active");
  thumbs[i].classList.add("active");
}

/* NEXT / PREV */
document.querySelector(".right").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".left").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

/* THUMB CLICK */
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

/* AUTO CAROUSEL */
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

// frequently asked question

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq__question");

  question.addEventListener("click", () => {
    // close others (optional for cleaner UX)
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    // toggle current
    item.classList.toggle("active");
  });
});

(function () {
  const slider = document.getElementById("vaSlider");
  const nextBtn = document.getElementById("vaNext");
  const prevBtn = document.getElementById("vaPrev");

  // Calculate move distance dynamically based on card width + gap
  const getMoveDistance = () => {
    const card = slider.querySelector(".va-card");
    const style = window.getComputedStyle(slider);
    const gap = parseInt(style.getPropertyValue("gap"));
    return card.offsetWidth + gap;
  };

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: getMoveDistance(),
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -getMoveDistance(),
      behavior: "smooth",
    });
  });

  // Optional: Update button visibility based on scroll position
  slider.addEventListener("scroll", () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    prevBtn.style.opacity = slider.scrollLeft <= 5 ? "0.3" : "1";
    nextBtn.style.opacity = slider.scrollLeft >= maxScroll - 5 ? "0.3" : "1";
  });

  // Initialize button state
  prevBtn.style.opacity = "0.3";
})();

function scrollTst(direction) {
  const track = document.getElementById("tstTrack");
  const cardWidth = track.querySelector(".tst-card").offsetWidth;
  const gap = 24; // matches the CSS gap

  // Calculate total scroll distance for one card
  const scrollAmount = (cardWidth + gap) * direction;

  track.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

// Smooth scroll to contact section when Contact Us button is clicked
document.querySelector('.btn-primary').addEventListener('click', function() {
  const contactSection = document.querySelector('.rdc-cta-section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Smooth scroll to About Us section when About Us link is clicked
document.querySelectorAll('nav a')[0].addEventListener('click', function(e) {
  e.preventDefault();
  const aboutSection = document.querySelector('.features');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Dropdown toggle for Products
document.querySelector('.dropdown-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const content = this.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent) {
      dropdownContent.style.display = 'none';
    }
  }
});
