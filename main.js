document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.querySelector('.lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });

    // Function to get a color based on the number
    function getColor(number) {
        if (number <= 10) return '#f8d7da'; // 연한 빨간색 계열
        if (number <= 20) return '#d4edda'; // 연한 녹색 계열
        if (number <= 30) return '#cce5ff'; // 연한 파란색 계열
        if (number <= 40) return '#fff3cd'; // 연한 노란색 계열
        return '#e2e3e5'; // 연한 회색 계열
    }

    const generateNumbers = () => {
        numberContainer.innerHTML = ''; // Clear previous numbers
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const span = document.createElement('span');
                span.textContent = number;
                span.style.backgroundColor = getColor(number);
                span.style.color = '#333'; // Numbers always look better with dark text on light backgrounds
                span.style.boxShadow = `0 4px 15px rgba(0, 0, 0, 0.1)`;
                numberContainer.appendChild(span);
            }, index * 200); // Stagger the animation
        });
    };

    generateBtn.addEventListener('click', generateNumbers);

    // Generate numbers on initial load
    generateNumbers();
});