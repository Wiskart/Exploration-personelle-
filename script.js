document.querySelectorAll(".page-nav a").forEach((link) => {
  link.addEventListener("click", () => document.body.classList.add("is-navigating"));
});
window.addEventListener("pageshow", () => document.body.classList.remove("is-navigating"));