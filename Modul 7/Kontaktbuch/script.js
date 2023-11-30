let names = [];
let phoneNumbers = [];
load();


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += /*html*/ `<h1>My Contacts</h1>`;
    content.innerHTML +=  /*html*/`
<div>
    <input id="input-name" type="text" placeholder="Name">
    <input id="input-tel" type="number" placeholder="Tel">
    <button onclick="addContact()">Add Contact</button>
</div>`;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML +=  /*html*/`
    <div class="contact">
        <b>Name: </b> ${names[i]} <br>
        <b>Telefon: </b> ${phoneNumbers[i]} <br>
        <button onclick="deleteContact()">Löschen</button>
    </div>
    `;
    }

    
}

function addContact() {
    let name = document.getElementById('input-name');
    let phoneNumber = document.getElementById('input-tel');

    names.push(name.value);
    phoneNumbers.push(phoneNumber.value);

    render();
    save();

}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);

    render();
    save();
}

function save(){
    let namesAsText = JSON.stringify(names)
    let numbersAsText = JSON.stringify(phoneNumbers)
    localStorage.setItem('names', namesAsText);
    localStorage.setItem('phoneNumbers', numbersAsText);
}

function load(){
    let namesAsText = localStorage.getItem('names');
    let numbersAsText = localStorage.getItem('phoneNumbers')
    if (namesAsText && numbersAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(numbersAsText);
    }
}
