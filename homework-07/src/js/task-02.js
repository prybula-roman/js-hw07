const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingList = [];
const ulIngr = document.querySelector('#ingredients');
for (let i = 0; i != ingredients.length; i++) {
  const elem = document.createElement('li');
  elem.textContent = ingredients[i];
  ulIngr.appendChild(elem);
}
