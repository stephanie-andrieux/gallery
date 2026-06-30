(function () {
  'use strict';

  const STORAGE_KEY = 'sarah-art-lang';

  const translations = {
    en: {
      meta: {
        index: { title: "Sarah's Art Portfolio", description: "Explore Sarah's graphite art portfolio, featuring realistic drawings, child portraits, and custom pencil art commissions." },
        art: { title: "Gallery — Sarah's Art Portfolio", description: "Explore Sarah's graphite art gallery, showcasing realistic portrait studies, animal art, and unique graphite drawings." },
        about: { title: "About — Sarah's Art Portfolio", description: "Read about Sarah's artistic journey, her techniques combining graphite and charcoal, and her traditional drawing studio." },
        contact: { title: "Contact — Sarah's Art Portfolio", description: "Get in touch with Sarah for portrait study drawings, custom graphite illustrations, and pencil art commissions." },
        process: { title: "Process — Sarah's Art Portfolio", description: "Discover the different stages behind Sarah's graphite and charcoal drawings." }
      },
      nav: { home: 'Home', gallery: 'Gallery', process: "Process", about: 'About', contact: 'Contact' },
      lang: { label: 'Choose language' },
      footer: {
        brand: "Sarah's Art",
        desc: 'Traditional graphite and charcoal portrait artist. Capturing depth, texture, and genuine human emotions through realistic and custom-commissioned pencil drawings.',
        explore: 'Explore',
        contact: 'Contact',
        copyright: "© 2026 Sarah's Art Portfolio. All rights reserved.",
        tagline: 'Handcrafted with Passion'
      },
      index: {
        intro: 'Traditional Graphite & Charcoal Art',
        title: "Hello, I'm Sarah",
        focus: ['Capturing', 'Emotion', 'Through', 'Pencil', 'Art'],
        hero: 'Welcome to my portfolio. Through graphite and charcoal drawing, I aim to capture expressions, emotions, and details that make every subject unique. Each artwork is carefully created using traditional techniques, patience, and dedication.',
        cta: 'Explore Gallery',
        featured: 'Featured Works',
        card1Title: 'Portrait Study',
        card1Desc: 'A graphite portrait focused on expression, character, and realistic detail.',
        card2Title: 'Child Portrait',
        card2Desc: 'A drawing that captures innocence, warmth, and natural emotion.',
        card3Title: 'Realism Study',
        card3Desc: 'An exploration of texture, contrast, and light through meticulous graphite and charcoal drawings.',
        aboutTitle: 'About My Work',
        aboutText: 'All artworks presented here are hand-drawn using graphite and charcoal pencils on paper. Special attention is given to texture, contrast, and expression to create drawings rich in character, emotion, and detail.',
        quote: '"Every pencil stroke tells a story."'
      },
      about: {
        title: 'About',
        p1: 'Drawing has been a passion of mine for many years. Through graphite and charcoal, I enjoy capturing emotions, textures, and the small details that make each subject unique. Every drawing is an opportunity to improve my technique while expressing my appreciation for traditional art.',
        p2: 'This website is a collection of my work and my artistic journey. I hope you enjoy exploring my drawings as much as I enjoy creating them..',
        photoAlt: 'My drawing tools',
        quote: '"Black is the most essential color. [...] It is the agent of the spirit."',
        quoteAuthor: '— Odilon Redon',
        section1: 'Graphite and Charcoal',
        section1p1: 'This quote from Odilon Redon, a true master of charcoal drawing, resonates deeply with my approach. In my practice, I have naturally developed the habit of combining two simple yet highly complementary tools: graphite pencil and charcoal pencil. It is a balance I really enjoy exploring on paper.',
        section1p2: 'Graphite offers me the softness and precision needed to build my subject and work on the delicacy of a line. Charcoal, on the other hand, allows me to reach for much deeper, velvety blacks. Playing with these two materials helps me give depth to the atmosphere and accentuate the shadows. It is an almost tactile process, where I simply try to highlight my subject through the rich, natural contrasts of these two tools, while keeping the authentic joy of traditional drawing.',
        processTitle: 'From Sketch to Finished Drawing',
        processIntro: 'Every portrait begins with a simple construction sketch and gradually evolves through layers of shading, refinement, and detail until the final artwork emerges.',
        step1: 'A light first line',
        step2: 'Texture comes to life',
        step3: 'The eye appears',
        step4: 'Finished artwork',
        stepAlt1: 'Initial sketch',
        stepAlt2: 'Early shading',
        stepAlt3: 'Detail development',
        stepAlt4: 'Finished drawing'
      },
      contact: {
        title: "Let's talk",
        desc: "Whether you're interested in a piece, have a commission in mind, or just want to say hello. I'd love to hear from you.",
        replyTime: 'I usually reply within a couple of days.',
        section: 'Contact',
        emailLabel: 'Email',
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message'
      },
      gallery: {
        title: 'Art gallery',
        prev: 'Previous',
        next: 'Next',
        goToDrawing: 'Go to drawing',
        privateCollection: 'Private collection',
        items: [
          { nom: 'Captured innocence', description: "This portrait highlights the freshness and spontaneity of childhood. The child's direct gaze, accompanied by a subtle smile and framed by a cascade of curly hair, gives the composition a natural and engaging presence.\n\nAttention was given to the eyes to capture their intensity and liveliness. The rendering of the curls presented an enjoyable technical challenge, with each strand carefully developed through subtle contrasts of light and shadow to create depth and movement. The background was intentionally softened to draw attention to the face and enhance the overall impact of the portrait.\n\nThe result of many hours of work and patience, this original artwork seeks above all to preserve the authenticity and sincerity of a fleeting moment.", details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 11 Hours of Work • Original Artwork', price: '€385' },
          { nom: 'A face born from imagination', description: 'This portrait has a very special story for me. Unlike my usual process, it was born entirely from my imagination, without any reference photo or model. My desire was to bring to life a gentle face that existed only in my mind.\n\nI took great pleasure in delicately shaping her features, seeking to capture a serene expression and a comforting, slight smile. Working on her straight hair allowed me to frame her face with light, and I opted for a softly blurred background so that the viewer\'s attention is drawn naturally and without distraction to the clarity of her eyes.\n\nThis is a deeply personal and spontaneous piece that I drew from the heart. I hope this truly unique creation resonates with you and brings a touch of serenity to your home.', details: 'A3 size (29.7 x 42 cm) • 240 gsm Paper • 9 Hours of Work • Original artwork from imagination.', price: '€315' },
          { nom: 'An unexpected refuge', description: 'This drawing was worked from a model that immediately made me smile. I wanted to capture this fun and endearing scene, playing with the contrast in scale with this tiny kitten hiding in a work boot far too big for it.\n\nI took immense pleasure in working on the contrast of textures. It was a real technical challenge to render the worn, heavy, and creased leather of this old shoe, with its tangled laces, while contrasting it with the softness and lightness of the little feline\'s fur. Its tiny paws delicately gripping the edge and its curious gaze are the details that, for me, bring this whole scene to life.\n\nThis is a playful piece that I drew with a lot of fondness. I hope this mischievous little scene makes you smile and brings a touch of warmth to your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 8 Hours of Work • Original Artwork', price: '€280' },
          { nom: 'The elegance of the horse', description: 'Drawing this portrait was a true joy, as the horse is by far my favorite animal. It is a subject I always return to with the same passion and intact admiration.\n\nThrough this piece, I sought to capture all the nobility and elegance of its carriage. By playing with very strong contrasts, I wanted to sculpt the power of its musculature and create the impression of light gliding across its coat. The meticulous work on the details of the tack and the tension of the leather serves to highlight, in contrast, the softness and deep intelligence in its eye.\n\nThis is a sincere tribute to the quiet strength that fascinates me so much. I hope this drawing resonates with those who share this love for these magnificent creatures and that it will bring a lot of character to your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 7 Hours of Work • Original Artwork', price: '€245' },
          { nom: 'Face to face', description: 'Drawing this face from so close was a captivating experience. I wanted to focus on the essentials, tightening the frame right up to the features to create a true intimacy with the gaze.\n\nI took special care in detailing the intensity and depth of the eyes, framed by strong eyebrows, as well as the volume and softness of the lips. The small details, like the delicate beauty mark and the piercing, add a touch of authenticity and a lot of character to this face. It is a portrait I wanted to keep minimalist, where the light softly glides over the skin, leaving all the room for pure, direct expression.\n\nThis is a piece created with passion, designed to create a real exchange with the person observing it. I hope this strong presence will captivate you and bring a touch of modern elegance to your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 6 Hours of Work • Original Artwork', price: '€210' },
          { nom: 'Sweet melancholy', description: 'Drawing this face was a deeply touching experience. From the very first strokes, I was drawn in by the poignant hint of sadness in this gaze. My desire was to accurately capture this vulnerability unique to childhood, this sweet melancholy that instantly leaves us so defenseless.\n\nI spent some time on the expression in the eyes, seeking to convey all that depth and the illusion of a held-back tear. The delicate pout of the lips and the slight movement of the eyebrows tell the story of a silent sorrow. In contrast, I let the rebellious curls frame the face with a bit more freedom, to bring a touch of softness and lightness around such a dense emotion.\n\nIt is an intimate and spontaneous piece, created with a lot of empathy. I hope this sincere emotion will resonate with you and bring a profoundly human dimension to your home.', details: 'A2 size (42 × 59.4 cm) • 240 gsm Paper • 10 Hours of Work • Original Artwork', price: '€280' },
          { nom: 'Equine wisdom', description: 'For this new piece, I wanted to explore another facet of its character, capturing the movement of its mane in the wind to better emphasize the depth of its expression.\n\nThere is a wisdom in the eyes of horses that is sometimes hard to find in humans. A sincere presence, without masks or detours. Between strength and delicacy, they remind us that true nobility lies not in domination, but in self-mastery. I worked on every contrast of light on its coat and tack to guide the viewer\'s gaze straight to its eye. This portrait captures that rare moment when power fades before emotion, when movement gives way to what is essential: the meeting of two sensibilities.\n\nIt is a vibrant and deeply personal piece. I hope it resonates with those who love this animal and brings its truly unique presence into your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 9 Hours of Work • Original Artwork', price: '€315' },
          { nom: 'Delicate encounter', description: 'Drawing this scene was a moment of true gentleness. I wanted to capture this suspended, almost magical instant, where the innocent curiosity of a kitten meets the fragility of a butterfly.\n\nI took great pleasure in working on the textures to contrast the tousled softness of the feline\'s fur with the graphic precision of the butterfly\'s wings. The play of light highlights the intensity of the kitten\'s gaze, completely fascinated by this unexpected apparition. It is a silent face-to-face, a moment of mutual observation full of restraint and wonder.\n\nThis is a tender and calming piece that I drew from the heart. I hope it awakens your own sense of wonder and brings a beautiful touch of poetry to your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 7 Hours of Work • Original Artwork', price: '€280' },
          { nom: 'The Princess', description: 'Drawing this face was a particularly moving exercise for me. I wanted to capture all the grace and innocence of childhood through this portrait. With her flower crown delicately resting in her hair, she has, in my eyes, the look of a true little princess. The prettiest of all, naturally.\n\nI took my time working on the softness of her features, the roundness of her cheeks, and, above all, the light in her wide eyes. The small detail of the plush toy she is holding is a gentle reminder that behind this little royal presence lies, above all, the pure innocence of a child.\n\nIt is a drawing into which I poured an immense amount of affection. So much so that it is exceptionally not for sale: this little princess has already been acquired by her mom... or should I say, by the Queen herself.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 9 Hours of Work • Original Artwork', price: 'Private collection' },
          { nom: 'The depth of the eye', description: 'I wanted to do a very tight close-up on an eye, to really dive into the intensity of a gaze. The idea was to focus on just one part of the face, but to give it my complete attention.\n\nFor this drawing, the bulk of my work focused on the most meticulous details. I spent a lot of time on the texture of the iris, looking for the right reflections and shadows to try and bring as much depth and life to it as possible. Drawing each eyelash also required a great deal of patience: I had to find the right movement and thickness to frame the eye naturally, without making it heavy.\n\nIt is a very close, almost intimate study that invites observation. I hope this frank and direct gaze will catch yours.', details: 'A4 size (21 × 29.7 cm) • 240 gsm Paper • 11 Hours of Work • Original Artwork', price: '€385' },
          { nom: 'The ice cream break', description: 'I was immediately touched by the contrast in this little everyday scene. On one hand, there is the obvious delight of the moment, with this ice cream cone held firmly in his hand, and on the other, that deep, almost solemn gaze that children can sometimes have right in the middle of a snack.\n\nFor this drawing, I had a lot of fun working on the different textures: the thickness and folds of the cardigan, the small details of the patch, and the waffle pattern of the ice cream cone. All these textured elements serve to highlight the softness of his face and frame his somewhat thoughtful expression. The deliberately blurred background keeps all the focus on the directness of his wide eyes.\n\nIt is a little snapshot of life, simple and unadorned. I hope this sweet moment makes you smile and finds a place in your home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 9 Hours of Work • Original Artwork', price: '€280' },
          { nom: 'Grace', description: 'For this drawing, I wanted to shake up my habits a bit. My love for horses remains the same, but I chose to express it in a completely different way here, going straight to the essential.\n\nThe idea wasn\'t to seek realism or get lost in meticulous details as I usually do. I preferred to play solely on the boldness of the line and the pure contrast of black on white. With these few simple, strong lines, I tried to capture the movement of its mane, the elegance of its posture, and its proud character. It is a much more minimalist style exercise, but a very liberating one.\n\nIt is a graphic and refined drawing. I hope you enjoy this more modern approach just as much and that it brings a beautiful dynamic to your home.', details: 'A4 size (21 × 29.7 cm) • 240 gsm Paper • 3 Hours of Work • Original Artwork', price: '€280' },
          { nom: 'Brotherly bond', description: 'This double portrait is particularly close to my heart. I wanted to capture the beautiful complicity and boundless energy that unites these two brothers. Through their mischievous smiles and sparkling eyes, I tried to catch that precious brotherly bond, built on shared games and obvious affection.\n\nI invested a lot of effort into the contrast between their two faces and the work on their hair, while creating a beautiful sense of unity thanks to the soft, luminous background that makes their expressions stand out. Although they each have their own distinct features and character, their direct, lively gazes complement each other perfectly.\n\nIt is a drawing filled with affection, created with a lot of tenderness. For this reason, it is not for sale: this artwork has already found its forever home and hangs proudly on the walls of their family home.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 14 Hours of Work • Original Artwork', price: 'Private collection' },
          { nom: 'Spirit of adventure', description: 'For this new piece, I wanted to explore a different path and let myself be carried away by the magic of watercolor. I set down my usual pencils to play with the transparency of water and the warmth of sepia and burnt sienna pigments.\n\nThe idea was to make this old sailing ship emerge like a distant memory, an almost ghostly apparition floating in the mist. Rather than seeking meticulous realism, I let the brushstrokes freely sketch the volume of the sails and the structure of the hull. The paint lives, spreads, and lets the imagination fill in the blanks. This gives the whole piece a very dreamlike and deeply nostalgic feel.\n\nIt is a more spontaneous and fluid creation, designed as a true invitation to travel. I hope this poetic atmosphere will take you on a beautiful journey to new horizons.', details: 'A3 size (29.7 × 42 cm) • 240 gsm Paper • 16 Hours of Work • Original Artwork', price: '€480' }
        ]
      },
      process: {
        title: "Process",
        desc: "Discover a selection of drawings accompanied by the different stages of their creation. From the first pencil strokes to the finished drawing, these images show the evolution of each artwork.",
        hint: "Click a drawing to see how it evolved",
        overlayEyebrow: "Drawing evolution",
        stepLabel: "Step",
        finalLabel: "Final",
        stepsLabel: "steps",
        items: ["The ice cream break", "An unexpected refuge", "Brotherly bond", "Equine wisdom", "The Princess", "Under the foliage"]
    },
    },
    fr: {
      meta: {
        index: { title: "Portfolio d'art — Sarah", description: "Découvrez le portfolio de Sarah : dessins au graphite, portraits réalistes, portraits d'enfants et commandes sur mesure." },
        art: { title: "Galerie — Portfolio d'art de Sarah", description: "Explorez la galerie de Sarah : études de portraits, art animalier et dessins uniques au graphite." },
        about: { title: "À propos — Portfolio d'art de Sarah", description: "Découvrez le parcours artistique de Sarah, ses techniques mêlant graphite et fusain, et son atelier de dessin traditionnel." },
        contact: { title: "Contact — Portfolio d'art de Sarah", description: "Contactez Sarah pour des portraits, illustrations au graphite sur mesure et commandes de dessins au crayon et au fusain." },
        process: {
          title: "Coulisses — Portfolio d'art de Sarah", description: "Découvrez les différentes étapes de création des dessins de Sarah."
    }
    },
      nav: { home: 'Accueil', gallery: 'Galerie', process: "Coulisses", about: 'À propos', contact: 'Contact' },
      lang: { label: 'Choisir la langue' },
      footer: {
        brand: "L'art de Sarah",
        desc: 'Artiste portraitiste traditionnelle au graphite et au fusain. Capturer la profondeur, la texture et les émotions humaines authentiques à travers des dessins réalistes et des commandes sur mesure.',
        explore: 'Explorer',
        contact: 'Contact',
        copyright: "© 2026 Portfolio d'art de Sarah. Tous droits réservés.",
        tagline: 'Créé avec passion'
      },
      index: {
        intro: 'Dessin traditionnel au graphite et au fusain',
        title: 'Bienvenue, je suis Sarah',
        focus: ['Capturer', "l'émotion", 'par le', 'dessin', 'au crayon'],
        hero: 'Bienvenue dans mon portfolio. À travers le dessin au graphite, je cherche à capturer les expressions, les émotions et les détails qui rendent chaque sujet unique. Chaque œuvre est créée avec soin, en utilisant des techniques traditionnelles, avec patience et passion.',
        cta: 'Explorer la galerie',
        featured: 'Œuvres en vedette',
        card1Title: 'Étude de portrait',
        card1Desc: 'Un portrait au graphite centré sur l\'expression, le caractère et le détail réaliste.',
        card2Title: 'Portrait d\'enfant',
        card2Desc: 'Un dessin qui capture l\'innocence, la chaleur et l\'émotion naturelle.',
        card3Title: 'Étude de réalisme',
        card3Desc: 'Une exploration de la texture, du contraste et de la lumière par un travail minutieux au crayon.',
        aboutTitle: 'Mon travail',
        aboutText: 'Toutes les œuvres présentées ici sont dessinées à la main au crayon graphite et au crayon fusain sur papier. Une attention particulière est portée à la texture, au contraste et à l\'expression afin de créer des dessins riches en caractère, en émotion et en détails.',
        quote: '« Chaque trait de crayon raconte une histoire. »'
      },
      about: {
        title: 'À propos',
        p1: "Le dessin est une passion qui m'accompagne depuis de nombreuses années. À travers le graphite et le fusain, j'aime capturer les émotions, les textures et les petits détails qui rendent chaque sujet unique. Chaque dessin est pour moi l'occasion de perfectionner ma technique tout en exprimant mon attachement au dessin traditionnel.",
        p2: "Ce site rassemble une sélection de mes réalisations et retrace une partie de mon parcours artistique. J'espère que vous prendrez autant de plaisir à découvrir mes dessins que j'en ai à les créer.",
        photoAlt: 'Mes outils de dessin',
        quote: "« Le noir est la couleur la plus essentielle. [...] C'est l'agent de l'esprit. »",
        quoteAuthor: '— Odilon Redon',
        section1: 'Graphite et fusain',
        section1p1: 'Cette citation d\'Odilon Redon, véritable maître du dessin au fusain, résonne profondément avec ma démarche. Dans ma pratique, j\'ai naturellement développé l\'habitude de combiner deux outils simples mais très complémentaires : le crayon graphite et le crayon fusain. C\'est un équilibre que j\'aime explorer sur le papier.',
        section1p2: 'Le graphite m\'offre la douceur et la précision nécessaires pour construire mon sujet et travailler la délicatesse d\'un trait. Le fusain, quant à lui, me permet d\'atteindre des noirs plus profonds et veloutés. Jouer avec ces deux matériaux m\'aide à donner de la profondeur à l\'atmosphère et à accentuer les ombres. C\'est un processus presque tactile, où j\'essaie simplement de mettre en valeur mon sujet à travers les contrastes riches et naturels de ces deux outils, tout en conservant la joie authentique du dessin traditionnel.',
        processTitle: 'De l\'esquisse au dessin fini',
        processIntro: 'Chaque portrait commence par une simple esquisse de construction et évolue progressivement par des couches d\'ombrage, de raffinement et de détails jusqu\'à l\'émergence de l\'œuvre finale.',
        step1: 'Un premier trait léger',
        step2: 'La texture prend vie',
        step3: 'L\'œil prend forme',
        step4: 'Œuvre terminée',
        stepAlt1: 'Esquisse initiale',
        stepAlt2: 'Premiers ombrages',
        stepAlt3: 'Développement des détails',
        stepAlt4: 'Dessin terminé'
      },
      contact: {
        title: 'Discutons',
        desc: 'Que vous soyez intéressé·e par une œuvre, ayez une commande en tête ou souhaitiez simplement dire bonjour. J\'aimerais beaucoup avoir de vos nouvelles.',
        replyTime: 'Je réponds généralement sous deux jours.',
        section: 'Contact',
        emailLabel: 'Courriel',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Courriel',
        message: 'Message',
        submit: 'Envoyer le message'
      },
      gallery: {
        title: 'Galerie d\'art',
        prev: 'Précédent',
        next: 'Suivant',
        goToDrawing: 'Aller au dessin',
        privateCollection: 'Collection privée',
        items: [
          { nom: 'Innocence capturée', description: 'Ce portrait met en valeur la fraîcheur et la spontanéité de l\'enfance. Le regard direct de l\'enfant, accompagné d\'un sourire subtil et encadré par une cascade de boucles, donne à la composition une présence naturelle et engageante.\n\nUne attention particulière a été portée aux yeux pour capturer leur intensité et leur vivacité. Le rendu des boucles a représenté un défi technique agréable, chaque mèche étant soigneusement développée par de subtils contrastes de lumière et d\'ombre pour créer profondeur et mouvement. L\'arrière-plan a été volontairement adouci pour attirer l\'attention sur le visage et renforcer l\'impact global du portrait.\n\nFruit de nombreuses heures de travail et de patience, cette œuvre originale cherche avant tout à préserver l\'authenticité et la sincérité d\'un instant fugace.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 11 heures de travail • Œuvre originale', price: '385 €' },
          { nom: 'Un visage né de l\'imagination', description: 'Ce portrait a une histoire très particulière pour moi. Contrairement à mon processus habituel, il est né entièrement de mon imagination, sans photo ni modèle de référence. Mon désir était de donner vie à un visage doux qui n\'existait que dans mon esprit.\n\nJ\'ai pris grand plaisir à modeler délicatement ses traits, en cherchant à capturer une expression sereine et un sourire léger et réconfortant. Travailler ses cheveux lisses m\'a permis d\'encadrer son visage de lumière, et j\'ai opté pour un arrière-plan légèrement flou afin que l\'attention du spectateur soit naturellement attirée, sans distraction, vers la clarté de ses yeux.\n\nC\'est une pièce profondément personnelle et spontanée, dessinée du cœur. J\'espère que cette création vraiment unique vous parlera et apportera une touche de sérénité chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 9 heures de travail • Œuvre originale d\'imagination', price: '315 €' },
          { nom: 'Un refuge inattendu', description: 'Ce dessin a été réalisé à partir d\'un modèle qui m\'a immédiatement fait sourire. J\'ai voulu capturer cette scène amusante et attachante, en jouant sur le contraste d\'échelle avec ce minuscule chaton caché dans une botte de travail bien trop grande pour lui.\n\nJ\'ai pris un immense plaisir à travailler le contraste des textures. Ce fut un vrai défi technique de rendre le cuir usé, lourd et plissé de cette vieille chaussure, avec ses lacets emmêlés, tout en le contrastant avec la douceur et la légèreté du pelage du petit félin. Ses minuscules pattes agrippant le bord et son regard curieux sont les détails qui, pour moi, donnent vie à toute cette scène.\n\nC\'est une pièce ludique que j\'ai dessinée avec beaucoup d\'affection. J\'espère que cette petite scène espiègle vous fera sourire et apportera une touche de chaleur chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 8 heures de travail • Œuvre originale', price: '280 €' },
          { nom: 'L\'élégance du cheval', description: 'Dessiner ce portrait a été une vraie joie, car le cheval est de loin mon animal préféré. C\'est un sujet auquel je reviens toujours avec la même passion et la même admiration intacte.\n\nÀ travers cette pièce, j\'ai cherché à capturer toute la noblesse et l\'élégance de sa prestance. En jouant sur des contrastes très marqués, j\'ai voulu sculpter la puissance de sa musculature et créer l\'impression d\'une lumière glissant sur son pelage. Le travail minutieux sur les détails de la sellerie et la tension du cuir sert à mettre en valeur, par contraste, la douceur et l\'intelligence profonde de son œil.\n\nC\'est un hommage sincère à la force tranquille qui me fascine tant. J\'espère que ce dessin résonnera chez ceux qui partagent cet amour pour ces magnifiques créatures et qu\'il apportera beaucoup de caractère chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 7 heures de travail • Œuvre originale', price: '245 €' },
          { nom: 'Face à face', description: 'Dessiner ce visage de si près a été une expérience captivante. J\'ai voulu me concentrer sur l\'essentiel, en resserrant le cadre jusqu\'aux traits pour créer une véritable intimité avec le regard.\n\nJ\'ai pris un soin particulier à détailler l\'intensité et la profondeur des yeux, encadrés par des sourcils marqués, ainsi que le volume et la douceur des lèvres. Les petits détails, comme le grain de beauté délicat et le piercing, ajoutent une touche d\'authenticité et beaucoup de caractère à ce visage. C\'est un portrait que j\'ai voulu minimaliste, où la lumière glisse doucement sur la peau, laissant toute la place à une expression pure et directe.\n\nC\'est une pièce créée avec passion, conçue pour créer un véritable échange avec la personne qui l\'observe. J\'espère que cette présence forte vous captivera et apportera une touche d\'élégance moderne chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 6 heures de travail • Œuvre originale', price: '210 €' },
          { nom: 'Douce mélancolie', description: 'Dessiner ce visage a été une expérience profondément touchante. Dès les premiers traits, j\'ai été attirée par la pointe poignante de tristesse dans ce regard. Mon désir était de capturer fidèlement cette vulnérabilité propre à l\'enfance, cette douce mélancolie qui nous laisse instantanément sans défense.\n\nJ\'ai passé du temps sur l\'expression des yeux, cherchant à transmettre toute cette profondeur et l\'illusion d\'une larme retenue. La moue délicate des lèvres et le léger mouvement des sourcils racontent l\'histoire d\'une peine silencieuse. En contraste, j\'ai laissé les boucles rebelles encadrer le visage avec un peu plus de liberté, pour apporter une touche de douceur et de légèreté autour d\'une émotion si dense.\n\nC\'est une pièce intime et spontanée, créée avec beaucoup d\'empathie. J\'espère que cette émotion sincère vous parlera et apportera une dimension profondément humaine chez vous.', details: 'Format A2 (42 × 59,4 cm) • Papier 240 g/m² • 10 heures de travail • Œuvre originale', price: '280 €' },
          { nom: 'Sagesse équine', description: 'Pour cette nouvelle pièce, j\'ai voulu explorer une autre facette de son caractère, en capturant le mouvement de sa crinière au vent pour mieux souligner la profondeur de son expression.\n\nIl y a une sagesse dans le regard des chevaux qu\'on trouve parfois difficilement chez les humains. Une présence sincère, sans masque ni détour. Entre force et délicatesse, ils nous rappellent que la vraie noblesse ne réside pas dans la domination, mais dans la maîtrise de soi. J\'ai travaillé chaque contraste de lumière sur son pelage et sa sellerie pour guider le regard du spectateur droit vers son œil. Ce portrait capture ce moment rare où la puissance s\'efface devant l\'émotion, où le mouvement cède la place à l\'essentiel : la rencontre de deux sensibilités.\n\nC\'est une pièce vibrante et profondément personnelle. J\'espère qu\'elle résonnera chez ceux qui aiment cet animal et qu\'elle apportera sa présence vraiment unique chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 9 heures de travail • Œuvre originale', price: '315 €' },
          { nom: 'Rencontre délicate', description: 'Dessiner cette scène a été un moment de vraie douceur. J\'ai voulu capturer cet instant suspendu, presque magique, où la curiosité innocente d\'un chaton rencontre la fragilité d\'un papillon.\n\nJ\'ai pris grand plaisir à travailler les textures pour contraster la douceur ébouriffée du pelage du félin avec la précision graphique des ailes du papillon. Le jeu de lumière met en valeur l\'intensité du regard du chaton, totalement fasciné par cette apparition inattendue. C\'est un face-à-face silencieux, un moment d\'observation mutuelle plein de retenue et d\'émerveillement.\n\nC\'est une pièce tendre et apaisante que j\'ai dessinée du cœur. J\'espère qu\'elle éveillera votre propre sens de l\'émerveillement et apportera une belle touche de poésie chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 7 heures de travail • Œuvre originale', price: '280 €' },
          { nom: 'La princesse', description: 'Dessiner ce visage a été un exercice particulièrement émouvant pour moi. J\'ai voulu capturer toute la grâce et l\'innocence de l\'enfance à travers ce portrait. Avec sa couronne de fleurs délicatement posée dans ses cheveux, elle a, à mes yeux, l\'allure d\'une vraie petite princesse. La plus jolie de toutes, naturellement.\n\nJ\'ai pris mon temps pour travailler la douceur de ses traits, la rondeur de ses joues et, surtout, la lumière dans ses grands yeux. Le petit détail de la peluche qu\'elle tient rappelle doucement que derrière cette petite présence royale se cache, avant tout, l\'innocence pure d\'un enfant.\n\nC\'est un dessin dans lequel j\'ai versé une immense affection. À tel point qu\'il n\'est exceptionnellement pas à vendre : cette petite princesse a déjà été acquise par sa maman... ou devrais-je dire, par la Reine elle-même.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 9 heures de travail • Œuvre originale', price: 'Collection privée' },
          { nom: 'La profondeur de l\'œil', description: 'J\'ai voulu faire un très gros plan serré sur un œil, pour vraiment plonger dans l\'intensité d\'un regard. L\'idée était de me concentrer sur une seule partie du visage, mais de lui accorder toute mon attention.\n\nPour ce dessin, l\'essentiel de mon travail s\'est concentré sur les détails les plus minutieux. J\'ai passé beaucoup de temps sur la texture de l\'iris, cherchant les bons reflets et ombres pour essayer d\'y insuffler le plus de profondeur et de vie possible. Dessiner chaque cil a aussi demandé beaucoup de patience : il fallait trouver le bon mouvement et la bonne épaisseur pour encadrer l\'œil naturellement, sans l\'alourdir.\n\nC\'est une étude très rapprochée, presque intime, qui invite à l\'observation. J\'espère que ce regard franc et direct accrochera le vôtre.', details: 'Format A4 (21 × 29,7 cm) • Papier 240 g/m² • 11 heures de travail • Œuvre originale', price: '385 €' },
          { nom: 'La pause glace', description: 'J\'ai été immédiatement touchée par le contraste de cette petite scène du quotidien. D\'un côté, la joie évidente du moment, avec cette cornet de glace fermement tenu dans sa main, et de l\'autre, ce regard profond, presque solennel, que les enfants peuvent parfois avoir en plein goûter.\n\nPour ce dessin, je me suis beaucoup amusée à travailler les différentes textures : l\'épaisseur et les plis du cardigan, les petits détails de l\'écusson et le motif gaufré du cornet. Tous ces éléments texturés servent à mettre en valeur la douceur de son visage et à encadrer son expression un peu pensante. L\'arrière-plan volontairement flou garde toute l\'attention sur la franchise de ses grands yeux.\n\nC\'est un petit instant de vie, simple et sans artifice. J\'espère que ce moment doux vous fera sourire et trouvera sa place chez vous.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 9 heures de travail • Œuvre originale', price: '280 €' },
          { nom: 'Grâce', description: 'Pour ce dessin, j\'ai voulu bousculer un peu mes habitudes. Mon amour pour les chevaux reste le même, mais j\'ai choisi de l\'exprimer ici d\'une toute autre manière, en allant droit à l\'essentiel.\n\nL\'idée n\'était pas de chercher le réalisme ou de me perdre dans des détails minutieux comme d\'habitude. J\'ai préféré jouer uniquement sur l\'audace du trait et le contraste pur du noir sur blanc. Avec ces quelques lignes simples et fortes, j\'ai essayé de capturer le mouvement de sa crinière, l\'élégance de sa posture et son caractère fier. C\'est un exercice de style beaucoup plus minimaliste, mais très libérateur.\n\nC\'est un dessin graphique et épuré. J\'espère que vous apprécierez autant cette approche plus moderne et qu\'il apportera une belle dynamique chez vous.', details: 'Format A4 (21 × 29,7 cm) • Papier 240 g/m² • 3 heures de travail • Œuvre originale', price: '280 €' },
          { nom: 'Lien fraternel', description: 'Ce double portrait me tient particulièrement à cœur. J\'ai voulu capturer la belle complicité et l\'énergie débordante qui unissent ces deux frères. À travers leurs sourires espiègles et leurs yeux pétillants, j\'ai essayé de saisir ce précieux lien fraternel, bâti sur des jeux partagés et une affection évidente.\n\nJ\'ai investi beaucoup d\'efforts dans le contraste entre leurs deux visages et le travail sur leurs cheveux, tout en créant un beau sentiment d\'unité grâce à l\'arrière-plan doux et lumineux qui fait ressortir leurs expressions. Bien qu\'ils aient chacun leurs traits et leur caractère distincts, leurs regards directs et vifs se complètent parfaitement.\n\nC\'est un dessin rempli d\'affection, créé avec beaucoup de tendresse. Pour cette raison, il n\'est pas à vendre : cette œuvre a déjà trouvé sa maison pour toujours et trône fièrement sur les murs de leur foyer familial.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 14 heures de travail • Œuvre originale', price: 'Collection privée' },
          { nom: 'Esprit d\'aventure', description: 'Pour cette nouvelle pièce, j\'ai voulu explorer un autre chemin et me laisser emporter par la magie de l\'aquarelle. J\'ai posé mes crayons habituels pour jouer avec la transparence de l\'eau et la chaleur des pigments sépia et sienne brûlée.\n\nL\'idée était de faire émerger ce vieux voilier comme un souvenir lointain, une apparition presque fantomatique flottant dans la brume. Plutôt que de chercher un réalisme minutieux, j\'ai laissé les coups de pinceau esquisser librement le volume des voiles et la structure de la coque. La peinture vit, s\'étend et laisse l\'imagination combler les blancs. Cela donne à l\'ensemble une atmosphère très onirique et profondément nostalgique.\n\nC\'est une création plus spontanée et fluide, conçue comme une véritable invitation au voyage. J\'espère que cette atmosphère poétique vous emmènera vers de beaux horizons.', details: 'Format A3 (29,7 × 42 cm) • Papier 240 g/m² • 16 heures de travail • Œuvre originale', price: '480 €' }
        ]
      },
      process: {
        title: "Processus",
        desc: "Découvrez une sélection de dessins accompagnés des différentes étapes de leur création. Des premiers traits de crayon au dessin terminé, ces images montrent l'évolution de chaque œuvre.",
        hint: "↓ Cliquez sur un dessin pour voir son évolution",
        overlayEyebrow: "Évolution du dessin",
        stepLabel: "Étape",
        finalLabel: "Final",
        stepsLabel: "étapes",
        items: ["La pause glace", "Un refuge inattendu", "Lien fraternel", "Sagesse équine", "La princesse", "Sous les feuillages"]
      },
    }

  };

  function getNested(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

function detectPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'art.html') return 'art';
  if (path === 'about.html') return 'about';
  if (path === 'contact.html') return 'contact';
  if (path === 'process.html') return 'process';
  return 'index';
}

  function getDefaultLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;
    return navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en';
  }

  let currentLang = getDefaultLang();

  function t(key) {
    return getNested(translations[currentLang], key) || getNested(translations.en, key) || '';
  }

  function applyMeta(page) {
    const meta = translations[currentLang].meta[page];
    if (!meta) return;
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
    document.documentElement.lang = currentLang;
  }

  function applyI18nElements() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const value = t(key);
      if (value) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function (pair) {
        const parts = pair.trim().split(':');
        if (parts.length === 2) {
          const value = t(parts[1].trim());
          if (value) el.setAttribute(parts[0].trim(), value);
        }
      });
    });
  }

  function applyFocusWords() {
    const wrapper = document.getElementById('trueFocus');
    if (!wrapper) return;
    const words = t('index.focus');
    if (!Array.isArray(words)) return;
    wrapper.innerHTML = words.map(function (w) {
      return '<span class="focus-word">' + w + '</span>';
    }).join('');
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === currentLang ? 'true' : 'false');
    });
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyMeta(detectPage());
    applyI18nElements();
    applyFocusWords();
    updateLangButtons();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function initSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  window.SiteI18n = {
    getLang: function () { return currentLang; },
    t: t,
    getGalleryItems: function () {
      const items = t('gallery.items');
      const enItems = translations.en.gallery.items;
      const privateLabel = t('gallery.privateCollection');
      return items.map(function (item, i) {
        const enPrice = enItems[i].price;
        return {
          nom: item.nom,
          description: item.description,
          details: item.details,
          price: enPrice === 'Private collection' ? privateLabel : enPrice
        };
      });
    },
    getGallerySources: function () {
      return [
        'Images/Dessin1.webp', 'Images/Dessin2.webp', 'Images/Dessin3.webp', 'Images/Dessin4.webp',
        'Images/Dessin5.webp', 'Images/Dessin6.webp', 'Images/Dessin7.webp', 'Images/Dessin8.webp',
        'Images/Dessin9.webp', 'Images/Dessin10.webp', 'Images/Dessin11.webp', 'Images/Dessin12.webp',
        'Images/Dessin13.webp', 'Images/Dessin14.webp'
      ];
    }
  };

  function initializeI18n() {
    initSwitcher();
    setLanguage(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
  } else {
    initializeI18n();
  }
})();