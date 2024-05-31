let container = document.querySelector(".container");
let noBoxes = 280;
let color = [
  "red",
  "green",
  "yellow",
  "pink",
  "purple",
  "voilvet",
  "grey",
  "lightgreen",
  "lightblue",
  "golden",
  "aqua",
  "blue",
  "skyblue",
  "darkblue",
  "darkgreen",
];

function randomColor(color) {
  return color[Math.floor(Math.random() * color.length)]
}


function setColor (element){
  element.style.backgroundColor = randomColor(color);
}
function unSetColor (element){
  element.style.backgroundColor = "#1D1D1D";
  element.style.boxShadow = "0 0 2px rgba(0,0,0,0.3)";
}


for(let i = 0; i < noBoxes; i++){
  let box = document.createElement("div");
  box.classList.add("boxes");
  box.addEventListener("mouseover",()=>{
    setColor(box);
  })
  box.addEventListener("mouseout",()=>{
    unSetColor(box);
  })
  container.appendChild(box);
}
