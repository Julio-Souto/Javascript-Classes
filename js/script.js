import { Mascota } from "./clase_mascota.js"

let nombre = document.getElementById("nombre")
let tipo = document.getElementById("tipo")
let chip = document.getElementById("microchip")
let edad = document.getElementById("edad")
let sexo = document.getElementById("sexo")

function isValid(){
  let nombol = false;
  let tipbol = false;
  let chipbol = false;
  let edadbol = false;

  if(!isNaN(nombre.value)||notEmpty(nombre.value))
    nombol = true
  if(!((tipo.value==="perro")||(tipo.value==="gato"))||notEmpty(tipo.value))
    tipbol = true
  if(!isNaN(chip.value)||notEmpty(chip.value))
    chipbol = true
  if(isNaN(edad.value)||notEmpty(edad.value))
    edadbol = true
  if(nombol)
    warning(nombre)
  else
    valid(nombre)
  if(tipbol)
    warning(tipo)
  else
    valid(tipo)
  if(chipbol)
    warning(chip)
  else
    valid(chip)
  if(edadbol)
    warning(edad)
  else
    valid(edad)
  
  if(nombol||tipbol||chipbol||edadbol)
    return false
  else
    return true
}

function notEmpty(value){
  if(value===null||value==="")
    return true
  else
    return false
}

function warning(input){
  input.style.outline= "2px solid red";
}

function valid(input){
  input.style.outline= "none";
}

document.getElementsByClassName("formulario")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if(isValid()){
    let mascota = new Mascota(nombre.value,tipo.value,chip.value,edad.value,sexo.options[sexo.selectedIndex].text)
    showData(mascota);
  }
})

function showData(mascota){
  document.getElementsByClassName("nombre")[1].innerHTML = mascota.nombre;
  document.getElementsByClassName("tipo")[0].innerHTML = mascota.tipo;
  document.getElementsByClassName("edad")[0].innerHTML = mascota.edad;
  document.getElementsByClassName("sexo")[0].innerHTML = mascota.sexo
  document.getElementsByClassName("microchip")[0].innerHTML = mascota.chip
}