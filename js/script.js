const keyName = document.querySelector("._key");
const keyType = document.querySelector("._type");
const keyCode = document.querySelector("._code");
const keyDiscription = document.querySelector("._discription");
const keyHistory = document.querySelector("._history");
const grid = document.querySelector('.grid');
const keyboxesItem = document.querySelectorAll(".keyboxes__item");
let arrKeyItems = [];

document.body.addEventListener("keydown", function(e) {
    keyboxesItem.forEach(function(el) {
        if (el.style == '--opacity', '1') {
            el.style.setProperty('--opacity', '0.1')
        }
    });

    keyName.innerText = `${e.key}`;
    keyType.innerText = `${e.type}`;
    keyCode.innerText = `${e.keyCode}`;
    keyDiscription.innerText = `${e.code}`;

    if (arrKeyItems.length == 4) {
        arrKeyItems.shift(e);
    }
    arrKeyItems.push(e.key);

    let gridItems = '';
    for (var i = 0; i < arrKeyItems.length; i++) {
        gridItems += `<div class="grid__item">${arrKeyItems[i]}</div>`
    }

    /*delet all child elements from parent element */
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    grid.insertAdjacentHTML('afterbegin', gridItems);
});

/*assign a style to an element*/
keyName.addEventListener("click", function(e) {
    keyName.style.setProperty('--opacity', '1');
});

keyType.addEventListener("click", function(e) {
    keyType.style.setProperty('--opacity', '1');
});

keyCode.addEventListener("click", function(e) {
    keyCode.style.setProperty('--opacity', '1');
});

keyDiscription.addEventListener("click", function(e) {
    keyDiscription.style.setProperty('--opacity', '1');
});

keyHistory.addEventListener("click", function(e) {
    keyHistory.style.setProperty('--opacity', '1');
});