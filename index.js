document.addEventListener("DOMContentLoaded", () => {

    // ---- Content boxes ----
    const resultBox = document.getElementById("resultBox")

    // ---- Buttons ----

    // Operators
    const clearButton = document.getElementById("clearButton")
    const divideButton = document.getElementById("divideButton")
    const multiplyButton = document.getElementById("multiplyButton")
    const subtractButton = document.getElementById("subtractButton")
    const addButton = document.getElementById("addButton")
    const equalsButton = document.getElementById("equalsButton")

    // Numbers
    const sevenButton = document.getElementById("sevenButton")
    const eightButton = document.getElementById("eightButton")
    const nineButton = document.getElementById("nineButton")
    const fourButton = document.getElementById("fourButton")
    const fiveButton = document.getElementById("fiveButton")
    const sixButton = document.getElementById("sixButton")
    const oneButton = document.getElementById("oneButton")
    const twoButton = document.getElementById("twoButton")
    const threeButton = document.getElementById("threeButton")
    const zeroButton = document.getElementById("zeroButton")

    let currentInput = ""
    let operator = ""
    let firstOperand = null

    // Function to update the result box
    const updateResultBox = (value) => {
        resultBox.value = value
    }

    // Event listeners for number buttons
    const numberButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton]
    numberButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentInput += index.toString()
            updateResultBox(currentInput)
        })
    })

    // Event listeners for operator buttons
    addButton.addEventListener("click", () => {
        operator = "+"
        firstOperand = parseFloat(currentInput)
        currentInput += " + "
        updateResultBox(currentInput)
    })

    subtractButton.addEventListener("click", () => {
        operator = "-"
        firstOperand = parseFloat(currentInput)
        currentInput += " - "
        updateResultBox(currentInput)
    })

    multiplyButton.addEventListener("click", () => {
        operator = "×"
        firstOperand = parseFloat(currentInput)
        currentInput += " × "
        updateResultBox(currentInput)
    })

    divideButton.addEventListener("click", () => {
        operator = "÷"
        firstOperand = parseFloat(currentInput)
        currentInput += " ÷ "
        updateResultBox(currentInput)
    })

    equalsButton.addEventListener("click", () => {
        if (firstOperand !== null && operator !== "" && currentInput !== "") {
            const secondOperand = parseFloat(currentInput.split(" ").pop())
            let result
            switch (operator) {
                case "+":
                    result = firstOperand + secondOperand
                    break
                case "-":
                    result = firstOperand - secondOperand
                    break
                case "×":
                    result = firstOperand * secondOperand
                    break
                case "÷":
                    result = firstOperand / secondOperand
                    break
            }
            currentInput += " = " + result
            updateResultBox(currentInput)
            currentInput = result.toString()
            firstOperand = null
            operator = ""
        }
    })

    clearButton.addEventListener("click", () => {
        currentInput = ""
        firstOperand = null
        operator = ""
        updateResultBox("")
    })
})