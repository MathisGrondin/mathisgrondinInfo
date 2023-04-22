let heure = document.getElementById('heure');
let date = document.getElementById('date');
let temps;
let h;
let m;
let s;

let auj = new Date();

let card = document.getElementById('carte');
let card1 = document.getElementById('carte1');
let card2 = document.getElementById('carte2');
let texte = document.getElementById('texte');
let mode = document.getElementById('mode');
let mode2 = document.getElementById('mode2');

mode.addEventListener('mousedown', function(){
    if(mode.innerHTML === 'light_mode'){
        document.documentElement.style.setProperty('--couleur', 'black');
        document.documentElement.style.setProperty('--background', 'white');
        mode.innerHTML = 'dark_mode';
    }
    else if(mode.innerHTML === 'dark_mode'){
        document.documentElement.style.setProperty('--couleur', 'gray');
        document.documentElement.style.setProperty('--background', 'black');
        mode.innerHTML = 'star';
    }
    else if(mode.innerHTML === 'star'){
        document.documentElement.style.setProperty('--couleur', 'lightblue');
        document.documentElement.style.setProperty('--background', 'darkblue');
        mode.innerHTML = 'light_mode'
    }
})

mode2.addEventListener('mousedown', function(){
    if(mode2.innerHTML === 'visibility'){
        // card.style.border = 'none';
        card1.style.border = 'none';
        card2.style.border = 'none';
        texte.style.visibility = 'hidden';
        mode2.innerHTML = 'visibility_off';
    }
    else if(mode2.innerHTML === 'visibility_off'){
        // card.style.border = '1px solid var(--couleur)';
        card1.style.border = '1px solid var(--couleur)';
        card2.style.border = '1px solid var(--couleur)';
        texte.style.visibility = 'visible';
        mode2.innerHTML = 'visibility';
    }
})

function format(nombre){
    let nombre2 = "" + nombre;
    if(nombre2.length < 2){
        nombre2 = "0" + nombre;
    }
    return nombre2;
}

function time(){
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    heure.innerHTML = format(h) + ":" + format(m) + ":"  + format(s);
}

setInterval(time,1000);

let mois = ['RIEN', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

console.log(format(auj.getDate()) + " " + mois[(auj.getMonth() + 1)] + " " + auj.getFullYear());
date.innerHTML = format(auj.getDate()) + " " + mois[(auj.getMonth() + 1)] + " " + auj.getFullYear();

let dateSimplifiee = document.getElementById('dateSimplifiee');

dateSimplifiee.innerHTML = format(auj.getDate()) + " / " + format(auj.getMonth() + 1) + " / " + auj.getFullYear()

