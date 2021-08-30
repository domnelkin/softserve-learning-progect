let list = document.querySelectorAll('#list li');

let textArray = Array.from(list).map(e => e.textContent);
let sortedTextArray = textArray.sort();

let content = '';

sortedTextArray.forEach(el => content += `<li>${el}</li>`);

sortedTextArray.forEach(el => document.getElementById('list').innerHTML = content);

let div = document.createElement('div');

div.innerText = 'Output: ';

sortedTextArray.forEach(el => div.innerText += el + ", ");

document.querySelector('body').appendChild(div);

//-----------------------------------------------------------------------

let newList = document.createElement('ul');
newList.classList.add('commaList');

let newListContent = "Output: ";

textArray.forEach(el => newListContent += `<li>${el}</li>`);

newList.innerHTML = newListContent;

document.querySelector('body').appendChild(newList);

newList.style.cssText += "display: inline;list-style: none;padding: 0px;";

const newListElements = newList.querySelectorAll('li');

newListElements.forEach(el =>  {
    el.style.display = "inline";
});

for(let i = 0; i < newListElements.length - 1; i++) {
    newListElements[i].after(", ");
}

// ------------------------------------------------------------------

const list1 = document.getElementById('list_1');

const listElementsCollection = list1.children;

const listElementsArray = Array.from(listElementsCollection);

const elementsContentList = listElementsArray.map(el => el.textContent);

console.log(`${elementsContentList[0]}, ${elementsContentList[4]}, ${elementsContentList[1]}, ${elementsContentList[3]}, ${elementsContentList[2]}`)

let first = 0;
let last = elementsContentList.length - 1;
let output = "";

for (let i = 0; i < elementsContentList.length; i++) {
    if(first != last) {
        output += `${elementsContentList[first]}, ${elementsContentList[last]}, `;
        first++;
        last--;
    } else {
        output += `${elementsContentList[first]}`;
        break;
    }
}

console.log(output);
