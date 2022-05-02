/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".es", ".net"];

let paginaWeb = "";
let pronombreAleatorio = Math.floor(Math.random() * 2);
let adjetivoAleatorio = Math.floor(Math.random() * 2);
let no = Math.floor(Math.random() * 2);
let d = Math.floor(Math.random() * 3);

for (let i = 0; i < pronoun.length; i++) {
  for (let i = 0; i < adj.length; i++) {
    for (let i = 0; i < noun.length; i++) {
      for (let i = 0; i < domain.length; i++) {}
    }
  }
}
paginaWeb +=
  pronoun[pronombreAleatorio] + adj[adjetivoAleatorio] + noun[no] + domain[d];

console.log("www." + paginaWeb);

/* let pro = Math.floor(Math.random()*2);
let ad = Math.floor(Math.random()*2);
let no = Math.floor(Math.random()*2);

console.log('www.'+pronoun[pro]+adj[ad]+noun[no]+'.com' ) */
