function makeGrid(numRowBoxes, pixelWidth) {
    const grid = document.createElement("div")

    for (let i = 0; i < numRowBoxes; i++) {
        row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < numRowBoxes; j++) {
            box = document.createElement("div")
            box.classList.add("square")
            row.appendChild(box)
            console.log(`j is ${j}`)
        }

        grid.appendChild(row)
    }

    return grid
}

const grid = makeGrid(8, 1000)
const container = document.querySelector("#grid-Container")
console.log(grid)
container.appendChild(grid)