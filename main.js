/* Theme toggle — remembers the choice, otherwise follows the OS. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    if (!current) {
      current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* Copy email to clipboard, with a plain-text fallback. */
(function () {
  var btn = document.getElementById('copy-email');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var email = btn.dataset.email;
    var done = function () {
      var original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = original; }, 1600);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(done, function () {
        window.location.href = 'mailto:' + email;
      });
    } else {
      window.location.href = 'mailto:' + email;
    }
  });
})();

/* Save as PDF opens the browser print dialog against the print stylesheet. */
(function () {
  var btn = document.getElementById('print-cv');
  if (btn) btn.addEventListener('click', function () { window.print(); });
})();

/* Contact form posts to Web3Forms over fetch so the page never navigates away. */
(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    status.className = 'form__status';
    status.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          form.reset();
          status.className = 'form__status ok';
          status.textContent = 'Thanks — your message is on its way.';
        } else {
          throw new Error(data.message || 'Send failed');
        }
      })
      .catch(function () {
        status.className = 'form__status err';
        status.innerHTML = 'Something went wrong. Email me directly at ' +
          '<a href="mailto:amritpal01@gmail.com">amritpal01@gmail.com</a>.';
      })
      .then(function () { submit.disabled = false; });
  });
})();

/* Back to top — appears once the hero has scrolled past. */
(function () {
  var btn = document.getElementById('to-top');
  if (!btn) return;

  var ticking = false;
  var update = function () {
    btn.classList.toggle('is-visible', window.scrollY > 400);
    ticking = false;
  };

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  update();
})();
