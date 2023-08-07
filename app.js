let isMouseDown = false
let isMouseEnter = false
let isErase = false

function makeGrid(numRowBoxes, container) {
    container.style.gridTemplateColumns = `repeat(${numRowBoxes}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numRowBoxes}, 1fr)`

    for (let i = 0; i < numRowBoxes**2; i++) {
        const cell = document.createElement("div")
        container.appendChild(cell)
    }
}

function changeCellColor(e) {
    if (isMouseDown) {
        if (isErase) {
            e.target.style.background = "white" 
        } else {
            e.target.style.background = "black" 

        }
    }
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

function setCellListeners(cells) {
    cells.forEach(cell => cell.addEventListener("dragstart",(event)=> event.preventDefault() ))
    cells.forEach(cell => cell.addEventListener("drop",(event) => event.preventDefault() ))

    cells.forEach(cell => cell.addEventListener("mousedown", (e) => {isMouseDown = true; changeCellColor(e)}))
    cells.forEach(cell => cell.addEventListener("mouseenter", changeCellColor))
    cells.forEach(cell => cell.addEventListener("mouseup", () => {isMouseDown = false}))


}

function generateNewGrid() {
    gridLength = getValidGridSize()
    if (gridLength != 0) {
        deleteGrid(container)
        makeGrid(gridLength, container)
        cells = document.querySelectorAll("#grid-Container > div")
        setCellListeners(cells)
    }

}

function addListenersToCells(cells) {
    for (const cell in cells) {
        cell.addEventListener("mouseover", changeCellColor)
    }
}

const container = document.querySelector("#grid-Container")
makeGrid(6, container)

cells = document.querySelectorAll("#grid-Container > div")
setCellListeners(cells)

const newGridBtn = document.querySelector("#newGrid") 
newGridBtn.addEventListener("click", generateNewGrid)

const eraseBtn = document.querySelector("#erase")
eraseBtn.addEventListener("click", () => isErase = true)

const drawBtn = document.querySelector("#draw")
drawBtn.addEventListener("click", () => isErase = false)