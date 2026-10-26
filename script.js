let button2 = document.querySelector("#button2");
let button1 = document.querySelector("#button1");

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

button2.addEventListener("click", () => {
  console.log("hello this is button2");
});

button1.addEventListener("click", () => {
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();
  button1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const places = [
  { name: "Rotvollfjæra flyttebrygge", img: "bilder/rotvollfjara.jpg", rating: 4, detail: "vanligvis Rolig vann, men kan være bølger fra sør-vind. du må også ta en liten svømme tur til flytte bryggen får du kan start" },
  { name: "Grillstad strand", img: "bilder/grillstad.jpg", rating: 2, detail: "fint sted, med rolig vann og med strand for beach start, men kan være mange der folk" },
  { name: "Ravnkloa brygge", img: "bilder/ravnkloa.jpg", rating: 3, detail: "fint sted med mange tilskuere, dokken er lite lav men forsatt murlig, det er kaiak trafikk og båter som kan lage bølger." },
  { name: "Solsiden", img: "bilder/solsiden.jpg", rating: 1, detail: "fine sted veldig rolig vann, men mangler plass og dokken er veldig lav" },
  { name: "Sted 5", img: "bilder/rotvollfjara.jpg", rating: 4, detail: "Beskrivelse" },
  { name: "Sted 6", img: "bilder/rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
  { name: "Sted 7", img: "bilder/rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
  { name: "Sted 8", img: "bilder/rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
  { name: "Sted 9", img: "bilder/rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
  { name: "Sted 10", img: "bilder/rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
];

document.querySelector(".layout-places").innerHTML = places.map(p => `
  <div class="place">
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p>${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</p>
    <p>${p.detail}</p>
  </div>`).join("");
