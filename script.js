document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado! Sua mensagem foi enviada com sucesso.");
  this.reset();
});
