const btnToggles = document.querySelectorAll('.faq-toggle');

btnToggles.forEach(toggles => {
    toggles.addEventListener('click', () => {
        toggles.parentNode.classList.toggle('active');
    })
});
