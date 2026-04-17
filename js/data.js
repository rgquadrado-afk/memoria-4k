// Banco de Dados do Catálogo "Memória 4K"
const catalogData = {
  // SEÇÃO A: Ensaios Temáticos (12 itens)
  tematicos: [
    {
      id: "disney_magica",
      title: "Disney Mágica",
      tag: "✨ Mais vendido",
      type: "ensaio",
      desc: "Você no castelo da Cinderela, sob luz dourada de fim de tarde. Magia e encanto em 4K.",
      fullDesc: "Realize o sonho de ser o protagonista do seu próprio conto de fadas. Este ensaio utiliza inteligência artificial avançada para criar retratos hiper-realistas seus (ou de seus filhos) diante do icônico castelo da Disney. A iluminação é ajustada para a 'golden hour', garantindo pele perfeita e uma atmosfera cinematográfica repleta de magia e poeira estelar.",
      placeholderImg: "card-disney.png",
      gallery: ["card-disney.png", "card-disney.png", "card-disney.png"] // placeholders
    },
    {
      id: "tapete_vermelho",
      title: "Tapete Vermelho",
      tag: "⭐ Premium",
      type: "ensaio",
      desc: "Ensaio editorial nível Oscar. Glamour, flashes e elegância em altíssima resolução.",
      fullDesc: "Sinta a experiência de uma estrela de cinema. Você será retratado caminhando por um tapete vermelho luxuoso, vestindo alta costura (adaptada ao seu estilo), cercado pelo brilho dos flashes dos paparazzi. O resultado é um ensaio fashion editorial com contraste profundo e cores ricas.",
      placeholderImg: "card-tapete.png",
      gallery: ["card-tapete.png", "card-tapete.png", "card-tapete.png"]
    },
    {
      id: "paris_romance",
      title: "Viagem a Paris",
      tag: "Romântico",
      type: "ensaio",
      desc: "A Torre Eiffel ao fundo, clima romântico e iluminação de cinema francês.",
      fullDesc: "O clássico ensaio parisiense sem precisar sair de casa. Ideal para casais ou retratos individuais sofisticados. A IA compõe a cena com a Torre Eiffel ao por do sol, textura suave de filme analógico e uma paleta de cores acolhedora, típica do cinema europeu moderno.",
      placeholderImg: "https://via.placeholder.com/800x600/1C3F3A/FFFFFF?text=%E2%9C%A6+Paris+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/1C3F3A/FFFFFF?text=%E2%9C%A6+Paris+4K+Preview", "https://via.placeholder.com/800x600/1C3F3A/FFFFFF?text=%E2%9C%A6+Paris+2", "https://via.placeholder.com/800x600/1C3F3A/FFFFFF?text=%E2%9C%A6+Paris+3"]
    },
    {
      id: "safari_aventura",
      title: "Aventura em Safari",
      tag: "Exótico",
      type: "ensaio",
      desc: "Na savana africana, com vida selvagem e cores quentes do amanhecer.",
      fullDesc: "Um ensaio selvagem e exclusivo. Colocamos você em um cenário de savana na África, rodeado por uma luz quente do amanhecer. Você usará trajes de expedição de luxo, com animais majestosos (como leões calmos ou girafas) suavemente desfocados ao fundo.",
      placeholderImg: "https://via.placeholder.com/800x600/C26A40/FFFFFF?text=%E2%9C%A6+Safari+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/C26A40/FFFFFF?text=%E2%9C%A6+Safari+4K+Preview", "https://via.placeholder.com/800x600/C26A40/FFFFFF?text=%E2%9C%A6+Safari+2", "https://via.placeholder.com/800x600/C26A40/FFFFFF?text=%E2%9C%A6+Safari+3"]
    },
    {
      id: "estudio_vintage",
      title: "Estúdio Vintage",
      tag: "Clássico",
      type: "ensaio",
      desc: "Estética anos 50, pose clássica e texturas em preto e branco glorioso.",
      fullDesc: "Eternize-se como uma lenda de Hollywood dos anos 1950. Este pacote foca em retrato de estúdio com iluminação dramática (chiaroscuro), roupas da época e granulação de filme 35mm autêntico. Perfeito para quem busca sofisticação atemporal.",
      placeholderImg: "https://via.placeholder.com/800x600/2A4A5A/FFFFFF?text=%E2%9C%A6+Vintage+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/2A4A5A/FFFFFF?text=%E2%9C%A6+Vintage+4K+Preview", "https://via.placeholder.com/800x600/2A4A5A/FFFFFF?text=%E2%9C%A6+Vintage+2", "https://via.placeholder.com/800x600/2A4A5A/FFFFFF?text=%E2%9C%A6+Vintage+3"]
    },
    {
      id: "cyberpunk_neon",
      title: "Cyberpunk 2077",
      tag: "Sci-Fi",
      type: "ensaio",
      desc: "Luzes de neon, cidade futurista hiper-tecnológica e clima cyberpunk.",
      fullDesc: "Mergulhe no futuro. Seu rosto será perfeitamente integrado a um corpo com roupas tecnológicas, em uma cidade chuvosa e dominada pelo brilho dos letreiros neon em roxo e azul ciano. Nível de detalhes absurdo em jaquetas de couro sintético e reflexos de água.",
      placeholderImg: "https://via.placeholder.com/800x600/100/FFF?text=%E2%9C%A6+Cyberpunk+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/100/FFF?text=%E2%9C%A6+Cyberpunk+4K+Preview", "https://via.placeholder.com/800x600/100/FFF?text=%E2%9C%A6+Cyberpunk+2", "https://via.placeholder.com/800x600/100/FFF?text=%E2%9C%A6+Cyberpunk+3"]
    },
    {
      id: "praia_paradisio",
      title: "Praia Paradisíaca",
      tag: "Summer",
      type: "ensaio",
      desc: "O mar turquesa das Maldivas e a areia branca perfeitos só para você.",
      fullDesc: "Um ensaio com a vibração de férias de luxo. A IA recria as Maldivas ou o Tahiti: águas cristalinas, luz do sol intensa (porém lisonjeira ao rosto) e estética de verão editorial de revista de turismo.",
      placeholderImg: "https://via.placeholder.com/800x600/A8D8C8/1C3F3A?text=%E2%9C%A6+Praia+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/A8D8C8/1C3F3A?text=%E2%9C%A6+Praia+4K+Preview", "https://via.placeholder.com/800x600/A8D8C8/1C3F3A?text=%E2%9C%A6+Praia+2", "https://via.placeholder.com/800x600/A8D8C8/1C3F3A?text=%E2%9C%A6+Praia+3"]
    },
    {
      id: "noite_gala",
      title: "Noite de Gala",
      tag: "Luxo",
      type: "ensaio",
      desc: "Mansão imperial, vestidos esplêndidos ou smokings impecáveis.",
      fullDesc: "Sinta-se na realeza. Estaremos em uma mansão luxuosa ou em um salão de baile. Mulheres com vestidos fluidos espetaculares, homens com smokings sob medida. A iluminação é focada em lustres de cristal e ambiente aquecido.",
      placeholderImg: "https://via.placeholder.com/800x600/D4B896/0F1A15?text=%E2%9C%A6+Gala+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/D4B896/0F1A15?text=%E2%9C%A6+Gala+4K+Preview", "https://via.placeholder.com/800x600/D4B896/0F1A15?text=%E2%9C%A6+Gala+2", "https://via.placeholder.com/800x600/D4B896/0F1A15?text=%E2%9C%A6+Gala+3"]
    },
    {
      id: "super_heroi",
      title: "Super-herói",
      tag: "Ação",
      type: "ensaio",
      desc: "Traje épico, capa esvoaçante e um cenário urbano aguardando seu resgate.",
      fullDesc: "Para adultos e crianças que sonham grande. O pacote Super-herói cria um traje espetacular (nos tons de sua escolha), texturas estilo cinema da Marvel/DC, capa esvoaçante e um cenário épico – como o topo de um arranha-céu durante o crepúsculo.",
      placeholderImg: "https://via.placeholder.com/800x600/b71c1c/FFF?text=%E2%9C%A6+Hero+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/b71c1c/FFF?text=%E2%9C%A6+Hero+4K+Preview", "https://via.placeholder.com/800x600/b71c1c/FFF?text=%E2%9C%A6+Hero+2", "https://via.placeholder.com/800x600/b71c1c/FFF?text=%E2%9C%A6+Hero+3"]
    },
    {
      id: "conto_fadas",
      title: "Conto de Fadas",
      tag: "Fantasia",
      type: "ensaio",
      desc: "Uma floresta encantada, iluminação feérica e criaturas sutis.",
      fullDesc: "Mergulhe em um livro de história. Com estética de alta fantasia, o ensaio acontece numa floresta densa e mística, iluminada por fadas ou pirilampos brilhantes. Tonalidades de verde esmeralda e magia palpável na imagem.",
      placeholderImg: "https://via.placeholder.com/800x600/1C3F3A/D4B896?text=%E2%9C%A6+Fadas+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/1C3F3A/D4B896?text=%E2%9C%A6+Fadas+4K+Preview", "https://via.placeholder.com/800x600/1C3F3A/D4B896?text=%E2%9C%A6+Fadas+2", "https://via.placeholder.com/800x600/1C3F3A/D4B896?text=%E2%9C%A6+Fadas+3"]
    },
    {
      id: "astro_cinema",
      title: "Astro de Cinema",
      tag: "Editorial",
      type: "ensaio",
      desc: "Retrato close-up ultra dramático, qualidade de pôster de blockbusters.",
      fullDesc: "Focado inteiramente nas suas expressões. Um close-up dramático simulando a câmera RED ou ARRI Alexa de cinema. Iluminação Rembrandt marcante, cores dessaturadas (estilo thriller ou drama) e nitidez que revela cada textura da pele e dos olhos.",
      placeholderImg: "https://via.placeholder.com/800x600/222/FFF?text=%E2%9C%A6+Astro+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/222/FFF?text=%E2%9C%A6+Astro+4K+Preview", "https://via.placeholder.com/800x600/222/FFF?text=%E2%9C%A6+Astro+2", "https://via.placeholder.com/800x600/222/FFF?text=%E2%9C%A6+Astro+3"]
    },
    {
      id: "esportista_radical",
      title: "Esportista Radical",
      tag: "Adrenalina",
      type: "ensaio",
      desc: "Montanhas nevadas ou surfe gigante com ação congelada em um milésimo de segundo.",
      fullDesc: "Mostre seu lado extremo, mesmo que fisicamente não chegue tão longe. Escolha o esporte (snowboard, surf, escalada sem corda), e a IA o transportará para a ação congelada no tempo perfeito, com partículas de água ou neve voando ao seu redor em 4K incrivelmente nítido.",
      placeholderImg: "https://via.placeholder.com/800x600/D4885A/FFF?text=%E2%9C%A6+Radical+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/D4885A/FFF?text=%E2%9C%A6+Radical+4K+Preview", "https://via.placeholder.com/800x600/D4885A/FFF?text=%E2%9C%A6+Radical+2", "https://via.placeholder.com/800x600/D4885A/FFF?text=%E2%9C%A6+Radical+3"]
    }
  ],
  
  // SEÇÃO B: Restauração (3 itens)
  restauracao: [
    {
      id: "restauracao_ultra",
      title: "Restauração Ultra 4K",
      tag: "🔄 Essencial",
      type: "restauracao",
      desc: "Sua foto antiga ou danificada restaurada para um retrato nítido em 4K.",
      fullDesc: "Tiramos rasgos, arranhões, desfoque e danos causados pelo tempo. A tecnologia de Upscale reconstrói rostos que não podiam mais ser vistos, devolvendo a textura da pele e a nitidez sem parecer uma pintura plastificada. O máximo respeito à fisionomia original.",
      placeholderImg: "card-restauracao.png",
      gallery: ["card-restauracao.png", "card-restauracao.png", "card-restauracao.png"]
    },
    {
      id: "colorizacao_cinema",
      title: "Colorização Cinematográfica",
      tag: "Cores Viva",
      type: "restauracao",
      desc: "Traga fotos em Preto e Branco de volta à vida com cores realistas.",
      fullDesc: "Não usamos filtros genéricos. A colorização é feita por IA que analisa contexto (uniformes militares da época, texturas de árvores, pele) e aplica cores historicamente factíveis com qualidade e iluminação ricas.",
      placeholderImg: "https://via.placeholder.com/800x600/C26A40/FFF?text=%E2%9C%A6+Color+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/C26A40/FFF?text=%E2%9C%A6+Color+4K+Preview", "https://via.placeholder.com/800x600/C26A40/FFF?text=%E2%9C%A6+Color+2", "https://via.placeholder.com/800x600/C26A40/FFF?text=%E2%9C%A6+Color+3"]
    },
    {
      id: "animacao_living",
      title: "Living Portrait",
      tag: "Vídeo Sutil",
      type: "restauracao",
      desc: "Sua foto ou retrato transformado em um vídeo sutil realista (piscar, respirar).",
      fullDesc: "Um toque de Harry Potter: pegamos seu retrato em 4K (antigo ou gerado) e aplicamos um modelo de movimento neural sutil. A pessoa pisca, respira e vira levemente o rosto com naturalidade assustadora. Ideal para homenagens ou quadros digitais.",
      placeholderImg: "https://via.placeholder.com/800x600/2A4A5A/FFF?text=%E2%9C%A6+Living+4K+Preview",
      gallery: ["https://via.placeholder.com/800x600/2A4A5A/FFF?text=%E2%9C%A6+Living+4K+Preview", "https://via.placeholder.com/800x600/2A4A5A/FFF?text=%E2%9C%A6+Living+2", "https://via.placeholder.com/800x600/2A4A5A/FFF?text=%E2%9C%A6+Living+3"]
    }
  ]
};

// Tabelas de preço 
const packagePricing = {
  ensaio: {
    1: 29.90,
    3: 79.90,
    5: 119.90
  },
  restauracao: {
    1: 19.90,
    3: 49.90,
    5: 69.90
  }
};

// Helper: buscar 1 item específico pelo ID
function getPackageById(id) {
  const all = [...catalogData.tematicos, ...catalogData.restauracao];
  return all.find(item => item.id === id);
}
