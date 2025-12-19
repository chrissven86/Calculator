const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");

let currentValue = "0";
let previousValue = null;
let operator = null;

function updateDisplay() {
    display.value = currentValue;
}

updateDisplay();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value >= "0" && value <= "9") {
            if (currentValue === "0") {
                currentValue = value;
            } else {
                currentValue += value;
            }
            updateDisplay();
        }
    });
});

clearBtn.addEventListener("click", () => {
    currentValue = "0";
    previousValue = null;
    operator = null;
    updateDisplay();
})