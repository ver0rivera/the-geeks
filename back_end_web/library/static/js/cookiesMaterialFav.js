const tickMark = "<svg width=\"30\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
var divs = document.getElementsByClassName("buttonFavorito");
var divs2 = document.getElementsByClassName("buttonTextoFavorito");
var nombreMaterial = document.getElementById("titulo");

var fechaExpira = "31 Dec 2023 23:59:59 GMT";
var fechaBorrar = "1 Mar 1990 00:00:00 GMT";

var misCookies = document.cookie;
var listaCookies = misCookies.split(";")


for (let i in listaCookies) {
  var busca = listaCookies[i].search("checkbox"+nombreMaterial.innerHTML);
  if (busca > -1 && comprobarCookie(nombreMaterial.innerText.substring(1,nombreMaterial.innerHTML.length-2))) {   
    console.log("Existen ambas cookies"); 
    divs[0].innerHTML= "";
    break;
  }
  else if (busca > -1){
    divs[0].innerHTML= "Pinear";
    break;
  }
  else{
    document.cookie ="checkbox"+nombreMaterial.innerHTML+"="+fechaExpira+", Pinear";
    divs[0].innerHTML= "Pinear";
    console.log("No encontré y cree la cookie checkbox");
  }
}

if (divs[0].innerHTML !== "Pinear") {
  divs[0].innerHTML = tickMark;
  divs[0].classList.toggle('button__circle');
  console.log("en el botón NO dice Pinear, por eso el botón el verde");
}

divs[0].addEventListener("click",function() {

  if (divs[0].innerHTML !== "Pinear") {
    divs[0].innerHTML = "Pinear";
    //aquí se eliminan las cookies
    document.cookie = "checkbox"+nombreMaterial.innerHTML + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = nombreMaterial.innerText.substring(1,nombreMaterial.innerHTML.length-2) + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  } else if (divs[0].innerHTML === "Pinear" ) {
    divs[0].innerHTML = tickMark;
    //aquí se agregan las cookies
    var tuCookie = nombreMaterial.innerText.substring(1,nombreMaterial.innerHTML.length-2);
    var tuValor =  nombreMaterial.innerText.substring(1,nombreMaterial.innerHTML.length-2);
    crearCookie(tuCookie,tuValor,fechaExpira)
  }  
  this.classList.toggle('button__circle');
});

function crearCookie(nombre,valor,fecha) {
  document.cookie = nombre+"="+valor+", expires="+fecha+", url="+window.location + "; path=/";
}

function comprobarCookie(clave){ 
  var clave = obtenerCookie(clave); 
  if (clave!=""){
    return true;
  }else{
    return false;
  } 
}

function obtenerCookie(clave) { 
  var name = clave + "="; 
  var ca = document.cookie.split(';'); 
  for(var i=0; i<ca.length; i++) { 
    var c = ca[i]; 
    while (c.charAt(0)==' ') 
    c = c.substring(1); 
    if (c.indexOf(name) == 0) 
    return c.substring(name.length,c.length); 
  } 
    return ""; 
}



