const header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
}

let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++) {
  dogNames[i].style.textAlign = "left";
}

const myFooter = document.querySelector(".footer");
myFooter.style.backgroundColor = "blue";

const dogImage = document.querySelectorAll("img");
for (let i = 0; i < dogImage.length; i++) {
  dogImage[i].style.transform = "rotate(180deg)";
}
// Select some elements...
