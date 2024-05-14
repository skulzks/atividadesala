

function contarRegressivamente() {
  
    document.querySelector("button").disabled = true;
    
    let numero = document.getElementById('numero').value;
  numero = parseInt(numero);
    
    if (isNaN (numero) || numero <0){
      document.getElementById ('resultado').innerText ="coloque um numero valido";
    }
    let intervalo = setInterval(function() {
      
      document.getElementById ('resultado').innerText = numero;
      
      if (numero <= 0){
        clearInterval (intervalo);
        document.getElementById('resultado').innerText = "tempo esgotado!";
        document.querySelector("button").disabled = false;
      }
      numero--;
    },1000)
  }