const root = document.querySelector(':root');
const wantsDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('logo').src = "icons/logo_light.svg";
        root.style.setProperty('--accent', 'var(--blue)');
        root.style.setProperty('--background', 'var(--white)');
        root.style.setProperty('--color', 'var(--black)');
    } else if (theme == 'dark') {
        document.getElementById('logo').src = "icons/logo_dark.svg";
        root.style.setProperty('--accent', 'var(--turquoise)');
        root.style.setProperty('--background', 'var(--black)');
        root.style.setProperty('--color', 'var(--white)');
    }
}

function toggleTheme() {
    localStorage.setItem(
        'theme', localStorage.getItem('theme') == 'dark' ? 'light' : 'dark'
    )
    setTheme(localStorage.getItem('theme'));
    console.log(localStorage.getItem('theme'));
}

if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', wantsDark ? 'dark' : 'light');
}

setTheme(localStorage.getItem('theme'));

const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', toggleTheme);