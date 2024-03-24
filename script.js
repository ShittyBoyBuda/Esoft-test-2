function validBraces(braces) {
    while(/\(\)|\[\]|\{\}/g.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
    }
    return !braces.length;
}

function checkBraces() {
    const input = document.getElementById("bracesInput").value;
    const isValid = validBraces(input);
    const resultElement = document.getElementById("result");
    
    if (isValid) {
        resultElement.textContent = "Скобки валидны (true)";
    } else {
        resultElement.textContent = "Скобки не валидны (false)";
    }
}
