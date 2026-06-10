let hraVety = [];
let aktualniIndex = 0;
let vybranaKarta = null;
let uroven = 1;

// ✅ LEVELY
function povoleneDruhy() {
  if (uroven === 1) return ["podstatné jméno", "sloveso", "předložka", "spojka"];
  if (uroven === 2) return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno"];
  if (uroven === 3) return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno", "příslovce"];
  return ["podstatné jméno", "sloveso", "předložka", "spojka", "přídavné jméno", "příslovce", "zájmeno", "číslovka"];
}

// ✅ DATA – 48 VĚT
let data = {

  // 🟢 LEVEL 1
  1: [
    { veta: "Pes běží na zahradu.", slova: [
      { text: "Pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]},
    { veta: "Děti hrají na hřišti.", slova: [
      { text: "Děti", druh: "podstatné jméno" },
      { text: "hrají", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "hřišti", druh: "podstatné jméno" }
    ]},
    { veta: "Tatínek čte knihu.", slova: [
      { text: "Tatínek", druh: "podstatné jméno" },
      { text: "čte", druh: "sloveso" },
      { text: "knihu", druh: "podstatné jméno" }
    ]},
    { veta: "Miminko spí v postýlce.", slova: [
      { text: "Miminko", druh: "podstatné jméno" },
      { text: "spí", druh: "sloveso" },
      { text: "v", druh: "předložka" },
      { text: "postýlce", druh: "podstatné jméno" }
    ]},
    { veta: "Dědeček hraje karty.", slova: [
      { text: "Dědeček", druh: "podstatné jméno" },
      { text: "hraje", druh: "sloveso" },
      { text: "karty", druh: "podstatné jméno" }
    ]},
    { veta: "Kočka sedí na stromě.", slova: [
      { text: "Kočka", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Pes štěká a běží.", slova: [
      { text: "Pes", druh: "podstatné jméno" },
      { text: "štěká", druh: "sloveso" },
      { text: "a", druh: "spojka" },
      { text: "běží", druh: "sloveso" }
    ]},
    { veta: "Děti zpívají a tančí.", slova: [
      { text: "Děti", druh: "podstatné jméno" },
      { text: "zpívají", druh: "sloveso" },
      { text: "a", druh: "spojka" },
      { text: "tančí", druh: "sloveso" }
    ]},
    { veta: "Auto stojí u domu.", slova: [
      { text: "Auto", druh: "podstatné jméno" },
      { text: "stojí", druh: "sloveso" },
      { text: "u", druh: "předložka" },
      { text: "domu", druh: "podstatné jméno" }
    ]},
    { veta: "Maminka vaří oběd.", slova: [
      { text: "Maminka", druh: "podstatné jméno" },
      { text: "vaří", druh: "sloveso" },
      { text: "oběd", druh: "podstatné jméno" }
    ]},
    { veta: "Žák sedí ve třídě.", slova: [
      { text: "Žák", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "ve", druh: "předložka" },
      { text: "třídě", druh: "podstatné jméno" }
    ]},
    { veta: "Pták letí na strom.", slova: [
      { text: "Pták", druh: "podstatné jméno" },
      { text: "letí", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "strom", druh: "podstatné jméno" }
    ]}
  ],

  // 🔵 LEVEL 2
  2: [
    { veta: "Velký pes běží na zahradu.", slova: [
      { text: "Velký", druh: "přídavné jméno" },
      { text: "pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]},
    { veta: "Malé dítě kreslí obrázek.", slova: [
      { text: "Malé", druh: "přídavné jméno" },
      { text: "dítě", druh: "podstatné jméno" },
      { text: "kreslí", druh: "sloveso" },
      { text: "obrázek", druh: "podstatné jméno" }
    ]},
    { veta: "Červené auto stojí u domu.", slova: [
      { text: "Červené", druh: "přídavné jméno" },
      { text: "auto", druh: "podstatné jméno" },
      { text: "stojí", druh: "sloveso" },
      { text: "u", druh: "předložka" },
      { text: "domu", druh: "podstatné jméno" }
    ]},
    { veta: "Velká kočka sedí na stromě.", slova: [
      { text: "Velká", druh: "přídavné jméno" },
      { text: "kočka", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Malý pták letí na strom.", slova: [
      { text: "Malý", druh: "přídavné jméno" },
      { text: "pták", druh: "podstatné jméno" },
      { text: "letí", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "strom", druh: "podstatné jméno" }
    ]},
    { veta: "Starší děti hrají na hřišti.", slova: [
      { text: "Starší", druh: "přídavné jméno" },
      { text: "děti", druh: "podstatné jméno" },
      { text: "hrají", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "hřišti", druh: "podstatné jméno" }
    ]},
    { veta: "Chytrý žák sedí ve třídě.", slova: [
      { text: "Chytrý", druh: "přídavné jméno" },
      { text: "žák", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "ve", druh: "předložka" },
      { text: "třídě", druh: "podstatné jméno" }
    ]},
    { veta: "Divoký pes štěká a běží.", slova: [
      { text: "Divoký", druh: "přídavné jméno" },
      { text: "pes", druh: "podstatné jméno" },
      { text: "štěká", druh: "sloveso" },
      { text: "a", druh: "spojka" },
      { text: "běží", druh: "sloveso" }
    ]},
    { veta: "Malé děti zpívají a tančí.", slova: [
      { text: "Malé", druh: "přídavné jméno" },
      { text: "děti", druh: "podstatné jméno" },
      { text: "zpívají", druh: "sloveso" },
      { text: "a", druh: "spojka" },
      { text: "tančí", druh: "sloveso" }
    ]},
    { veta: "Lesklé auto jede na cestu.", slova: [
      { text: "Lesklé", druh: "přídavné jméno" },
      { text: "auto", druh: "podstatné jméno" },
      { text: "jede", druh: "sloveso" },
      { text: "na", druh: "předložka" },
      { text: "cestu", druh: "podstatné jméno" }
    ]},
    { veta: "Naše maminka vaří oběd.", slova: [
      { text: "Naše", druh: "přídavné jméno" },
      { text: "maminka", druh: "podstatné jméno" },
      { text: "vaří", druh: "sloveso" },
      { text: "oběd", druh: "podstatné jméno" }
    ]},
    { veta: "Jeho dědeček hraje karty.", slova: [
      { text: "Jeho", druh: "přídavné jméno" },
      { text: "dědeček", druh: "podstatné jméno" },
      { text: "hraje", druh: "sloveso" },
      { text: "karty", druh: "podstatné jméno" }
    ]}
  ],

  // 🟡 LEVEL 3
  3: [
    { veta: "Pes běží rychle na zahradu.", slova: [
      { text: "Pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]},
    { veta: "Děti si hrají venku.", slova: [
      { text: "Děti", druh: "podstatné jméno" },
      { text: "hrají", druh: "sloveso" },
      { text: "venku", druh: "příslovce" }
    ]},
    { veta: "Auto jede pomalu po silnici.", slova: [
      { text: "Auto", druh: "podstatné jméno" },
      { text: "jede", druh: "sloveso" },
      { text: "pomalu", druh: "příslovce" },
      { text: "po", druh: "předložka" },
      { text: "silnici", druh: "podstatné jméno" }
    ]},
    { veta: "Kočka sedí tiše na stromě.", slova: [
      { text: "Kočka", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "tiše", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Pták zpívá krásně na stromě.", slova: [
      { text: "Pták", druh: "podstatné jméno" },
      { text: "zpívá", druh: "sloveso" },
      { text: "krásně", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Děti běhají rychle po hřišti.", slova: [
      { text: "Děti", druh: "podstatné jméno" },
      { text: "běhají", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "po", druh: "předložka" },
      { text: "hřišti", druh: "podstatné jméno" }
    ]},
    { veta: "Žák píše pomalu ve třídě.", slova: [
      { text: "Žák", druh: "podstatné jméno" },
      { text: "píše", druh: "sloveso" },
      { text: "pomalu", druh: "příslovce" },
      { text: "ve", druh: "předložka" },
      { text: "třídě", druh: "podstatné jméno" }
    ]},
    { veta: "Pes štěká hlasitě a běží.", slova: [
      { text: "Pes", druh: "podstatné jméno" },
      { text: "štěká", druh: "sloveso" },
      { text: "hlasitě", druh: "příslovce" },
      { text: "a", druh: "spojka" },
      { text: "běží", druh: "sloveso" }
    ]},
    { veta: "Děti zpívají krásně a tančí.", slova: [
      { text: "Děti", druh: "podstatné jméno" },
      { text: "zpívají", druh: "sloveso" },
      { text: "krásně", druh: "příslovce" },
      { text: "a", druh: "spojka" },
      { text: "tančí", druh: "sloveso" }
    ]},
    { veta: "Auto stojí dlouho u domu.", slova: [
      { text: "Auto", druh: "podstatné jméno" },
      { text: "stojí", druh: "sloveso" },
      { text: "dlouho", druh: "příslovce" },
      { text: "u", druh: "předložka" },
      { text: "domu", druh: "podstatné jméno" }
    ]},
    { veta: "Maminka vaří rychle oběd.", slova: [
      { text: "Maminka", druh: "podstatné jméno" },
      { text: "vaří", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "oběd", druh: "podstatné jméno" }
    ]},
    { veta: "Dědeček hraje rád karty.", slova: [
      { text: "Dědeček", druh: "podstatné jméno" },
      { text: "hraje", druh: "sloveso" },
      { text: "rád", druh: "příslovce" },
      { text: "karty", druh: "podstatné jméno" }
    ]}
  ],

  // 🔴 LEVEL 4
  4: [
    { veta: "Černý pes běží rychle na zahradu.", slova: [
      { text: "Černý", druh: "přídavné jméno" },
      { text: "pes", druh: "podstatné jméno" },
      { text: "běží", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "zahradu", druh: "podstatné jméno" }
    ]},
    { veta: "Tiché dítě kreslí krásně obrázek.", slova: [
      { text: "Tiché", druh: "přídavné jméno" },
      { text: "dítě", druh: "podstatné jméno" },
      { text: "kreslí", druh: "sloveso" },
      { text: "krásně", druh: "příslovce" },
      { text: "obrázek", druh: "podstatné jméno" }
    ]},
    { veta: "Mourovatá kočka sedí tiše na stromě.", slova: [
      { text: "Mourovatá", druh: "přídavné jméno" },
      { text: "kočka", druh: "podstatné jméno" },
      { text: "sedí", druh: "sloveso" },
      { text: "tiše", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Drobný pták zpívá krásně na stromě.", slova: [
      { text: "Drobný", druh: "přídavné jméno" },
      { text: "pták", druh: "podstatné jméno" },
      { text: "zpívá", druh: "sloveso" },
      { text: "krásně", druh: "příslovce" },
      { text: "na", druh: "předložka" },
      { text: "stromě", druh: "podstatné jméno" }
    ]},
    { veta: "Veselé děti běhají rychle po hřišti.", slova: [
      { text: "Veselé", druh: "přídavné jméno" },
      { text: "děti", druh: "podstatné jméno" },
      { text: "běhají", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "po", druh: "předložka" },
      { text: "hřišti", druh: "podstatné jméno" }
    ]},
    { veta: "Klidný žák píše pomalu ve třídě.", slova: [
      { text: "Klidný", druh: "přídavné jméno" },
      { text: "žák", druh: "podstatné jméno" },
      { text: "píše", druh: "sloveso" },
      { text: "pomalu", druh: "příslovce" },
      { text: "ve", druh: "předložka" },
      { text: "třídě", druh: "podstatné jméno" }
    ]},
    { veta: "Rozzuřený pes štěká hlasitě a běží.", slova: [
      { text: "Rozzuřený", druh: "přídavné jméno" },
      { text: "pes", druh: "podstatné jméno" },
      { text: "štěká", druh: "sloveso" },
      { text: "hlasitě", druh: "příslovce" },
      { text: "a", druh: "spojka" },
      { text: "běží", druh: "sloveso" }
    ]},
    { veta: "Šťastné děti zpívají krásně a tančí.", slova: [
      { text: "Šťastné", druh: "přídavné jméno" },
      { text: "děti", druh: "podstatné jméno" },
      { text: "zpívají", druh: "sloveso" },
      { text: "krásně", druh: "příslovce" },
      { text: "a", druh: "spojka" },
      { text: "tančí", druh: "sloveso" }
    ]},
    { veta: "Umyté auto stojí dlouho u domu.", slova: [
      { text: "Umyté", druh: "přídavné jméno" },
      { text: "auto", druh: "podstatné jméno" },
      { text: "stojí", druh: "sloveso" },
      { text: "dlouho", druh: "příslovce" },
      { text: "u", druh: "předložka" },
      { text: "domu", druh: "podstatné jméno" }
    ]},
    { veta: "Moje maminka vaří rychle oběd.", slova: [
      { text: "Moje", druh: "přídavné jméno" },
      { text: "maminka", druh: "podstatné jméno" },
      { text: "vaří", druh: "sloveso" },
      { text: "rychle", druh: "příslovce" },
      { text: "oběd", druh: "podstatné jméno" }
    ]},
    { veta: "Náš dědeček hraje rád karty.", slova: [
      { text: "Náš", druh: "přídavné jméno" },
      { text: "dědeček", druh: "podstatné jméno" },
      { text: "hraje", druh: "sloveso" },
      { text: "rád", druh: "příslovce" },
      { text: "karty", druh: "podstatné jméno" }
    ]}
  ]
};

// ✅ GENERUJ
function generuj() {
  hraVety = [];
  aktualniIndex = 0;

  let seznam = data[uroven];

  while (hraVety.length < 3 && seznam.length > 0) {
    let r = seznam[Math.floor(Math.random() * seznam.length)];
    if (!hraVety.includes(r)) {
      hraVety.push(r);
    }
  }

  document.getElementById("veta").innerText = "";
}
// Vytvoř sloupec
function vytvorSloupce(vetaObj) {
  let container = document.getElementById("sloupce");
  container.innerHTML = ""; // smažeme staré

  let druhy = [];

  // zjistíme unikátní slovní druhy
  vetaObj.slova.forEach(s => {
    if (!druhy.includes(s.druh)) {
      druhy.push(s.druh);
    }
  });

  // vytvoříme sloupce
  druhy.forEach(druh => {
    let sloupec = document.createElement("div");
    sloupec.className = "sloupec";

    let nadpis = document.createElement("div");
    nadpis.innerText = druh;
    nadpis.style.fontWeight = "bold";

    sloupec.appendChild(nadpis);

    // klikání
    sloupec.addEventListener("click", () => {
      if (vybranaKarta) presun(sloupec, vybranaKarta);
    });

    container.appendChild(sloupec);
  });
}
// ✅ KARTA
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
 if (aktualniIndex === 0) {
  vytvorSloupce(vetaObj);
}
  let povolene = povoleneDruhy();

  document.getElementById("veta").innerText = vetaObj.veta;

  let zona = document.getElementById("aktualni-karta");
  

  vetaObj.slova.forEach(s => {
    if (povolene.includes(s.druh)) {
      zona.appendChild(vytvorKartu(s.text, s.druh));
    }
  });

if (aktualniIndex === 0) {
  vytvorSloupce(vetaObj);
}

aktualniIndex++;
}

// ✅ PŘESUN
function presun(sloupec, karta) {
if (karta.parentElement) {
  karta.parentElement.removeChild(karta);
}
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

// ✅ INIT
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sloupec").forEach(sloupec => {
    sloupec.addEventListener("click", () => {
      if (vybranaKarta) presun(sloupec, vybranaKarta);
    });
  });

  generuj();
});

// ✅ LEVEL
function nastavUroven(u) {
  uroven = u;
  novaHra();
}

// ✅ NOVÁ HRA
function novaHra() {
  document.querySelectorAll(".sloupec").forEach(s => {
    s.innerHTML = "";
  });

  generuj();
}
