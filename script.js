let heure = document.getElementById('heure');
let date = document.getElementById('date');
let temps;
let h;
let m;
let s;

let auj = new Date();


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