function makeGrid(numRowBoxes, container) {
    container.style.gridTemplateColumns = `repeat(${numRowBoxes}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numRowBoxes}, 1fr)`

    for (let i = 0; i < numRowBoxes**2; i++) {
        const cell = document.createElement("div")
        container.appendChild(cell)
    }
}

function changeCellColor(cell, color) {
    cell.style.backgroundColor = color
}

const container = document.querySelector("#grid-Container")
makeGrid(16, container)
