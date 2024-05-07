let nome = prompt( 'digite seu nome')

let paragrafo = document.querySelector('p');

paragrafo.textContent = 'Olá ' + nome + ', é um prazer te ver!';
document.body.appendChild(paragrafo);


