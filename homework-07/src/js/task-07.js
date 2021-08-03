const vol = document.getElementById('font-size-control');
//console.log(vol);

vol.setAttribute('min', '1');
vol.setAttribute('max', '10');
vol.setAttribute('step', '1');
vol.setAttribute('value', '1');

const str = document.getElementById('text');
//console.dir(str);
str.setAttribute('font-size', '1.5');
console.log(str.getAttribute('font-size'));
const entryFunc = () => {
  console.log(vol.value);
  str.getAttribute("font-size") =toString( parseInt (str.getAttribute("font-size") )*parseInt( vol.value));
};
vol.addEventListener('input', entryFunc);
