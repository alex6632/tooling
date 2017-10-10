// mickael@clevermonkey.io

const ul = document.getElementById('jsTodoList');
const url = '../data/data.json';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

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