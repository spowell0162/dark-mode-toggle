const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

const applyDarkMode = function() {
    if (!body.classList.contains('dark')) {
        body.classList.add('dark');
    };
    if (!darkModeToggle.classList.contains('active')) {
        darkModeToggle.classList.add('active');
    };
    darkModeToggle.textContent = 'Light Mode';
};

const applyLightMode = function() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    };
    if (darkModeToggle.classList.contains('active')) {
        darkModeToggle.classList.remove('active');
    }
    darkModeToggle.textContent = 'Dark Mode';
};

if (localStorage.getItem('theme') === 'dark') {
    applyDarkMode();
} else if (localStorage.getItem('theme') === 'light') {
    applyLightMode();
};

darkModeToggle.addEventListener('click', function () {
    if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
        applyDarkMode();
        localStorage.setItem('theme', 'dark')
    } else if (localStorage.getItem('theme') === 'dark') {
        applyLightMode();
        localStorage.setItem('theme', 'light');
    }
});

// Code can be cleaner,swapping the if statements with a ternary operator and using a single function to toggle the theme.