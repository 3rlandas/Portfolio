let a = 0;
let sidebar = document.querySelector('.overlay-menu');
let closeButton = document.getElementById('close-overlay');


function changingSide() {
    if (a % 2 === 0) {
        sidebar.setAttribute('id', 'open-menu');
    } else {
        sidebar.setAttribute('id', 'close-menu');
    }
    a++;
}


document.getElementById('menu-toggle').addEventListener('click', changingSide);


document.querySelectorAll('.overlay-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (a % 2 === 1) {
            sidebar.setAttribute('id', 'close-menu');
            a++;
        }
    });
});

closeButton.addEventListener('click', () => {
    if (a % 2 === 1) {
        sidebar.setAttribute('id', 'close-menu');
        a++;
    }
});


document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || event.target === closeButton || event.target === document.getElementById('menu-toggle');
    if (!isClickInside && a % 2 === 1) {
        sidebar.setAttribute('id', 'close-menu');
        a++;
    }
});