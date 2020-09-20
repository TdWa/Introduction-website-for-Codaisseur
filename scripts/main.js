//alert('yes!');

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const body = document.body;

b1.onclick = () => {
  b1.textContent = 'Well well well...'
  body.style.setProperty('background-color', 'azure');
}

b2.onclick = () => {
  b2.textContent = 'Look what the cat\'s dragged in...'
  body.style.setProperty('background-color', 'rosybrown');
}


// body.onclick = () => {
//   body.style.setProperty('background-color', 'azure');
// }