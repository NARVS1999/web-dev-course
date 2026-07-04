(function() {
  if (!window.LESSONS || !LESSONS.length) return;

  var nav = document.querySelector('.lesson-nav');
  if (!nav) return;

  var filename = window.location.pathname.split('/').pop() || '';
  var currentId = filename.split('-')[0];
  var currentIdx = -1;

  for (var i = 0; i < LESSONS.length; i++) {
    if (LESSONS[i].id === currentId) { currentIdx = i; break; }
  }

  if (currentIdx < 0) return;

  var html = '';

  if (currentIdx > 0) {
    var prev = LESSONS[currentIdx - 1];
    html += '<a href="' + prev.file + '" class="nav-link nav-prev">\u2190 Previous: ' + prev.title + '</a>';
  }

  if (currentIdx < LESSONS.length - 1) {
    var next = LESSONS[currentIdx + 1];
    var cls = currentIdx === 0 ? 'nav-link nav-next nav-link-only' : 'nav-link nav-next';
    html += '<a href="' + next.file + '" class="' + cls + '">Next: ' + next.title + ' \u2192</a>';
  }

  nav.innerHTML = html;
})();
