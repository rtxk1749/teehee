// Mapping the codes
const codes = {
    "game": "task1.html",
    "pink": "task2.html",
    "021110": "task3.html"
};

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", () => {
        const userInput = codeInput.value.trim();

        if (codes[userInput]) {
            message.textContent = "Congrats! Let's go!";

            setTimeout(() => {
                window.location.href = codes[userInput];
            }, 2000);
        } else {
            message.textContent = "Try again...";
        }
    });
});