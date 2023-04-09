const buttonEl = document.querySelector('.button');
const formEl = document.querySelector('.form');

buttonEl.addEventListener('click', function (e) {
    formEl.classList.toggle('visible');
});