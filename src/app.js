/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "her"];
  let adj = ["pink", "dream"];
  let noun = ["floyd", "theater"];
  let domain = [".com", ".es"];
  let paginaWeb = "";
  let paginaWebFront = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          paginaWeb =
            paginaWeb +
            "www." +
            pronoun[i] +
            adj[j] +
            noun[k] +
            domain[l] +
            "\n";
          paginaWebFront =
            paginaWebFront +
            "www." +
            pronoun[i] +
            adj[j] +
            noun[k] +
            domain[l] +
            "<br/>";
        }
      }
    }
  }
  document.getElementById("lista").innerHTML = paginaWebFront;
  console.log(paginaWeb);
  return paginaWeb;
};
