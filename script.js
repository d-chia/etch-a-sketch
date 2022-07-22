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
  this.classList.add("cellPainted");
};


//revert cells back upon click on "clear" button; toggle class

const clear = document.querySelector("#clear");

clear.addEventListener("click", clearCells);

function clearCells() {
  cellGrid.forEach((cell) => {
    cell.classList.remove("cellPainted");}
  )}