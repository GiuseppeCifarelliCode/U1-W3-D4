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

let arrayOfNumberDrew = []

const drawANumber = () => {
    let numberDrew = Math.floor((Math.random() * 76) + 1) // Generate a random number
    if(arrayOfNumberDrew.includes(numberDrew)) { // If the number generated is in the array
        drawANumber()                            // generate another number
    } else {                                     // else add it in the number drew list and select its cell
        arrayOfNumberDrew.push(numberDrew)
    let allCells = document.querySelectorAll(".cell")
    allCells.forEach(cell => {
        if (Number(cell.innerText) === numberDrew) {
            cell.classList.add("drew")
        }    
    })
    if (arrayOfNumberDrew.length === 76) {
        alert("BINGO")
    }
    }
}

const buttonToDraw = document.getElementById("drawANumber")
buttonToDraw.addEventListener("click", drawANumber)

