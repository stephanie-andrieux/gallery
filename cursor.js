/* ==========================================================
   CURSEUR "POUSSIÈRE DE GRAPHITE"
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

    var mouseX = -100, mouseY = -100;
    var hovering = false;
    var particles = []; // {x, y, vx, vy, life, r}

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Génère quelques grains de poussière à chaque mouvement
        for (var i = 0; i < 2; i++) {
            particles.push({
                x: mouseX,
                y: mouseY,
                vx: (Math.random() - 0.5) * 0.6,
                vy: Math.random() * 0.3,
                life: 1,
                r: 0.8 + Math.random() * 1.6
            });
        }
    });

    document.addEventListener('mouseover', function (e) {
        hovering = !!e.target.closest('a, button, .art-card, .btn-gallery');
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fait vivre puis mourir les grains de poussière (gravité légère)
        particles.forEach(function (p) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.015;
            p.life -= 0.012;
        });
        particles = particles.filter(function (p) { return p.life > 0; });

        particles.forEach(function (p) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(193, 105, 60, ' + (p.life * 0.75) + ')'; // #c1693c
            ctx.fill();
        });

        // Point principal, en orange, qui grossit légèrement au survol
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, hovering ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#c1693c';
        ctx.fill();

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
