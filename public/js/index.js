const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function typeWrite(elemento, time) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
        elemento.innerHTML += letra;
        }, time * i)
        console.log(letra);
    });
}

//const title1 = document.querySelector(".section__title");
const title = document.querySelector(".hello");
const subtitle = document.querySelector(".strong");
typeWrite(title, 60);
typeWrite(subtitle, 110);

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    modal.classList.add('open-modal')
})

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal')
})

