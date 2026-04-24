// ============================================================
// ADMIN.JS — Motor de Produção Memória 4K
// ============================================================

(function() {
  'use strict';

  // SHA-256 hash da senha "Gui11052003"
  const PASS_HASH = "a]G11052003"; // Simplified check
  const CORRECT_PASS = "Gui11052003";

  // State
  let currentPackage = null;
  let currentVariation = 0;

  // DOM refs
  const loginScreen = document.getElementById('login-screen');
  const dashboard = document.getElementById('admin-dashboard');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const passInput = document.getElementById('admin-pass');
  const loginError = document.getElementById('login-error');

  // ---- LOGIN ----
  loginBtn.addEventListener('click', doLogin);
  passInput.addEventListener('keypress', e => { if (e.key === 'Enter') doLogin(); });

  function doLogin() {
    if (passInput.value === CORRECT_PASS) {
      loginScreen.style.display = 'none';
      dashboard.style.display = 'block';
      initDashboard();
    } else {
      loginError.style.display = 'block';
      passInput.classList.add('shake');
      setTimeout(() => passInput.classList.remove('shake'), 500);
    }
  }

  logoutBtn.addEventListener('click', () => {
    dashboard.style.display = 'none';
    loginScreen.style.display = 'flex';
    passInput.value = '';
    loginError.style.display = 'none';
  });

  // ---- DASHBOARD INIT ----
  function initDashboard() {
    renderPackageList('all');
    setupFilters();
    setupGenerateButton();
    setupCopyButtons();
    setupVariationTabs();
    setupNavigation();
    initBilling();
  }

  // ---- NAVIGATION ----
  function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        const view = e.target.dataset.view;
        const promptGen = document.getElementById('prompt-generator');
        const welcome = document.getElementById('welcome-state');
        const billing = document.getElementById('billing-panel');
        const sidebarPrompts = document.getElementById('sidebar-prompts');

        if (view === 'prompts') {
          sidebarPrompts.style.display = 'block';
          billing.style.display = 'none';
          if (currentPackage) {
            promptGen.style.display = 'block';
            welcome.style.display = 'none';
          } else {
            promptGen.style.display = 'none';
            welcome.style.display = 'block';
          }
        } else if (view === 'billing') {
          sidebarPrompts.style.display = 'none';
          promptGen.style.display = 'none';
          welcome.style.display = 'none';
          billing.style.display = 'block';
          renderBillingTable();
          updateBillingSummary();
        }
      });
    });
  }

  // ---- PACKAGE LIST ----
  function renderPackageList(filter) {
    const list = document.getElementById('package-list');
    let packages = [];

    if (filter === 'all' || filter === 'tematicos') packages.push(...catalogData.tematicos.map(p => ({...p, category: 'tematicos'})));
    if (filter === 'all' || filter === 'lifestyle') packages.push(...catalogData.lifestyle.map(p => ({...p, category: 'lifestyle'})));
    if (filter === 'all' || filter === 'restauracao') packages.push(...catalogData.restauracao.map(p => ({...p, category: 'restauracao'})));

    list.innerHTML = packages.map(p => `
      <button class="pkg-item ${currentPackage && currentPackage.id === p.id ? 'active' : ''}" data-id="${p.id}">
        <div class="pkg-item__info">
          <span class="pkg-item__title">${p.title}</span>
          <span class="pkg-item__tag">${p.tag}</span>
        </div>
        <span class="pkg-item__category">${getCategoryLabel(p.category)}</span>
      </button>
    `).join('');

    // Click handlers
    list.querySelectorAll('.pkg-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkg = getPackageById(btn.dataset.id);
        if (pkg) selectPackage(pkg);
        list.querySelectorAll('.pkg-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  function getCategoryLabel(cat) {
    const labels = { tematicos: 'Temático', lifestyle: 'Elite', restauracao: 'Restauração' };
    return labels[cat] || cat;
  }

  // ---- FILTERS ----
  function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPackageList(btn.dataset.filter);
      });
    });
  }

  // ---- SELECT PACKAGE ----
  function selectPackage(pkg) {
    currentPackage = pkg;
    currentVariation = 0;

    document.getElementById('welcome-state').style.display = 'none';
    document.getElementById('prompt-generator').style.display = 'block';
    document.getElementById('prompt-output').style.display = 'none';

    document.getElementById('pkg-tag').textContent = pkg.tag;
    document.getElementById('pkg-title').textContent = pkg.title;
    document.getElementById('pkg-desc').textContent = pkg.fullDesc;
    document.getElementById('pkg-status').innerHTML = `<span class="status-dot active"></span> ${pkg.status === 'active' ? 'Ativo' : 'Rascunho'}`;

    // Reset variation tabs
    document.querySelectorAll('.var-tab').forEach((tab, i) => {
      tab.classList.toggle('active', i === 0);
    });

    // Clear previous output
    document.getElementById('compiled-prompt').textContent = '';
    document.getElementById('negative-prompt').textContent = '';
    document.getElementById('json-prompt').textContent = '';
  }

  // ---- VARIATION TABS ----
  function setupVariationTabs() {
    document.getElementById('variation-tabs').addEventListener('click', e => {
      const tab = e.target.closest('.var-tab');
      if (!tab) return;
      document.querySelectorAll('.var-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentVariation = parseInt(tab.dataset.var);

      // Re-generate if output is visible
      if (document.getElementById('prompt-output').style.display !== 'none') {
        generatePrompt();
      }
    });
  }

  // ---- GENERATE PROMPT ----
  function setupGenerateButton() {
    document.getElementById('btn-generate').addEventListener('click', generatePrompt);
  }

  function generatePrompt() {
    if (!currentPackage) return;

    const clientData = {
      name: document.getElementById('client-name').value || '[NOME_CLIENTE]',
      gender: document.getElementById('client-gender').value,
      ethnicity: document.getElementById('client-ethnicity').value || '[ETNIA]',
      notes: document.getElementById('client-notes').value || ''
    };

    const genderMap = { 'female': 'female', 'male': 'male', 'non-binary': 'non-binary' };
    clientData.gender = genderMap[clientData.gender] || clientData.gender;

    let result;
    if (currentVariation === 0) {
      result = buildPrompt(currentPackage, clientData);
    } else {
      result = buildGalleryPrompt(currentPackage, currentVariation - 1, clientData);
      if (!result) result = buildPrompt(currentPackage, clientData);
    }

    // Display
    document.getElementById('prompt-output').style.display = 'block';
    document.getElementById('compiled-prompt').textContent = result.compiled;
    document.getElementById('negative-prompt').textContent = result.negative;

    const jsonData = result.json || { compiled: result.compiled, negative: result.negative };
    document.getElementById('json-prompt').textContent = JSON.stringify(jsonData, null, 2);

    // Scroll to output
    document.getElementById('prompt-output').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- COPY BUTTONS ----
  function setupCopyButtons() {
    document.getElementById('btn-copy-compiled').addEventListener('click', () => {
      const text = document.getElementById('compiled-prompt').textContent;
      copyToClipboard(text);
    });

    document.getElementById('btn-copy-json').addEventListener('click', () => {
      const text = document.getElementById('json-prompt').textContent;
      copyToClipboard(text);
    });
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const feedback = document.getElementById('copy-feedback');
      feedback.style.display = 'block';
      setTimeout(() => { feedback.style.display = 'none'; }, 2000);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const feedback = document.getElementById('copy-feedback');
      feedback.style.display = 'block';
      setTimeout(() => { feedback.style.display = 'none'; }, 2000);
    });
  }

  // ---- BILLING SYSTEM ----
  let salesData = JSON.parse(localStorage.getItem('memoria4k_sales') || '[]');

  function initBilling() {
    // Populate packages dropdown
    const select = document.getElementById('sale-package');
    select.innerHTML = '<option value="">-- Selecione --</option>' + 
      getAllPackages().map(p => `<option value="${p.id}">${p.title}</option>`).join('');

    // Default date to today
    document.getElementById('sale-date').valueAsDate = new Date();

    // Add sale listener
    document.getElementById('btn-add-sale').addEventListener('click', addSale);
  }

  function addSale() {
    const client = document.getElementById('sale-client').value;
    const pkgId = document.getElementById('sale-package').value;
    const qty = document.getElementById('sale-qty').value;
    const valueStr = document.getElementById('sale-value').value;
    const status = document.getElementById('sale-status').value;
    const dateInput = document.getElementById('sale-date').value;

    if (!client || !pkgId || !valueStr || !dateInput) {
      alert("Preencha os campos obrigatórios (Cliente, Pacote, Valor, Data).");
      return;
    }

    const pkg = getPackageById(pkgId);
    if (!pkg) return;

    const newSale = {
      id: Date.now().toString(),
      client,
      packageTitle: pkg.title,
      qty,
      value: parseFloat(valueStr),
      status,
      date: dateInput
    };

    salesData.push(newSale);
    // Sort descending by date
    salesData.sort((a, b) => new Date(b.date) - new Date(a.date));
    saveSales();
    renderBillingTable();
    updateBillingSummary();

    // Reset some fields
    document.getElementById('sale-client').value = '';
    document.getElementById('sale-value').value = '';
  }

  function deleteSale(id) {
    if (confirm("Deseja realmente excluir esta venda?")) {
      salesData = salesData.filter(s => s.id !== id);
      saveSales();
      renderBillingTable();
      updateBillingSummary();
    }
  }

  function saveSales() {
    localStorage.setItem('memoria4k_sales', JSON.stringify(salesData));
  }

  function renderBillingTable() {
    const tbody = document.getElementById('sales-table-body');
    const noSales = document.getElementById('no-sales');

    if (salesData.length === 0) {
      tbody.innerHTML = '';
      noSales.style.display = 'block';
      return;
    }
    noSales.style.display = 'none';

    tbody.innerHTML = salesData.map(s => {
      const dateParts = s.date.split('-');
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      const formattedValue = s.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      
      const statusLabels = {
        'pago': '✅ Pago', 'pendente': '⏳ Pendente', 
        'produzindo': '🎨 Produzindo', 'entregue': '📦 Entregue'
      };

      return `
        <tr>
          <td>${formattedDate}</td>
          <td><b>${s.client}</b></td>
          <td>${s.packageTitle}</td>
          <td>${s.qty}</td>
          <td style="color:var(--admin-success); font-weight:600">${formattedValue}</td>
          <td><span class="status-badge ${s.status}">${statusLabels[s.status]}</span></td>
          <td><button class="btn-delete" data-id="${s.id}" title="Excluir">✕</button></td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        deleteSale(e.target.dataset.id);
      });
    });
  }

  function updateBillingSummary() {
    const todayStr = new Date().toISOString().split('T')[0];
    const thisMonthStr = todayStr.substring(0, 7); // YYYY-MM

    let totalToday = 0;
    let totalMonth = 0;
    let totalAll = 0;

    salesData.forEach(s => {
      if (s.status === 'pago' || s.status === 'entregue') {
        const val = s.value;
        totalAll += val;
        if (s.date === todayStr) totalToday += val;
        if (s.date.startsWith(thisMonthStr)) totalMonth += val;
      }
    });

    document.getElementById('bill-today').textContent = totalToday.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('bill-month').textContent = totalMonth.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('bill-total').textContent = totalAll.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('bill-count').textContent = salesData.length;
  }

})();
