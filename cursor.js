/* ==========================================================
   CURSEUR "POINT ORANGE"
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
        '.dot-cursor {' +
        '  position: fixed; top:0; left:0;' +
        '  width: 18px; height: 18px;' +
        '  border-radius: 50%;' +
        '  background-color: #c1693c;' +
        '  pointer-events: none; z-index: 99999;' +
        '  transform: translate(-50%, -50%);' +
        '  opacity: 0;' +
        '  transition: opacity 0.15s ease, width 0.2s ease, height 0.2s ease;' +
        '}';
    document.head.appendChild(style);

    var dotEl = document.createElement('div');
    dotEl.className = 'dot-cursor';
    document.body.appendChild(dotEl);

    document.addEventListener('mousemove', function (e) {
        dotEl.style.left = e.clientX + 'px';
        dotEl.style.top = e.clientY + 'px';
        dotEl.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
        dotEl.style.opacity = '0';
    });

    document.addEventListener('mouseover', function (e) {
        var hovering = !!e.target.closest('a, button, .art-card, .btn-gallery');
        dotEl.style.width = hovering ? '28px' : '18px';
        dotEl.style.height = hovering ? '28px' : '18px';
    });
})();
