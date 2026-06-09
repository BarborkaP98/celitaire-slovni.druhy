let hraVety = [];
let aktualniIndex = 0;
let vybranaKarta = null;
let tazenaKarta = null;
let uroven = 1;

// ✅ povolené druhy podle levelu
function povoleneDruhy() {

  if (uroven === 1) {
    return ["podstatné jméno", "sloveso", "předložka", "spojka"];
  }

  if (uroven === 2) {
    return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno"];
  }

  if (uroven === 3) {
    return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno", "příslovce"];
  }

  return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno", "příslovce", "zájmeno", "číslovka"];
}

// ✅ DATA
let data = [
  {
    veta: "Tatínek vaří večeři.",
    slova: [
      { text: "Tatínek", druh: "podstatné jméno" },
      { text: "vaří", druh: "sloveso" },
      { text: "večeři", druh: "podstatné jméno" }
    ]
  },
  {
    veta: "Oběd jíme u stolu.",
    slova: [
      { text: "Oběd", druh: "podstatné jméno" },
      { text: "jíme", druh: "sloveso" },
      { text: "u", druh: "předložka" },
      { text: "stolu", druh: "podstatné jméno" }
    ]
  },
  {
    veta: "Pes běží rychle na zahradu.",
    slova: [
      { text: "Pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]
  },
  {
    veta: "Velký pes běží na zahradu.",
    slova: [
      { text: "Velký", druh: "přídavné jméno" },
      { text: "pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]
  }
];

// ✅ GENERUJ
function generuj() {
  hraVety = [];
  aktualniIndex = 0;

  while (hraVety.length < 3) {
    let r = data[Math.floor(Math.random() * data.length)];
    if (!hraVety.includes(r)) {
      hraVety.push(r);
    }
  }

  document.getElementById("veta").innerText = "";
  document.getElementById("aktualni-karta").innerHTML = "";
}

// ✅ karta
function vytvorKartu(text, vysledek) {
  let karta = document.createElement("div");
  karta.className = "karta";
  karta.innerText = text;
  karta.dataset.v = vysledek;

  karta.addEventListener("click", () => {
    document.querySelectorAll(".karta").forEach(k => k.style.border = "none");
    karta.style.border = "2px solid red";
    vybranaKarta = karta;
  });

  return karta;
}

// ✅ LÍZNI
function lizniKartu() {

  if (aktualniIndex >= hraVety.length) {
    document.getElementById("veta").innerText = "Konec hry ✅";
    return;
  }

  let vetaObj = hraVety[aktualniIndex];
  let povolene = povoleneDruhy();

  document.getElementById("veta").innerText = vetaObj.veta;

  let zona = document.getElementById("aktualni-karta");
  zona.innerHTML = "";

  vetaObj.slova.forEach(s => {
    if (povolene.includes(s.druh)) {
      zona.appendChild(vytvorKartu(s.text, s.druh));
    }
  });

  aktualniIndex++;
}

// ✅ přesun
function presun(sloupec, karta) {
  if (karta.parentElement && karta.parentElement.classList.contains("sloupec")) {
    karta.remove();
  }

  if (sloupec.innerHTML === "") {
    let n = document.createElement("div");
    n.innerText = karta.dataset.v;
    n.style.fontWeight = "bold";
    sloupec.appendChild(n);
  }

  sloupec.appendChild(karta);
  vybranaKarta = null;
}

// ✅ init
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".sloupec").forEach(sloupec => {
    sloupec.addEventListener("click", () => {
      if (vybranaKarta) presun(sloupec, vybranaKarta);
    });
  });

  generuj();
});

// ✅ změna levelu
function nastavUroven(u) {
  uroven = u;
  novaHra();
}

// ✅ nová hra
function novaHra() {
  document.querySelectorAll(".sloupec").forEach(s => {
    s.innerHTML = "";
    s.style.background = "#c8e6c9";
  });

  generuj();
}
