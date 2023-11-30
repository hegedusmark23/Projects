function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function showMenu() {
  document.getElementById('menu').classList.add('show-overlay-menu');
}

function closeMenu() {
  document.getElementById('menu').classList.remove('show-overlay-menu');
}


let amounts = [

  [1, 3, 1, 1, 50, 0.5, 750, 200, 1, 1],
  [500, 100, 200, 4, 2, 3, 2],
  [500, 1, 2, 250, 100, 2, 200, 200, 200, 3],
  [500, 250, 100, 2, 4, 1, 1, 2, 2, 500, 0.5, 3],
  [125, 2, 1, 3, 3, 1, 1, 1, 3, 600, 350],
]

let ingredients = [
  ["EL Butterschmalz",
    "große Zwiebeln",
    "EL Tomatenmark",
    "Karotte",
    "gr Knollensellerie",
    "l Rotwein",
    "gr Rindfleisch",
    "ml Rinderbrühe",
    "TL Paprikapulver edelsüß",
    "TL Paprikapulver rosenscharf"],

  ['gr Mascarpone',
    'gr Puderzucker',
    'gr Löffelbiskuits',
    'Eigelb',
    'Eiweiß',
    'Tassen gekochter Kaffee',
    'EL Amaretto'],

  ['g Weizenmehl, bei Bedarf auch mehr',
    'Würfel Hefe',
    'TL Salz',
    'ml Wasser, lauwarmes',
    'gr ml Milch, lauwarme',
    'TL Zucker',
    'g Käse, geriebener',
    'g saure Sahne',
    'g Schmand',
    'TL Knoblauchzehe(n)'],

  ['g Spitzpaprika, gelb',
    'g Mett oder Gehacktes vom Schwein',
    'g Reis, roh gewogen, vorgaren',
    'Zwiebel(n), gewürfelt',
    'Zehe/n Knoblauch, zerdrückt',
    'Ei(er)',
    'Scheibe/n Weißbrot oder Brötchen, eingeweicht',
    'EL, gestr. Paprikapulver, geräuchert',
    'EL Olivenöl',
    'ml Brühe, aus Vegeta (oder Gemüsebrühe)',
    'Tube/n Tomatenmark',
    'Stiele Petersilie, glatt, gehackt'],

  ['gr Butter',
    'große Zwiebeln',
    'EL Tomatenmark',
    'Karotten',
    'Stangen Staudensellerie',
    'kg Rinderhackfleisch',
    'Schuss Weißwein',
    'Dose Tomaten',
    'Zehen Knoblauch',
    'gr Spaghetti',
    'ml Milch'
  ],

]


function calculate(recipeIndex) {
  let inputVal = document.getElementById('inputField').value;
  document.getElementById('list').innerHTML = '';
    if (inputVal <= 0) {
      inputVal = 4
      alert('Bitte ein Zahl über 0 Eingeben');
    }

    if (inputVal >= 12) {
      inputVal = 4
      alert('Bitte ein Zahl unter 12 Eingeben');
    }

    if (recipeIndex >= 0 && recipeIndex < amounts.length) {
      for (let i = 0; i < amounts[recipeIndex].length; i++) {
        const amount = amounts[recipeIndex][i];
        const ingredient = ingredients[recipeIndex][i];
        const result = (amount / 4) * inputVal;

        document.getElementById('list').innerHTML += `<li>${result} ${ingredient}</li>`;
      }
    } 
  
}


