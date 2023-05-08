let cursor = document.querySelector('.cursor');

document.onmousemove = function(e) {
    cursor.classList.add('movement');
    cursor.style.position = `fixed`;
    cursor.style.left = e.clientX + `px`;
    cursor.style.top = e.clientY + `px`;
}

document.addEventListener('mousemove', () => {
    cursor.classList.remove('hidden');
})

document.addEventListener('mouseout', () => {
    cursor.classList.add('hidden');
})

let links = document.getElementsByTagName('a');
// console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mousemove', () => {
        cursor.classList.add('active');
        // console.log('навел')
    })

    links[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active');
        // console.log('убрал')
    })
}