//declare global variables and modes

let drawingMode = "classic";

const container = document.querySelector(".container");


//create 16 divs inside container div

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
}

//add event listener to all cells for mouseenter

const cellGrid = document.querySelectorAll(".cell");

cellGrid.forEach((cell) => {
  cell.addEventListener("mouseenter", paintCell);
})


//declare function that changes class of "painted" cells 

function paintCell() {
  if (drawingMode == "classic") {
    this.style.backgroundColor = ("rgb(98, 98, 98)");
  } else if (drawingMode == "rainbow") {
    this.style.backgroundColor = randomColor();
  }
};


//revert cells back upon click on "clear" button; toggle class

const clear = document.querySelector("#clear");

clear.addEventListener("click", clearCells);

function clearCells() {
  const cellGrid = document.querySelectorAll(".cell");
  cellGrid.forEach((cell) => {
    cell.style.backgroundColor = ("ivory");}
  )}

 
//event listener for gridSize button triggers pop up/input to get new side length

const gridSize = document.querySelector("#gridSize");

gridSize.addEventListener("click", changeGridSize);

function changeGridSize() {
  let sizeInput = prompt("How many cells should the grid have in width and size? Please enter a number between 1-100");
  if (sizeInput > 100 || !Number.isInteger(+sizeInput)) {
    sizeInput = alert("Error! Please enter a valid number between 1-100");
  }
  drawNewGrid(sizeInput);
  setCellSize(sizeInput);
}


//use new grid size input to calculate new size for cells (divide container size)
//also add event listener to all new cells

function setCellSize(i) {
  let newCellSize = (600 / i);
  const cellGrid = document.querySelectorAll(".cell");
  cellGrid.forEach((cell) => {
    cell.style.height = (newCellSize + "px");
    cell.style.width = (newCellSize + "px");
    cell.addEventListener("mouseenter", paintCell);
  });
}

//clear old grid and use new grid size input to generate matching numbers of divs/cells

function drawNewGrid(i) {
  const cellGrid = document.querySelectorAll(".cell");
  cellGrid.forEach((cell) => cell.remove());
  for (let j = 0; j < i * i; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);}
}

//rainbow button activates rainbow mode

const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener("click", () => {drawingMode = "rainbow"});


//classic button activates classic mode

const classic = document.querySelector("#classic");

rainbow.addEventListener("click", () => {drawingMode = "classic"});

//generate random color as rgb value

function randomColor() {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`
}