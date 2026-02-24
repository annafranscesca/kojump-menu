/* =========================
   KOJUMP MENU - app.js
   ========================= */

const CATEGORIES = [
  { id: "soft", label: "Soft", icon: `<img class="catIcon" src="./images/icons/soft.png" alt="Soft">` },
  { id: "hot", label: "Boissons chaudes", icon: `<img class="catIcon" src="./images/icons/hot.png" alt="Boissons chaudes">` },
  { id: "alcohol", label: "Boissons alcoolisées", icon: `<img class="catIcon" src="./images/icons/alcohol.png" alt="Boissons alcoolisées">` },
  { id: "food", label: "Nourriture", icon: `<img class="catIcon" src="./images/icons/food.png" alt="Nourriture">` },
];

const SUBCATS = {
  alcohol: ["Bières", "Vins", "Cocktails"],
  food: ["Sucré", "Salé"],
};

// ======== MENU DATA (from your CSV) ========
const ITEMS = [
  { main: "soft", sub: null, section: null, name: "Coca-cola", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Coca-cola zéro", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Fanta orange", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Sprite", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Fuze tea pêche", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Fuze tea mangue", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Fuze tea citron (pétillant)", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Royal Bliss tonic", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Royal Bliss agrumes", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Minute maid orange", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Minute maid multivitamines", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Minute maid pomme", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Minute maid pomme-cerise", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Oasis", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Aquarius (50 cl)", desc: "", price: "4.50€" },
  { main: "soft", sub: null, section: null, name: "Chaudfontaine plate 25cl", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Chaudfontaine pétillante 25cl", desc: "", price: "2.50€" },
  { main: "soft", sub: null, section: null, name: "Chaudfontaine plate 1L", desc: "", price: "6€" },
  { main: "soft", sub: null, section: null, name: "Chaudfontaine pétillante 1L", desc: "", price: "6€" },
  { main: "soft", sub: null, section: null, name: "Kidibul pomme 75cl", desc: "", price: "8€" },
  { main: "soft", sub: null, section: null, name: "Kidibul pomme-fraise 75cl", desc: "", price: "8€" },
  { main: "soft", sub: null, section: null, name: "Supplément sirop de grenadine - sirop de menthe", desc: "", price: "0.50€" },
  { main: "soft", sub: null, section: null, name: "Granita - petite", desc: "", price: "3€" },
  { main: "soft", sub: null, section: null, name: "Granita - moyenne", desc: "", price: "4€" },

  { main: "hot", sub: null, section: null, name: "Café", desc: "Lungo classique", price: "2.50€" },
  { main: "hot", sub: null, section: null, name: "Expresso", desc: "Petit café serré", price: "2.50€" },
  { main: "hot", sub: null, section: null, name: "Décaféiné", desc: "", price: "2.50€" },
  { main: "hot", sub: null, section: null, name: "Latte macchiato", desc: "", price: "3€" },
  { main: "hot", sub: null, section: null, name: "Cappucino", desc: "", price: "3€" },
  { main: "hot", sub: null, section: null, name: "Chocolat chaud", desc: "", price: "3.50€" },
  { main: "hot", sub: null, section: null, name: "Thé palais des thés", desc: "", price: "3.50€" },
  { main: "hot", sub: null, section: null, name: "Supplément chantilly", desc: "", price: "0.50€" },

  { main: "alcohol", sub: "Bières", section: null, name: "Hoegaarden blanche", desc: "", price: "4€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Hoegaarden rosée", desc: "", price: "4€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Jupiler", desc: "", price: "3€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Desperados", desc: "", price: "4.50€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Victoria", desc: "", price: "3.50€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Tripel Karmeliet", desc: "", price: "4.50€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Tripick 3", desc: "", price: "4.50€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Tripick 6", desc: "", price: "4.50€" },
  { main: "alcohol", sub: "Bières", section: null, name: "Tripick 8", desc: "", price: "4.50€" },

  { main: "alcohol", sub: "Vins", section: null, name: "Vin rosé, Grenache, Pays d'Oc", desc: "Au verre", price: "4€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Vin rosé, Grenache, Pays d'Oc", desc: "Bouteille", price: "20€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Vin rouge, Cabernet Sauvignon", desc: "Au verre", price: "4€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Vin rouge, Cabernet Sauvignon", desc: "Bouteille", price: "20€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Vin blanc, Chardonnay, Pays d'Oc", desc: "Au verre", price: "4€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Vin blanc, Chardonnay, Pays d'Oc", desc: "Bouteille", price: "20€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Cava l'Anae brut", desc: "Au verre", price: "5€" },
  { main: "alcohol", sub: "Vins", section: null, name: "Cava l'Anae brut", desc: "Bouteille", price: "25€" },

  { main: "alcohol", sub: "Cocktails", section: null, name: "Rhum Brugal Anejo", desc: "", price: "8€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Rhum Coca", desc: "", price: "10.50€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Aperol Spritz", desc: "", price: "8€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Gin Bombay (+ soft)", desc: "", price: "10€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Gin Buss Rasberry (+soft)", desc: "", price: "10€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Gin Buss Elderflower (+soft)", desc: "", price: "10€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Mojito", desc: "", price: "11€" },
  { main: "alcohol", sub: "Cocktails", section: null, name: "Virgin Mojito", desc: "", price: "5.50€" },

  { main: "food", sub: "Sucré", section: "Snacks", name: "Paquet de bonbons", desc: "", price: "3.50€" },
  { main: "food", sub: "Sucré", section: "Snacks", name: "Barbe à papa", desc: "", price: "3€" },
  { main: "food", sub: "Sucré", section: "Snacks", name: "Kinder surprise", desc: "", price: "2€" },
  { main: "food", sub: "Sucré", section: "Snacks", name: "M&Ms", desc: "", price: "2€" },
  { main: "food", sub: "Sucré", section: "Snacks", name: "Sucette acidulée", desc: "", price: "1.50€" },

  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Cookie au chocolat", desc: "", price: "4€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Cookie au caramel et noix de pécan", desc: "", price: "4€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes au sucre (2 pièces)", desc: "", price: "4.50€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes cassonade (2 pièces)", desc: "", price: "4.50€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes au sucre (2 pièces)", desc: "", price: "4.50€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes au Nutella (2 pièces)", desc: "", price: "4.50€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes cassonade (2 pièces)", desc: "", price: "4.50€" },
  { main: "food", sub: "Sucré", section: "Pâtisseries", name: "Crêpes Mikado (2 pièces)", desc: "", price: "5.50€" },

  { main: "food", sub: "Sucré", section: "Glaces", name: "Magnum chocolat noir", desc: "", price: "3€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Magnum chocolat blanc", desc: "", price: "3€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Magnum noisette", desc: "", price: "3€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Cornetto classique", desc: "", price: "2.50€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Ben&Jerry’s cookie dough", desc: "", price: "3.50€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Racket Rocket", desc: "", price: "1.50€" },
  { main: "food", sub: "Sucré", section: "Glaces", name: "Twister", desc: "", price: "2.50€" },

  { main: "food", sub: "Salé", section: "Snacks", name: "Chips", desc: "", price: "2€" },
  { main: "food", sub: "Salé", section: "Snacks", name: "Nachos", desc: "", price: "3€" },
  { main: "food", sub: "Salé", section: "Snacks", name: "Sauce fromagère", desc: "", price: "1€" },
  { main: "food", sub: "Salé", section: "Snacks", name: "Sauce tomate", desc: "", price: "1€" },
  { main: "food", sub: "Salé", section: "Snacks", name: "Aoste pure porc", desc: "", price: "3€" },
  { main: "food", sub: "Salé", section: "Snacks", name: "Aoste stick noix", desc: "", price: "4.50€" },

  { main: "food", sub: "Salé", section: "Petite restauration", name: "Bitterballen (8 pièces)", desc: "", price: "7€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Croque-Monsieur (1 pièce)", desc: "", price: "4.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Nuggets (8 pièces)", desc: "", price: "7€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Panini jambon fromage", desc: "", price: "6€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Panini poulet pesto", desc: "", price: "6€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Panini tomate mozzarella", desc: "", price: "6€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Pizzella 4 fromages", desc: "", price: "8.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Pizzella margherita", desc: "", price: "7.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Pizzella pepperoni", desc: "", price: "8.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Pizzella proscuitto", desc: "", price: "8.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Portion de frites", desc: "", price: "3.50€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Snack mix (12 pièces)", desc: "", price: "11€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Mozzarella fingers (6 pièces)", desc: "", price: "4.00€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Portion de frites + Mozzarella fingers", desc: "", price: "7€" },
  { main: "food", sub: "Salé", section: "Petite restauration", name: "Portion de frites + Nuggets", desc: "", price: "10€" },
];

// ======= State =======
let selectedMain = "soft";
let selectedSub = null;
let searchTerm = "";

// ======= DOM =======
const categoryRow = document.getElementById("categoryRow");
const subcatRow = document.getElementById("subcatRow");
const menuList = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

// ======= Init =======
renderCategories();
renderSubcats();
renderList();

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  clearSearch.style.display = searchTerm ? "block" : "none";
  renderList();
});

