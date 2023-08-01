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

function deleteGrid(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }   
}

function getValidGridSize() {
    gridLength = +prompt("Enter a grid length (integer < 100)")
    while (!(Number.isInteger(gridLength)) || gridLength > 100 || gridLength < 0) {
        alert("Please enter a valid number")
        gridLength = +prompt("Enter a grid length (integer < 100)")
        
    }

    return gridLength
}

function generateNewGrid() {
    gridLength = getValidGridSize()
    if (gridLength != 0) {
        deleteGrid(container)
        makeGrid(gridLength, container)
        cells = document.querySelectorAll("#grid-Container > div")
        cells.forEach(cell => cell.addEventListener("mouseover", changeCellColor))
    }

}

const container = document.querySelector("#grid-Container")
makeGrid(3, container)
cells = document.querySelectorAll("#grid-Container > div")
cells.forEach(cell => cell.addEventListener("mouseover", changeCellColor))

const newGridBtn = document.querySelector("#newGrid") 
newGridBtn.addEventListener("click", generateNewGrid)