let activeBar = document.querySelector("#bkg-active");
let option1 = document.querySelector("#option-1");
let option2 = document.querySelector("#option-2");
let option3 = document.querySelector("#option-3");
let dist = {
  origin: "0px",
  left: "150px",
  left_far: "300px",
  right: "-150px",
  right_far: "-300px",
};

const onDesktop = window.matchMedia("(min-width: 992px)");

if (onDesktop.matches) {
  // if on option1 page

  if (option1.classList.contains("active")) {
    // translate active bar
    toggleSwitch(dist.origin, dist.left, dist.left_far);

    // return active bar to origin
    option2.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
    option3.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
  } else if (option2.classList.contains("active")) {
    activeBar.style.marginLeft = "150px";
    toggleSwitch(dist.right, dist.origin, dist.left);

    // return active bar to origin
    option1.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
    option3.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
  } else if (option3.classList.contains("active")) {
    activeBar.style.marginLeft = "300px";
    toggleSwitch(dist.right_far, dist.right, dist.origin);

    // return active bar to origin
    option1.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
    option2.addEventListener("mouseleave", () => {
      returnToOrigin();
    });
  }
}

// translate active bar over a certain distance if mouseover
function toggleSwitch(dist1, dist2, dist3) {
  option1.addEventListener("mouseover", () => {
    translate(dist1);
  });

  option2.addEventListener("mouseover", () => {
    translate(dist2);
  });

  option3.addEventListener("mouseover", () => {
    translate(dist3);
  });
}

function translate(distance) {
  activeBar.classList.add("active");
  activeBar.style.transform = "translate(" + distance + ")";
  // activeBar.style.backgroundColor = "var(--red)";
  option1.style.backgroundColor = "rgb(0,0,0,0)";
  option2.style.backgroundColor = "rgb(0,0,0,0)";
  option3.style.backgroundColor = "rgb(0,0,0,0)";
}

function returnToOrigin() {
  activeBar.style.transform = "translate(0px)";
}
