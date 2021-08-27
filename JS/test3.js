const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    const text = document.createElement('div');
    text.innerText = "I was pressed!";
    body.appendChild(text);
})

button.addEventListener('mouseover', () => {
    const text = document.createElement('div');
    text.innerText = "Mouse on me!";
    body.appendChild(text);
})

button.addEventListener('mouseout', () => {
    const text = document.createElement('div');
    text.innerText = "Mouse is not on me!";
    body.appendChild(text);
})