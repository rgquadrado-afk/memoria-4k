document.addEventListener("DOMContentLoaded", () => {
  // 1. CATALOG RENDERING (If we are on index.html)
  const gridTematicos = document.getElementById('grid-tematicos');
  const gridFamilia = document.getElementById('grid-familia');
  const gridLifestyle = document.getElementById('grid-lifestyle');
  const gridRestauracao = document.getElementById('grid-restauracao');

  if (typeof catalogData !== 'undefined') {
    if (gridTematicos) {
      gridTematicos.innerHTML = '';
      catalogData.tematicos.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridTematicos.innerHTML += createCardHTML(item, delay);
      });
    }

    if (gridFamilia) {
      gridFamilia.innerHTML = '';
      catalogData.familia.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridFamilia.innerHTML += createCardHTML(item, delay);
      });
    }

    if (gridLifestyle) {
      gridLifestyle.innerHTML = '';
      catalogData.lifestyle.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridLifestyle.innerHTML += createCardHTML(item, delay);
      });
    }

    if (gridRestauracao) {
      gridRestauracao.innerHTML = '';
      catalogData.restauracao.forEach((item, index) => {
        const delay = (index % 3) * 0.1;
        gridRestauracao.innerHTML += createCardHTML(item, delay);
      });
    }
  }

  // MOBILE MENU TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
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
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }

  // HERO CAROUSEL
  const heroBg = document.getElementById('hero-slider');
  if (heroBg) {
    const images = [
      'familia_real_1.png',
      'hero.png',
      'primeira_infancia_1.png',
      'tapete_vermelho_1.png',
      'paris_romance_1.png',
      'noite_gala_1.png',
      'cyberpunk_neon_1.png',
      'safari_aventura_1.png'
    ];

    heroBg.innerHTML = '';
    images.forEach((src, idx) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = `hero-slide ${idx === 0 ? 'active' : ''}`;
      img.alt = 'Hero Background';
      heroBg.appendChild(img);
    });

    let currentSlide = 0;
    const slides = heroBg.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 4000);
    }
  }

  // 3. DETAILS PAGE RENDERING
  const detailTitle = document.getElementById('detail-title');
  if (detailTitle && typeof getPackageById !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const pacoteId = params.get('pacote');
    const item = getPackageById(pacoteId);

    if (item) {
      // Title
      const spaceIndex = item.title.indexOf(' ');
      if (spaceIndex !== -1) {
        detailTitle.innerHTML = `<em>${item.title.substring(0, spaceIndex)}</em> ${item.title.substring(spaceIndex + 1)}`;
      } else {
        detailTitle.innerHTML = `<em>${item.title}</em>`;
      }

      // Description
      const descEl = document.getElementById('detail-desc');
      if (descEl) descEl.textContent = item.fullDesc;
      
      // Main Image
      const mainImg = document.getElementById('main-gallery-img');
      if (mainImg) {
        mainImg.src = item.gallery[0];
        mainImg.alt = item.title;
      }

      // Thumbnails
      const thumbContainer = document.getElementById('thumb-container');
      if (thumbContainer) {
        thumbContainer.innerHTML = '';
        item.gallery.forEach((imgSrc, index) => {
          const thumbWrap = document.createElement('div');
          thumbWrap.className = 'thumb-wrap';
          thumbWrap.innerHTML = `<img src="${imgSrc}" alt="Thumb" style="width:100%; height:100%; object-fit:cover; cursor:pointer; opacity:${index === 0 ? '1' : '0.6'}; transition:0.2s; border-radius:8px;">`;
          thumbContainer.appendChild(thumbWrap);

          thumbWrap.querySelector('img').addEventListener('click', (e) => {
            if (mainImg) mainImg.src = imgSrc;
            thumbContainer.querySelectorAll('img').forEach(t => t.style.opacity = '0.6');
            e.target.style.opacity = '1';
          });
        });
      }

      // Pricing
      const type = item.type;
      const prices = packagePricing[type];
      const qtyContainer = document.getElementById('qty-container');
      const priceDisplay = document.getElementById('total-price');
      const btnWpp = document.getElementById('btn-wpp-checkout');

      if (qtyContainer && prices) {
        const qtys = Object.keys(prices);
        qtyContainer.innerHTML = qtys.map((q, i) => `
          <label class="qty-option">
            <input type="radio" name="qty" value="${q}" ${i === 0 ? 'checked' : ''}>
            <div class="qty-label">
              <div class="qty-number">${q}</div>
              <div class="qty-text">Fotos</div>
            </div>
          </label>
        `).join('');

        const updatePrice = () => {
          const selected = document.querySelector('input[name="qty"]:checked');
          if (selected && priceDisplay && btnWpp) {
            const total = prices[selected.value];
            const formatted = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            priceDisplay.textContent = formatted;
            const text = `Olá! Gostaria do pacote *${item.title}* com *${selected.value}* fotos. Valor: ${formatted}.`;
            btnWpp.href = `https://wa.me/5511915101982?text=${encodeURIComponent(text)}`;
          }
        };

        qtyContainer.querySelectorAll('input').forEach(input => input.addEventListener('change', updatePrice));
        updatePrice();
      }
    }
  }
});

// SECRET ADMIN ACCESS — 10 clicks on footer logo
(function() {
  const footerIcon = document.querySelector('.footer__logo-icon');
  if (!footerIcon) return;
  let clicks = 0, timer = null;
  footerIcon.style.cursor = 'default';
  footerIcon.addEventListener('click', (e) => {
    e.preventDefault();
    clicks++;
    clearTimeout(timer);
    timer = setTimeout(() => { clicks = 0; }, 3000);
    if (clicks >= 10) {
      clicks = 0;
      window.location.href = 'admin.html';
    }
  });
})();

function createCardHTML(item, delay) {
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
