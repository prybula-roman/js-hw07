const elemCategories = document.querySelector('#categories');
//console.log(elemCategories);

const elemItems = elemCategories.querySelectorAll('.item'); //all 'li'
console.log(`В списке ${elemItems.length} категории \n\n`);

elemItems.forEach(elem => {
  //console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
  console.log('Категория : ', elem.firstElementChild.textContent, '\n');
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length,
    '\n\n'
  );
});

//console.log(title.flatMap(elem => Object.values(elem)));
