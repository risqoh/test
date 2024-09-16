// navbar hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// slider hero
// slider
const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// atuo Play
let runAutoPlay = setTimeout(() => {
  next.click();
}, 5000);

// click Arrows
next.addEventListener("click", () => {
  initSlider("next");
});

prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 1100);

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click();
  }, 5000);
};

// slider about
const slide = document.querySelector(".slide");
const slideList = document.querySelector(".slide-list");
const sel = document.querySelector("#sel");
const seb = document.querySelector("#seb");

let runAuto = setTimeout(() => {
  sel.click();
}, 2000);

sel.addEventListener("click", () => {
  initSlide("sel");
});

seb.addEventListener("click", () => {
  initSlide("seb");
});

const initSlide = (type) => {
  const slideItems = slideList.querySelectorAll(".slide-item");

  if (type === "sel") {
    slideList.appendChild(slideItems[0]);
    slide.classList.add("sel");
  } else {
    const lastItemPosition = slideItems.length - 1;
    slideList.prepend(slideItems[lastItemPosition]);
    slide.classList.add("seb");
  }

  setTimeout(() => {
    slide.classList.remove("sel");
    slide.classList.remove("seb");
  }, 1500);

  clearTimeout(runAuto);
  runAuto = setTimeout(() => {
    sel.click();
  }, 3000);
};
