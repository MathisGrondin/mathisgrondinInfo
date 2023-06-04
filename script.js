// Variables
var formatTemps;
let heure           = document.getElementById('heure');
let date            = document.getElementById('date');
let choixfond       = document.getElementById('choixFond');
let card            = document.getElementById('carte');
let card1           = document.getElementById('carte1');
let card2           = document.getElementById('carte2');
let card3           = document.getElementById('carte3');
let texte           = document.getElementById('texte');
let mode            = document.getElementById('mode');
let mode2           = document.getElementById('mode2');
let jour            = document.getElementById('jour');
let formatHeure     = document.getElementById('format');
let boutOpt         = document.getElementById('boutOpt');
let rowTop          = document.getElementById('rTop');
let texte2          = document.getElementById('texte');
let info2           = document.getElementById('info2');
let menu            = document.getElementById('menu');
let rBas            = document.getElementById('rBas');
let info            = document.getElementById('info');
let dateSimplifiee  = document.getElementById('dateSimplifiee');
let body            = document.getElementById('body');
let boutFond        = document.getElementById('boutFond');
let mois = ['RIEN', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
let temps;
let h;
let m;
let s;
let auj             = new Date();
let state           = false;

// Affichage du AM PM dans format 12h
let formats = document.createElement('div');
formats.setAttribute('class', 'flex-column align-self-end d-flex justify-content-evenly align-items-center h-100 w-25 border-bottom-0 border-start-1 border-end-0 border-top-0');
formats.setAttribute('id', 'formV2');

let am = document.createElement('h6');
am.setAttribute('id', 'am');
am.innerHTML = 'AM';
am.setAttribute('class', 'fs-3');

let pm = document.createElement('h6');
pm.setAttribute('id', 'pm');
pm.innerHTML = 'PM';
pm.setAttribute('class', 'fs-3');

formats.appendChild(am);
formats.appendChild(pm);


// Choix de l'affichage de l'interface
mode2.addEventListener('mousedown', function(){
    if(document.getElementById('mot').innerHTML === 'visibility'){
        card1.setAttribute('class', 'card-header text-center border-0');
        card2.style.display = 'none';
        document.getElementById('cardBody').setAttribute('class', 'card-body border border-0');
        document.getElementById('jour').setAttribute('class', 'border border-0 card-footer text-center');
        formats.setAttribute('class', 'flex-column align-self-end d-flex justify-content-evenly align-items-center h-100 w-25 border-0');
        texte.style.color = 'var(--couleur)';
        texte.style.visibility = 'hidden';
        document.getElementById('mot').innerHTML = 'visibility_off';
    }
    else if(document.getElementById('mot').innerHTML === 'visibility_off'){
        card1.setAttribute('class', 'card-header text-center border-1 border border-perso');
        card2.style.display = 'none';
        card3.style.display = 'block';
        document.getElementById('cardBody').setAttribute('class', 'card-body border border-2 border-perso');
        jour.setAttribute('class', 'card-footer text-center border border-2 border-perso');
        document.getElementById('texte').style.visibility = 'visible';
        document.getElementById('mot').innerHTML = 'visibility';
    }
})

// Fonction pour le formatage de l'heure 
function format(nombre){
    let nombre2 = "" + nombre;
    if(nombre2.length < 2){
        nombre2 = "0" + nombre;
    }
    return nombre2;
}

// Fonction pour mettre l'heure en format 24h
function time24(){
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    heure.innerHTML = format(h) + ":" + format(m) + ":"  + format(s);
}

// Définition de la date
date.innerHTML = format(auj.getDate()) + " " + mois[(auj.getMonth() + 1)] + " " + auj.getFullYear();

// Fonction pour le choix de la couleur de fond
choixfond.addEventListener('change', function(){
    document.documentElement.style.setProperty('--background', choixfond.value);
    document.documentElement.style.setProperty('--couleur', !choixfond.value);
});

// Fonction pour mettre l'heure en format 12h
function time12(){
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    if(h > 12){
        h = h - 12;
        am.style.color = choixfond.value;
        pm.style.color = !choixfond.value;
    }
    else if(h === 12){
        am.style.color = !choixfond.value;
        pm.style.color = choixfond.value;
    }
    else if(h < 12){
        am.style.color = 'var(--couleur)';
        pm.style.color = choixfond.value;
    }

    heure.innerHTML = format(h) + ":" + format(m) + ":"  + format(s);
}

// Fonction pour le choix de l'heure
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

// Appel de la fonction setFormat pour mettre le format par défaut à 12h
setFormat('12');

// changement du format de l'heure
formatHeure.addEventListener('change', function(){
    clearInterval(formatTemps);
    setFormat(formatHeure.value);
});

// Affichage des options
boutOpt.addEventListener('click', function(){
    if(state == true){
        card2.style.display = 'flex';
        document.getElementById('carte3').style.display = 'none';
        document.getElementById('jour').style.display = 'block';
        document.getElementById('logo').innerHTML = 'menu';
        document.getElementById('texteOpt').innerHTML = 'Options';
        texte2.innerHTML = 'Il est présentement';
        state = !state;
    }
    else if(state == false){
        texte2.innerHTML = 'Options';
        card2.style.display = 'none';
        document.getElementById('carte3').style.display = 'block';
        document.getElementById('jour').style.display = 'none';
        document.getElementById('logo').innerHTML = 'close';
        document.getElementById('texteOpt').innerHTML = 'Retour';
        state = !state;
    }
});