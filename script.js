const printConsole = document.getElementById('printConsole');
const createEl = document.getElementById('createEl');
const elPrepend = document.getElementById('el-prepend');
const pageText = document.getElementById('page-text');
const container = document.querySelector('.container');
const showContainer = document.getElementById('show-hidden');
const divClass = document.getElementById('hidden');
const closeBtn = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const colorPicker = document.getElementById('color-picker');

function removeItem() {
    const removeTag = document.createElement('a');
    removeTag.className = 'remove-item';
    removeTag.innerHTML = `<span>X</span>`;
    return removeTag;
}

function createElement() {
    const pTag = document.createElement('p');
    const textNode = document.createTextNode('P tag created with text');
    pTag.appendChild(textNode);

    const removePTag = removeItem();
    pTag.appendChild(removePTag);

    container.appendChild(pTag);
}

function elementPrepend() {
    const setElPre = document.createElement('p');
    const elTextNode = document.createTextNode(
        'p tag with text that will be prepended'
    );
    setElPre.appendChild(elTextNode);
    const removePTag = removeItem();
    setElPre.appendChild(removePTag);

    container.prepend(setElPre);
}

function replaceText(e) {
    const text = e.target.value;
    const newText = document.createElement('em');
    newText.id = 'change-text';
    newText.innerText = `${text}`;
    const changeText = document.getElementById('change-text');
    changeText.parentNode.replaceChild(newText, changeText);
}

function consoleLog() {
    console.log('you have logged me to the console!');
}

function displayHiddenDiv() {
    if (divClass.style.display === 'none') {
        divClass.style.display = 'flex';
    } else {
        divClass.style.display = 'none';
    }
}

function removePTag(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function changeTitleColor(e) {
    const color = e.target.value;
    console.log(color);
    const title = document.getElementById('title');
    title.style.color = color;
}

async function getLoremPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    data.map((postData) => {
        console.log(`<h1>${postData.title}</h1><p>${postData.body}</p>`);
    });
}

getLoremPosts();

createEl.addEventListener('click', createElement);
printConsole.addEventListener('click', consoleLog);
showContainer.addEventListener('click', displayHiddenDiv);
open.addEventListener('click', () => modal.classList.add('show-modal'));
closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);
container.addEventListener('click', removePTag);
elPrepend.addEventListener('click', elementPrepend);
pageText.addEventListener('keyup', replaceText);
colorPicker.addEventListener('input', changeTitleColor);
