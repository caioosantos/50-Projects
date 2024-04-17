const esquerda = document.querySelector('.left');
const direita = document.querySelector('.right');
const container = document.querySelector('.container');

esquerda.addEventListener('mouseenter', () => container.classList.add('hover-left'));
esquerda.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

direita.addEventListener('mouseenter', () => container.classList.add('hover-right'));
direita.addEventListener('mouseleave', () => container.classList.remove('hover-right'));