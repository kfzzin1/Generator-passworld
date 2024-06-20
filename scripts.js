const input = document.querySelector("#gerador")

console.log(input)

input.disabled = true

// Este evento é acionado quando todo o HTML foi carregado e analisado
document.addEventListener("DOMContentLoaded", function() {
    // Obtemos uma referência ao botão com o ID "trocar"
    const botaoTrocar = document.getElementById("trocar");
    // Obtemos uma referência ao elemento body do documento
    const body = document.body;

    // Adicionamos um ouvinte de evento para o clique no botão
    botaoTrocar.addEventListener("click", function() {
        // Verifica se o corpo possui a classe "tema-claro"
        if (body.classList.contains("tema-claro")) {
            // Se sim, remove a classe "tema-claro" e adiciona a classe "tema-escuro"
            body.classList.remove("tema-claro");
            body.classList.add("tema-escuro");
        } else {
            // Caso contrário, remove a classe "tema-escuro" e adiciona a classe "tema-claro"
            body.classList.remove("tema-escuro");
            body.classList.add("tema-claro");
        }
    });
});

function gerarPalavra() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$&*?";
    let palavra = '';
    for (let i = 0; i < 8; i++) {
      palavra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return palavra;
  }
  
  // Atribuir a palavra gerada ao input com id "gerador" quando o botão for clicado
  document.getElementById("botão").addEventListener("click", function() {
    document.getElementById("gerador").value = gerarPalavra();
  });