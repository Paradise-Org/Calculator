let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (display.value !== "" && !"+-*/".includes(lastChar)) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
