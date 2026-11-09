const places = [
  { name: "Rotvollfjæra flyttebrygge", img: "bilder/rotvollfjara.jpg", rating: 4, type: "pumpfoil", detail: "vanligvis Rolig vann, men kan være bølger fra sør-vind. du må også ta en liten svømme tur til flytte bryggen får du kan start" },
  { name: "Grillstad strand", img: "bilder/grillstad.jpg", rating: 2, type: "pumpfoil", detail: "fint sted, med rolig vann og med strand for beach start, men kan være mange der folk" },
  { name: "Ravnkloa brygge", img: "bilder/ravnkloa.jpg", rating: 3, type: "pumpfoil", detail: "fint sted med mange tilskuere, dokken er lite lav men forsatt murlig, det er kaiak trafikk og båter som kan lage bølger." },
  { name: "Solsiden", img: "bilder/solsiden.jpg", rating: 1, type: "pumpfoil", detail: "fine sted veldig rolig vann, men mangler plass og dokken er veldig lav" },
  { name: "Sted 5", img: "bilder/rotvollfjara.jpg", rating: 4, type: "wingfoil", detail: "Beskrivelse" },
  { name: "Sted 6", img: "bilder/rotvollfjara.jpg", rating: 3, type: "wingfoil", detail: "Beskrivelse" },
  { name: "Sted 7", img: "bilder/rotvollfjara.jpg", rating: 3, type: "wingfoil", detail: "Beskrivelse" },
  { name: "Sted 8", img: "bilder/rotvollfjara.jpg", rating: 3, type: "wingfoil", detail: "Beskrivelse" },
  { name: "Sted 9", img: "bilder/rotvollfjara.jpg", rating: 3, type: "wingfoil", detail: "Beskrivelse" },
  { name: "Sted 10", img: "bilder/rotvollfjara.jpg", rating: 3, type: "wingfoil", detail: "Beskrivelse" },
];

const layoutPlaces = document.querySelector(".layout-places");

function render(list) {
  layoutPlaces.innerHTML = list.map(p => `
    <div class="place">
      <img src="${p.img}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</p>
      <p>${p.type}</p>
      <p>${p.detail}</p>
    </div>`).join("");
}

/* filter */

const filterType = document.querySelector("#filter-type");
const filterRating = document.querySelector("#filter-rating");

function applyFilters() {
  const type = filterType.value;
  const minRating = Number(filterRating.value);
  render(places.filter(p =>
    (type === "alle" || p.type === type) && p.rating >= minRating
  ));
}

filterType.addEventListener("change", applyFilters);
filterRating.addEventListener("change", applyFilters);
applyFilters();

/*pop up */

function openCard(card) {
  card.classList.add("active");
  document.body.classList.add("dimmed");
}

function closeCard(card) {
  card.classList.add("closing");
  document.body.classList.add("undimming");
  card.addEventListener("animationend", () => {
    card.classList.remove("active", "closing");
    document.body.classList.remove("dimmed", "undimming");
  }, { once: true });
}

layoutPlaces.addEventListener("click", (e) => {
  const card = e.target.closest(".place");
  if (!card || card.classList.contains("closing")) return;

  if (card.classList.contains("active")) {
    closeCard(card);
  } else {
    openCard(card);
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("dimmed")) {
    const activeCard = document.querySelector(".place.active:not(.closing)");
    if (activeCard) closeCard(activeCard);
  }
});
