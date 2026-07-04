(function() {
  if (!window.LESSONS || !LESSONS.length) return;

  var sidebar = document.getElementById('lesson-sidebar');
  if (!sidebar) return;

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

    html +
      '<li><a href="' + l.file + '" class="' + cls + '">' +
        '<span class="sidebar-num">' + l.id + '</span>' +
        '<span class="sidebar-title">' + l.title + '</span>' +
      '</a></li>';
  }

  html +
      '</ul></nav>' +
    '</div>';

  if (currentIdx >= 0 && currentIdx < LESSONS.length - 1) {
    var next = LESSONS[currentIdx + 1];
    html +
      '<div class="sidebar-featured">' +
        '<div class="featured-label">Next Up</div>' +
        '<a href="' + next.file + '" class="featured-link">' +
          next.id + ': ' + next.title +
        '</a>' +
      '</div>';
  }

  sidebar.innerHTML = html;

  // Nav link close on click for mobile
  var links = sidebar.querySelectorAll('.sidebar-link');
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function() {
      if (window.innerWidth <= 800) {
        var layout = document.querySelector('.lesson-layout');
        if (layout) layout.classList.remove('sidebar-open');
      }
    });
  }

  // Overlay click to close
  function closeSidebar() {
    var layout = document.querySelector('.lesson-layout');
    if (layout) layout.classList.remove('sidebar-open');
  }

  // Hamburger button
  var hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.id = 'hamburgerBtn';
  hamburger.setAttribute('aria-label', 'Toggle sidebar');
  hamburger.innerHTML = '\u2630 &nbsp;Lessons';

  var main = document.querySelector('.lesson-main');
  if (main) main.insertBefore(hamburger, main.firstChild);

  // Theme toggle
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

  // Hamburger and overlay click handlers
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      var layout = document.querySelector('.lesson-layout');
      if (layout) layout.classList.add('sidebar-open');
    });
  }

  // Create overlay
  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  var layout = document.querySelector('.lesson-layout');
  if (layout) {
    layout.appendChild(overlay);
  }

  overlay.addEventListener('click', closeSidebar);

  var closeBtn = document.getElementById('sidebarClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }
})();