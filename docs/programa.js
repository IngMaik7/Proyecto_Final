/*<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

*/

let a=5
if (a==10){
    console.log("Salida")
}
else{
    console.log("Entrada")
}

//Ciclos
let x;

for(let x=0;x<10;x++){
    console.log(x)
}

//While
while(x<20){
    console.log(x)
    x++;
}

// Crear un objeto que haga referencia a un elemento de mi pag WEB.

let miObjeto=document.getElementById(miEtiqueta)
