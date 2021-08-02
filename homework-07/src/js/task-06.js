const valInp = document.querySelector('#validation-input');

valInp.setAttribute('class', 'valid');
console.log('1', valInp.classList);
valInp.classList.add('invalid');
console.log('2', valInp.classList);

console.log(typeof valInp.getAttribute('data-length'));
/*
if(valInp.nodeValue.length===valInp.getAttribute('data-length')){

}*/
