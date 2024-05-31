let container = document.querySelector(".container");
let no_of_squares = 224;
let colors = [
  "green",
  "blue",
  "red",
  "pink",
  "purple",
  "orange",
  "orangered",
  "voilvet",
  "lightgreen",
  "lightblue",
  "skyble",
  "white",
  "",
];

function randcomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(el) {
  el.style.backgroundColor = randcomColor(colors);
}
function unSetColor(el) {
  el.style.backgroundColor = "#1D1D1D";
  el.style.boxShadow = "0 0 2px rgba(0,0,0,0.3)";
}


for (let i = 0; i < no_of_squares; i++) {
  const square = document.createElement("div");
  square.classList.add("boxes");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseout", () => {
    unSetColor(square);
  });
  container.appendChild(square);
}
