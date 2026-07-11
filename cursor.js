/* ==========================================================
   CURSEUR "RÉVÉLATION LUMINEUSE"
   À inclure sur toutes les pages via :
   <script src="cursor.js"></script>
   (juste avant la fermeture de </body>)
   ========================================================== */
(function () {
    // Désactivé sur mobile/tablette (pas de vraie souris)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    var style = document.createElement('style');
    style.textContent =
        '* { cursor: none !important; }' +
        '.pencil-cursor-canvas { position: fixed; top:0; left:0; width:100vw; height:100vh; pointer-events:none; z-index:99999; }';
    document.head.appendChild(style);

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

    var mouseX = -200, mouseY = -200;
    var displayX = -200, displayY = -200; // position "amortie" pour un mouvement plus doux
    var hovering = false;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('mouseover', function (e) {
        hovering = !!e.target.closest('a, button, .art-card, .btn-gallery');
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Amortissement léger : la lueur suit avec un tout petit délai, plus doux qu'un point figé
        displayX += (mouseX - displayX) * 0.18;
        displayY += (mouseY - displayY) * 0.18;

        var radius = hovering ? 70 : 45;
        var grad = ctx.createRadialGradient(displayX, displayY, 0, displayX, displayY, radius);
        grad.addColorStop(0, 'rgba(193, 105, 60, ' + (hovering ? 0.5 : 0.32) + ')'); // #c1693c
        grad.addColorStop(1, 'rgba(193, 105, 60, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(displayX, displayY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Petit point net au centre pour garder un repère précis du pointeur
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#2b2420';
        ctx.fill();

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
