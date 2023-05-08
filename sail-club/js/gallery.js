let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.slider-preview-item a');

for (let activeImage of previews) {
    activeImage.onclick = function (e) {
        e.preventDefault();
        
        mainImage.src = activeImage.href;
        let currentActive = document.querySelector('.slider-preview-item .activ');
        currentActive.classList.remove('activ');
        activeImage.classList.add('activ');
    }
}