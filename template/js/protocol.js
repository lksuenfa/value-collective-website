let title = document.querySelectorAll(".option-title");
let details = document.querySelectorAll(".details");
let titleBkg = document.querySelectorAll(".option");
let arrow = document.querySelectorAll(".arrow");

// when clicking on title
title.forEach((button, index) => {
  let titleIndex = titleBkg[index];

  button.addEventListener("click", () => {
    // find index of title clicked
    let detailIndex = details[index];
    let arrowIndex = arrow[index];
    // toggle class for element from details array with same index
    detailIndex.classList.toggle("active");

    // see menu.js
    // toggle aria-expanded attribute
    toggleAria(titleIndex);

    // change colour to original grey
    titleIndex.classList.remove("active");

    arrowIndex.style.transform = "rotate(180deg)";

    if (detailIndex.classList.contains("active")) {
      arrowIndex.style.transform = "rotate(180deg)";
    } else arrowIndex.style.transform = "rotate(-45deg)";
  });

  // change bkg colour on hover
  button.addEventListener("mouseover", () => {
    titleIndex.classList.add("active");
  });

  button.addEventListener("mouseout", () => {
    titleIndex.classList.remove("active");
  });
});

arrow.forEach((button, index) => {
  let titleIndex = titleBkg[index];
  let detailIndex = details[index];

  button.addEventListener("click", () => {
    // find index of title clicked

    // toggle class for element from details array with same index
    detailIndex.classList.toggle("active");

    // see menu.js
    // toggle aria-expanded attribute
    toggleAria(titleIndex);

    // change colour to original grey
    titleIndex.classList.remove("active");

    button.style.transform = "rotate(180deg)";

    if (detailIndex.classList.contains("active")) {
      button.style.transform = "rotate(180deg)";
    } else button.style.transform = "rotate(-45deg)";
  });

  button.addEventListener("mouseenter", () => {
    if (detailIndex.classList.contains("active")) {
      button.style.transform = "rotate(180deg)";
    } else button.style.transform = "rotate(0deg)";
  });

  button.addEventListener("mouseleave", () => {
    if (!detailIndex.classList.contains("active")) {
      button.style.transform = "rotate(-45deg)";
    }
  });
});
