let openBtn = document.querySelector("#openBtn");
let menu = document.querySelector("#menuMobile");
let closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", () => {
    menu.style.width = "100%";
})

closeBtn.addEventListener("click", () => {
    menu.style.width = "0%";
});
