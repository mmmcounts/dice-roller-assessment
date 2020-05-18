const total = document.querySelector("#Total");
const rollButton = document.querySelector("#Roll");
const dieRolls = []
const numberOfDiceInput = document.querySelector("#Dice")
const showButton = document.querySelector("#Dierolls")
const allRolls = document.querySelector("#All-Rolls")


rollButton.addEventListener("click", function () {
    let numberOfDiceRolled = numberOfDiceInput.value
    console.log(numberOfDiceRolled)
    let counter = 0
    let sum = 0
    while (counter < numberOfDiceRolled) {
        counter += 1
        //console.log(counter)
        let rollValue = Math.floor(Math.random() * 6 + 1)
        console.log(rollValue)
        dieRolls.push(rollValue)
        sum += rollValue
    }
    total.innerHTML = sum

    console.log(dieRolls)
})



showButton.addEventListener("click", function () {
    let i = 0
    while (i < dieRolls.length) {
        let numberRolled = dieRolls[i]
        i++
        const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        allRolls.innerHTML += newDiceString;
    }
})