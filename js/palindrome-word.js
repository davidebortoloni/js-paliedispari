var checkButton = document.getElementById("check");
var resetButton = document.getElementById("reset");
var inputField = document.getElementById("word");
var resultDisplay = document.getElementById("result");

checkButton.addEventListener("click", function () {
    var word = inputField.value;
    var result = "La parola inserita non è palindroma";
    if (allLetter(word)) {
        if (isPalindrome(word)) {
            result = "La parola inserita è palindroma";
        }
        resultDisplay.innerHTML = result;
        checkButton.classList.add("d-none");
        resetButton.classList.remove("d-none");
    }
})
resetButton.addEventListener("click", function () {
    checkButton.classList.remove("d-none");
    resetButton.classList.add("d-none");
    inputField.value = "";
    resultDisplay.innerHTML = "";
})

function isPalindrome(str) {
    var strSplitted = str.split("");
    var strReverse = [];
    var c = 0;
    for (var i = strSplitted.length - 1; i >= 0; i--) {
        strReverse[c] = strSplitted[i];
        c++;
    }
    var reverseWord = strReverse.join("");
    if (reverseWord == str) {
        return true;
    }
    return false;
}
function allLetter(inputTxt) {
    var letters = /^[a-zA-Z\s]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        alert("Inserisci una parola valida (senza numeri e caratteri speciali)");
        return false;
    }
}