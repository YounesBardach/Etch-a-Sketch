let container = document.querySelector(".container");
container.style.cssText = "width: 400px; height: auto;"
let rows = []
for (let i = 1; i <= 16; i++) {
    rows[i] = document.createElement("div")
    container.appendChild(rows[i])
    rows[i].classList.add(`row${i}`)
    rows[i].style.cssText = "border-style: solid; display: flex;"
}

let squares = []

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let row = document.querySelector(`.row${j}`)
        squares[j] = document.createElement("div")
        row.appendChild(squares[j])
        squares[j].classList.add(`square${i}Row${j}`)
        squares[j].style.cssText = "border-style: solid; width: 25px; height: 25px;"
    }
}


