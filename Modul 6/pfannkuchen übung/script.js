function getInputIngredient(){
    let menge = document.getElementById('menge').value;
    let name = document.getElementById('name').value;
    addIngredient(menge,name);
    document.getElementById('menge').value='';
    document.getElementById('name').value='';
}

function addAll(){
    addIngredient('2','Eier');
    addIngredient('200g','Milch');
    addIngredient('200g','Mehl');
    addIngredient('1 Prise','Salz');
}

function addIngredient(menge, name){
    document.getElementById('table').innerHTML+=`<tr>
    <td>${menge}</td>
    <td>${name}</td>
</tr>`;
}