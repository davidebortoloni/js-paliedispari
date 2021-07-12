var evenOddSection = document.getElementById("even-odd-section");
var evenOddButton = document.getElementById("even-odd-button");
var numberSection = document.getElementById("number-section");
var inputNumber = document.getElementById("number");
var playButton = document.getElementById("play-button");
var resultElement = document.getElementById("result");
var resetButton = document.getElementById("reset");
var evenOdd;

evenOddButton.addEventListener("click", function () {
    evenOdd = displayRadioValue();
    evenOddSection.classList.add("d-none");
    numberSection.classList.remove("d-none");
})
playButton.addEventListener("click", function () {
    var userN = parseInt(inputNumber.value);
    if (!isNaN(userN) && userN >= 1 && userN <= 5) {
        var pcN = randomNumberTo5();
        var result;
        if (evenOdd == "even") {
            result = "La tua scelta: pari";
        } else {
            result = "La tua scelta: dispari";
        }
        result += "<br>Il tuo numero: " + userN;
        result += "<br>Il numero del pc: " + pcN;
        if (evenOrOdd(userN, pcN) == evenOdd) {
            result += "<h4>Hai vinto</h4>";
        } else {
            result += "<h4>Hai perso</h4>";
        }
        resultElement.innerHTML = result;
        numberSection.classList.add("d-none");
        resetButton.classList.remove("d-none");
    } else {
        alert("Inserire un numero compreso tra 1 e 5");
    }
})
resetButton.addEventListener("click", function () {
    resultElement.innerHTML = "";
    inputNumber.value = "1";
    evenOddSection.classList.remove("d-none");
    resetButton.classList.add("d-none");
})

function displayRadioValue() {
    var ele = document.getElementsByName('even-odd');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            return ele[i].value;
        }
    }
}
function randomNumberTo5() {
    randomN = Math.floor(Math.random() * 5) + 1;
    return randomN;
}
function evenOrOdd(n1, n2) {
    var sum = n1 + n2;
    var matchResult = "odd";
    if (sum % 2 == 0) {
        matchResult = "even";
    }
    return matchResult;
}