(() => {
  const sections = Array.from(document.querySelectorAll('main > section'));
  const homeSections = [
    document.querySelector('#home'),
    document.querySelector('#releases'),
    document.querySelector('.latest-section')
  ].filter(Boolean);
  const routeSections = {
    'release-order': [document.querySelector('#timeline')],
    phases: [document.querySelector('#phases')],
    movies: [document.querySelector('#library')],
    tv: [document.querySelector('#library')],
    trailers: [document.querySelector('#trailers')]
  };

  function clickFilter(value) {
    const button = document.querySelector(`[data-library-filter="${value}"]`);
    if (button && !button.classList.contains('active')) button.click();
  }

  function setActiveNav(route) {
    document.querySelectorAll('#mainNav a').forEach(link => {
      const target = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', target === route || (route === 'home' && target === 'home'));
    });
  }

  function closeMenu() {
    const nav = document.querySelector('#mainNav');
    if (nav) nav.classList.remove('open');
  }

  function route() {
    let name = location.hash.slice(1) || 'home';
    if (name === 'timeline') name = 'release-order';
    if (name === 'library') name = 'movies';
    if (!['home', 'release-order', 'movies', 'tv', 'phases', 'trailers'].includes(name)) name = 'home';

    sections.forEach(section => { section.hidden = true; });
    const visible = name === 'home' ? homeSections : routeSections[name];
    visible.filter(Boolean).forEach(section => { section.hidden = false; });

    const libraryTitle = document.querySelector('#libraryTitle');
    const filterRow = document.querySelector('#library .filter-row');
    if (name === 'movies') {
      clickFilter('movie');
      if (libraryTitle) libraryTitle.textContent = 'Movies';
      if (filterRow) filterRow.hidden = true;
    } else if (name === 'tv') {
      clickFilter('series');
      if (libraryTitle) libraryTitle.textContent = 'TV Shows';
      if (filterRow) filterRow.hidden = true;
    } else if (filterRow) {
      filterRow.hidden = false;
    }

    document.body.dataset.route = name;
    document.title = name === 'home' ? 'MCU Central' : `${name.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())} · MCU Central`;
    setActiveNav(name);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
})();
