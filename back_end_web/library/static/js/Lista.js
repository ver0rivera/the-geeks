const materialsName = ["Distribuciones muestrales"];
const materialsURL = [""] 
var misCookies = document.cookie;
var listaCookies = misCookies.split(";")

var lista = document.getElementById("listaPins");
var listaMediaQuery= document.getElementById("listaPinsMediaQuery");
lista.innerHTML=  "<li class='has-subnav'> <a> <i class='fa fa-list fa-2x'></i><span class='nav-text'>Archivos pineados</span></a></li>";
let url = window.location.href;



for (let i in listaCookies) {
    var valoresCookie = listaCookies[i].split("=");
    var nombreCookie = valoresCookie[1].split(",");
    for (let j in materialsName) {
        //if (nombreCookie[0] === materialsName[j]) {
            console.log("Existe la cookie "+materialsName[j]);
            var fila="<li><a href="+url+"> <i class='fa fa-folder-open fa-2x'></i><span class='nav-text'>"+materialsName[j]+"</span></a></li>";
            var fila2="<a href='materias.html'>"+materialsName[j]+"</a> "; //falta cambiar el href por cada pagina
            var btn = document.createElement("li");
            var btn2 = document.createElement("a");
            btn.innerHTML=fila;
            btn2.innerHTML=fila2;
            document.getElementById("listaPins").appendChild(btn);
            document.getElementById("listaPinsMediaQuery").appendChild(btn2); //Distribuciones Muestrales.html o DistribucionesMuestrales
      //  }
    }
}



