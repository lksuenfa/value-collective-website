let menuContainer = document.getElementById("aboutMenu");
let openMenu = document.getElementById("openBtn_about");

openMenu.addEventListener("click", () => {
  toggleAboutMenu();
});

openMenu.addEventListener("mouseenter", () => {
  toggleAboutMenu();
});

menuContainer.addEventListener("mouseleave", () => {
  let timer = setTimeout(toggleAboutMenu, 500);
});

function toggleAboutMenu() {
  menuContainer.classList.toggle("active");
  toggleAria(openMenu);
}
// toggle Aria attribute
function toggleAria(btn) {
  let btn_attribute = btn.getAttribute("aria-expanded");
  if (btn_attribute == "true") {
    btn_attribute = "false";
  } else {
    btn_attribute = "true";
  }

  btn.setAttribute("aria-expanded", btn_attribute);
}
