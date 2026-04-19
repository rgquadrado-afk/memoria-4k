document.addEventListener("DOMContentLoaded", () => {
  // 1. CATALOG RENDERING (If we are on index.html)
  const gridTematicos = document.getElementById('grid-tematicos');
  const gridLifestyle = document.getElementById('grid-lifestyle');
  const gridRestauracao = document.getElementById('grid-restauracao');

  if (typeof catalogData !== 'undefined') {
    if (gridTematicos) {
      catalogData.tematicos.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridTematicos.innerHTML += createCardHTML(item, delay);
      });
    }

    if (gridLifestyle) {
      catalogData.lifestyle.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridLifestyle.innerHTML += createCardHTML(item, delay);
      });
    }

    if (gridRestauracao) {
      catalogData.restauracao.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridRestauracao.innerHTML += createCardHTML(item, delay);
      });
    }
  }

  // 2. SCROLL REVEAL OBSERVER
  const textElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  textElements.forEach(el => observer.observe(el));

  // NAVBAR SCROLL EFFECT
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

    });
  }

  // MOBILE MENU TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. DETAILS PAGE RENDERING (If we are on detalhe.html)
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
    const spaceIndex = item.title.indexOf(' ');
    if (spaceIndex !== -1) {
      document.getElementById('detail-title').innerHTML = `<em>${item.title.substring(0, spaceIndex)}</em> ${item.title.substring(spaceIndex + 1)}`;
    } else {
      document.getElementById('detail-title').innerHTML = `<em>${item.title}</em>`;
    }
    document.getElementById('detail-desc').textContent = item.fullDesc;
    
    // Gallery with real images
    const mainImg = document.getElementById('main-gallery-img');
    mainImg.src = item.gallery[0];
    mainImg.alt = item.title;
    mainImg.style.width = '100%';
    mainImg.style.height = '100%';
    mainImg.style.objectFit = 'cover';
    mainImg.style.borderRadius = '12px';

    // Insert comment before the image
    const promptTextMain = item.galleryPrompts && item.galleryPrompts[0] ? item.galleryPrompts[0] : '';
    mainImg.insertAdjacentHTML('beforebegin', `<!-- PROMPT_IMAGEM: ${promptTextMain} -->\n`);

    const thumbContainer = document.getElementById('thumb-container');
    thumbContainer.innerHTML = '';
    
    item.gallery.forEach((imgSrc, index) => {
      const promptText = item.galleryPrompts && item.galleryPrompts[index] ? item.galleryPrompts[index] : '';
      const thumbWrap = document.createElement('div');
      thumbWrap.style.position = 'relative';
      thumbWrap.style.width = '100%';
      thumbWrap.style.aspectRatio = '4/3';
      thumbWrap.style.borderRadius = '12px';
      thumbWrap.style.borderRadius = '8px';
      thumbWrap.style.overflow = 'hidden';
      thumbWrap.style.cursor = 'pointer';
      
      const thumbId = 'thumb-' + index;
      
      thumbWrap.innerHTML = `
        <!-- PROMPT_IMAGEM: ${promptText} -->
        <img id="${thumbId}" src="${imgSrc}" alt="Thumbnail ${index+1}" style="width:100%; height:100%; object-fit:cover; transition: opacity 0.2s ease; opacity:${index === 0 ? '1' : '0.6'};">
      `;
      thumbContainer.appendChild(thumbWrap);

      // Add click event listener to change main image
      document.getElementById(thumbId).addEventListener('click', () => {
        mainImg.src = imgSrc;
        // Update opacity for thumbnails
        thumbContainer.querySelectorAll('img').forEach(t => t.style.opacity = '0.6');
        document.getElementById(thumbId).style.opacity = '1';
      });
    });

    // Pricing Logic dynamically populated
    const type = item.type; // 'ensaio' ou 'restauracao'
    const prices = packagePricing[type];
    
    const qtyContainer = document.getElementById('qty-container');
    const qtys = Object.keys(prices); // ["7", "12", "25"]
    
    let qtyHtml = '';
    qtys.forEach((q, index) => {
      const isChecked = index === 0 ? 'checked' : '';
      qtyHtml += `
        <label class="qty-option">
          <input type="radio" name="qty" value="${q}" ${isChecked}>
          <div class="qty-label">
            <div class="qty-number">${q}</div>
            <div class="qty-text">Fotos</div>
          </div>
        </label>
      `;
    });
    qtyContainer.innerHTML = qtyHtml;

    const qtyInputs = document.querySelectorAll('input[name="qty"]');
    const priceDisplay = document.getElementById('total-price');
    const btnWpp = document.getElementById('btn-wpp-checkout');
    const phone = "5511915101982"; 

    function updateCheckout() {
      const selectedQtyElement = document.querySelector('input[name="qty"]:checked');
      if(!selectedQtyElement) return;
      const selectedQty = selectedQtyElement.value;
      const total = prices[selectedQty];
      
      // Formata moeda (R$ 00,00)
      const formattedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      priceDisplay.textContent = formattedTotal;

      // Monta Link WhatsApp - FASE FINAL FORMATO EXATO
      const text = `Olá! Gostaria do pacote *${item.title}* com *${selectedQty}* fotos. Valor: ${formattedTotal}. Aguardo instruções.`;
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
  return `
    <!-- PROMPT_IMAGEM: ${item.aiPrompt || ''} -->
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
