document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL REVEAL OBSERVER
  const textElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  textElements.forEach(el => observer.observe(el));

  // 2. NAVBAR SCROLL EFFECT
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. CATALOG RENDERING (If we are on index.html)
  const gridTematicos = document.getElementById('grid-tematicos');
  const gridRestauracao = document.getElementById('grid-restauracao');

  if (gridTematicos && gridRestauracao && typeof catalogData !== 'undefined') {
    // Render Ensaios Temáticos
    catalogData.tematicos.forEach((item, index) => {
      const delay = (index % 3) * 0.1;
      gridTematicos.innerHTML += createCardHTML(item, delay);
    });

    // Render Restauração
    catalogData.restauracao.forEach((item, index) => {
      const delay = (index % 3) * 0.1;
      gridRestauracao.innerHTML += createCardHTML(item, delay);
    });
  }

  // 4. DETAILS PAGE RENDERING (If we are on detalhe.html)
  const detailContainer = document.getElementById('detail-content');
  if (detailContainer && typeof getPackageById !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const pacoteId = params.get('pacote');
    
    if (!pacoteId) {
      window.location.href = 'index.html'; // Fallback se não tiver id
      return;
    }

    const item = getPackageById(pacoteId);
    if (!item) {
      window.location.href = 'index.html'; // Fallback se ID inválido
      return;
    }

    // Populate the detail page
    document.getElementById('detail-title').innerHTML = `<em>${item.title.split(' ')[0]}</em> ${item.title.substring(item.title.indexOf(' ') + 1)}`;
    document.getElementById('detail-desc').textContent = item.fullDesc;
    
    // Gallery
    const mainImg = document.getElementById('main-gallery-img');
    const thumbContainer = document.getElementById('thumb-container');
    
    mainImg.src = item.gallery[0];
    item.gallery.forEach((imgSrc, i) => {
      const thumb = document.createElement('img');
      thumb.src = imgSrc;
      thumb.alt = `Thumbnail ${i+1}`;
      if (i === 0) thumb.classList.add('active');
      
      thumb.addEventListener('click', () => {
        mainImg.src = imgSrc;
        document.querySelectorAll('.detail-thumbs img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      thumbContainer.appendChild(thumb);
    });

    // Pricing Logic
    const type = item.type; // 'ensaio' ou 'restauracao'
    const prices = packagePricing[type];
    const qtyInputs = document.querySelectorAll('input[name="qty"]');
    const priceDisplay = document.getElementById('total-price');
    const btnWpp = document.getElementById('btn-wpp-checkout');
    const phone = "5511915101982"; // O número definido

    function updateCheckout() {
      const selectedQty = document.querySelector('input[name="qty"]:checked').value;
      const total = prices[selectedQty];
      
      // Formata moeda (R$ 00,00)
      const formattedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      priceDisplay.textContent = formattedTotal;

      // Monta Link WhatsApp
      // Ex: "Olá! Gostaria de solicitar o pacote *[NOME DO PACOTE]* com *[QUANTIDADE]* foto(s). Valor total: R$ [VALOR]. Aguardo instruções para pagamento e envio das fotos."
      const text = `Olá! Gostaria de solicitar o pacote *${item.title}* com *${selectedQty}* foto(s). Valor total: ${formattedTotal}. Aguardo instruções para pagamento e envio das fotos.`;
      btnWpp.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    }

    qtyInputs.forEach(input => {
      input.addEventListener('change', updateCheckout);
    });

    // Initialize initial values
    updateCheckout();
  }

});

// Helper Function: Generates HTML string for a catalog card
function createCardHTML(item, delay) {
  // If it's a URL, use straight img tag. Otherwise keep placeholder structure if wanted, 
  // but for simplicity we assume the placeholder is an image source now based on our data.js
  return `
    <div class="catalog-card reveal" style="transition-delay: ${delay}s;">
      <div class="catalog-card__img-wrap">
        <img src="${item.placeholderImg}" alt="${item.title}" loading="lazy">
      </div>
      <div class="catalog-card__body">
        <h3 class="catalog-card__title">${item.title}</h3>
        <p class="catalog-card__desc">${item.desc}</p>
        <a href="detalhe.html?pacote=${item.id}" class="catalog-card__btn">Ver detalhes →</a>
      </div>
    </div>
  `;
}
