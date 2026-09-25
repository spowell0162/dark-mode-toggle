const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
let theme = 'light';

darkModeToggle.addEventListener('click', function () {
    if (theme === 'light') {
        body.classList.add('dark');
        darkModeToggle.classList.add('active');
        darkModeToggle.textContent = 'Light Mode';
        theme = 'dark';
        console.log(darkMode);
    } else if (theme === 'dark') {
        body.classList.remove('dark');
        darkModeToggle.classList.remove('active');
        darkModeToggle.textContent = 'Dark Mode';
        theme = 'light';
        console.log(darkMode);
    }
})

// get local storage. If null, set them to light