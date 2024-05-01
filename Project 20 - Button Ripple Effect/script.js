const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circleElement = document.createElement('span');
        circleElement.classList.add('circle');
        circleElement.style.top = yInside + 'px';
        circleElement.style.left = xInside + 'px';

        this.appendChild(circleElement);

        setTimeout(() => circleElement.remove(), 500);
    })
});
