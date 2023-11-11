

//initialization
const challengeDesc = new Map();

challengeDesc.set("sumPos", "Takes an array and sums all postive values together");
challengeDesc.set("palendrome", "Takes input and checks if palendrome");
challengeDesc.set("unique","Takes an array and removes duplicated values")

updateDesc();


//submit overwrite
god("mainForm").addEventListener("submit", function btnPressed(event) {
    event.preventDefault()
    clearOutput()
    performAction(god("challengeSelector").value)
    selectInput()
    }
)

//main action call
function performAction(action){
    if (god("txtInput").value.trim() === "") {
        printOutput("No input given")
        return
    }

    printOutput("Challenge : " + god("challengeSelector").value)
    printOutput("Input : " + god("txtInput").value)

    let finalOutput = ""
    let input = god("txtInput").value

    switch (action){
        default:
            printOutput("Challenge " + action + " is not yet implemented!")
            return;
        case "sumPos":
            finalOutput = sumPositiveNumbers(input.split(","))
            break;
        case "palendrome":
            finalOutput = isPalindrome(input)
            break;
        case "unique":
            finalOutput = removeDuplicates(input.split(","))
            break;
    }

    printOutput("Final : " + finalOutput)
}

//utility functions
function god(elementId){
    /* get on document */
    return document.getElementById(elementId)
}

function printOutput(toPrint){
    const newItem = document.createElement("li")
    newItem.textContent = toPrint
    god("outputList").appendChild(newItem)
}

function clearOutput(){
    const ol = god("outputList")
    while(ol.firstChild) ol.removeChild(ol.lastChild)
}

function selectInput(){
   god("txtInput").select()
}

function updateDesc(){
    god("desc").textContent = challengeDesc.get(god("challengeSelector").value)
}

function selectionChanged(){
    updateDesc()
    selectInput()
}



//Challenge 3
function removeDuplicates(inputArray = []){
    let outputArray = []

    inputArray.forEach(function(aElement) {
        if(outputArray.includes(aElement)) {
            printOutput("Removed : " + aElement)
            return
        }
        outputArray.push(aElement)
        printOutput("Added : " + aElement)
    })

    return outputArray
}

//Challenge 2
function isPalindrome(word = "") {
    let output = true
    let modifiedWord = word.replaceAll(/\s/g, '').toLowerCase()

    for (let i = 0, j = modifiedWord.length - 1; i < j / 2; i++) {
        printOutput("i = " + i + " " + modifiedWord[i] + " / j = " + [j - i] + " " + modifiedWord[j -i])
        if(modifiedWord[i] != modifiedWord[j-i]) {
            output = false
            break
        }
    }

    return output

}

//Challenge 1
function sumPositiveNumbers(numbersArray = []) {

    let output = 0;
    if(numbersArray.length < 1) {return output}

    numbersArray.forEach(function(numArrayElement) {
        if(isNaN(numArrayElement)) {
            printOutput("Value NaN : " + numArrayElement)
            return //would be a continue if !foreach loop
        }
        if (numArrayElement >= 0) {
            output += parseInt(numArrayElement)
            printOutput("Positive value : " + numArrayElement)
        } else printOutput("Negative value: " + numArrayElement)
    })

    return output
    // Return the sum of positive numbers
}

