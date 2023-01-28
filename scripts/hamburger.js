const wrapper = document.getElementById("hamburger-wrapper");
const navbarList = document.getElementById("nav-collapse");
wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  navbarList.classList.toggle('d-block');
});
