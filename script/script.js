const container = document.querySelector(".container");
const containerWidth = 500;
const containerHeight = 500;
container.style.cssText = `width: ${containerWidth}px; height: ${containerHeight}px; border: 4px solid red;`
const button = document.createElement('button')
button.textContent = "Create Grid"
const containerParent = container.parentElement
containerParent.insertBefore(button, container)

let rows = []
let squares = []
let newGrid
let squareWidth
let rowHeight

window.onload = () => {

    newGrid = 10
    createGrid()
    colorSquare()

}

function createGrid() {

    container.textContent = ""
    rowHeight = containerHeight / newGrid
    squareWidth = containerWidth / newGrid
    createRows()
    createSquares()
}

button.addEventListener("click", () => {

    newGrid = Number(prompt("How many squares per side (limit is 100)?"))

    if (newGrid > 100) {

        alert(`invalid choice`)
        return

    }

    createGrid()
    colorSquare()

})

function createRows() {

    for (let i = 1; i <= newGrid; i++) {

        rows[i] = document.createElement("div")
        container.appendChild(rows[i])
        rows[i].classList.add(`row${i}`)
        rows[i].style.cssText = `display: flex; height: ${rowHeight}px; width: ${containerWidth}px;`

    }

}

function createSquares() {

    for (let i = 1; i <= newGrid; i++) {

        for (let j = 1; j <= newGrid; j++) {

            let row = document.querySelector(`.row${j}`)
            squares[j] = document.createElement("div")
            row.appendChild(squares[j])
            squares[j].classList.add(`square${i}row${j}`)
            squares[j].style.cssText = `width: ${squareWidth}px; height: ${rowHeight}px;`

        }

    }

    const etchSquare = document.querySelectorAll(`div[class^=square]`)
    etchSquare.forEach((nodeElement) => nodeElement.style.filter = `brightness(${110}%)`)

}

function colorSquare() {

    const etchSquare = document.querySelectorAll(`div[class^=square]`)
    etchSquare.forEach((nodeElement) => {

        nodeElement.addEventListener("mouseover", function colorShade(e) {

            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
            nodeElement.style.backgroundColor = `rgb(${red},${green},${blue})`
            let x = Number(e.target.style.filter.match(/\d\d\d?/).shift())
            x = x - 10
            e.target.style.filter = `brightness(${x}%)`
            if (x == 0) { nodeElement.removeEventListener("mouseover", colorShade) }
            console.log(x)
        })

    })

}