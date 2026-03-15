const generateBtn = document.getElementById("generate-btn");
const numberContainer = document.querySelector(".number-container");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    localStorage.setItem("lottoNumbers", JSON.stringify(sortedNumbers));
    return sortedNumbers;
}

function displayNumbers(numbers) {
    numberContainer.innerHTML = "";
    numbers.forEach(number => {
        const numberElement = document.createElement("div");
        numberElement.classList.add("number");
        numberElement.textContent = number;
        numberContainer.appendChild(numberElement);
    });
}

generateBtn.addEventListener("click", () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
});

darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
});

window.addEventListener('load', () => {
    const savedNumbers = localStorage.getItem("lottoNumbers");
    if (savedNumbers) {
        displayNumbers(JSON.parse(savedNumbers));
    } else {
        const numbers = generateNumbers();
        displayNumbers(numbers);
    }
});

// Formspree AJAX handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "문의가 성공적으로 전송되었습니다!";
            status.classList.add("success");
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "전송 중 오류가 발생했습니다.";
                }
                status.classList.add("error");
            });
        }
    }).catch(error => {
        status.innerHTML = "전송 중 오류가 발생했습니다.";
        status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);