let body = document.querySelector('body');
let icon = document.querySelector('.theme-item');
let logo = document.querySelectorAll('.logo-svg');

document.querySelector('.theme').addEventListener('click', (e) => {
    e.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addDark();
});

function addDark () {
    let theme = localStorage.getItem('theme');
    body.classList.toggle('dark', theme === 'dark');
    icon.classList.toggle('bx-sun', theme === 'dark');
    logo.forEach(logo => logo.classList.toggle('dark-svg', theme === 'dark'));
    
    // try {
    //     if (localStorage.getItem('theme') === 'dark') {
    //         body.classList.add('dark');
    //         icon.classList.add('bx-sun');
    //         logo.classList.add('logo-dark')
    //     } else {
    //         body.classList.remove('dark');
    //         icon.classList.remove('bx-sun');
    //         logo.classList.remove('logo-dark')
    //     }
    // } catch (err) {}
}
addDark();
