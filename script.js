const container = document.querySelector(".container");
const cell = document.createElement("div");
cell.classList.add("cell");

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
}