const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

console.log(today.getFullYear()); 
console.log(document.lastModified);

const nav = document.querySelector('.navigation ul'); 
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  nav.classList.toggle('show'); 
  hambutton.classList.toggle('show'); 
});