const valInp = document.querySelector('#validation-input');
//console.dir(valInp);
//const len = valInp.dataset.length;
//console.log(len);
valInp.classList.add('invalid');
//console.dir(valInp);
const funcBlur = () => {
  console.log('funcBlur()');
  console.log(valInp.value.length);
  if (valInp.value.length === parseInt(valInp.dataset.length, 10)) {
    // console.log(`valInp.value.length === valInp.dataset.length`);
    valInp.classList.forEach(elem => valInp.classList.remove(elem));
    valInp.classList.add('valid');
  } else {
    // console.log(`valInp.value.length != valInp.dataset.length`);
    valInp.classList.forEach(elem => valInp.classList.remove(elem));
    valInp.classList.add('invalid');
  }
  // console.dir(valInp);
};

valInp.addEventListener('blur', funcBlur);

//console.dir(valInp);
