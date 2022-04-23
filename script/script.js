let container = document.querySelector(".container");
let containerWidth = 500;
let containerHeight = 500;
container.style.cssText = `width: ${containerWidth}px; height: ${containerHeight}px; border: 4px solid red;`

let rows = []
let squares = []
let newGrid
let squareWidth
let rowHeight

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

}

function addEvents(nodeElement) {

    function addRandomColor() {

        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        nodeElement.style.backgroundColor = `rgb(${red},${green},${blue})`

        let blackShaders = []

        for (let i = 1; i <= 10; i++) {

            blackShaders.push(() => {

                nodeElement.addEventListener("mouseover", () => {

                    red = Math.floor(Math.random() * 256)
                    green = Math.floor(Math.random() * 256)
                    blue = Math.floor(Math.random() * 256)
                    nodeElement.style.background = `linear-gradient(to bottom right, black ${i * 10}%, rgb(${red},${green},${blue}))`

                }, { once: true })

                nodeElement.addEventListener("mouseout", () => {

                    nodeElement.addEventListener("mouseover", blackShaders[i], { once: true })

                }, { once: true })

            })

        }

        blackShaders[0]()

    }

    nodeElement.addEventListener("mouseover", addRandomColor, { once: true })

}

function colorSquare() {

    let etchSquare = document.querySelectorAll(`div[class^=square]`)
    etchSquare.forEach(addEvents)

}

let button = document.createElement('button')
button.textContent = "Create Grid"
let containerParent = container.parentElement
containerParent.insertBefore(button, container)

button.addEventListener("click", () => {
    newGrid = Number(prompt("How many squares per side (limit is 100)?"))

    if (newGrid > 100) {

        alert(`invalid choice`)
        return

    }

    rowHeight = containerHeight / newGrid
    squareWidth = containerWidth / newGrid
    container.textContent = ""
    createRows()
    createSquares()
    colorSquare()
})