// Banco de Dados do Catálogo "Memória 4K"
const catalogData = {
  // SEÇÃO A: Ensaios Temáticos (12 itens)
  tematicos: [
    {
      id: "disney_magica",
      title: "Disney Mágica",
      tag: "✨ Mais vendido",
      type: "ensaio",
      desc: "Você no castelo da Cinderela, sob luz dourada de fim de tarde.",
      fullDesc: "Realize o sonho de ser o protagonista do seu próprio conto de fadas. Este ensaio utiliza inteligência artificial avançada para criar retratos hiper-realistas seus diante do icônico castelo da Disney.",
      placeholderImg: "disney_magica_1.png",
      aiPrompt: "A breathtaking 8k photograph in front of the Magic Kingdom castle at sunset.",
      galleryPrompts: ["Portrait in front of Cinderella castle", "Full body at Magic Kingdom", "Child in princess dress"],
      gallery: ["disney_magica_1.png", "disney_magica_2.png", "disney_magica_3.png"]
    },
    {
      id: "tapete_vermelho",
      title: "Tapete Vermelho",
      tag: "⭐ Premium",
      type: "ensaio",
      desc: "Ensaio editorial nível Oscar. Glamour, flashes e elegância.",
      fullDesc: "Sinta a experiência de uma estrela de cinema. Você será retratado caminhando por um tapete vermelho luxuoso.",
      placeholderImg: "tapete_vermelho_1.png",
      aiPrompt: "A celebrity walking the red carpet, Vogue editorial style.",
      galleryPrompts: ["Posing on red carpet", "Man in tuxedo", "Close up portrait star"],
      gallery: ["tapete_vermelho_1.png", "tapete_vermelho_2.png", "tapete_vermelho_3.png"]
    },
    {
      id: "paris_romance",
      title: "Viagem a Paris",
      tag: "Romântico",
      type: "ensaio",
      desc: "A Torre Eiffel ao fundo e iluminação de cinema francês.",
      fullDesc: "O clássico ensaio parisiense sem precisar sair de casa. Ideal para casais ou retratos individuais sofisticados.",
      placeholderImg: "paris_romance_1.png",
      aiPrompt: "A couple embracing in Paris with the Eiffel Tower.",
      galleryPrompts: ["Woman near Seine", "Couple at Parisian cafe", "Man portrait in Paris"],
      gallery: ["paris_romance_1.png", "paris_romance_2.png", "paris_romance_3.png"]
    },
    {
      id: "safari_aventura",
      title: "Aventura em Safari",
      tag: "Exótico",
      type: "ensaio",
      desc: "Na savana africana, com vida selvagem e cores quentes do amanhecer.",
      fullDesc: "Um ensaio selvagem e exclusivo. Colocamos você em um cenário de savana na África.",
      placeholderImg: "safari_aventura_1.png",
      aiPrompt: "An adventurer in luxury safari clothing at sunrise.",
      galleryPrompts: ["Woman in savanna", "Man with binoculars", "Close up in open jeep"],
      gallery: ["safari_aventura_1.png", "safari_aventura_2.png", "safari_aventura_3.png"]
    },
    {
      id: "estudio_vintage",
      title: "Estúdio Vintage",
      tag: "Clássico",
      type: "ensaio",
      desc: "Estética anos 50 e texturas em preto e branco glorioso.",
      fullDesc: "Eternize-se como uma lenda de Hollywood dos anos 1950. Foco em retrato de estúdio.",
      placeholderImg: "estudio_vintage_1.png",
      aiPrompt: "Old Hollywood vintage studio portrait, black and white.",
      galleryPrompts: ["Woman in 1950s dress", "Man in classic suit", "Close up starlet"],
      gallery: ["estudio_vintage_1.png", "estudio_vintage_2.png", "estudio_vintage_3.png"]
    },
    {
      id: "cyberpunk_neon",
      title: "Cyberpunk 2077",
      tag: "Sci-Fi",
      type: "ensaio",
      desc: "Luzes de neon e cidade futurista hiper-tecnológica.",
      fullDesc: "Mergulhe no futuro. Seu rosto será perfeitamente integrado a um corpo com roupas tecnológicas.",
      placeholderImg: "cyberpunk_neon_1.png",
      aiPrompt: "Sci-fi character in a rainy cyberpunk city, neon lights.",
      galleryPrompts: ["Cybernetic woman portrait", "Man in tech jacket", "Neon signs background"],
      gallery: ["cyberpunk_neon_1.png", "cyberpunk_neon_2.png", "cyberpunk_neon_3.png"]
    },
    {
      id: "praia_paradisio",
      title: "Praia Paradisíaca",
      tag: "Summer",
      type: "ensaio",
      desc: "O mar turquesa das Maldivas e a areia branca perfeitos para você.",
      fullDesc: "Um ensaio com a vibração de férias de luxo. A IA recria as Maldivas ou o Tahiti.",
      placeholderImg: "praia_paradisio_1.png",
      aiPrompt: "A person relaxing on a paradise beach in the Maldives.",
      galleryPrompts: ["Woman in summer dress", "Man on tropical beach", "Candid beach vacation"],
      gallery: ["praia_paradisio_1.png", "praia_paradisio_2.png", "praia_paradisio_3.png"]
    },
    {
      id: "noite_gala",
      title: "Noite de Gala",
      tag: "Luxo",
      type: "ensaio",
      desc: "Mansão imperial, vestidos esplêndidos ou smokings impecáveis.",
      fullDesc: "Sinta-se na realeza. Estaremos em uma mansão luxuosa ou em um salão de baile.",
      placeholderImg: "noite_gala_1.png",
      aiPrompt: "High society people in a luxury gala ballroom.",
      galleryPrompts: ["Woman in gala gown", "Man with champagne", "Ballroom close up"],
      gallery: ["noite_gala_1.png", "noite_gala_2.png", "noite_gala_3.png"]
    },
    {
      id: "super_heroi",
      title: "Super-herói",
      tag: "Ação",
      type: "ensaio",
      desc: "Traje épico, capa esvoaçante e cenário urbano.",
      fullDesc: "Para adultos e crianças que sonham grande. O pacote Super-herói cria um traje espetacular.",
      placeholderImg: "super_heroi_1.png",
      aiPrompt: "Superhero standing on a skyscraper edge at twilight.",
      galleryPrompts: ["Epic pose on skyscraper", "Action energy effects", "Close up hero"],
      gallery: ["super_heroi_1.png", "super_heroi_2.png", "super_heroi_3.png"]
    },
    {
      id: "conto_fadas",
      title: "Conto de Fadas",
      tag: "Fantasia",
      type: "ensaio",
      desc: "Uma floresta encantada, iluminação feérica e criaturas sutis.",
      fullDesc: "Mergulhe em um livro de história. Estética de alta fantasia em floresta mística.",
      placeholderImg: "conto_fadas_1.png",
      aiPrompt: "A person in an enchanted mystical forest, fairy lights.",
      galleryPrompts: ["Ethereal beauty portrait", "Bioluminescent forest", "Close up glow fireflies"],
      gallery: ["conto_fadas_1.png", "conto_fadas_2.png", "conto_fadas_3.png"]
    },
    {
      id: "astro_cinema",
      title: "Astro de Cinema",
      tag: "Editorial",
      type: "ensaio",
      desc: "Retrato close-up dramático para pôster de blockbusters.",
      fullDesc: "Focado nas suas expressões. Um close-up dramático simulando câmeras de cinema.",
      placeholderImg: "astro_cinema_1.png",
      aiPrompt: "Cinematic facial close-up, Rembrandt lighting.",
      galleryPrompts: ["Intense woman portrait", "High contrast man", "Shadow look close up"],
      gallery: ["astro_cinema_1.png", "astro_cinema_2.png", "astro_cinema_3.png"]
    },
    {
      id: "esportista_radical",
      title: "Esportista Radical",
      tag: "Adrenalina",
      type: "ensaio",
      desc: "Montanhas nevadas ou surfe gigante com ação congelada.",
      fullDesc: "Mostre seu lado extremo. A IA o transportará para a ação congelada no tempo.",
      placeholderImg: "esportista_radical_1.png",
      aiPrompt: "Extreme sports photograph, frozen mid-air.",
      galleryPrompts: ["Snowboarder high jump", "Surfer on giant wave", "Climber portrait"],
      gallery: ["esportista_radical_1.png", "esportista_radical_2.png", "esportista_radical_3.png"]
    }
  ],
  
  // SEÇÃO B: Elite & Sucesso (4 itens)
  lifestyle: [
    {
      id: "lider_corporativo",
      title: "Líder Corporativo",
      tag: "💼 Negócios",
      type: "ensaio",
      desc: "Retratos executivos em escritórios de luxo e estética Forbes.",
      fullDesc: "O ensaio definitivo para sua marca pessoal. Posicionamos você em ambientes de escritórios inteligentes.",
      placeholderImg: "lider_corporativo_1.png",
      aiPrompt: "Corporate portrait of a successful executive in a luxury glass office.",
      galleryPrompts: ["Executive in tailored suit", "Business woman in board room", "Professional in luxury office"],
      gallery: ["lider_corporativo_1.png", "lider_corporativo_2.png", "lider_corporativo_3.png"]
    },
    {
      id: "legado_luxo",
      title: "Legado & Luxo",
      tag: "💎 Bilionário",
      type: "ensaio",
      desc: "O estilo de vida dos super ricos: jatos, iates e quiet luxury.",
      fullDesc: "Entre no mundo da ultra-exclusividade. Captura a essência do luxo silencioso.",
      placeholderImg: "legado_luxo_1.png",
      aiPrompt: "Luxury lifestyle photograph in a private jet cabin.",
      galleryPrompts: ["Man on yacht deck", "Woman in high-end penthouse", "Close up luxury attire"],
      gallery: ["legado_luxo_1.png", "legado_luxo_2.png", "legado_luxo_3.png"]
    },
    {
      id: "aniversario_premium",
      title: "Celebration Royale",
      tag: "🎂 Aniversário",
      type: "ensaio",
      desc: "Seu aniversário com o glamour de uma capa de revista.",
      fullDesc: "Comemore seu novo ciclo com a sofisticação que ele merece. Cenários decorados com balões premium.",
      placeholderImg: "aniversario_premium_1.png",
      aiPrompt: "Birthday celebration portrait with gold balloons.",
      galleryPrompts: ["Blowing out candles", "Woman in celebration dress", "Glamorous party background"],
      gallery: ["aniversario_premium_1.png", "aniversario_premium_1.png", "aniversario_premium_1.png"]
    },
    {
      id: "influencer_pro",
      title: "Influencer Pro",
      tag: "📸 Digital",
      type: "ensaio",
      desc: "Personal branding premium para quem domina o digital.",
      fullDesc: "O ensaio indispensável para criadores de conteúdo. Focamos em um estilo de vida dinâmico.",
      placeholderImg: "influencer_pro_1.png",
      aiPrompt: "Personal branding portrait for an influencer, modern studio.",
      galleryPrompts: ["Street style content creator", "High-tech studio portrait", "Candid lifestyle trendy"],
      gallery: ["influencer_pro_1.png", "influencer_pro_1.png", "influencer_pro_1.png"]
    }
  ],
  
  // SEÇÃO C: Restauração (3 itens)
  restauracao: [
    {
      id: "restauracao_ultra",
      title: "Restauração Ultra 4K",
      tag: "🔄 Essencial",
      type: "restauracao",
      desc: "Foto antiga restaurada para um retrato nítido em 4K.",
      fullDesc: "Tiramos rasgos, arranhões e danos causados pelo tempo. A tecnologia de Upscale reconstrói rostos.",
      placeholderImg: "restauracao_ultra_1.png",
      aiPrompt: "Photo restoration split screen, old vs flawless 4k.",
      galleryPrompts: ["Old blurry vs modern restoration", "Vintage portrait process", "Eye close up restoration"],
      gallery: ["restauracao_ultra_1.png", "restauracao_ultra_2.png", "restauracao_ultra_3.png"]
    },
    {
      id: "colorizacao_cinema",
      title: "Colorização",
      tag: "Cores Vivas",
      type: "restauracao",
      desc: "Traga fotos em P&B de volta à vida com cores realistas.",
      fullDesc: "A colorização é feita por IA que analisa contexto e aplica cores historicamente factíveis.",
      placeholderImg: "colorizacao_cinema_1.png",
      aiPrompt: "B&W portrait transitioning into modern colors.",
      galleryPrompts: ["Family colorization transition", "Vintage portrait colorized", "Historical scene colorization"],
      gallery: ["color_cinema_1.png", "color_cinema_2.png", "color_cinema_3.png"]
    },
    {
      id: "animacao_living",
      title: "Living Portrait",
      tag: "Vídeo Sutil",
      type: "restauracao",
      desc: "Sua foto transformada em um vídeo sutil e realista.",
      fullDesc: "Um toque de Harry Potter: pegamos seu retrato em 4K e aplicamos um modelo de movimento neural sutil.",
      placeholderImg: "animacao_living_1.png",
      aiPrompt: "Magical moving picture frame breathing softly.",
      galleryPrompts: ["Floating magical frame", "Life portrait effect", "Close up breathing portrait"],
      gallery: ["animacao_living_1.png", "animacao_living_2.png", "animacao_living_3.png"]
    }
  ]
};

const packagePricing = {
  ensaio: { 7: 29.90, 12: 44.90, 25: 69.90 },
  restauracao: { 7: 19.90, 12: 29.90, 25: 44.90 }
};

function getPackageById(id) {
  const all = [...catalogData.tematicos, ...catalogData.lifestyle, ...catalogData.restauracao];
  return all.find(item => item.id === id);
}
