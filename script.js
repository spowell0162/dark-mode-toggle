const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    // if dark mode is on, change text to 'Light Mode'
    if (body.classList.contains('dark')) {
        darkModeToggle.textContent = 'Light Mode';
    } else darkModeToggle.textContent = 'Dark Mode';
})