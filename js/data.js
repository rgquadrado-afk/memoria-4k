// ============================================================
// MEMÓRIA 4K — BANCO DE DADOS + MOTOR DE PROMPTS JSON
// Otimizado para: Google Gemini / Imagen
// Câmera padrão: Hasselblad X2D 100C
// ============================================================

const NEGATIVE_PROMPT = "cartoon, anime, illustration, 3d render, painting, artificial, fake, blurry, deformed, disfigured, bad anatomy, extra limbs, watermark, text, logo, low quality, jpeg artifacts, oversaturated, plastic skin";

function buildPrompt(pkg, clientData) {
  const p = pkg.promptJSON;
  const name = clientData?.name || "[NOME]";
  const gender = clientData?.gender || "[GENERO]";
  const ethnicity = clientData?.ethnicity || "[ETNIA]";
  const notes = clientData?.notes || "";

  const parts = [
    `Ultra-realistic ${p.camera.shot_type} photograph`,
    `of a ${gender} person (${ethnicity})`,
    `${p.subject.attire}`,
    `${p.scene.setting}`,
    `Time: ${p.scene.time_of_day}, ${p.scene.weather_mood}`,
    `Shot on ${p.camera.type} with ${p.camera.lens}`,
    `${p.camera.depth_of_field} depth of field, focus on ${p.camera.focus}`,
    `${p.lighting.type} lighting, ${p.lighting.quality}, ${p.lighting.color_temperature}`,
    `${p.style.reference} editorial quality`,
    `${p.style.color_grading}`,
    `${p.style.post_processing}`,
    `${p.subject.pose}, ${p.subject.expression}`,
    `Photorealistic, 8K resolution, hyperdetailed skin texture, natural pores, real hair strands`,
    notes ? `Additional: ${notes}` : ""
  ].filter(Boolean);

  return {
    compiled: parts.join(". ") + ".",
    negative: NEGATIVE_PROMPT,
    json: { ...p, client: { name, gender, ethnicity, notes } }
  };
}

function buildGalleryPrompt(pkg, variationIndex, clientData) {
  const v = pkg.galleryVariations[variationIndex];
  if (!v) return null;
  const base = buildPrompt(pkg, clientData);
  const override = `${base.compiled} Variation: ${v.shot_type}, ${v.description}`;
  return { compiled: override, negative: NEGATIVE_PROMPT };
}

