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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul Korea, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  },
  {
    templeName: "Johannesburg",
    location: "Johannesburg, South Africa",
    dedicated: "1982, November, 27",
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Durban",
    location: "Durban, South Africa",
    dedicated: "2016, April, 9",
    area: 19860,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
  }
];

createTempleCard(temples);

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const allTemples = document.querySelector("#home");

oldTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const yearString = temple.dedicated.split(",")[0].trim();
    const year = parseInt(yearString, 10);
    return year < 1900;
  }))
});

newTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const yearString = temple.dedicated.split(",")[0].trim();
    const year = parseInt(yearString, 10);
    return year > 2000;
  }))
});

largeTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000))
});

smallTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000))
});

allTemples.addEventListener("click", () => {
  createTempleCard(temples)
});

function createTempleCard(filteredTemples){
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let image = document.createElement('img'); 

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label" >Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label" >Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label" >Area:</span> ${temple.area} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading" ,"lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    document.querySelector(".res-grid").appendChild(card);
  })
}





