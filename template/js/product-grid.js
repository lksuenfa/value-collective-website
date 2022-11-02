let colours = ["red", "blue", "yellow", "green"];
let product = document.querySelectorAll(".product");

// change background colour to random when hovering
product.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let randomNum = Math.floor(Math.random() * 4);
    let randomColour = colours[randomNum];
    item.style.backgroundColor = "var(--" + randomColour + ")";
  });

  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "rgba(0,0,0,0)";
  });
});
