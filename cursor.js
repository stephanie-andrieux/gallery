/* ==========================================================
   CURSEUR "TRACE DE CRAYON"
   À inclure sur toutes les pages via :
   <script src="cursor.js"></script>
   (juste avant la fermeture de </body>)
   ========================================================== */
(function () {
    // On désactive sur mobile/tablette (pas de vraie souris)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    // Masque le curseur natif du navigateur partout sur le site
    var style = document.createElement('style');
    style.textContent =
        '* { cursor: none !important; }' +
        '.pencil-cursor-canvas { position: fixed; top:0; left:0; width:100vw; height:100vh; pointer-events:none; z-index:99999; }';
    document.head.appendChild(style);

    // Canvas plein écran qui accueille le point + la traîne
    var canvas = document.createElement('canvas');
    canvas.className = 'pencil-cursor-canvas';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var points = [];       // historique récent des positions de la souris
    var MAX_AGE = 380;     // durée de vie d'un point de la traîne (ms)
    var mouseX = -100, mouseY = -100;
    var hovering = false;  // true quand on survole un lien/bouton/carte

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        points.push({ x: e.clientX, y: e.clientY, time: performance.now() });
    });

    document.addEventListener('mouseover', function (e) {
        hovering = !!e.target.closest('a, button, .art-card, .btn-gallery');
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var now = performance.now();

        // Ne garde que les points récents (effet de traîne qui s'efface)
        points = points.filter(function (p) { return now - p.time < MAX_AGE; });

        points.forEach(function (p) {
            var age = now - p.time;
            var alpha = 1 - age / MAX_AGE;
            var radius = 2.4 * alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(43, 36, 32, ' + (alpha * 0.45) + ')'; // #2b2420, ta couleur foncée
            ctx.fill();
        });

        // Le point principal, en couleur accent, qui grossit légèrement au survol
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, hovering ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#c1693c';
        ctx.fill();

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
