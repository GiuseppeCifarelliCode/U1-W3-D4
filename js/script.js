const createTable = () => {
    for (let i = 0; i < 76; i++) {
        let newCells = document.createElement("div")
        newCells.classList.add("cell")
        let cellValue = document.createElement("h3")
        cellValue.innerText = i+1
        const tabellone = document.getElementById("tabellone")
        tabellone.appendChild(newCells)
        newCells.appendChild(cellValue)
    }
}
createTable()

let arrayOfNumberDrew= []
const buttonToDraw = document.getElementById("drawANumber")
buttonToDraw.addEventListener("click", () => {
    let numberDrew = Math.floor((Math.random() * 76) + 1) // Generate a random number

    let allCells = document.querySelectorAll(".cell")
    allCells.forEach(cell => {
        if (Number(cell.innerText) === numberDrew) {
            cell.classList.add("drew")
        }    
    })
})

// Ho generato un array di numeri da pescare
// Devo pescare da questo array