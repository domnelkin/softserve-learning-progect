let h1 = document.querySelector('h1');
 
h1.style.background = "red";

let text = document.querySelectorAll('#myDiv p');

text[0].style.fontWeight = 'bold';
text[1].style.color = 'brown';
text[2].style.textDecoration = 'underline';
text[3].style.fontStyle = 'italic';

let myList = Array.from(document.querySelectorAll('#myList li')).map(el => el.textContent);

let inlineText = '';

myList.forEach(el => inlineText += el);

let listElem = document.getElementById('myList');

let newElem = document.createElement('div');
newElem.innerText = inlineText;

listElem.parentNode.replaceChild(newElem, listElem);

document.querySelector('span').style.display = "none";




