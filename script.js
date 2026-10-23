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
  { name: "Rotvollfjæra", img: "rotvollfjara.jpg", rating: 4, detail: "Rolig vann, fin brygge" },
  { name: "Sted 2", img: "rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
  { name: "Sted 3", img: "rotvollfjara.jpg", rating: 5, detail: "Beskrivelse" },
  { name: "Sted 4", img: "rotvollfjara.jpg", rating: 2, detail: "Beskrivelse" },
  { name: "Sted 5", img: "rotvollfjara.jpg", rating: 4, detail: "Beskrivelse" },
  { name: "Sted 6", img: "rotvollfjara.jpg", rating: 3, detail: "Beskrivelse" },
];

document.querySelector(".layout-places").innerHTML = places.map(p => `
  <div class="place">
    <img src="${p.img}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p>${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</p>
    <p>${p.detail}</p>
  </div>`).join("");