clearSearch.addEventListener("click", () => {
  searchTerm = "";
  searchInput.value = "";
  clearSearch.style.display = "none";
  renderList();
});

// ======= UI Rendering =======
function renderCategories() {
  categoryRow.innerHTML = "";

  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `catBtn ${cat.id === selectedMain ? "selected" : ""}`;
    btn.type = "button";
    btn.setAttribute("aria-label", cat.label);
    btn.innerHTML = cat.icon;

    btn.addEventListener("click", () => {
      selectedMain = cat.id;
      selectedSub = null;
      renderCategories();
      renderSubcats();
      renderList();
    });

    categoryRow.appendChild(btn);
  });
}

function renderSubcats() {
  const subs = SUBCATS[selectedMain] || null;

  if (!subs) {
    selectedSub = null;
    subcatRow.innerHTML = "";
    return;
  }

  if (!selectedSub || !subs.includes(selectedSub)) {
    selectedSub = subs[0];
  }

  subcatRow.innerHTML = subs
    .map((s) => `<button class="pill ${s === selectedSub ? "selected" : ""}" type="button">${escapeHtml(s)}</button>`)
    .join("");

  [...subcatRow.querySelectorAll(".pill")].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      selectedSub = subs[i];
      renderSubcats();
      renderList();
    });
  });
}

