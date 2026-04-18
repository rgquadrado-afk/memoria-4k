import os

scratch_path = r'c:\Users\guilh\OneDrive\Documentos\kit-highlevel\memoria-4k\scratch.html'
style_path = r'c:\Users\guilh\OneDrive\Documentos\kit-highlevel\memoria-4k\css\style.css'
index_path = r'c:\Users\guilh\OneDrive\Documentos\kit-highlevel\memoria-4k\index.html'

with open(scratch_path, 'r', encoding='utf-8') as f:
    scratch_content = f.read()

with open(style_path, 'r', encoding='utf-8') as f:
    style_content = f.read()

# extrai o CSS do scratch
start_style = scratch_content.find('<style>') + len('<style>')
end_style = scratch_content.find('</style>')
scratch_css = scratch_content[start_style:end_style]

# Merge the css by appending missing classes
new_css = style_content + '''
/* ============================================
   SECOES RESTAURADAS DO PLUMA DESIGN
   ============================================ */
''' + scratch_css[scratch_css.find('.how-it-works {"'):].replace('how-it-works {"', '.how-it-works {') # Fallback if my split fails
# A safer way to split CSS:
target_start = scratch_css.find('/* ============================================')
target_cut = scratch_css.find('.how-it-works {', target_start)
if target_cut != -1:
    missing_css = scratch_css[target_cut:]
    new_css = style_content + '''\n/* PLUMA RESTORED CSS */\n''' + missing_css

with open(style_path, 'w', encoding='utf-8') as f:
    f.write(new_css)

# Create index.html merging the two
# Take Hero from scratch
start_hero = scratch_content.find('<!-- ============================================')
end_hero = scratch_content.find('<!-- ============================================', start_hero + 50)
end_hero = scratch_content.find('</section>', end_hero) + 10
hero_html = scratch_content[start_hero:end_hero]

# Take the bottom sections
start_bottom = scratch_content.find('<!-- ============================================\\n       COMO FUNCIONA')
if start_bottom == -1:
    start_bottom = scratch_content.find('<!-- ============================================', scratch_content.find('id="como-funciona"') - 200)

bottom_html = scratch_content[start_bottom:scratch_content.find('</body>')]

new_index = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Memória 4K — Restauração de Fotos Antigas e Ensaios Impossíveis em Ultra 4K</title>
  <meta name="description" content="Transforme fotos antigas em retratos 4K ou crie ensaios fotográficos impossíveis. Qualidade cinematográfica.">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Memória 4K">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="navbar" id="navbar">
    <a href="#" class="navbar__logo">
      <div class="navbar__logo-icon">✦</div>
      Memória 4K
    </a>
    <ul class="navbar__links">
      <li><a href="#catalogo">Catálogo</a></li>
      <li><a href="#como-funciona">Como Funciona</a></li>
      <li><a href="#depoimentos">Depoimentos</a></li>
    </ul>
    <a href="https://wa.me/5511915101982?text=Olá!" target="_blank" rel="noopener" class="navbar__cta">
      Falar no WhatsApp
    </a>
  </nav>

''' + hero_html + '''

  <!-- ============================================
       SEÇÃO A: ENSAIOS TEMÁTICOS (12 itens)
       ============================================ -->
  <section class="packages bg-textured" id="catalogo">
    <div class="container">
      <div class="catalog-header reveal" style="text-align: center; margin-bottom: 48px;">
        <p style="font-size: 13px; font-weight: 600; color: var(--terracotta); text-transform: uppercase;">Descubra novos mundos</p>
        <h2 style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); margin-bottom: 12px;">Ensaios <em style="color: var(--terracotta); font-style: italic;">Temáticos</em></h2>
        <p style="color: var(--text-on-light-muted); max-width: 600px; margin: 0 auto;">Cenários surreais, iluminação de Hollywood e figurino de cinema.</p>
      </div>
      <div class="catalog-grid" id="grid-tematicos">
      </div>
    </div>
  </section>

  <!-- ============================================
       SEÇÃO B: RESTAURAÇÃO (3 itens)
       ============================================ -->
  <section class="packages dark" id="restauracao" style="background: var(--forest-deep); color: var(--white); padding: var(--section-py) 0;">
    <div class="container">
      <div class="catalog-header reveal" style="text-align: center; margin-bottom: 48px;">
        <p style="font-size: 13px; font-weight: 600; color: var(--pale-teal); text-transform: uppercase;">Preserve sua história</p>
        <h2 style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); margin-bottom: 12px;">Restauração e <em style="background: linear-gradient(135deg, var(--pale-teal), var(--warm-sand)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic;">Upscale</em></h2>
        <p style="color: var(--text-on-dark-muted); max-width: 600px; margin: 0 auto;">Recupere fotos antigas rasgadas ou sem cor.</p>
      </div>
      <div class="catalog-grid" id="grid-restauracao">
      </div>
    </div>
  </section>

''' + bottom_html + '''
  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
'''

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(new_index)

print("done")
