const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

function applyDarkMode() {
    !body.classList.contains('dark') && body.classList.add('dark');
    !darkModeToggle.classList.contains('active') && darkModeToggle.classList.add('active');
    darkModeToggle.textContent = 'Light Mode';
};

function applyLightMode() {
    body.classList.contains('dark') && body.classList.remove('dark');
    darkModeToggle.classList.contains('active') && darkModeToggle.classList.remove('active');
    darkModeToggle.textContent = 'Dark Mode';
};

function toggleTheme() {
    if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
        applyDarkMode();
        localStorage.setItem('theme', 'dark')
    } else if (localStorage.getItem('theme') === 'dark') {
        applyLightMode();
        localStorage.setItem('theme', 'light');
    };
};

if (localStorage.getItem('theme') === 'dark') {
    applyDarkMode();
} else if (localStorage.getItem('theme') === 'light') {
    applyLightMode();
};

darkModeToggle.addEventListener('click', toggleTheme);