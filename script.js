var up = document.getElementById("up");
var form = document.getElementById("form");
var lower = document.getElementById("lower");
var capitalize = document.getElementById("capt");
var camelCase = document.getElementById("camel");
var clear = document.getElementById("clear");
var dark = document.getElementById("dark");
var white = document.getElementById("white");
var chars = document.getElementById("chars");
var countWord = document.getElementById("totWords");
var lines = document.getElementById("lines");
var copy = document.getElementById("copy");
// EVENTOS 
up.addEventListener("click", upcase);
lower.addEventListener("click", lowerCase);
capitalize.addEventListener("click", capitalizeText);
camelCase.addEventListener("click", camelC);
dark.addEventListener("click",darkMode);
white.addEventListener("click", whiteMode);
clear.addEventListener("click", clean);
copy.addEventListener("click", copyTextToClipBoard);

function copyTextToClipBoard(Event) {
  Event.preventDefault();
  let textarea = document.querySelector("textarea");
  textarea.select();
  document.execCommand("copy");

}

function clean(Event) {
  Event.preventDefault();
  document.querySelector("textarea").value = "";  
}
function upcase(Event) {
  Event.preventDefault();
  var word = document.querySelector("textarea");
  word.value = word.value.toUpperCase();
  
}

function lowerCase(Event) {
  Event.preventDefault();
  var word = document.querySelector("textarea");
  word.value = word.value.toLowerCase();
  
}


function capitalizeText(Event) {
  Event.preventDefault();  
  var word = document.querySelector("textarea");
  word.value = capt(word.value);
  
}

function camelC(Event) {
  Event.preventDefault();  
  var word = document.querySelector("textarea");
  word.value = camel(word.value);
  
}


function capt(array) {
 let aux = [];
 let auxvariable = "";
 let j = [];
 aux.push(array);
 for(let i = 0; i < aux[0].length; i++){
    if(i === 0){
      j.push((aux[0][0].toUpperCase()));
      i++;
    }
      if(aux[0][i] === " " || aux[0][i] === "\n"){
        j.push(aux[0][i]);
        j.push((aux[0][i+1].toUpperCase()));
        i++;
      }else{
        j.push((aux[0][i]).toLowerCase());
        }
  }
 for(let i = 0; i < j.length; i++){
   auxvariable += j[i];
 }
  return auxvariable;
}

function camel(text) {
  let newText = "";
  for(var i = 0; i < text.length; i++) {
    if(i % 2 === 0) {
      newText += text[i].toUpperCase();
    }else{
      newText += text[i].toLowerCase();
    }
  }
  return newText;
}
function darkMode(Event){
	Event.preventDefault();
	document.getElementById("body").style.backgroundColor= "black";
	document.getElementById("area").style.backgroundColor = "lightgray";
  chars.style.color = "whitesmoke";
  countWord.style.color = "whitesmoke";
  lines.style.color = "whitesmoke";

}
function whiteMode(Event){
	Event.preventDefault();
	document.getElementById("body").style.backgroundColor= "whitesmoke";
	document.getElementById("area").style.backgroundColor = "whitesmoke";
  chars.style.color = "black";
  countWord.style.color = "black";
  lines.style.color = "black";
}

setInterval(() => {
  var word = document.getElementById("area").value;
  chars.innerHTML = `Total of Character(s) : ` + totalOfChars(word);
  countWord.innerHTML = `Total of Word(s) : ` + totalOfWords(word);
  lines.innerHTML = `Number of Line(s) : ` + totalOfLines(word);

}, 10);

function totalOfChars(word){
  return word.length;
}


function totalOfWords(word) {
  
  var aux1 = {};
  var auxvar = [];
  var j = 0;
  var aux = word.split("\n");
  for(let i = 0; i < aux.length; i++){
    if(aux[i] !== ""){
      aux1[j] = aux[i].split(" ");
      j++;
    }
  }
  for(let i = 0; i < j; i++){
    for(let k = 0; k < aux1[i].length; k++){
      if(aux1[i][k] !== ""){
        auxvar.push(aux1[i][k]);
      }
    }
  }
   return auxvar.length;
}

function totalOfLines(word) {
  var aux = word.split("\n");
  return aux.length;
}