function renderList() {
  let rows;

  // ✅ Si on recherche: on cherche dans TOUTES les catégories
  if (searchTerm) {
    rows = ITEMS.slice();
  } else {
    // comportement normal: seulement la catégorie sélectionnée
    rows = ITEMS.filter((it) => it.main === selectedMain);
    if (selectedSub) rows = rows.filter((it) => it.sub === selectedSub);
  }

  // Filtre de recherche
  if (searchTerm) {
    rows = rows.filter((it) => {
      const a = (it.name || "").toLowerCase();
      const b = (it.desc || "").toLowerCase();
      const c = (it.section || "").toLowerCase();
      const d = (it.sub || "").toLowerCase();
      return a.includes(searchTerm) || b.includes(searchTerm) || c.includes(searchTerm) || d.includes(searchTerm);
    });
  }

  if (rows.length === 0) {
    menuList.innerHTML = `<div class="emptyState">Aucun résultat.</div>`;
    return;
  }

  // Si recherche: on regroupe pour que ce soit lisible
  let html = "";

  if (searchTerm) {
    const mainLabel = {
      soft: "Soft",
      hot: "Boissons chaudes",
      alcohol: "Boissons alcoolisées",
      food: "Nourriture",
    };

    rows.sort((x, y) => {
      const ax = `${x.main}|${x.sub || ""}|${x.section || ""}|${x.name || ""}`.toLowerCase();
      const ay = `${y.main}|${y.sub || ""}|${y.section || ""}|${y.name || ""}`.toLowerCase();
      return ax.localeCompare(ay, "fr");
    });

    let currentMain = null;
    let currentSub = null;
    let currentSection = null;

    for (const it of rows) {
      if (it.main !== currentMain) {
        currentMain = it.main;
        currentSub = null;
        currentSection = null;
        html += `<div class="sectionTitle">${escapeHtml(mainLabel[currentMain] || currentMain)}</div>`;
      }

      if (it.sub && it.sub !== currentSub) {
        currentSub = it.sub;
        currentSection = null;
        html += `<div class="subTitle">${escapeHtml(currentSub)}</div>`;
      }

      if (it.section && it.section !== currentSection) {
        currentSection = it.section;
        html += `<div class="miniTitle">${escapeHtml(currentSection)}</div>`;
      }

      html += itemHtml(it);
    }

    menuList.innerHTML = html;
    return;
  }

  // Sans recherche: comportement normal (sections dans la catégorie)
  let currentSection = null;

  for (const it of rows) {
    if (it.section && it.section !== currentSection) {
      currentSection = it.section;
      html += `<div class="sectionTitle">${escapeHtml(currentSection)}</div>`;
    }

    html += itemHtml(it);
  }

  menuList.innerHTML = html;
}

function itemHtml(it) {
  return `
    <article class="itemCard">
      <div class="itemLeft">
        <h3 class="itemTitle">${escapeHtml(it.name)}</h3>
        <p class="itemDesc ${it.main === 'hot' ? 'coffeeDesc' : ''}">
          ${escapeHtml(it.desc || "")}
        </p>
      </div>
      <div class="itemPrice">${escapeHtml(it.price || "")}</div>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

/* --- Icons (SVG inline) --- */
function iconSoft() {
  return `
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M18 18h28v6c0 6-5 11-11 11h-6c-6 0-11-5-11-11v-6z" stroke="currentColor" stroke-width="3" />
    <path d="M24 18V12h16v6" stroke="currentColor" stroke-width="3" />
    <path d="M22 35v14c0 5 4 9 9 9h2c5 0 9-4 9-9V35" stroke="currentColor" stroke-width="3" />
    <path d="M44 26h6c3 0 6 3 6 6s-3 6-6 6h-6" stroke="currentColor" stroke-width="3" />
  </svg>`;
}

function iconHot() {
  return `
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M18 26h28v16c0 6-5 11-11 11H29c-6 0-11-5-11-11V26z" stroke="currentColor" stroke-width="3"/>
    <path d="M46 30h4c4 0 8 3 8 8s-4 8-8 8h-4" stroke="currentColor" stroke-width="3"/>
    <path d="M22 56h24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 10c-3 3-3 6 0 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M34 10c-3 3-3 6 0 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 10c-3 3-3 6 0 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function iconBeerWine() {
  return `
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M18 12h14v18c0 6-4 10-7 10s-7-4-7-10V12z" stroke="currentColor" stroke-width="3"/>
    <path d="M25 40v12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M18 52h14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M40 14h6c3 0 6 3 6 6v10c0 8-4 14-9 14h-3V14z" stroke="currentColor" stroke-width="3"/>
    <path d="M40 44h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function iconFood() {
  return `
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M18 10v18c0 4 3 7 7 7v19" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M25 10v25" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 10v18c0 4-3 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 10v44" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 10c0 10-8 10-8 20v24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}