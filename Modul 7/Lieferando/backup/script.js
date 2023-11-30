let foods = [
    {
        'name': 'Pizza Mexican',
        'price': 14.90,
        'ingredients': 'Tomatensauce, Hähnchenbrustfilets, Jalapenos, Mozzarella, roten Zwiebeln, grüner Paprika, Tomaten und Srirach',
        'icon': './img/mexicana.webp',
    },
    {
        'name': 'Pizza Havaii',
        'price': 15.00,
        'ingredients': 'Tomatensauce, Schinken, extra viel Mozzarella und Ananas',
        'icon': './img/pizza-hawaii.png'
    },
    {
        'name': 'Pizza Salami',
        'price': 13.00,
        'ingredients': 'Tomatensauce, extra viel Mozzarella und Salami',
        'icon': './img/pizza-salami.png'
    },
]

let basket = [];
let articleAmount = [];
let prices = [];
let lieferkosten = [1.99]

function totalSum() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    } 
    let totalSum = sum + 1.99;
    document.getElementById('sum').innerHTML = `
    Zwischensumme: <b>${sum.toFixed(2)}€</b><br>
    Lieferkosten: <b>${lieferkosten}€</b><br>
    Gesamtsumme: <b>${totalSum.toFixed(2)}€</b>`;
}

function updatedBasket(){
    document.getElementById('update-basket').innerHTML = "";
    for (let i = 0; i < basket.length; i++) {

        document.getElementById('update-basket').innerHTML += /*html*/`
        
        <div id='basket-item' class="">

            <div class="item-container">
                <img class="headline-icon" src=./img/minus-sign.png onclick='decreaseAmount(${i})'>    
                <p class="order-overview">${articleAmount[i]} <b>${basket[i]}:</b> ${prices[i].toFixed(2)}€</p>
                <img class="headline-icon" src=./img/plus.png onclick='increaseAmount(${i})'>
                <img class="headline-icon" src="./img/trash (1).png" onclick='removeFromCart(${i})'>
            </div>
           
            
        </div>`;
        
    }
}

function renderOderButton(){
    document.getElementById('order-button').innerHTML = /*html*/`
    <a class="button">Bestellen</a>
    `;
}

function removeFromCart(i){
    basket.splice(i,1);
    prices.splice(i,1);
    articleAmount.splice(i,1);
    
    
    if (basket <= 0) {
        renderEmptyBasket();
    }
    else{
    updatedBasket()
    totalSum() 
    }
    
}

function decreaseAmount(i){
    
    if (articleAmount[i] >= 2) {
        articleAmount[i]--;
        prices[i] = foods[i].price * articleAmount[i];
    } 
    

    updatedBasket();
    totalSum();
}

function increaseAmount(i){
if (articleAmount[i] >= 1) {
    articleAmount[i]++;
    prices[i] = foods[i].price * articleAmount[i];
}

updatedBasket();
totalSum();
}

function addToBasket(i) {
    let number = basket.indexOf(foods[i].name);

    if (number === -1) {
        basket.push(foods[i].name);
        prices.push(foods[i].price);
        articleAmount.push(1);
    } 
    else { 
        articleAmount[number]++;
        prices[number] = foods[i].price * articleAmount[number];
    }

    document.getElementById('sum').classList.add('sum-container');
    updatedBasket();

    totalSum();
    renderOderButton();
}

function renderMenu() {
    document.getElementById('menu').innerHTML = '';

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i]
        document.getElementById('menu').innerHTML += /*html*/`
            
            <div onclick="addToBasket(${i})" class="food-div">
                <div class="food-layout">
                    <span class="food-text">
                        <div class="name-info-div">
                            <p><b>${food['name']}</b></p>
                            <img class="headline-icon" src="./img/letter-i.png" alt="">
                        </div>
                        <p>mit ${food['ingredients']}</p>
                        <p class="smaller-text">Wahl aus: Ø 25cm, Ø 30cm oder Ø 35cm.</p>
                        <p><b>${food['price']} €</b></p>
                    </span>

                    <div>
                        <img class="food-icon" src="${food['icon']}" alt="">
                    </div>
                    
                </div>

                <div>
                    <img class="headline-icon" src="./img/plus.png" alt="">
                </div>

            </div>

        `;

    }

    renderEmptyBasket();
}

function renderEmptyBasket(){

    document.getElementById('basket').innerHTML =/*html*/ `
    <h2>Warenkorb</h2>
            <div id="update-basket" class="basket-description">
                <img class="bigger-shoppingbag" src="./img/shopping-bag (2).png" alt="">
                <h3>Fülle deinen Warenkorb</h3>
                <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
            </div>
            <div class="sum-container" id="sum"></div>
            <div id="order-button"></div>
            
    `;

    document.getElementById('sum').classList.remove('sum-container');

}
