const visitor = document.querySelector('#name-input');
//console.log(visitor, '  ', visitor.textContent);
const visitorName = document.querySelector('#name-output');
//console.log(visitorName, '  ', visitorName.textContent);
visitor.addEventListener('input', () => {
  //console.log('visitor.value=', visitor.value);
  visitorName.textContent = `${visitor.value}`;
  if (visitor.value === '') {
    visitorName.textContent = 'незнакомец';
  }
});
