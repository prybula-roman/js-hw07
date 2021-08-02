const butIncrement = document.querySelector('button[data-action="increment"]');
//console.log(butIncrement);
const butDecrement = document.querySelector('button[data-action="decrement"]');
//console.log(butDecrement);
let counterValue = document.querySelector('#value').textContent;
//console.log('rez  ', rez);
function increment() {
  //console.log('increment()');
  counterValue++;
  document.querySelector('#value').textContent = `${counterValue}`;
}
function decrement() {
  //  console.log('decrement()');
  counterValue--;
  document.querySelector('#value').textContent = `${counterValue}`;
}
butIncrement.addEventListener('click', () => {
  counterValue++;
  document.querySelector('#value').textContent = `${counterValue}`;
});
butDecrement.addEventListener('click', () => {
  counterValue--;
  document.querySelector('#value').textContent = `${counterValue}`;
});
