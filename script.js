function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}