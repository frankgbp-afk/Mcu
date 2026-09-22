(() => {
  const { projects, phases, featuredSlug, nextUpSlugs, dataSnapshot } = window.MCU_DATA;
  const app = document.querySelector('#app');
  const formatMonth = value => new Intl.DateTimeFormat('en-US',{month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(`${value}-01T12:00:00Z`));
  const formatMonthLong = value => new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(`${value}-01T12:00:00Z`));
  const phaseLabel = n => `Phase ${['Zero','One','Two','Three','Four','Five','Six'][n] || n}`;
  const typeLabel = type => type === 'movie' ? 'Movie' : 'Series';
  const sorted = [...projects].sort((a,b)=>a.release.localeCompare(b.release));
  const bySlug = slug => projects.find(p=>p.slug===slug);

  document.querySelector('#dataSnapshot').textContent = `Data snapshot · ${dataSnapshot}`;

  const poster = (p, compact=false) => {
    const media = p.poster
      ? `<img src="${p.poster}" alt="${p.title} poster" loading="lazy">`
      : `<div class="poster-fallback"><span>MARVEL STUDIOS</span><strong>${p.title}</strong><small>${formatMonth(p.release)}</small></div>`;
    return `<article class="poster-card${compact?' compact':''}" data-project="${p.slug}">
      <div class="poster-media">${media}<span class="phase-pill">P${p.phase}</span></div>
      <div class="poster-info"><span>${formatMonth(p.release)} · ${typeLabel(p.type)}</span><h3>${p.title}</h3><p>${phaseLabel(p.phase)}</p></div>
    </article>`;
  };

  const sectionTitle = (eyebrow, title, copy='') => `<div class="section-head"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${copy?`<p>${copy}</p>`:''}</div>`;

  const nextCard = p => `<a class="next-card" href="${p.marvelUrl || '#release-order'}" ${p.marvelUrl?'target="_blank" rel="noopener"':''}>
    <div><span class="status-dot"></span><span>${p.status || 'Upcoming'}</span></div>
    <strong>${p.title}</strong><small>${formatMonthLong(p.release)}</small><b>↗</b>
  </a>`;

  function renderHome(){
    const featured = bySlug(featuredSlug);
    const recent = sorted.filter(p=>p.release<=featured.release).slice(-5).reverse();
    const next = nextUpSlugs.map(bySlug).filter(Boolean);
    app.innerHTML = `
      <section class="home-hero" style="--hero-image:url('${featured.backdrop || featured.poster}')">
        <div class="hero-noise"></div>
        <div class="hero-content shell">
          <p class="eyebrow">MCU CENTRAL · V2</p>
          <div class="hero-badge">Latest movie in this data snapshot</div>
          <h1>${featured.title}</h1>
          <p class="hero-meta">${formatMonthLong(featured.release)} <i></i> ${phaseLabel(featured.phase)} <i></i> ${featured.saga}</p>
          <p class="hero-copy">Your MCU release guide, library, phases and trailers — rebuilt as a cleaner, faster app.</p>
          <div class="hero-actions">
            ${featured.trailer?`<a class="button primary" href="${featured.trailer}" target="_blank" rel="noopener">▶ Watch trailer</a>`:''}
            <a class="button glass" href="#release-order">View release order</a>
          </div>
        </div>
      </section>

      <div class="shell home-shell">
        <section class="home-block next-up-block">
          ${sectionTitle('ON DECK','Next up','The next projects in the current MCU Central data snapshot.')}
          <div class="next-grid">${next.map(nextCard).join('')}</div>
        </section>

        <section class="home-block">
          <div class="section-head inline"><div><p class="eyebrow">RECENT</p><h2>Catch up</h2></div><a class="text-link" href="#movies">Browse movies →</a></div>
          <div class="poster-rail">${recent.map(p=>poster(p,true)).join('')}</div>
        </section>

        <section class="home-block">
          ${sectionTitle('EXPLORE','Pick a door')}
          <div class="destination-grid">
            <a class="destination-card movies" href="#movies"><span>01</span><div><small>THE LIBRARY</small><strong>Movies</strong><p>Every MCU movie in release order.</p></div><b>→</b></a>
            <a class="destination-card tv" href="#tv"><span>02</span><div><small>MARVEL TELEVISION</small><strong>TV</strong><p>Series from WandaVision forward.</p></div><b>→</b></a>
            <a class="destination-card timeline" href="#release-order"><span>03</span><div><small>2008 → NOW</small><strong>Release order</strong><p>Movies and television in one stream.</p></div><b>→</b></a>
            <a class="destination-card sagas" href="#phases"><span>04</span><div><small>THE BIG PICTURE</small><strong>Sagas & phases</strong><p>Explore the Infinity and Multiverse sagas.</p></div><b>→</b></a>
          </div>
        </section>
      </div>`;
  }

  function renderLibrary(type){
    const label = type==='movie'?'Movies':'Television';
    const description = type==='movie' ? 'The MCU on the big screen, from Iron Man forward.' : 'Marvel Studios and Marvel Television series in release order.';
    const list = sorted.filter(p=>p.type===type);
    app.innerHTML = `<div class="page shell">
      <header class="page-hero"><p class="eyebrow">MCU LIBRARY</p><h1>${label}</h1><p>${description}</p><div class="stat-row"><span><strong>${list.length}</strong> projects</span><span><strong>${new Set(list.map(p=>p.phase)).size}</strong> phases</span></div></header>
      <div class="library-toolbar sticky-tools"><label class="search-field"><span>⌕</span><input id="librarySearch" type="search" autocomplete="off" placeholder="Search ${label.toLowerCase()}…"></label><div class="chip-row" id="phaseFilters"><button class="chip active" data-phase="all">All phases</button>${phases.map(p=>`<button class="chip" data-phase="${p.number}">Phase ${p.number}</button>`).join('')}</div></div>
      <section><div class="poster-grid" id="libraryGrid"></div><p class="empty-state" id="emptyState" hidden>No projects match that search.</p></section>
    </div>`;

    const grid = document.querySelector('#libraryGrid');
    const search = document.querySelector('#librarySearch');
    let activePhase='all';
    const draw=()=>{
      const q=search.value.trim().toLowerCase();
      const visible=list.filter(p=>(activePhase==='all'||String(p.phase)===activePhase)&&p.title.toLowerCase().includes(q));
      grid.innerHTML=visible.map(p=>poster(p)).join('');
      document.querySelector('#emptyState').hidden=visible.length>0;
    };
    document.querySelectorAll('[data-phase]').forEach(btn=>btn.addEventListener('click',()=>{
      activePhase=btn.dataset.phase;
      document.querySelectorAll('[data-phase]').forEach(b=>b.classList.toggle('active',b===btn));
      draw();
    }));
    search.addEventListener('input',draw);
    draw();
  }

  function renderReleaseOrder(){
    const years=[...new Set(sorted.map(p=>p.release.slice(0,4)))].sort();
    app.innerHTML=`<div class="page shell release-page">
      <header class="page-hero"><p class="eyebrow">2008 → ${years.at(-1)}</p><h1>Release order</h1><p>One chronological stream for MCU movies and series, grouped by release year.</p></header>
      <div class="segmented-control sticky-tools" id="releaseFilters"><button class="active" data-type="all">All</button><button data-type="movie">Movies</button><button data-type="series">TV</button></div>
      <div class="timeline-v2" id="releaseTimeline"></div>
    </div>`;
    let filter='all';
    const draw=()=>{
      const visible=sorted.filter(p=>filter==='all'||p.type===filter);
      const groups=[...new Set(visible.map(p=>p.release.slice(0,4)))];
      document.querySelector('#releaseTimeline').innerHTML=groups.map(year=>`<section class="year-group"><div class="year-marker"><span>${year}</span></div><div class="year-items">${visible.filter(p=>p.release.startsWith(year)).map((p,i)=>`<article class="release-item"><div class="release-index">${String(i+1).padStart(2,'0')}</div><div class="release-date">${formatMonth(p.release).replace(` ${year}`,'')}</div><div class="release-main"><strong>${p.title}</strong><span>${phaseLabel(p.phase)} · ${p.saga}</span></div><div class="type-tag">${typeLabel(p.type)}</div></article>`).join('')}</div></section>`).join('');
    };
    document.querySelectorAll('[data-type]').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.type;document.querySelectorAll('[data-type]').forEach(b=>b.classList.toggle('active',b===btn));draw();}));
    draw();
  }

  function renderPhases(){
    const infinity=phases.filter(p=>p.saga==='Infinity Saga');
    const multiverse=phases.filter(p=>p.saga==='Multiverse Saga');
    const phaseCard=p=>{const list=sorted.filter(x=>x.phase===p.number);return `<article class="phase-card-v2"><div class="phase-number">0${p.number}</div><div class="phase-card-copy"><span>${p.saga}</span><h3>${p.name}</h3><strong>${p.years}</strong><p>${p.description}</p><div class="phase-projects"><b>${list.length}</b> projects <i></i> ${list.filter(x=>x.type==='movie').length} movies <i></i> ${list.filter(x=>x.type==='series').length} series</div></div></article>`};
    const saga=(name,sub,items,kind)=>`<section class="saga-section ${kind}"><div class="saga-title"><p class="eyebrow">${sub}</p><h2>${name}</h2><p>${name==='Infinity Saga'?'The first eleven years of the MCU — from Tony Stark’s cave to the final battle with Thanos.':'The post-Endgame era expands the MCU across new heroes, television and the multiverse.'}</p></div><div class="phase-stack">${items.map(phaseCard).join('')}</div></section>`;
    app.innerHTML=`<div class="page shell"><header class="page-hero"><p class="eyebrow">THE BIG PICTURE</p><h1>Sagas & phases</h1><p>The MCU organized into its major eras.</p></header>${saga('Infinity Saga','2008–2019',infinity,'infinity')}${saga('Multiverse Saga','2021–2027',multiverse,'multiverse')}</div>`;
  }

  function renderTrailers(){
    const items=sorted.filter(p=>p.trailer).reverse();
    app.innerHTML=`<div class="page shell"><header class="page-hero"><p class="eyebrow">WATCH</p><h1>Trailer vault</h1><p>Official trailers and teasers linked from the projects in MCU Central.</p></header><div class="trailer-list">${items.map((p,i)=>`<a class="trailer-card-v2${i===0?' featured':''}" href="${p.trailer}" target="_blank" rel="noopener"><div class="trailer-art" style="background-image:linear-gradient(90deg,rgba(5,6,9,.1),rgba(5,6,9,.75)),url('${p.backdrop || p.poster}')"><span class="play-button">▶</span></div><div class="trailer-copy"><span>${formatMonthLong(p.release)} · ${typeLabel(p.type)}</span><h2>${p.title}</h2><p>${phaseLabel(p.phase)} · ${p.saga}</p><b>Watch on YouTube ↗</b></div></a>`).join('')}</div></div>`;
  }

  function renderRoute(route){
    document.body.dataset.route=route;
    if(route==='movies') renderLibrary('movie');
    else if(route==='tv') renderLibrary('series');
    else if(route==='release-order') renderReleaseOrder();
    else if(route==='phases') renderPhases();
    else if(route==='trailers') renderTrailers();
    else renderHome();
    app.focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
  }

  window.MCUApp={renderRoute};
})();
