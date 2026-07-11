/* ==========================================================
   CURSEUR "LOGO EN ORANGE" avec bascule automatique
   - Sur fond / zones neutres : le logo, en orange
   - Sur une image (dessin) ou du texte : un point orange
   À inclure sur toutes les pages via :
   <script src="cursor.js"></script>
   (juste avant la fermeture de </body>)
   ========================================================== */
(function () {
    // Désactivé sur mobile/tablette (pas de vraie souris)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    var TEXT_TAGS = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'LI', 'LABEL', 'TEXTAREA', 'INPUT', 'BUTTON'];

    var style = document.createElement('style');
    style.textContent =
        '* { cursor: none !important; }' +
        '.logo-cursor, .dot-cursor {' +
        '  position: fixed; top:0; left:0;' +
        '  pointer-events: none; z-index: 99999;' +
        '  transform: translate(-50%, -50%);' +
        '  opacity: 0;' +
        '  transition: opacity 0.15s ease;' +
        '}' +
        '.logo-cursor {' +
        '  width: 60px; height: 40px;' +
        '  background-color: #c1693c;' +
        '  -webkit-mask-image: url("Images/Logo.webp");' +
        '  mask-image: url("Images/Logo.webp");' +
        '  -webkit-mask-size: contain;' +
        '  mask-size: contain;' +
        '  -webkit-mask-repeat: no-repeat;' +
        '  mask-repeat: no-repeat;' +
        '  -webkit-mask-position: center;' +
        '  mask-position: center;' +
        '}' +
        '.dot-cursor {' +
        '  width: 16px; height: 16px;' +
        '  border-radius: 50%;' +
        '  background-color: #c1693c;' +
        '}';
    document.head.appendChild(style);

    var logoEl = document.createElement('div');
    logoEl.className = 'logo-cursor';
    document.body.appendChild(logoEl);

    var dotEl = document.createElement('div');
    dotEl.className = 'dot-cursor';
    document.body.appendChild(dotEl);

    var mouseX = -100, mouseY = -100;
    var displayX = -100, displayY = -100; // position amortie pour un mouvement fluide
    var mode = 'logo'; // 'logo' ou 'dot'
    var visible = false;

    function computeMode(x, y) {
        var el = document.elementFromPoint(x, y);
        if (!el) return 'logo';
        // Point/texte si c'est une image, ou un élément qui porte du texte
        if (el.tagName === 'IMG') return 'dot';
        if (TEXT_TAGS.indexOf(el.tagName) !== -1) return 'dot';
        return 'logo';
    }

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        visible = true;
        mode = computeMode(mouseX, mouseY);
    });

    document.addEventListener('mouseleave', function () {
        visible = false;
    });

    function draw() {
        displayX += (mouseX - displayX) * 0.25;
        displayY += (mouseY - displayY) * 0.25;

        logoEl.style.left = displayX + 'px';
        logoEl.style.top = displayY + 'px';
        dotEl.style.left = displayX + 'px';
        dotEl.style.top = displayY + 'px';

        var showLogo = visible && mode === 'logo';
        var showDot = visible && mode === 'dot';

        logoEl.style.opacity = showLogo ? '1' : '0';
        dotEl.style.opacity = showDot ? '1' : '0';

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
