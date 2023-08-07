let isMouseDown = false
let isMouseEnter = false

function makeGrid(numRowBoxes, container) {
    container.style.gridTemplateColumns = `repeat(${numRowBoxes}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numRowBoxes}, 1fr)`

    for (let i = 0; i < numRowBoxes**2; i++) {
        const cell = document.createElement("div")
        container.appendChild(cell)
    }
}

function changeCellColor() {
    console.log("mouseENTER, isMouseDown is ", isMouseDown)
    if (isMouseDown) {
        this.style.background = "black" 
        console.log("colour change ran")
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

    cells.forEach(cell => cell.addEventListener("mouseup", () => {isMouseDown = false; console.log("mouseUP ran, isMousedown: ", isMouseDown) }))
    cells.forEach(cell => cell.addEventListener("mousedown", () => {isMouseDown = true; console.log("mouseDOWN ran, isMousedown: ", isMouseDown) }))
    cells.forEach(cell => cell.addEventListener("mouseenter", changeCellColor))
    
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