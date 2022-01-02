function randomGreenColor() {
  const greenColors = ["#C5E38B", "#7AC96F", "#219A3B", "#186227"];
  return greenColors[Math.floor(Math.random() * greenColors.length)];
}

function generateBoxes() {
  document.querySelector(".container").innerHTML = "";
  for (let i = 0; i <= 630; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = randomGreenColor();
    document.querySelector(".container").appendChild(box);
  }
  document.querySelector(".container").style.backgroundColor = "#e9edf0";
  document.querySelector(".container").style.border = "2px solid #fff";
}

const btn = document.querySelector("button");

btn.addEventListener("click", generateBoxes);
