const createTable = () => {
    for (let i = 0; i < 76; i++) {
        let newCells = document.createElement("div")
        newCells.classList.add("cell")
        let cellValue = document.createElement("h3")
        cellValue.innerText = i+1
        const tabellone = document.getElementById("bingoTable")
        tabellone.appendChild(newCells)
        newCells.appendChild(cellValue)
    }
}
createTable()

const randomNumberGenerator = () => {
    let numberDrew = Math.floor((Math.random() * 76) + 1)
    return numberDrew
}

let arrayOfNumberDrew = []
const drawANumber = () => {
    let numberDrew = randomNumberGenerator() // Generate a random number
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
    let allCardsCells = document.querySelectorAll(".cardsCell")
    allCardsCells.forEach(cell => {
        if (Number(cell.innerText) === numberDrew) {
            cell.classList.add("drew")
        }  
    })
    if (arrayOfNumberDrew.length === 76) {
        alert("BINGO!!")
        const buttonDraw = document.getElementById("drawANumber")
        buttonDraw.innerText = "Restart"
        buttonDraw.addEventListener ("click", () => {
            location.reload()
        })
    }
    }
}

let numbersInCard = []
const cardsGenerator = () => {
    const generatorSpace = document.getElementById("selectCardsNumber")
    generatorSpace.style.display = "none"
    const numberOfCards = document.getElementById("cardsNumber").value
    const cardSpace = document.getElementById("cardsSpace")
    for (let i = 0; i < numberOfCards; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("cardsContainer")
        let newTitle = document.createElement("p")
        newTitle.innerText = "BINGO"
        cardSpace.appendChild(newDiv)
        newDiv.appendChild(newTitle)
        for ( let j = 0; j < 15; j++) {
            let numb = randomNumberGenerator()
            if (numbersInCard.includes(numb)) {
                j--
            } else {
                let newCell = document.createElement("div")
                newCell.classList.add("cardsCell")
                let newValue = document.createElement("h3")
                newValue.innerText = numb
                newDiv.appendChild(newCell)
                newCell.appendChild(newValue)
                numbersInCard.push(numb)
            }
        }
        numbersInCard = []
    }
}

const buttonCardGenerator = document.getElementById("cardsGenerator")
buttonCardGenerator.addEventListener("click", cardsGenerator)

const buttonToDraw = document.getElementById("drawANumber")
buttonToDraw.addEventListener("click", drawANumber)

