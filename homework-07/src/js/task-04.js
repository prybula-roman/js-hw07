const buttons = document.getElementsByTagName('button');
console.log(buttons, '   ', buttons.length);

let rez = document.querySelector('#value').textContent;
console.log('rez  ', rez);
const func = function (element) {
  if (element.dataset.action === 'decrement') {
    rez--;
  } else if (element.dataset.action === 'increment') {
    rez++;
  }
  document.querySelector('#value').textContent = `${rez}`;
};

for (let i = 0; i != buttons.length; i++) {
  buttons[i].addEventListener('click', func(buttons[i]));

  console.log(buttons[i].dataset.action);
}
