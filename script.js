window.onscroll = function(){ // beim Scrollen aktivieren
    let shoppingCart = document.getElementById('shoppingCart'); // Variable definieren
    console.log('Hallo');
    if(window.scrollY > 0) { // sobald 1px bewegt
        shoppingCart.style = 'top: 0'; // Einkaufswagen 0px Abstand
    } else { // wenn nicht, dann 
        shoppingCart.style = 'top: 100px'; // Abstand von Oben 100px
    }
}
