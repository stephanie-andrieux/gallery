/* ==========================================================
   CURSEUR "POINT ORANGE"
   À inclure sur toutes les pages via :
   <script src="cursor.js"></script>
   (juste avant la fermeture de </body>)

   Le point devient blanc quand il survole une zone déjà
   orange (bouton "Explore Gallery", boutons de langue FR/EN),
   pour rester visible par contraste.
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
        '  transition: opacity 0.15s ease, background-color 0.15s ease;' +
        '}';
    document.head.appendChild(style);

    var dotEl = document.createElement('div');
    dotEl.className = 'dot-cursor';
    document.body.appendChild(dotEl);

    // Sélecteurs des zones déjà orange, où le point doit passer en blanc
    var ORANGE_ZONES = '.btn-gallery, .lang-btn';

    document.addEventListener('mousemove', function (e) {
        dotEl.style.left = e.clientX + 'px';
        dotEl.style.top = e.clientY + 'px';
        dotEl.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
        dotEl.style.opacity = '0';
    });

    document.addEventListener('mouseover', function (e) {
        var onOrange = !!e.target.closest(ORANGE_ZONES);
        dotEl.style.backgroundColor = onOrange ? '#faf6ef' : '#c1693c';
    });
})();
