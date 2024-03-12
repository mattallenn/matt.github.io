const modeToggle = document.getElementById('mode-toggle');
const container = document.querySelector('.container');

modeToggle.addEventListener('click', () => {
    container.classList.toggle('light-mode');
    container.classList.toggle('dark-mode');
});
