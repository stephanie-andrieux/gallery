/* ==========================================================
   CURSEUR "LOGO EN ORANGE"
   À inclure sur toutes les pages via :
   <script src="cursor.js"></script>
   (juste avant la fermeture de </body>)

   Utilise Images/Logo.webp (blanc, fond transparent) comme
   masque : la couleur orange est peinte à travers la forme
   exacte du logo.
   ========================================================== */
(function () {
    // Désactivé sur mobile/tablette (pas de vraie souris)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    var style = document.createElement('style');
    style.textContent =
        '* { cursor: none !important; }' +
        '.logo-cursor {' +
        '  position: fixed; top:0; left:0;' +
        '  width: 60px; height: 40px;' +
        '  pointer-events: none; z-index: 99999;' +
        '  background-color: #c1693c;' +
        '  -webkit-mask-image: url("Images/Logo.webp");' +
        '  mask-image: url("Images/Logo.webp");' +
        '  -webkit-mask-size: contain;' +
        '  mask-size: contain;' +
        '  -webkit-mask-repeat: no-repeat;' +
        '  mask-repeat: no-repeat;' +
        '  -webkit-mask-position: center;' +
        '  mask-position: center;' +
        '  transform: translate(-50%, -50%);' +
        '  opacity: 0;' +
        '  transition: opacity 0.2s ease;' +
        '}';
    document.head.appendChild(style);

    var cursorEl = document.createElement('div');
    cursorEl.className = 'logo-cursor';
    document.body.appendChild(cursorEl);

    var mouseX = -100, mouseY = -100;
    var displayX = -100, displayY = -100; // position amortie pour un mouvement fluide
    var hovering = false;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorEl.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
        cursorEl.style.opacity = '0';
    });

    document.addEventListener('mouseover', function (e) {
        hovering = !!e.target.closest('a, button, .art-card, .btn-gallery');
    });

    function draw() {
        // Amortissement : le logo "rattrape" la souris avec un léger délai fluide
        displayX += (mouseX - displayX) * 0.25;
        displayY += (mouseY - displayY) * 0.25;

        cursorEl.style.left = displayX + 'px';
        cursorEl.style.top = displayY + 'px';

        var scale = hovering ? 1.25 : 1;
        cursorEl.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
