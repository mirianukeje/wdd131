// Footer date scripts
const d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Array of temple objects (at least 10 total)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah (Old)",
    location: "Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Utah, United States",
    dedicated: "2012, September 23",
    area: 36000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
  },
  {
    templeName: "Oakland California",
    location: "California, United States",
    dedicated: "1964, November, 17",
    area: 80157,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
  },
  {
    templeName: "Manti Utah (New)",
    location: "Utah, United States",
    dedicated: "2024, April, 21",
    area: 100373,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-759208-wallpaper.jpg"
  }
];

// Helper to get the year from the dedicated date
function getYear(dateStr) {
  return parseInt(dateStr.split(",")[0]);
}

// Render cards
function renderTemples(templesArray) {
  const container = document.querySelector(".figure-grid");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName} Temple" 
        loading="lazy"
      >
    `;
    container.appendChild(card);
  });
}

// Navigation event listeners
document.getElementById("home").addEventListener("click", () => {
  document.getElementById("category-title").textContent = "All Temples";
  renderTemples(temples);
});
document.getElementById("old").addEventListener("click", () => {
  const filtered = temples.filter(t => getYear(t.dedicated) < 1900);
  document.getElementById("category-title").textContent = "Old Temples (Before 1900)";
  renderTemples(filtered);
});
document.getElementById("new").addEventListener("click", () => {
  const filtered = temples.filter(t => getYear(t.dedicated) > 2000);
  document.getElementById("category-title").textContent = "New Temples (After 2000)";
  renderTemples(filtered);
});
document.getElementById("large").addEventListener("click", () => {
  const filtered = temples.filter(t => t.area > 90000);
  document.getElementById("category-title").textContent = "Large Temples (Over 90,000 sq ft)";
  renderTemples(filtered);
});
document.getElementById("small").addEventListener("click", () => {
  const filtered = temples.filter(t => t.area < 10000);
  document.getElementById("category-title").textContent = "Small Temples (Under 10,000 sq ft)";
  renderTemples(filtered);
});

// Hamburger menu toggle for mobile
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.classList.toggle("show");
});

// Initial render
renderTemples(temples);
