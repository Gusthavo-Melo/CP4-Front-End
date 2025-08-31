let carrinho = 0;

function adicionarCarrinho(nomeProduto) {
  carrinho++;
  alert(`${nomeProduto} foi adicionado ao carrinho! 🛒 \nTotal de itens: ${carrinho}`);
  atualizarBadge();
}

function atualizarBadge() {
  const badge = document.getElementById("carrinhoBadge");
  if (badge) {
    badge.innerText = carrinho;
    badge.style.display = carrinho > 0 ? "inline-block" : "none";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  alert("✅ Obrigado por entrar em contato! Responderemos em breve.");
  document.getElementById("formContato").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("filter-form");
  const productCards = document.querySelectorAll(".product-card");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = document.getElementById("filter-price").value;
    const category = document.getElementById("filter-category").value;
    const brand = document.getElementById("filter-brand").value;

    productCards.forEach((card) => {
      const cardPrice = parseFloat(card.getAttribute("data-price"));
      const cardCategory = card.getAttribute("data-category");
      const cardBrand = card.getAttribute("data-brand");
      let show = true;

      if (price !== "todos") {
        if (price === "50" && !(cardPrice <= 50)) show = false;
        if (price === "50-100" && !(cardPrice > 50 && cardPrice <= 100)) show = false;
        if (price === "100-200" && !(cardPrice > 100 && cardPrice <= 200)) show = false;
        if (price === "200" && !(cardPrice > 200)) show = false;
      }

      if (category !== "todos" && cardCategory !== category) {
        show = false;
      }

      if (brand !== "todos" && cardBrand !== brand) {
        show = false;
      }

      card.style.display = show ? "block" : "none";
    });
  });
});

(function () {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    }, false)
  })
})()