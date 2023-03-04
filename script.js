window.onscroll = function () { // beim Scrollen aktivieren
    let shoppingCart = document.getElementById('shoppingCart'); // Variable definieren
    console.log('Hallo');
    if (window.scrollY > 0) { // sobald 1px bewegt
        shoppingCart.style = 'top: 0'; // Einkaufswagen 0px Abstand
    } else { // wenn nicht, dann 
        shoppingCart.style = 'top: 100px'; // Abstand von Oben 100px
    }
}

function addToBacket(food, price, amount) { // Elemente, die man im Warenkorb brauch, amount immer auf 1 setzen
    let index = backet.indexOf(food); // 0 für Mozzarella Sticks
    if (index == -1) {

    } else {
        amount[index]++;
    }
}
