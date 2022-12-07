export default function initMenuMobile() {
  const btnMenuMobile = document.querySelector("[data-menu]"),
    headerNav = document.querySelector(".header-nav-container");

  function openMenu(event) {
    const target = event.target;
    target.classList.toggle("active");
    headerNav.classList.toggle("active");
    if (target.classList.contains("active")) {
      target.innerText = "Fechar";
    } else {
      target.innerText = "Menu";
    }
  }

  btnMenuMobile.addEventListener("click", openMenu);
}
