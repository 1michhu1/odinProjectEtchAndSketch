function makeGrid(numRowBoxes, container) {
    container.style.gridTemplateColumns = `repeat(${numRowBoxes}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numRowBoxes}, 1fr)`

    for (let i = 0; i < numRowBoxes**2; i++) {
        const cell = document.createElement("div")
        container.appendChild(cell)
    }
}

function changeCellColor() {
    this.style.background = "black" 
    
}

const container = document.querySelector("#grid-Container")
makeGrid(16, container)
const cells = document.querySelectorAll("#grid-Container > div")
console.log(cells)

cells.forEach(cell => cell.addEventListener("mouseover", changeCellColor))