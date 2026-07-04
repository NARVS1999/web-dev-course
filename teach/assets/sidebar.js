(function() {
  if (!window.LESSONS || !LESSONS.length) return;

  var sidebar = document.getElementById('lesson-sidebar');
  if (!sidebar) return;

  var main = document.querySelector('.lesson-main');
  var layout = document.querySelector('.lesson-layout');

  var filename = window.location.pathname.split('/').pop() || '';
  var currentId = filename.split('-')[0];
  var currentIdx = -1;

  var html =
    '<button class="sidebar-close" id="sidebarClose" title="Close sidebar">&times;</button>' +
    '<div class="sidebar-section">' +
      '<div class="sidebar-header">' +
        'Course' +
        '<button class="theme-toggle" id="themeToggle" title="Toggle theme">\u263E</button>' +
      '</div>' +
      '<nav class="sidebar-nav"><ul>';

  for (var i = 0; i < LESSONS.length; i++) {
    var l = LESSONS[i];
    if (l.id === currentId) currentIdx = i;

    var cls = 'sidebar-link';
    if (l.id === currentId) cls += ' current';

    html +=
      '<li><a href="' + l.file + '" class="' + cls + '">' +
        '<span class="sidebar-num">' + l.id + '</span>' +
        '<span class="sidebar-title">' + l.title + '</span>' +
      '</a></li>';
  }

  html +=
      '</ul></nav>' +
    '</div>';

  if (currentIdx >= 0 && currentIdx < LESSONS.length - 1) {
    var next = LESSONS[currentIdx + 1];
    html +=
      '<div class="sidebar-featured">' +
        '<div class="featured-label">Next Up</div>' +
        '<a href="' + next.file + '" class="featured-link">' +
          next.id + ': ' + next.title +
        '</a>' +
      '</div>';
  }

  sidebar.innerHTML = html;

  // ── Hamburger + overlay ──
  if (main) {
    var hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.id = 'hamburgerBtn';
    hamburger.setAttribute('aria-label', 'Toggle sidebar');
    hamburger.innerHTML = '\u2630 &nbsp;Lessons';
    main.insertBefore(hamburger, main.firstChild);
  }

  if (layout) {
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebarOverlay';
    layout.appendChild(overlay);
  }

  function openSidebar() {
    if (layout) layout.classList.add('sidebar-open');
  }
  function closeSidebar() {
    if (layout) layout.classList.remove('sidebar-open');
  }

  var ham = document.getElementById('hamburgerBtn');
  var ov = document.getElementById('sidebarOverlay');
  var closeBtn = document.getElementById('sidebarClose');

  if (ham) ham.addEventListener('click', openSidebar);
  if (ov) ov.addEventListener('click', closeSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

  // ── Theme toggle ──
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  var btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', function() {
      var html = document.documentElement;
      var isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
})();
