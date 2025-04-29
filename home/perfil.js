    'use strict'

// Espera o formulário ser enviado
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real do formulário
    alert("Changes saved successfully!"); // Mostra uma mensagem ao usuário
  });
  