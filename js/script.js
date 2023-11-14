//buat toggle active
const navbarnav = document.querySelector(".navbar-nav");
//ketika ham menu di klik
document.querySelector("#ham-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
//klik di luar menu untuk keluar
const hamburger = document.querySelector("#ham-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

//bar stats
const spans = document.querySelectorAll(".progress-bar span");
spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});
