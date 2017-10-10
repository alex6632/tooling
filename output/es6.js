// mickael@clevermonkey.io

const ul = document.getElementById('jsTodoList');
const url = '../data/data.json';
let newRecord = '';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

// function updateJSON(url, newRecord) {
//   return src.map(function(item) {
//     return (item.year === newRecord.year && item.month === newRecord.month) ? newRecord : item;
//   });
// }
// src = updateJSON(src, newRecord);

fetch(url).then(resp => resp.json()).then(data => {
  const items = data.todos;
  return items.map(item => {
    const li = createNode('li');
    if (item.complete) {
      li.innerHTML = `<s>${item.label}</s>`;
    } else {
      li.innerHTML = `${item.label}`;
    }

    append(ul, li);
  });
});

ul.addEventListener('click', e => {
  console.log(e);
  const clikedEl = e.target;
  console.log(clikedEl.tagName);
  if (clikedEl.tagName === 'LI') {
    console.log(clikedEl);
    if (clikedEl.hasAttribute('style')) {
      clikedEl.removeAttribute('style');
      //newRecord = {"complete": false};
    } else {
      clikedEl.style.textDecoration = 'line-through';
      //newRecord = {"complete": true};
    }
  }
}, false);