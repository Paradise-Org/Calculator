let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (display.value !== "" && !"+-*/^.".includes(lastChar)) {
        display.value += operator;
    }
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value
            .replace(/√/g, "Math.sqrt")
            .replace(/log/g, "Math.log10")
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan")
            .replace(/\^/g, "**");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Allow keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        display.value += key;
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
