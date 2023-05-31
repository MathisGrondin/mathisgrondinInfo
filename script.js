let heure = document.getElementById('heure');
let date = document.getElementById('date');
let temps;
let h;
let m;
let s;

let auj = new Date();
let choixfond = document.getElementById('choixFond');

let card = document.getElementById('carte');
let card1 = document.getElementById('carte1');
let card2 = document.getElementById('carte2');
let texte = document.getElementById('texte');
let mode = document.getElementById('mode');
let mode2 = document.getElementById('mode2');

let formats = document.createElement('div');
formats.setAttribute('class', 'flex-column align-self-end d-flex justify-content-evenly align-items-center h-100 w-25 border-bottom-0 border-start-1 border-end-0 border-top-0 border-white');
formats.setAttribute('id', 'formV2');

let am = document.createElement('h6');
am.setAttribute('id', 'am');
am.innerHTML = 'AM';
am.setAttribute('class', 'text-secondary fs-3');

let pm = document.createElement('h6');
pm.setAttribute('id', 'pm');
pm.innerHTML = 'PM';
pm.setAttribute('class', 'text-secondary fs-3');

formats.appendChild(am);
formats.appendChild(pm);


mode2.addEventListener('mousedown', function(){
    if(mode2.innerHTML === 'visibility'){
        // card.style.border = 'none';
        card1.style.border = 'none';
        card2.style.border = 'none';
        document.getElementById('jour').setAttribute('class', 'border-0 card-footer text-center');
        formats.setAttribute('class', 'flex-column align-self-end d-flex justify-content-evenly align-items-center h-100 w-25 border-0');
        texte.style.color = 'var(--couleur)';
        texte.style.visibility = 'hidden';
        mode2.innerHTML = 'visibility_off';
    }
    else if(mode2.innerHTML === 'visibility_off'){
        // card.style.border = '1px solid var(--couleur)';
        card1.style.border = '1px solid var(--couleur)';
        card2.style.border = '1px solid var(--couleur)';
        texte.style.visibility = 'visible';
        document.getElementById('jour').setAttribute('class', 'border-1 card-footer text-center');
        formats.setAttribute('class', 'flex-column align-self-end d-flex justify-content-evenly align-items-center h-100 w-25 border-bottom-0 border-start-1 border-end-0 border-top-0 border-white');
        texte.style.color = 'var(--couleur)';
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

function time24(){
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    heure.innerHTML = format(h) + ":" + format(m) + ":"  + format(s);

}


let mois = ['RIEN', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

console.log(format(auj.getDate()) + " " + mois[(auj.getMonth() + 1)] + " " + auj.getFullYear());
date.innerHTML = format(auj.getDate()) + " " + mois[(auj.getMonth() + 1)] + " " + auj.getFullYear();

let dateSimplifiee = document.getElementById('dateSimplifiee');


let body = document.getElementById('body');

let boutFond = document.getElementById('boutFond');

choixfond.addEventListener('change', function(){
    document.documentElement.style.setProperty('--background', choixfond.value);
    document.documentElement.style.setProperty('--couleur', 'white');
});

let formatHeure = document.getElementById('format');

function time12(){
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    if(h > 12){
        h = h - 12;
        am.setAttribute('class', 'text-secondary fs-3');
        pm.setAttribute('class', 'text-white fs-3');
    }
    else if(h === 12){
        am.setAttribute('class', 'text-secondary fs-3');
        pm.setAttribute('class', 'text-white fs-3');
    }
    else if(h < 12){
        am.setAttribute('class', 'text-secondary fs-3');
        pm.setAttribute('class', 'text-white fs-3');
    }

    heure.innerHTML = format(h) + ":" + format(m) + ":"  + format(s);
}
var formatTemps;
function setFormat(value){
    
    if(value === '12'){
        document.getElementById('carte2').appendChild(formats);
        clearInterval(formatTemps);
        formatTemps = setInterval(time12, 1000);
    }
    else if(value === '24'){
        document.getElementById('carte2').removeChild(formats);
        clearInterval(formatTemps);
        formatTemps = setInterval(time24, 1000);
    }
}

setFormat('12');

formatHeure.addEventListener('change', function(){
    clearInterval(formatTemps);
    setFormat(formatHeure.value);
});