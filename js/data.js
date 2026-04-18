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
      placeholderImg: "disney_magica_1.png",
      aiPrompt: "A breathtaking 8k photograph of a happy family laughing in front of the Magic Kingdom castle at sunset, golden hour lighting, magic sparkles, Disney style magic dust, cinematic composition, shot on ARRI Alexa, ultra realistic, editorial style, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k medium close up photograph of a woman smiling in front of the Cinderella castle at sunset, magical glowing particles in the air, cinematic composition, ultra realistic, editorial style, --ar 1:1",
        "A breathtaking 8k full body photograph of a couple holding hands in front of the Magic Kingdom castle, golden hour lighting, cinematic composition, ultra realistic, editorial style, --ar 1:1",
        "A breathtaking 8k portrait of a child wearing a princess dress near a glowing castle gate, beautiful magical lighting, sparkles, ultra realistic, editorial style, --ar 1:1"
      ],
      gallery: ["disney_magica_1.png", "disney_magica_2.png", "disney_magica_3.png"]
    },
    {
      id: "tapete_vermelho",
      title: "Tapete Vermelho",
      tag: "⭐ Premium",
      type: "ensaio",
      desc: "Ensaio editorial nível Oscar. Glamour, flashes e elegância em altíssima resolução.",
      fullDesc: "Sinta a experiência de uma estrela de cinema. Você será retratado caminhando por um tapete vermelho luxuoso, vestindo alta costura (adaptada ao seu estilo), cercado pelo brilho dos flashes dos paparazzi. O resultado é um ensaio fashion editorial com contraste profundo e cores ricas.",
      placeholderImg: "tapete_vermelho_1.png",
      aiPrompt: "A breathtaking 8k photograph of a celebrity walking the red carpet at an awards show, wearing high fashion haute couture, surrounded by paparazzi camera flashes blurring in the background, dramatic lighting, Vogue editorial style, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k photograph of a celebrity posing confidently on the red carpet, high fashion dress, camera flashes background, Vogue editorial style, ultra realistic, --ar 1:1",
        "A breathtaking 8k photograph of a man in a bespoke tuxedo walking the red carpet, paparazzi flashes, cinematic lighting, editorial style, --ar 1:1",
        "A breathtaking 8k close up portrait of a star on the red carpet, elegant makeup, sparkling jewelry, dramatic paparazzi flashes background, ultra realistic, --ar 1:1"
      ],
      gallery: ["tapete_vermelho_1.png", "tapete_vermelho_2.png", "tapete_vermelho_3.png"]
    },
    {
      id: "paris_romance",
      title: "Viagem a Paris",
      tag: "Romântico",
      type: "ensaio",
      desc: "A Torre Eiffel ao fundo, clima romântico e iluminação de cinema francês.",
      fullDesc: "O clássico ensaio parisiense sem precisar sair de casa. Ideal para casais ou retratos individuais sofisticados. A IA compõe a cena com a Torre Eiffel ao por do sol, textura suave de filme analógico e uma paleta de cores acolhedora, típica do cinema europeu moderno.",
      placeholderImg: "paris_romance_1.png",
      aiPrompt: "A breathtaking 8k romantic photograph of a couple embracing in Paris with the Eiffel Tower softly blurred in the background, autumn sunset, warm nostalgic tones, French cinema aesthetic, 35mm film texture, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a woman in a trench coat standing near the Seine river, Eiffel Tower background, autumn sunset, French cinema aesthetic, --ar 1:1",
        "A breathtaking 8k candid photograph of a couple having coffee at a romantic Parisian cafe, Eiffel Tower in the distance, warm tones, editorial style, --ar 1:1",
        "A breathtaking 8k portrait of a man looking sharply towards the camera with Paris architecture and sunset in the background, 35mm film texture, --ar 1:1"
      ],
      gallery: ["paris_romance_1.png", "paris_romance_2.png", "paris_romance_3.png"]
    },
    {
      id: "safari_aventura",
      title: "Aventura em Safari",
      tag: "Exótico",
      type: "ensaio",
      desc: "Na savana africana, com vida selvagem e cores quentes do amanhecer.",
      fullDesc: "Um ensaio selvagem e exclusivo. Colocamos você em um cenário de savana na África, rodeado por uma luz quente do amanhecer. Você usará trajes de expedição de luxo, com animais majestosos (como leões calmos ou girafas) suavemente desfocados ao fundo.",
      placeholderImg: "safari_aventura_1.png",
      aiPrompt: "A breathtaking 8k photograph of an adventurer in luxury linen safari clothing in the African savanna at sunrise, majestic giraffes softly blurred in the background, golden hour, National Geographic editorial style, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a woman in luxury safari clothing standing in the tall grass of the African savanna at sunrise, cinematic lighting, --ar 1:1",
        "A breathtaking 8k photograph of a man looking through binoculars in the African savanna, elephants out of focus in the distance, golden hour, --ar 1:1",
        "A breathtaking 8k close up portrait of an adventurer smiling in an open safari jeep, vast savanna background, sunrise lighting, --ar 1:1"
      ],
      gallery: ["safari_aventura_1.png", "safari_aventura_2.png", "safari_aventura_3.png"]
    },
    {
      id: "estudio_vintage",
      title: "Estúdio Vintage",
      tag: "Clássico",
      type: "ensaio",
      desc: "Estética anos 50, pose clássica e texturas em preto e branco glorioso.",
      fullDesc: "Eternize-se como uma lenda de Hollywood dos anos 1950. Este pacote foca em retrato de estúdio com iluminação dramática (chiaroscuro), roupas da época e granulação de filme 35mm autêntico. Perfeito para quem busca sofisticação atemporal.",
      placeholderImg: "estudio_vintage_1.png",
      aiPrompt: "A breathtaking 8k vintage studio portrait photograph, 1950s Old Hollywood aesthetic, black and white, dramatic chiaroscuro lighting, authentic 35mm film grain, elegant style, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k vintage studio portrait of a woman in a 1950s elegant dress, black and white, dramatic chiaroscuro lighting, 35mm film grain, --ar 1:1",
        "A breathtaking 8k vintage studio portrait of a man in a classic 1950s suit, Old Hollywood aesthetic, high contrast black and white lighting, --ar 1:1",
        "A breathtaking 8k close up portrait of a classic Hollywood starlet, delicate lighting, black and white, film grain, elegant styling, --ar 1:1"
      ],
      gallery: ["estudio_vintage_1.png", "estudio_vintage_2.png", "estudio_vintage_3.png"]
    },
    {
      id: "cyberpunk_neon",
      title: "Cyberpunk 2077",
      tag: "Sci-Fi",
      type: "ensaio",
      desc: "Luzes de neon, cidade futurista hiper-tecnológica e clima cyberpunk.",
      fullDesc: "Mergulhe no futuro. Seu rosto será perfeitamente integrado a um corpo com roupas tecnológicas, em uma cidade chuvosa e dominada pelo brilho dos letreiros neon em roxo e azul ciano. Nível de detalhes absurdo em jaquetas de couro sintético e reflexos de água.",
      placeholderImg: "cyberpunk_neon_1.png",
      aiPrompt: "A breathtaking 8k photograph of a sci-fi character in a rainy cyberpunk city, vibrant magenta and cyan neon lights reflecting on wet streets, high-tech leather jacket, Unreal Engine 5 aesthetic, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a cybernetic augmented woman in a rainy neon city, magenta and blue lights reflecting on her face, ultra realistic, --ar 1:1",
        "A breathtaking 8k photograph of a man wearing a high-tech glowing jacket in a cyberpunk alleyway, wet streets, neon reflections, cinematic lighting, --ar 1:1",
        "A breathtaking 8k close up portrait of a sci-fi character looking at glowing neon holographic signs, dramatic lighting, cyberpunk aesthetic, --ar 1:1"
      ],
      gallery: ["cyberpunk_neon_1.png", "cyberpunk_neon_2.png", "cyberpunk_neon_3.png"]
    },
    {
      id: "praia_paradisio",
      title: "Praia Paradisíaca",
      tag: "Summer",
      type: "ensaio",
      desc: "O mar turquesa das Maldivas e a areia branca perfeitos só para você.",
      fullDesc: "Um ensaio com a vibração de férias de luxo. A IA recria as Maldivas ou o Tahiti: águas cristalinas, luz do sol intensa (porém lisonjeira ao rosto) e estética de verão editorial de revista de turismo.",
      placeholderImg: "praia_paradisio_1.png",
      aiPrompt: "A breathtaking 8k sunny photograph of a person relaxing on a paradise beach in the Maldives, white sand, vibrant turquoise crystal clear water, luxury travel editorial style, vivid summer colors, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a woman in a stylish summer dress standing on a pristine white sand beach, turquoise water background, luxury resort style, --ar 1:1",
        "A breathtaking 8k photograph of a man walking on a tropical beach in the Maldives, bright sunshine, crystal clear ocean, high end lifestyle aesthetic, --ar 1:1",
        "A breathtaking 8k candid shot of someone enjoying a luxury beach vacation, turquoise sea, bright vibrant sunlight, travel magazine editorial style, --ar 1:1"
      ],
      gallery: ["praia_paradisio_1.png", "praia_paradisio_2.png", "praia_paradisio_3.png"]
    },
    {
      id: "noite_gala",
      title: "Noite de Gala",
      tag: "Luxo",
      type: "ensaio",
      desc: "Mansão imperial, vestidos esplêndidos ou smokings impecáveis.",
      fullDesc: "Sinta-se na realeza. Estaremos em uma mansão luxuosa ou em um salão de baile. Mulheres com vestidos fluidos espetaculares, homens com smokings sob medida. A iluminação é focada em lustres de cristal e ambiente aquecido.",
      placeholderImg: "noite_gala_1.png",
      aiPrompt: "A breathtaking 8k editorial photograph of high society people in a luxury gala ballroom, elegant gowns and bespoke tuxedos, warm lighting from crystal chandeliers, royal contemporary aesthetic, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a woman in an exquisite gala gown walking down a marble staircase in a luxury mansion, crystal chandelier lighting, royal aesthetic, --ar 1:1",
        "A breathtaking 8k candid photograph of a man in a bespoke tuxedo holding a glass of champagne at a luxury gala, warm ambient lighting, highly detailed, --ar 1:1",
        "A breathtaking 8k close up portrait of elegant high society figures talking at a luxury ballroom, soft glowing chandelier light, extreme luxury aesthetic, --ar 1:1"
      ],
      gallery: ["noite_gala_1.png", "noite_gala_2.png", "noite_gala_3.png"]
    },
    {
      id: "super_heroi",
      title: "Super-herói",
      tag: "Ação",
      type: "ensaio",
      desc: "Traje épico, capa esvoaçante e um cenário urbano aguardando seu resgate.",
      fullDesc: "Para adultos e crianças que sonham grande. O pacote Super-herói cria um traje espetacular (nos tons de sua escolha), texturas estilo cinema da Marvel/DC, capa esvoaçante e um cenário épico – como o topo de um arranha-céu durante o crepúsculo.",
      placeholderImg: "super_heroi_1.png",
      aiPrompt: "A breathtaking 8k cinematic poster photograph of a superhero wearing a textured armored suit and flowing cape standing on a skyscraper edge at twilight, epic urban cityscape background, Marvel movie aesthetic, intense dramatic lighting, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of a superhero striking an epic pose on top of a skyscraper, flowing cape, twilight cityscape background, cinematic lighting, --ar 1:1",
        "A breathtaking 8k mid-action photograph of a superhero landing with glowing energy effects, textured tactical suit, epic cinematic movie aesthetic, --ar 1:1",
        "A breathtaking 8k close up portrait of a heroic figure looking into the distance, twilight lighting, highly detailed superhero armor texture, dramatic mood, --ar 1:1"
      ],
      gallery: ["super_heroi_1.png", "super_heroi_2.png", "super_heroi_3.png"]
    },
    {
      id: "conto_fadas",
      title: "Conto de Fadas",
      tag: "Fantasia",
      type: "ensaio",
      desc: "Uma floresta encantada, iluminação feérica e criaturas sutis.",
      fullDesc: "Mergulhe em um livro de história. Com estética de alta fantasia, o ensaio acontece numa floresta densa e mística, iluminada por fadas ou pirilampos brilhantes. Tonalidades de verde esmeralda e magia palpável na imagem.",
      placeholderImg: "conto_fadas_1.png",
      aiPrompt: "A breathtaking 8k hyper-realistic photograph of a person in an enchanted mystical forest, rich moss green tones, glowing floating fairy lights, magical Lord of the Rings aesthetic, ethereal lighting, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k portrait of an ethereal beauty standing in an enchanted forest, glowing moss, magical fairy lights, fantasy movie aesthetic, --ar 1:1",
        "A breathtaking 8k photograph of a fantasy character exploring a deep mystical forest illuminated by magical bioluminescent glowing spores, ultra realistic, --ar 1:1",
        "A breathtaking 8k close up portrait of a beautiful person softly illuminated by glowing fireflies in an enchanted forest, mysterious fantasy mood, --ar 1:1"
      ],
      gallery: ["conto_fadas_1.png", "conto_fadas_2.png", "conto_fadas_3.png"]
    },
    {
      id: "astro_cinema",
      title: "Astro de Cinema",
      tag: "Editorial",
      type: "ensaio",
      desc: "Retrato close-up ultra dramático, qualidade de pôster de blockbusters.",
      fullDesc: "Focado inteiramente nas suas expressions. Um close-up dramático simulando a câmera RED ou ARRI Alexa de cinema. Iluminação Rembrandt marcante, cores dessaturadas (estilo thriller ou drama) e nitidez que revela cada textura da pele e dos olhos.",
      placeholderImg: "astro_cinema_1.png",
      aiPrompt: "A breathtaking 8k cinematic facial close-up photograph, intense Rembrandt lighting, heavy shadows, muted teal and orange Hollywood color grading, ultra-realistic skin texture, shot on ARRI Alexa 65mm, intense drama, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k dramatic close up portrait of a woman looking intensely at the camera, Rembrandt lighting, deep shadows, Hollywood thriller color grading, --ar 1:1",
        "A breathtaking 8k cinematic portrait of a man, very dramatic lighting, high contrast, muted colors, shot on ARRI Alexa, extremely detailed facial texture, --ar 1:1",
        "A breathtaking 8k close up of an actor's face in the shadows with bright eye reflections, intense cinematic drama, ultra high definition 8k, --ar 1:1"
      ],
      gallery: ["astro_cinema_1.png", "astro_cinema_2.png", "astro_cinema_3.png"]
    },
    {
      id: "esportista_radical",
      title: "Esportista Radical",
      tag: "Adrenalina",
      type: "ensaio",
      desc: "Montanhas nevadas ou surfe gigante com ação congelada em um milésimo de segundo.",
      fullDesc: "Mostre seu lado extremo, mesmo que fisicamente não chegue tão longe. Escolha o esporte (snowboard, surf, escalada sem corda), e a IA o transportará para a ação congelada no tempo perfeito, com partículas de água ou neve voando ao seu redor em 4K incrivelmente nítido.",
      placeholderImg: "esportista_radical_1.png",
      aiPrompt: "A breathtaking 8k high-speed extreme sports photograph, a snowboarder frozen mid-air above a snowy mountain peak, flying snow particles, hyper-realistic, high adrenaline Red Bull editorial style, crystal clear focus, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k photograph of an extreme snowboarder doing a high jump over a pristine snowy mountain, frozen snow particles in mid-air, high adrenaline editorial, --ar 1:1",
        "A breathtaking 8k photograph of a surfer riding a massive giant wave, perfect action freeze-frame, water droplets splashing, ultra realistic, --ar 1:1",
        "A breathtaking 8k portrait of an extreme mountain climber hanging from a high cliff edge, epic landscape background, ultra sharp focus, --ar 1:1"
      ],
      gallery: ["esportista_radical_1.png", "esportista_radical_2.png", "esportista_radical_3.png"]
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
      placeholderImg: "restauracao_ultra_1.png",
      aiPrompt: "A breathtaking 8k split screen image demonstrating photo restoration, the left half is an old damaged scratched sepia portrait, the right half is magically revealed as a flawless ultra-sharp highly detailed 4k photograph, editorial style, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k split screen image, left side old blurry damaged vintage photo, right side ultra sharp crystal clear modern restoration, --ar 1:1",
        "A breathtaking 8k composite showing photo restoration process of a vintage portrait, restoring lost details, highly detailed, --ar 1:1",
        "A breathtaking 8k close up split screen of an eye from a photo, left side heavily damaged and dusty, right side flawlessly restored and bright, --ar 1:1"
      ],
      gallery: ["restauracao_ultra_1.png", "restauracao_ultra_2.png", "restauracao_ultra_3.png"]
    },
    {
      id: "colorizacao_cinema",
      title: "Colorização Cinematográfica",
      tag: "Cores Viva",
      type: "restauracao",
      desc: "Traga fotos em Preto e Branco de volta à vida com cores realistas.",
      fullDesc: "Não usamos filtros genéricos. A colorização é feita por IA que analisa contexto (uniformes militares da época, texturas de árvores, pele) e aplica cores historicamente factíveis com qualidade e iluminação ricas.",
      placeholderImg: "colorizacao_cinema_1.png",
      aiPrompt: "A breathtaking 8k image demonstrating colorization, a historical black and white portrait smoothly transitioning into vibrant, rich, photorealistic modern colors, gorgeous lighting, ultra realistic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k split image showing a vintage black and white photo of a family beautifully transitioning into rich vibrant cinematic colors, --ar 1:1",
        "A breathtaking 8k vintage portrait vividly colorized with historically accurate tones, stunning skin texture, warm lighting, --ar 1:1",
        "A breathtaking 8k historical scene smoothly fading from high contrast black and white to vibrant natural lifelike colors, editorial style, --ar 1:1"
      ],
      gallery: ["colorizacao_cinema_1.png", "colorizacao_cinema_2.png", "colorizacao_cinema_3.png"]
    },
    {
      id: "animacao_living",
      title: "Living Portrait",
      tag: "Vídeo Sutil",
      type: "restauracao",
      desc: "Sua foto ou retrato transformado em um vídeo sutil realista (piscar, respirar).",
      fullDesc: "Um toque de Harry Potter: pegamos seu retrato em 4K (antigo ou gerado) e aplicamos um modelo de movimento neural sutil. A pessoa pisca, respira e vira levemente o rosto com naturalidade assustadora. Ideal para homenagens ou quadros digitais.",
      placeholderImg: "animacao_living_1.png",
      aiPrompt: "A breathtaking 8k family portrait photograph inside a magical moving picture frame moving softly, subtle glowing magical dust indicating the photo is literally alive and breathing, ultra realistic magic aesthetic, --ar 1:1 --stylize 250",
      galleryPrompts: [
        "A breathtaking 8k magical portrait frame where the subject appears slightly moving and blinking, subtle magical light trails, living photo illusion, --ar 1:1",
        "A breathtaking 8k beautiful portrait of a person in a frame magically coming to life, soft glow, realistic, magical photography effect, --ar 1:1",
        "A breathtaking 8k close up of a living portrait gently breathing and turning its head, magical glowing borders, highly detailed, --ar 1:1"
      ],
      gallery: ["animacao_living_1.png", "animacao_living_2.png", "animacao_living_3.png"]
    }
  ]
};

// Tabelas de preço atualizadas (7, 12, 25 fotos)
const packagePricing = {
  ensaio: {
    7: 29.90,
    12: 44.90,
    25: 69.90
  },
  restauracao: {
    7: 19.90,
    12: 29.90,
    25: 44.90
  }
};

// Helper: buscar 1 item específico pelo ID
function getPackageById(id) {
  const all = [...catalogData.tematicos, ...catalogData.restauracao];
  return all.find(item => item.id === id);
}
