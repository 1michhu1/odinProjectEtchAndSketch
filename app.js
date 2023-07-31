function makeGrid(numRowBoxes, pixelWidth) {
    const grid = document.createElement("div")
    boxSize = pixelWidth/numRowBoxes + "px"

    for (let i = 0; i < numRowBoxes; i++) {
        row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < numRowBoxes; j++) {
            box = document.createElement("div")
            box.classList.add("square")
            
            box.style.height = boxSize
            box.style.width = boxSize
            // console.log(boxSize)
            row.appendChild(box)
            // box.textContent = "testing"
        }

        grid.appendChild(row)
    }

    return grid
}
const container = document.querySelector("#grid-Container")
console.log(container.offsetWidth)
const grid = makeGrid(16, container.offsetWidth)
container.appendChild(grid)