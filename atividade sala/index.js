
let button = document.createElement("button");
button.textContent = "Click aqui!";
document.body.appendChild(button);


button.onclick = function() {

  let nome = prompt("Digite seu nome");

 
  let paragrafo = document.createElement("p");
  paragrafo.textContent = "Olá " + nome + ", é um prazer te ver!";

  let lista = document.getElementById("lista");
  if (!lista) {
    lista = document.createElement("ul");
    lista.id = "lista";
    document.body.appendChild(lista);
  }

  lista.appendChild(paragrafo);
};