const places = [
  { name: "Rotvollfjæra flyttebrygge", img: "bilder/rotvollfjara.jpg", rating: 5, type: "Pumpfoil", detail: "Stedet byr vanligvis på rolig vann, men det kan oppstå bølger ved sørlig vind. Du må regne med en kort svømmetur ut til flytebrygga før du kan kaste deg uti og pumpe i gang." },
  { name: "Grillstad strand", img: "bilder/grillstad.jpg", rating: 2, type: "Pumpfoil", detail: "Stedet har rolig vann og en fin strand for beach start. Det kan likevel være en del folk og turgåere på området." },
  { name: "Ravnkloa brygge", img: "bilder/ravnkloa.jpg", rating: 3, type: "Pumpfoil", detail: "Her får du et kult sted med mange tilskuere, selv om dokken er litt lav. Vær oppmerksom på kajakktrafikk og båter som kan lage urolige bølger." },
  { name: "Solsiden", img: "bilder/solsiden.jpg", rating: 1, type: "Pumpfoil", detail: "Et fint område med helt rolig vann i vannflaten. Det er derimot svært lite plass å manøvrere på, og dokken er utfordrende lav." },
  { name: "Djupvika", img: "bilder/djupvika.jpg", rating: 5, type: "Wingfoil", detail: "Stedet fungerer utmerket på vind fra øst og nord, og byr på masse bølger. Vær likevel obs på at du kan bli dratt langt unna startområdet dersom du får problemer på vannet." },
  { name: "Rye", img: "bilder/rye.jpg", rating: 3, type: "Wingfoil", detail: "Et kjempefint spot som fungerer spesielt bra ved svak sørlig vind og byr på gode bølger. Ulempen er bare at det ligger litt langt unna." },
  { name: "Øysand", img: "bilder/øysand.jpg", rating: 4, type: "Wingfoil", detail: "En lang og langgrunn sandstrand der vest/nordvest (V/NV) gir den mest stabile og beste vinden for foiling. På nordlig eller sørvestlig vind kan vinden bli mer kastete på grunn av terrenget rundt" },
  { name: "Ranheim", img: "bilder/ranheim.jpg", rating: 4, type: "Wingfoil", detail: "Et fint område som fungerer best når vinden kommer fra nord, nordvest eller øst inn fjorden. Blir vinden for vestlig, skygger terrenget slik at vinden blir ujevn og ustabil." },
  { name: "Værnes", img: "bilder/værnes.jpg", rating: 5, type: "Wingfoil", detail: "Dette spotet fungerer aller best på nordlig til nordvestlig vind som kommer fritt inn fjorden, og det byr på masse fine bølger over et langgrunt område. Du vil se og høre flyene som letter fra flyplassen like ved, men de er sjelden til noe reelt problem for økten." },
];
/*
{ name: "Sted 9", img: "bilder/sted_bilde.jpg", rating: x, type: "wingfoil" eller "pumpfoil", detail: "aeskrivelse" },
*/

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
    (type === "alle" || p.type.toLowerCase() === type) && p.rating >= minRating
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