const catalogData = {
  tematicos: [
    {
      id: "disney_magica", title: "Disney Mágica", tag: "✨ Mais vendido", type: "ensaio",
      desc: "Você no castelo da Cinderela, sob luz dourada de fim de tarde.",
      fullDesc: "Realize o sonho de ser o protagonista do seu próprio conto de fadas. Este ensaio utiliza inteligência artificial avançada para criar retratos hiper-realistas seus diante do icônico castelo da Disney.",
      placeholderImg: "disney_magica_1.png",
      gallery: ["disney_magica_1.png", "disney_magica_2.png", "disney_magica_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 80mm f/1.9", shot_type: "portrait", depth_of_field: "shallow bokeh f/1.9", focus: "eyes and face" },
        scene: { setting: "Standing in front of the iconic Cinderella Castle at Magic Kingdom, surrounded by manicured gardens and a pristine walkway with warm fairy-tale atmosphere", time_of_day: "golden hour, 30 minutes before sunset", weather_mood: "warm amber sunlight with soft lens flare, scattered high clouds painted orange and pink" },
        lighting: { type: "natural golden hour backlight with subtle fill from castle reflections", quality: "soft, warm, cinematic with rim light on hair", color_temperature: "warm 3200K ambient mixed with 4500K fill" },
        subject: { attire: "wearing an elegant outfit that complements the fairy-tale setting, clean and polished appearance", pose: "standing naturally with a slight turn of the shoulders, one hand gently resting at the side", expression: "genuine warm smile with bright eyes, filled with wonder and joy" },
        style: { reference: "Disney Parks official portrait photography, Vogue Travel editorial", color_grading: "warm golden tones, enhanced amber highlights, soft shadow lift, fairy-tale color palette", post_processing: "subtle film grain, gentle lens flare from sunlight, slight vignette, micro-detail enhancement on skin and fabrics" }
      },
      galleryVariations: [
        { shot_type: "medium portrait", description: "waist-up portrait with castle centered behind, warm backlight creating rim light on hair and shoulders" },
        { shot_type: "full body editorial", description: "full body walking towards camera on the castle pathway, cinematic wide composition with castle in full view" },
        { shot_type: "close-up emotional", description: "tight close-up portrait with castle soft-focused in background, catching natural light in the eyes, emotional and warm expression" }
      ]
    },
    {
      id: "tapete_vermelho", title: "Tapete Vermelho", tag: "⭐ Premium", type: "ensaio",
      desc: "Ensaio editorial nível Oscar. Glamour, flashes e elegância.",
      fullDesc: "Sinta a experiência de uma estrela de cinema. Você será retratado caminhando por um tapete vermelho luxuoso.",
      placeholderImg: "tapete_vermelho_1.png",
      gallery: ["tapete_vermelho_1.png", "tapete_vermelho_2.png", "tapete_vermelho_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 90mm f/2.5", shot_type: "editorial portrait", depth_of_field: "medium bokeh f/2.5 isolating subject from paparazzi background", focus: "sharp on face and outfit details" },
        scene: { setting: "Walking on a luxurious deep red carpet at a prestigious Hollywood awards ceremony, velvet ropes on both sides, photographers with flash in the background, movie premiere backdrop with elegant branding", time_of_day: "evening event lighting", weather_mood: "controlled indoor glamour, dramatic atmosphere" },
        lighting: { type: "multi-flash editorial setup with key light at 45 degrees, paparazzi flashes creating dynamic catchlights", quality: "dramatic, high contrast, fashion editorial with strong highlights", color_temperature: "cool 5600K key light mixed with warm 3800K ambient, red carpet reflecting warm tones upward" },
        subject: { attire: "wearing a tailored designer outfit, impeccably styled, red carpet ready, accessories catching light", pose: "confident stride mid-walk, one foot slightly forward, shoulders back, chin slightly elevated", expression: "confident power gaze, slight enigmatic smile, star presence" },
        style: { reference: "Vogue cover shoot, Vanity Fair Oscar Party, Annie Leibovitz celebrity portrait", color_grading: "rich deep reds, luxurious blacks, creamy skin tones, high contrast fashion grading", post_processing: "editorial skin retouching preserving texture, flash reflections in eyes, subtle lens flare from camera flashes, slight film grain for cinematic feel" }
      },
      galleryVariations: [
        { shot_type: "full body fashion", description: "full body pose on red carpet, paparazzi flashing, confident power stance" },
        { shot_type: "medium close-up", description: "waist-up portrait, looking over shoulder with dramatic flash lighting, editorial presence" },
        { shot_type: "cinematic close-up", description: "tight portrait capturing star quality, multiple catchlights from flashes, intense confident gaze" }
      ]
    },
    {
      id: "paris_romance", title: "Viagem a Paris", tag: "Romântico", type: "ensaio",
      desc: "A Torre Eiffel ao fundo e iluminação de cinema francês.",
      fullDesc: "O clássico ensaio parisiense sem precisar sair de casa. Ideal para casais ou retratos individuais sofisticados.",
      placeholderImg: "paris_romance_1.png",
      gallery: ["paris_romance_1.png", "paris_romance_2.png", "paris_romance_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 65mm f/2.8", shot_type: "environmental portrait", depth_of_field: "medium bokeh with Eiffel Tower recognizable but softened", focus: "subject face with background context" },
        scene: { setting: "Standing on Trocadéro esplanade with the Eiffel Tower perfectly framed behind, Parisian architecture visible, classic Haussmann buildings, cobblestone details", time_of_day: "blue hour just after sunset, Eiffel Tower lights beginning to sparkle", weather_mood: "soft romantic atmosphere, gentle mist adding depth, city lights glowing warm" },
        lighting: { type: "natural blue hour ambient combined with warm city lights creating dual-tone atmosphere", quality: "soft, romantic, French cinema aesthetic, Amélie Poulain color palette", color_temperature: "cool 6500K sky mixed with warm 2800K city lights, creating beautiful contrast" },
        subject: { attire: "elegantly dressed in sophisticated French-inspired fashion, scarf or beret optional, effortlessly chic", pose: "natural relaxed pose leaning slightly on a stone balustrade or standing with Parisian elegance", expression: "wistful romantic gaze, soft genuine smile, eyes reflecting city lights" },
        style: { reference: "French cinema photography, Doisneau's Paris, modern Parisian editorial for Condé Nast Traveler", color_grading: "desaturated blues and warm ambers, French cinema color science, lifted shadows with warm midtones", post_processing: "gentle film grain reminiscent of Kodak Portra 400, subtle lens flare from Eiffel Tower lights, soft atmospheric haze" }
      },
      galleryVariations: [
        { shot_type: "wide romantic", description: "full body near the Seine river with Eiffel Tower behind, romantic Parisian atmosphere, evening city lights" },
        { shot_type: "café portrait", description: "seated at a classic Parisian sidewalk café, espresso on marble table, candid natural moment captured" },
        { shot_type: "intimate close-up", description: "close-up portrait with bokeh city lights, Eiffel Tower sparkling defocused behind, romantic eye contact" }
      ]
    },
    {
      id: "safari_aventura", title: "Aventura em Safari", tag: "Exótico", type: "ensaio",
      desc: "Na savana africana, com vida selvagem e cores quentes do amanhecer.",
      fullDesc: "Um ensaio selvagem e exclusivo. Colocamos você em um cenário de savana na África.",
      placeholderImg: "safari_aventura_1.png",
      gallery: ["safari_aventura_1.png", "safari_aventura_2.png", "safari_aventura_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 135mm f/2.8", shot_type: "environmental adventure portrait", depth_of_field: "medium depth showing savanna context", focus: "subject sharp with environmental context" },
        scene: { setting: "Standing in the African savanna, acacia trees silhouetted in the distance, golden grasslands stretching to the horizon, subtle wildlife presence like distant elephants or giraffes", time_of_day: "early morning sunrise, first light breaking over the horizon", weather_mood: "warm dusty golden sunrise, low morning mist over grasslands, dramatic sky with scattered clouds lit from below" },
        lighting: { type: "dramatic sunrise side-lighting creating long shadows and warm rim light", quality: "National Geographic expedition documentary, raw and authentic", color_temperature: "deep warm 2500K sunrise transitioning to 4000K ambient, rich earth tones" },
        subject: { attire: "wearing premium safari clothing in earth tones - khaki jacket, cargo pants, leather boots, adventure watch, binoculars around neck", pose: "standing tall surveying the landscape, one hand shading eyes or holding binoculars, adventurous and confident stance", expression: "awe-struck by nature, calm determination, explorer's focused gaze toward horizon" },
        style: { reference: "National Geographic cover story, luxury safari brand editorial, Out of Africa cinematic quality", color_grading: "warm earth tones, deep oranges and golds, rich shadow detail, African sunrise palette", post_processing: "atmospheric dust particles catching light, subtle lens flare from sunrise, natural film grain, enhanced texture on fabrics and skin" }
      },
      galleryVariations: [
        { shot_type: "wide landscape portrait", description: "full body with vast savanna backdrop, dramatic sunrise sky, silhouetted acacia trees framing the subject" },
        { shot_type: "adventure close-up", description: "waist-up portrait inside an open-top safari jeep, binoculars in hand, wind in hair, golden light on face" },
        { shot_type: "dramatic portrait", description: "close-up with shallow depth of field, warm sunrise light on one side of face, intense engaged expression, dusty atmosphere" }
      ]
    },
    {
      id: "estudio_vintage", title: "Estúdio Vintage", tag: "Clássico", type: "ensaio",
      desc: "Estética anos 50 e texturas em preto e branco glorioso.",
      fullDesc: "Eternize-se como uma lenda de Hollywood dos anos 1950. Foco em retrato de estúdio.",
      placeholderImg: "estudio_vintage_1.png",
      gallery: ["estudio_vintage_1.png", "estudio_vintage_2.png", "estudio_vintage_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 80mm f/1.9", shot_type: "classic studio portrait", depth_of_field: "shallow studio bokeh, seamless background", focus: "razor sharp on eyes, gradual falloff" },
        scene: { setting: "Classic Hollywood photography studio with seamless backdrop, professional studio setup visible subtly, timeless 1950s atmosphere", time_of_day: "controlled studio environment", weather_mood: "studio controlled, dramatic and intimate" },
        lighting: { type: "classic Rembrandt lighting with butterfly fill, strong key light creating defined shadow triangle under cheekbone", quality: "dramatic high-contrast studio, George Hurrell Hollywood glamour style", color_temperature: "neutral 5500K key with slight warm fill at 4800K" },
        subject: { attire: "classic 1950s style clothing - tailored suit or elegant vintage dress, pearl accessories, period-appropriate hairstyle", pose: "classic three-quarter turn with chin slightly lifted, shoulders angled to camera, old Hollywood dramatic positioning", expression: "intense sultry gaze with quiet confidence, the look of a Golden Age movie star" },
        style: { reference: "George Hurrell Hollywood portraits, Richard Avedon studio work, classic Vanity Fair black and white", color_grading: "rich black and white conversion, deep blacks, luminous highlights, full tonal range with emphasis on mid-tone detail", post_processing: "classic film grain matching Ilford HP5 or Kodak Tri-X, subtle skin glow, vignette focusing attention on face, printed on silver gelatin paper texture" }
      },
      galleryVariations: [
        { shot_type: "classic Hollywood", description: "dramatic three-quarter portrait with strong Rembrandt lighting, vintage glamour" },
        { shot_type: "full environmental", description: "full body in vintage studio setting, dramatic lighting, old Hollywood movie star feel" },
        { shot_type: "extreme close-up", description: "tight close-up capturing every detail in high contrast B&W, intense starlet gaze, luminous skin" }
      ]
    },
    {
      id: "cyberpunk_neon", title: "Cyberpunk 2077", tag: "Sci-Fi", type: "ensaio",
      desc: "Luzes de neon e cidade futurista hiper-tecnológica.",
      fullDesc: "Mergulhe no futuro. Seu rosto será perfeitamente integrado a um corpo com roupas tecnológicas.",
      placeholderImg: "cyberpunk_neon_1.png",
      gallery: ["cyberpunk_neon_1.png", "cyberpunk_neon_2.png", "cyberpunk_neon_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 45mm f/4 with anamorphic adapter", shot_type: "cinematic sci-fi portrait", depth_of_field: "shallow with anamorphic oval bokeh from neon signs", focus: "subject face with neon reflections on skin" },
        scene: { setting: "Futuristic cyberpunk city street at night, towering holographic advertisements, neon signs in Japanese and English, rain-slicked streets reflecting colorful lights, flying vehicles in distant background, steam rising from grates", time_of_day: "deep night, 2AM urban atmosphere", weather_mood: "light rain creating reflections on every surface, humid atmosphere with visible breath, moody and electric" },
        lighting: { type: "practical neon lighting from multiple colored sources - cyan, magenta, and amber neons creating tricolor split lighting on face", quality: "cinematic Blade Runner 2049 quality, moody and atmospheric", color_temperature: "mixed neon sources: cyan 8000K, magenta, warm amber 2200K, creating dramatic color contrast on skin" },
        subject: { attire: "wearing a futuristic tech jacket with subtle LED accents, high-collar, cyberpunk fashion with tactical elements, reflective materials catching neon light", pose: "standing in the rain looking up or over shoulder, atmospheric and mysterious, urban samurai presence", expression: "intense determined look, eyes reflecting multiple neon colors, mysterious and powerful" },
        style: { reference: "Blade Runner 2049 cinematography by Roger Deakins, Ghost in the Shell live action, Cyberpunk 2077 official art", color_grading: "heavy teal and orange contrast, deep blacks, vibrant neon saturation, cinematic ACES color management", post_processing: "rain droplets on camera lens, anamorphic lens flare streaks, chromatic aberration on edges, atmospheric haze from rain and steam, enhanced neon glow bloom" }
      },
      galleryVariations: [
        { shot_type: "wide cyberpunk", description: "full body in neon-lit alley, rain reflections on ground, holographic ads overhead, cinematic composition" },
        { shot_type: "action portrait", description: "dynamic angle from below, neon lights framing face, rain falling, intense expression" },
        { shot_type: "neon close-up", description: "extreme close-up with neon light painting face in cyan and magenta, rain on skin, reflective eyes" }
      ]
    },
    {
      id: "praia_paradisio", title: "Praia Paradisíaca", tag: "Summer", type: "ensaio",
      desc: "O mar turquesa das Maldivas e a areia branca perfeitos para você.",
      fullDesc: "Um ensaio com a vibração de férias de luxo. A IA recria as Maldivas ou o Tahiti.",
      placeholderImg: "praia_paradisio_1.png",
      gallery: ["praia_paradisio_1.png", "praia_paradisio_2.png", "praia_paradisio_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 38mm f/2.5", shot_type: "lifestyle environmental portrait", depth_of_field: "medium depth showing crystal water detail", focus: "subject with environmental context sharp" },
        scene: { setting: "Pristine white sand beach in the Maldives, crystal clear turquoise water, overwater bungalow visible in distance, tropical palm trees, untouched paradise", time_of_day: "late morning tropical light, sun high but not harsh", weather_mood: "perfect tropical day, gentle breeze, white clouds accenting deep blue sky" },
        lighting: { type: "natural tropical sunlight with ocean reflection fill, white sand acting as natural reflector", quality: "bright, clean, luxurious resort photography", color_temperature: "neutral 5500K with warm sand reflections at 4500K, turquoise water adding cool accents" },
        subject: { attire: "wearing stylish resort wear or elegant beachwear, luxury accessories, sun-kissed natural look", pose: "relaxed natural pose on the beach, walking along waterline or standing in shallow water, carefree and elegant", expression: "peaceful genuine smile, eyes squinting slightly from sun, radiating pure joy and freedom" },
        style: { reference: "Condé Nast Traveler cover, GQ Summer editorial, luxury resort brand campaign", color_grading: "vibrant turquoise water, warm skin tones, bright whites, tropical color palette with enhanced blues", post_processing: "subtle sun flare, light natural glow on skin, enhanced water clarity and color, slight warmth overlay" }
      },
      galleryVariations: [
        { shot_type: "wide paradise", description: "full body walking along crystal water edge, overwater bungalows in distance, expansive tropical paradise" },
        { shot_type: "lifestyle candid", description: "natural moment on beach, wind in hair, golden skin, relaxed luxury vacation aesthetic" },
        { shot_type: "sunset portrait", description: "close-up portrait during golden hour, warm light on face, ocean bokeh behind, serene expression" }
      ]
    },
    {
      id: "noite_gala", title: "Noite de Gala", tag: "Luxo", type: "ensaio",
      desc: "Mansão imperial, vestidos esplêndidos ou smokings impecáveis.",
      fullDesc: "Sinta-se na realeza. Estaremos em uma mansão luxuosa ou em um salão de baile.",
      placeholderImg: "noite_gala_1.png",
      gallery: ["noite_gala_1.png", "noite_gala_2.png", "noite_gala_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 80mm f/1.9", shot_type: "luxury event portrait", depth_of_field: "shallow f/1.9 separating subject from ornate background", focus: "sharp on face and attire details" },
        scene: { setting: "Grand European palace ballroom with crystal chandeliers, gilded moldings, marble floors, floor-to-ceiling mirrors reflecting warm light, ornate frescoed ceilings", time_of_day: "evening gala event", weather_mood: "warm intimate atmosphere, champagne and elegance" },
        lighting: { type: "chandelier ambient light combined with subtle flash fill, crystal reflections creating multiple catchlights", quality: "warm, luxurious, Vanity Fair gala photography quality", color_temperature: "warm 3000K chandelier light with subtle 5200K flash fill for skin detail" },
        subject: { attire: "wearing haute couture gala attire - flowing evening gown or impeccable black-tie tuxedo, fine jewelry catching light, polished and refined", pose: "elegant stance with champagne glass, or graceful mid-step on marble floor, aristocratic bearing", expression: "refined sophisticated smile, quiet confidence, commanding presence with warmth" },
        style: { reference: "Vanity Fair Hollywood Issue, Met Gala official portraits, Annie Leibovitz gala photography", color_grading: "warm golden tones from chandeliers, rich blacks in formalwear, luminous skin, jewel-tone accents", post_processing: "enhanced chandelier sparkle, subtle crystal bokeh, skin glow from warm lighting, editorial retouching preserving natural texture" }
      },
      galleryVariations: [
        { shot_type: "full gala portrait", description: "full body in grand ballroom, chandelier overhead, marble floor reflections, commanding presence" },
        { shot_type: "champagne moment", description: "medium shot with champagne flute, warm chandelier light, intimate sophisticated atmosphere" },
        { shot_type: "dramatic close-up", description: "close-up with crystal chandelier bokeh behind, warm light on skin, jewelry catching light, intense refined gaze" }
      ]
    },
    {
      id: "super_heroi", title: "Super-herói", tag: "Ação", type: "ensaio",
      desc: "Traje épico, capa esvoaçante e cenário urbano.",
      fullDesc: "Para adultos e crianças que sonham grande. O pacote Super-herói cria um traje espetacular.",
      placeholderImg: "super_heroi_1.png",
      gallery: ["super_heroi_1.png", "super_heroi_2.png", "super_heroi_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 21mm f/4 ultra-wide", shot_type: "dynamic low-angle hero shot", depth_of_field: "deep focus showing entire cityscape", focus: "subject sharp against dramatic sky" },
        scene: { setting: "Standing on the edge of a skyscraper rooftop overlooking a sprawling modern city, dramatic clouds swirling behind, city lights stretching to horizon, wind whipping cape and hair", time_of_day: "twilight with last light on horizon, city lights flickering on", weather_mood: "dramatic stormy sky with breaks of golden light, wind creating dynamic movement in cape and hair" },
        lighting: { type: "dramatic backlight from setting sun with city lights providing fill, rim light outlining hero silhouette", quality: "cinematic Marvel/DC movie still quality, epic and larger than life", color_temperature: "warm 3500K sunset rim mixed with cool 7000K twilight sky, creating dramatic contrast" },
        subject: { attire: "wearing an epic custom superhero suit with detailed texturing, flowing cape catching the wind, emblematic chest piece, armored elements with subtle glow", pose: "heroic power stance at building edge, cape billowing dramatically, fists at sides or arms crossed, looking out over the city they protect", expression: "determined protective gaze, jaw set with resolve, eyes conveying justice and strength" },
        style: { reference: "Marvel Studios official character posters, DC Films cinematography, Zack Snyder visual style", color_grading: "cinematic teal and orange, deep contrast, metallic suit reflections, dramatic sky enhancement", post_processing: "subtle energy glow effects on suit, enhanced cape dynamics, volumetric light rays through clouds, cinematic lens flare, epic atmosphere enhancement" }
      },
      galleryVariations: [
        { shot_type: "epic wide shot", description: "full body on skyscraper edge, cape flowing, entire cityscape below, dramatic clouds and sunset" },
        { shot_type: "action pose", description: "dynamic mid-action pose with energy effects, powerful stance, city lights reflecting off suit" },
        { shot_type: "hero close-up", description: "intense close-up portrait with mask/helmet, determined eyes, city lights reflected, dramatic rim light" }
      ]
    },
    {
      id: "conto_fadas", title: "Conto de Fadas", tag: "Fantasia", type: "ensaio",
      desc: "Uma floresta encantada, iluminação feérica e criaturas sutis.",
      fullDesc: "Mergulhe em um livro de história. Estética de alta fantasia em floresta mística.",
      placeholderImg: "conto_fadas_1.png",
      gallery: ["conto_fadas_1.png", "conto_fadas_2.png", "conto_fadas_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 65mm f/2.8", shot_type: "fantasy environmental portrait", depth_of_field: "dreamy medium bokeh with ethereal quality", focus: "subject with magical atmosphere rendered" },
        scene: { setting: "Deep enchanted forest with ancient moss-covered trees, bioluminescent flowers and mushrooms, soft mist swirling at ground level, fireflies floating, gentle stream with crystal water reflecting magical lights", time_of_day: "eternal twilight, mystical perpetual golden hour within the forest", weather_mood: "ethereal mist, magical atmosphere, warm despite the forest shade, otherworldly serenity" },
        lighting: { type: "bioluminescent practical lighting from magical flora combined with volumetric god rays filtering through canopy", quality: "ethereal, dreamlike, Peter Jackson's Middle-earth quality", color_temperature: "mixed magical sources: warm amber fireflies, cool teal bioluminescence, golden god rays" },
        subject: { attire: "wearing flowing ethereal fantasy garments with natural textures - elven-inspired robes or fairy-tale dress with botanical details, crown of flowers or silver circlet", pose: "gentle pose in the mystical forest, perhaps touching a glowing flower or walking through mist, graceful and otherworldly", expression: "sense of wonder and connection with nature, serene ancient wisdom, gentle ethereal presence" },
        style: { reference: "Lord of the Rings film stills, Pre-Raphaelite painting photography, fairy-tale illustration brought to photorealistic life", color_grading: "enchanted forest palette - deep greens, warm ambers, cool teal accents, desaturated shadows with luminous highlights", post_processing: "enhanced bioluminescent glow, volumetric mist, firefly particle effects, soft ethereal bloom on highlights, magical atmosphere enhancement" }
      },
      galleryVariations: [
        { shot_type: "wide enchanted", description: "full body in mystical forest clearing, surrounded by bioluminescent flora, fireflies, volumetric light rays" },
        { shot_type: "forest intimate", description: "medium shot interacting with magical elements, touching glowing flower, mist surrounding, ethereal beauty" },
        { shot_type: "fairy-tale close-up", description: "close-up with fireflies as bokeh, bioluminescent reflections on skin, wonder in eyes, flower crown detail" }
      ]
    },
    {
      id: "astro_cinema", title: "Astro de Cinema", tag: "Editorial", type: "ensaio",
      desc: "Retrato close-up dramático para pôster de blockbusters.",
      fullDesc: "Focado nas suas expressões. Um close-up dramático simulando câmeras de cinema.",
      placeholderImg: "astro_cinema_1.png",
      gallery: ["astro_cinema_1.png", "astro_cinema_2.png", "astro_cinema_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 120mm f/3.5 Macro", shot_type: "extreme cinematic close-up", depth_of_field: "ultra-shallow, only eyes in critical focus", focus: "eyes with razor precision, skin texture visible" },
        scene: { setting: "Minimalist dark studio background with subtle gradient, all focus on the face and its architecture of light and shadow", time_of_day: "controlled studio", weather_mood: "intimate, dramatic, intensely personal" },
        lighting: { type: "classic Rembrandt lighting with strong directional key, minimal fill creating deep dramatic shadows", quality: "Hollywood poster cinematography, Oscar-worthy dramatic portrait", color_temperature: "warm 4000K key light, cool 6500K subtle fill from opposite side creating dimension" },
        subject: { attire: "minimal visible clothing - dark collar or bare shoulders, focus entirely on face and expression, no distracting elements", pose: "slight three-quarter face angle, chin slightly down for intensity, absolute stillness and presence", expression: "deep intense gaze directly into camera, layered emotion - vulnerability and strength simultaneously, magnetic screen presence" },
        style: { reference: "Movie poster close-up photography, Arri Alexa 65 film still quality, Peter Lindbergh portraits", color_grading: "deep cinematic contrast, rich shadows, luminous highlights on skin, desaturated background, warm skin against cool shadows", post_processing: "micro-detail on iris and skin pores, subtle catchlight enhancement, cinematic color science, minimal retouching preserving character" }
      },
      galleryVariations: [
        { shot_type: "dramatic Rembrandt", description: "intense three-quarter portrait with strong directional light, deep shadows, film star quality" },
        { shot_type: "high contrast editorial", description: "high contrast with deep blacks, luminous highlights, editorial intensity" },
        { shot_type: "shadow portrait", description: "half face in shadow, single eye illuminated, maximum drama and mystery, poster quality" }
      ]
    },
    {
      id: "esportista_radical", title: "Esportista Radical", tag: "Adrenalina", type: "ensaio",
      desc: "Montanhas nevadas ou surfe gigante com ação congelada.",
      fullDesc: "Mostre seu lado extremo. A IA o transportará para a ação congelada no tempo.",
      placeholderImg: "esportista_radical_1.png",
      gallery: ["esportista_radical_1.png", "esportista_radical_2.png", "esportista_radical_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 35-75mm f/3.5-4.5 at 35mm", shot_type: "action sports freeze-frame", depth_of_field: "medium-deep capturing action context", focus: "subject frozen mid-action with sharp detail" },
        scene: { setting: "Epic snow-covered mountain peak with pristine powder, dramatic Alpine landscape, clear blue sky above treeline, snowboard jump with powder explosion, or giant wave curl", time_of_day: "midday bright mountain light with intense blue sky", weather_mood: "crisp mountain air, powder snow particles catching sunlight, adrenaline atmosphere" },
        lighting: { type: "bright natural mountain sunlight from above and behind, snow acting as massive reflector filling shadows", quality: "Red Bull media quality, Sports Illustrated feature", color_temperature: "cool 7000K mountain light, blue sky reflection, warm skin contrast against white snow" },
        subject: { attire: "professional extreme sports gear - high-end snowboard/surf gear, goggles on forehead or worn, sponsor patches, technical fabrics", pose: "frozen mid-air during an epic jump or trick, body in dynamic athletic form, snow/water spray around, absolute peak of action", expression: "focused determination mixed with pure adrenaline joy, the moment of zero gravity, alive and free" },
        style: { reference: "Red Bull Illume photo contest winners, Sports Illustrated extreme sports, GoPro professional campaign", color_grading: "vivid blue skies, pristine whites, warm skin against cold environment, high contrast action palette", post_processing: "frozen motion with sharp detail, snow/water particle detail, subtle motion blur on extremities for dynamic feel, lens frost on edges" }
      },
      galleryVariations: [
        { shot_type: "epic air", description: "full body frozen mid-air during massive jump, powder explosion, mountain panorama behind" },
        { shot_type: "surf action", description: "riding inside a massive wave curl, water spray detail, powerful athletic stance, ocean power" },
        { shot_type: "hero portrait", description: "close-up after the run, goggles on forehead, snow in hair, triumphant grin, mountain backdrop" }
      ]
    }
    ,
    {
      id: "newborn_4k", title: "Ensaio Newborn 4K", tag: "👶 Delicadeza", type: "ensaio",
      desc: "A delicadeza dos primeiros dias em um ensaio profissional sem sair de casa.",
      fullDesc: "Recrie a atmosfera mágica de um ensaio newborn de estúdio sem precisar expor seu bebê a deslocamentos ou ambientes externos. Nossa IA compõe cenários aconchegantes com mantas de tricô, cestinhas artesanais, iluminação difusa e paletas de cores suaves — tudo pensado para eternizar a pureza dos primeiros dias de vida. Ideal para presentear avós ou guardar para sempre.",
      placeholderImg: "newborn_4k_1.png",
      gallery: ["newborn_4k_1.png", "newborn_4k_2.png", "newborn_4k_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 80mm f/1.9", shot_type: "newborn portrait", depth_of_field: "ultra-shallow dreamy bokeh f/1.9", focus: "eyes and tiny hands" },
        scene: { setting: "Cozy artisanal newborn studio setting, wicker basket with soft knitted baby blankets in pastel tones, fluffy textures, natural organic environment", time_of_day: "soft morning light", weather_mood: "peaceful, warm, tender" },
        lighting: { type: "large window diffused natural light with soft reflector fill", quality: "ethereal, gentle, no harsh shadows, Anne Geddes inspired", color_temperature: "warm white 4800K, skin-flattering" },
        subject: { attire: "wrapped delicately in an organic cotton swaddle or soft knit wrap, minimal clothing, natural", pose: "sleeping peacefully curled up, tiny hands near face, classic newborn curve", expression: "peaceful slumber, pure innocence, gentle breathing" },
        style: { reference: "Award-winning newborn photography, fine art baby portrait", color_grading: "pastel palette, creamy skin tones, lifted airy shadows, very soft contrast", post_processing: "subtle skin softening preserving natural baby fuzz, velvety texture enhancement, dreamy vignette" }
      },
      galleryVariations: [
        { shot_type: "basket close-up", description: "sleeping in a rustic basket lined with soft wool, overhead angle, tiny toes visible" },
        { shot_type: "macro detail", description: "extreme close-up on tiny curled fingers clutching a soft blanket edge, dreamy bokeh" },
        { shot_type: "ethereal portrait", description: "profile shot beautifully wrapped, soft backlight creating a halo on baby fuzz, serene expression" }
      ]
    },
    {
      id: "aniversario_magico", title: "Aniversário Mágico", tag: "🎈 Festa", type: "ensaio",
      desc: "A festa dos sonhos em detalhes cinematográficos. Balões, confetes e sorrisos.",
      fullDesc: "Transforme o aniversário do seu filho em um ensaio que parece cena de filme. Nossa IA cria o cenário perfeito com tema personalizado — castelos, unicórnios, super-heróis — combinando iluminação mágica de bokeh, textura de confetes flutuando e a expressão genuína da criança assoprando as velinhas. Um retrato que vai muito além da foto de celular.",
      placeholderImg: "aniversario_magico_1.png",
      gallery: ["aniversario_magico_1.png", "aniversario_magico_2.png", "aniversario_magico_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 65mm f/2.8", shot_type: "child celebration portrait", depth_of_field: "medium bokeh turning confetti into colorful orbs", focus: "joyful face and action" },
        scene: { setting: "Magical child's birthday celebration set, premium colorful balloon garlands, elegant themed birthday cake, falling confetti, dream-like party atmosphere", time_of_day: "golden hour indoor celebration", weather_mood: "joyful, energetic, vibrant" },
        lighting: { type: "bright warm ambient mixed with sparkling string lights", quality: "cinematic event, vibrant and happy", color_temperature: "warm and inviting 4000K, colorful ambient reflections" },
        subject: { attire: "adorable premium birthday outfit, cute party hat or flower crown, beautifully styled", pose: "clapping hands, blowing out a birthday candle, or reaching for falling confetti, candid action", expression: "pure unbridled joy, wide-eyed wonder, massive genuine smile" },
        style: { reference: "High-end children fashion editorial, luxury event photography", color_grading: "vibrant saturated colors, bright whites, warm joyful skin tones, celebratory palette", post_processing: "enhanced confetti sparkle, glowing candles, colorful bokeh, crisp details on eyes and cake" }
      },
      galleryVariations: [
        { shot_type: "candle moment", description: "close-up blowing out a single glowing candle on an intricate cake, magical light on face" },
        { shot_type: "confetti joy", description: "mid-action portrait with hands up, laughing loudly as colorful confetti falls all around" },
        { shot_type: "cake smash", description: "candid joyful moment with a bit of frosting on the nose, sitting among premium balloons" }
      ]
    },
    {
      id: "familia_real", title: "Família Real", tag: "👑 Nostalgia", type: "ensaio",
      desc: "Sua família retratada como a realeza. Ensaio em cenário de palácio.",
      fullDesc: "Vista sua família com trajes de época e entre em um cenário digno de palácio. Nossa IA posiciona todos em composições clássicas de pintura renascentista, com iluminação dramática de estúdio, tapeçarias ricas ao fundo e olhares que transmitem união e legado. Uma herança visual para gerações. Perfeito para presentear avós ou celebrar um marco familiar.",
      placeholderImg: "familia_real_1.png",
      gallery: ["familia_real_1.png", "familia_real_2.png", "familia_real_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 45mm f/4", shot_type: "classic group portrait", depth_of_field: "deep focus f/8 to capture entire family sharply", focus: "faces of the royal family members" },
        scene: { setting: "Magnificent European Renaissance palace room, opulent tapestries, grand stone fireplace, gilded frames, rich velvet drapery", time_of_day: "evening in a grand hall", weather_mood: "regal, timeless, commanding atmosphere" },
        lighting: { type: "classic Rembrandt multi-point painting light, warm chandelier glow overhead", quality: "Masterpiece oil painting meets 8K photography", color_temperature: "warm golden 3200K echoing antique palace lighting" },
        subject: { attire: "highly detailed Renaissance or Victorian-inspired royal attire, elegant silk and velvet fabrics, subtle crowns, rich jewel tones", pose: "aristocratic group composition, seated parents in carved chairs with children standing elegantly at sides", expression: "noble, unified, quiet pride, a legacy of strength and love" },
        style: { reference: "Classical Renaissance portraiture, Annie Leibovitz Royal Family Vanity Fair shoot", color_grading: "rich regal tones, deep crimsons and golds, subtle oil painting texture emulation, dramatic shadows", post_processing: "enhanced fabric textures (brocade, velvet), glowing warm highlights, classical vignette, timeless museum quality" }
      },
      galleryVariations: [
        { shot_type: "grand composition", description: "full family positioned with perfect classical geometry in the palace hall, majestic presence" },
        { shot_type: "regal close-up", description: "tighter shot focusing on faces and shoulders, intricate clothing details, strong legacy eye contact" },
        { shot_type: "dynasty moment", description: "candid regal moment, perhaps parent looking lovingly at child within the formal setting" }
      ]
    },
    {
      id: "primeira_infancia", title: "Primeira Infância", tag: "🌿 Crescimento", type: "ensaio",
      desc: "Os marcos do crescimento em imagens que emocionam. Tudo em cinema.",
      fullDesc: "A infância passa voando, mas as imagens ficam. Este ensaio captura os momentos mais preciosos do desenvolvimento: o primeiro sorriso, o sentar sozinho, as mãozinhas segurando o dedo do pai, os primeiros passos no jardim. Nossa IA compõe cenários lúdicos com luz natural, texturas orgânicas e a doçura que só essa fase tem.",
      placeholderImg: "primeira_infancia_1.png",
      gallery: ["primeira_infancia_1.png", "primeira_infancia_2.png", "primeira_infancia_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 90mm f/2.5", shot_type: "milestone childhood portrait", depth_of_field: "creamy smooth bokeh f/2.5", focus: "child's eyes and expressive gesture" },
        scene: { setting: "Beautiful sunlit botanical garden or light-filled rustic indoor playroom with organic wooden toys, soft green grass or woven rugs", time_of_day: "late afternoon golden hour", weather_mood: "warm, sun-kissed, gentle breeze, nostalgic" },
        lighting: { type: "glowing backlight from the sun filtering through leaves, soft bounce fill on face", quality: "cinematic editorial, glowing and tender", color_temperature: "warm and nostalgic 5000K golden light" },
        subject: { attire: "adorable vintage-inspired clothing, linen romper or cotton dress, bare feet, natural organic style", pose: "sitting on soft grass examining a small flower, or taking wobbly first steps, natural unposed discovery", expression: "curiosity, genuine toddler joy, bright eyes exploring the world" },
        style: { reference: "High-end family lifestyle photography, organic modern aesthetic", color_grading: "soft film emulation reminiscent of Kodak Portra, earthy greens, warm skin tones, luminous highlights", post_processing: "soft glowing rim light, subtle film grain, enhancement of gentle environmental details, magical innocence" }
      },
      galleryVariations: [
        { shot_type: "discovery moment", description: "toddler sitting in sunlit grass holding a daisy with two hands, intense curiosity" },
        { shot_type: "first steps", description: "wobbly walking pose reaching towards camera, glowing backlight, huge proud smile" },
        { shot_type: "joyful laugh", description: "close-up portrait laughing uncontrollably, messy hair in the wind, pure infectious happiness" }
      ]
    }
  ],

  lifestyle: [
    {
      id: "lider_corporativo", title: "Líder Corporativo", tag: "💼 Negócios", type: "ensaio",
      desc: "Retratos executivos em escritórios de luxo e estética Forbes.",
      fullDesc: "O ensaio definitivo para sua marca pessoal. Posicionamos você em ambientes de escritórios inteligentes.",
      placeholderImg: "lider_corporativo_1.png",
      gallery: ["lider_corporativo_1.png", "lider_corporativo_2.png", "lider_corporativo_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 80mm f/1.9", shot_type: "executive corporate portrait", depth_of_field: "shallow f/2.2 with luxury office softened behind", focus: "eyes and face with sharp suit detail" },
        scene: { setting: "Corner office in a modern glass skyscraper, panoramic city skyline view, minimalist luxury interior with designer furniture, clean lines, subtle technology", time_of_day: "late afternoon with city skyline in golden light", weather_mood: "clear day, impressive city panorama, successful atmosphere" },
        lighting: { type: "large window natural light as key from side, subtle office ambient fill, city skyline backlight", quality: "Forbes magazine cover quality, professional and commanding", color_temperature: "natural 5500K window light, warm 3500K accent from interior, golden skyline backlight" },
        subject: { attire: "impeccably tailored designer suit in navy or charcoal, crisp white shirt, subtle luxury watch, power tie or refined open collar", pose: "confident stance near window or seated at executive desk, hands clasped or one hand on desk surface, commanding posture", expression: "confident composed gaze, slight assured smile, eyes conveying leadership, the face of success" },
        style: { reference: "Forbes 30 Under 30 cover photography, Bloomberg Businessweek portraits, corporate annual report hero shot", color_grading: "clean professional tones, rich suit fabric detail, warm skin against cool office, premium corporate palette", post_processing: "subtle skin enhancement preserving character, crisp fabric texture, city skyline enhancement, clean professional finish" }
      },
      galleryVariations: [
        { shot_type: "power portrait", description: "waist-up at executive desk, city skyline through floor-to-ceiling windows, commanding leadership presence" },
        { shot_type: "standing executive", description: "full body standing by window, panoramic city view, confident posture, Fortune magazine quality" },
        { shot_type: "boardroom close-up", description: "close-up portrait in modern boardroom, determined professional gaze, clean light, subtle city reflection" }
      ]
    },
    {
      id: "legado_luxo", title: "Legado & Luxo", tag: "💎 Bilionário", type: "ensaio",
      desc: "O estilo de vida dos super ricos: jatos, iates e quiet luxury.",
      fullDesc: "Entre no mundo da ultra-exclusividade. Captura a essência do luxo silencioso.",
      placeholderImg: "legado_luxo_1.png",
      gallery: ["legado_luxo_1.png", "legado_luxo_2.png", "legado_luxo_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 45mm f/4", shot_type: "lifestyle luxury portrait", depth_of_field: "medium depth showing luxury context", focus: "subject with environmental luxury details" },
        scene: { setting: "Interior of a private jet cabin with cream leather seats, burl wood trim, champagne in crystal flute, subtle brand details, clouds visible through oval window", time_of_day: "above the clouds, bright exterior light", weather_mood: "above cloud layer, serene and exclusive, ultimate privilege" },
        lighting: { type: "soft window light from jet windows combined with warm cabin ambient, creating intimate luxury atmosphere", quality: "Architectural Digest meets Robb Report, quiet luxury photography", color_temperature: "warm 3800K cabin light, bright 6000K window light creating beautiful contrast" },
        subject: { attire: "quiet luxury fashion - Loro Piana cashmere, Brunello Cucinelli style, subtle without logos, understated excellence, fine watch visible", pose: "relaxed elegant seated position in private jet, perhaps looking out window or holding champagne, effortless wealth", expression: "serene contentment, the calm confidence of someone who has everything, peaceful yet powerful" },
        style: { reference: "Robb Report editorial, Architectural Digest lifestyle, quiet luxury brand campaigns for Loro Piana or Brunello Cucinelli", color_grading: "warm creams and cognac tones, rich leather colors, subtle golden warmth throughout, muted luxury palette", post_processing: "enhanced material textures on leather and cashmere, subtle window glow, cream tone overlay, luxurious softness in shadows" }
      },
      galleryVariations: [
        { shot_type: "private jet interior", description: "full body seated in private jet, champagne in hand, cloud view through window, ultimate luxury lifestyle" },
        { shot_type: "yacht deck", description: "standing on superyacht bow, luxury nautical attire, Mediterranean sea backdrop, wind in hair" },
        { shot_type: "luxury intimate", description: "close-up in penthouse suite, city night view behind, fine watch detail, refined quiet confidence" }
      ]
    },
    {
      id: "aniversario_premium", title: "Celebration Royale", tag: "🎂 Aniversário", type: "ensaio",
      desc: "Seu aniversário com o glamour de uma capa de revista.",
      fullDesc: "Comemore seu novo ciclo com a sofisticação que ele merece. Cenários decorados com balões premium.",
      placeholderImg: "aniversario_premium_1.png",
      gallery: ["aniversario_premium_1.png", "aniversario_premium_2.png", "aniversario_premium_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 65mm f/2.8", shot_type: "celebration editorial portrait", depth_of_field: "medium bokeh turning balloons into golden orbs", focus: "subject face and celebration elements" },
        scene: { setting: "Elegant celebration setup with premium gold and champagne-colored balloon arch, luxury flower arrangements, designer birthday cake on pedestal, confetti and sparkle, upscale venue with marble and mirrors", time_of_day: "evening celebration with warm ambient lighting", weather_mood: "festive, joyful, luxurious celebration atmosphere with warmth and sparkle" },
        lighting: { type: "warm ambient event lighting with accent spotlights on subject, golden reflections from balloons, candle and string light fill", quality: "luxury event photography, Vogue Party editorial", color_temperature: "warm 3200K ambient from candles and string lights, 4500K accent spots for face detail" },
        subject: { attire: "stunning celebration outfit - elegant party dress or sharp designer ensemle, birthday crown or tiara optional, sparkling accessories", pose: "joyful celebration moment - laughing, throwing confetti, blowing candles, or holding champagne, genuine happiness", expression: "radiant genuine joy, eyes sparkling with celebration, the happiest day captured in a single frame" },
        style: { reference: "Vanity Fair party coverage, luxury event photography, celebrity birthday editorial for Harper's Bazaar", color_grading: "warm golden celebration palette, rich champagne tones, sparkling highlights, joyful warm shadows", post_processing: "enhanced sparkle and confetti detail, golden bokeh from balloon reflections, warm event glow, celebration atmosphere enhancement" }
      },
      galleryVariations: [
        { shot_type: "celebration wide", description: "full body with luxury balloon arch, elegant setup, confetti falling, joyful moment captured" },
        { shot_type: "cake moment", description: "medium shot blowing candles on designer cake, golden light, intimate celebration moment" },
        { shot_type: "party close-up", description: "close-up radiating pure joy, confetti in hair, golden bokeh from lights and balloons, sparkling eyes" }
      ]
    },
    {
      id: "influencer_pro", title: "Influencer Pro", tag: "📸 Digital", type: "ensaio",
      desc: "Personal branding premium para quem domina o digital.",
      fullDesc: "O ensaio indispensável para criadores de conteúdo. Focamos em um estilo de vida dinâmico.",
      placeholderImg: "influencer_pro_1.png",
      gallery: ["influencer_pro_1.png", "influencer_pro_2.png", "influencer_pro_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "Hasselblad X2D 100C", lens: "XCD 38mm f/2.5", shot_type: "lifestyle branding portrait", depth_of_field: "shallow creative bokeh with urban context", focus: "subject with lifestyle context" },
        scene: { setting: "Modern creative studio or trendy urban location, exposed brick, neon signs, modern art, ring light visible as set piece, trendy café or rooftop setting", time_of_day: "late afternoon golden urban light or studio controlled", weather_mood: "vibrant, energetic, social media ready, trendy and current" },
        lighting: { type: "natural window light mixed with creative practical lighting - neon signs, ring light, LED panels for modern colorful feel", quality: "Instagram-perfect yet elevated, magazine-quality content creator aesthetic", color_temperature: "mixed creative sources: warm 3500K ambient, cool neon accents, neutral 5000K ring light on face" },
        subject: { attire: "on-trend street style fashion, bold colors or patterns, statement accessories, current season trends, sneakers or designer shoes visible", pose: "dynamic natural movement - walking, laughing, adjusting sunglasses, phone in hand, authentic and unstaged feeling", expression: "confident charismatic smile, magnetic personality radiating through camera, approachable yet aspirational" },
        style: { reference: "Professional content creator portfolio, high-end Instagram aesthetic, Highsnobiety editorial", color_grading: "vibrant modern palette, trending color tones, warm skin against cool urban backdrop, editorial Instagram aesthetic", post_processing: "subtle glow on skin, enhanced urban textures, neon color spill, modern clean editing with subtle film emulation" }
      },
      galleryVariations: [
        { shot_type: "street style", description: "full body street photography style, urban backdrop, dynamic movement, high-fashion streetwear" },
        { shot_type: "studio creative", description: "modern studio setup with creative lighting, ring light visible, content creator in their element" },
        { shot_type: "candid lifestyle", description: "close-up candid portrait at trendy café or rooftop, natural light, magnetic personality, phone in hand" }
      ]
    }
  ],

  restauracao: [
    {
      id: "restauracao_ultra", title: "Restauração Ultra 4K", tag: "🔄 Essencial", type: "restauracao",
      desc: "Foto antiga restaurada para um retrato nítido em 4K.",
      fullDesc: "Tiramos rasgos, arranhões e danos causados pelo tempo. A tecnologia de Upscale reconstrói rostos.",
      placeholderImg: "restauracao_ultra_1.png",
      gallery: ["restauracao_ultra_1.png", "restauracao_ultra_2.png", "restauracao_ultra_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "AI Upscale Engine", lens: "Neural face reconstruction", shot_type: "restoration enhancement", depth_of_field: "match original", focus: "face reconstruction priority" },
        scene: { setting: "Faithful recreation of the original photograph setting, preserving historical context and background", time_of_day: "match original", weather_mood: "match original emotional atmosphere" },
        lighting: { type: "reconstructed from original lighting direction and quality, enhanced with natural fill", quality: "restored to modern 4K/8K clarity while preserving period authenticity", color_temperature: "match original era appropriate lighting" },
        subject: { attire: "preserved from original photograph, enhanced fabric texture and detail", pose: "preserved from original, enhanced anatomical accuracy", expression: "preserved and enhanced, natural emotion reconstruction" },
        style: { reference: "Museum-quality photo restoration, archival preservation standards", color_grading: "faithful to original era with enhanced tonal range and dynamic range recovery", post_processing: "scratch and damage removal, crease repair, stain elimination, face reconstruction using AI, resolution upscale from original to 4K minimum, noise reduction while preserving authentic grain character" }
      },
      galleryVariations: [
        { shot_type: "before-after split", description: "split screen showing damaged original vs flawless 4K restoration, dramatic transformation" },
        { shot_type: "face reconstruction", description: "close-up showing AI face reconstruction detail, from blurry to crystal clear, pore-level detail" },
        { shot_type: "full restoration", description: "complete restored image at full resolution, color-corrected, damage removed, ready for printing" }
      ]
    },
    {
      id: "colorizacao_cinema", title: "Colorização", tag: "Cores Vivas", type: "restauracao",
      desc: "Traga fotos em P&B de volta à vida com cores realistas.",
      fullDesc: "A colorização é feita por IA que analisa contexto e aplica cores historicamente factíveis.",
      placeholderImg: "colorizacao_cinema_1.png",
      gallery: ["colorizacao_cinema_1.png", "colorizacao_cinema_2.png", "colorizacao_cinema_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "AI Colorization Engine", lens: "Period-accurate color analysis", shot_type: "colorization process", depth_of_field: "match original", focus: "color accuracy on skin, fabric, environment" },
        scene: { setting: "Preserved from original B&W photograph with historically accurate color reconstruction", time_of_day: "inferred from shadow direction and context", weather_mood: "color reflects era-appropriate atmosphere" },
        lighting: { type: "preserved from original with color temperature inferred from era and context", quality: "seamless colorization that looks like the photo was always in color", color_temperature: "historically accurate for the era - warm tungsten for indoor, natural daylight for outdoor" },
        subject: { attire: "colorized with period-accurate fabric colors researched from historical references of the specific era", pose: "preserved from original", expression: "preserved from original with enhanced color bringing new emotional depth" },
        style: { reference: "Peter Jackson's They Shall Not Grow Old colorization quality, Marina Amaral restoration work", color_grading: "period-accurate colorization, natural skin tones calibrated for ethnicity and lighting, fabric colors researched for era accuracy", post_processing: "AI-driven colorization with manual refinement, skin tone calibration, fabric color accuracy, environmental color context analysis, seamless transition from B&W to full color" }
      },
      galleryVariations: [
        { shot_type: "transition reveal", description: "gradual B&W to color transition showing the colorization process, left to right reveal" },
        { shot_type: "portrait colorized", description: "fully colorized portrait with accurate skin tones, eye color, hair color, period clothing colors" },
        { shot_type: "scene colorized", description: "complete scene colorization with environmental colors, sky, foliage, architecture, bringing history to life" }
      ]
    },
    {
      id: "animacao_living", title: "Living Portrait", tag: "Vídeo Sutil", type: "restauracao",
      desc: "Sua foto transformada em um vídeo sutil e realista.",
      fullDesc: "Um toque de Harry Potter: pegamos seu retrato em 4K e aplicamos um modelo de movimento neural sutil.",
      placeholderImg: "animacao_living_1.png",
      gallery: ["animacao_living_1.png", "animacao_living_2.png", "animacao_living_3.png"],
      status: "active",
      promptJSON: {
        camera: { type: "AI Motion Model", lens: "Neural temporal synthesis", shot_type: "living portrait animation", depth_of_field: "match source portrait", focus: "natural micro-movements on face" },
        scene: { setting: "Preserved from source portrait, subtle environmental animation - hair movement, fabric sway, background atmosphere", time_of_day: "match source", weather_mood: "enhanced with subtle atmospheric movement" },
        lighting: { type: "preserved from source with subtle dynamic light variation to enhance living feel", quality: "seamless photorealistic animation, not uncanny valley", color_temperature: "match source precisely" },
        subject: { attire: "subtle fabric movement, hair sway, natural micro-animations", pose: "subtle natural breathing motion, gentle head micro-movements, living portrait effect", expression: "subtle eye movement, natural blink cycle, gentle smile variation, breathing visible - alive and present" },
        style: { reference: "Harry Potter living portraits, MyHeritage Deep Nostalgia enhanced quality, museum living gallery concept", color_grading: "match source portrait exactly with subtle dynamic range adjustment for video", post_processing: "neural motion synthesis applied to restored 4K portrait, natural breathing animation, eye micro-saccades, hair physics, 3-5 second seamless loop, subtle ambient particle effects" }
      },
      galleryVariations: [
        { shot_type: "breathing portrait", description: "portrait with subtle breathing, natural blinks, gentle head movement, magical living photo effect" },
        { shot_type: "environmental motion", description: "portrait with hair and fabric moving in gentle breeze, atmospheric particles, living world within frame" },
        { shot_type: "emotional reveal", description: "portrait transitioning from still to alive, gradual animation reveal, magical moment captured" }
      ]
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

function getAllPackages() {
  return [...catalogData.tematicos, ...catalogData.lifestyle, ...catalogData.restauracao];
}
