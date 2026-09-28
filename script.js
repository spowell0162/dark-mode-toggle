const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    darkModeToggle.classList.add('active');
    darkModeToggle.textContent = 'Light Mode';
} else if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark');
    darkModeToggle.classList.remove('active');
    darkModeToggle.textContent = 'Dark Mode';
};

darkModeToggle.addEventListener('click', function () {
    if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
        body.classList.add('dark');
        darkModeToggle.classList.add('active');
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark')
        console.log(localStorage.getItem('theme'));
        
    } else if (localStorage.getItem('theme') === 'dark') {
        body.classList.remove('dark');
        darkModeToggle.classList.remove('active');
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
        console.log(localStorage.getItem('theme'));
        
    }
});