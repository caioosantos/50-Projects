const btn = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

const types = ['info', 'success', 'error'];

btn.addEventListener('click', () => createNotificarion());


function createNotificarion(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomTypes());

    notif.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)];
}

