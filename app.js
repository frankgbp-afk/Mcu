const timelineItems = [
  {year:'1940s',title:'Captain America: The First Avenger',type:'movie',phase:'Phase One'},
  {year:'1995',title:'Captain Marvel',type:'movie',phase:'Phase Three'},
  {year:'2010',title:'Iron Man',type:'movie',phase:'Phase One'},
  {year:'2011',title:'Iron Man 2',type:'movie',phase:'Phase One'},
  {year:'2011',title:'Thor',type:'movie',phase:'Phase One'},
  {year:'2012',title:'The Avengers',type:'movie',phase:'Phase One'},
  {year:'2014',title:'Captain America: The Winter Soldier',type:'movie',phase:'Phase Two'},
  {year:'2014',title:'Guardians of the Galaxy',type:'movie',phase:'Phase Two'},
  {year:'2015',title:'Avengers: Age of Ultron',type:'movie',phase:'Phase Two'},
  {year:'2016',title:'Captain America: Civil War',type:'movie',phase:'Phase Three'},
  {year:'2016',title:'Black Panther',type:'movie',phase:'Phase Three'},
  {year:'2023',title:'WandaVision',type:'series',phase:'Phase Four'},
  {year:'2024',title:'The Falcon and the Winter Soldier',type:'series',phase:'Phase Four'},
  {year:'2024',title:'Spider-Man: Far From Home',type:'movie',phase:'Phase Three'},
  {year:'2024',title:'Spider-Man: No Way Home',type:'movie',phase:'Phase Four'},
  {year:'2025',title:'Hawkeye',type:'series',phase:'Phase Four'}
];

const phases = [
  {n:'PHASE ONE',saga:'Infinity Saga',years:'2008–2012',color:'#55a8ff'},
  {n:'PHASE TWO',saga:'Infinity Saga',years:'2013–2015',color:'#67c68d'},
  {n:'PHASE THREE',saga:'Infinity Saga',years:'2016–2019',color:'#d9a441'},
  {n:'PHASE FOUR',saga:'Multiverse Saga',years:'2021–2022',color:'#b57cff'},
  {n:'PHASE FIVE',saga:'Multiverse Saga',years:'2023–2025',color:'#ef5960'},
  {n:'PHASE SIX',saga:'Multiverse Saga',years:'2025–2027',color:'#70d6d1'}
];

const libraryItems = [
  {title:'Iron Man',year:'2008',type:'movie',phase:'Phase One',c1:'#7b0f15',c2:'#d79b33'},
  {title:'The Avengers',year:'2012',type:'movie',phase:'Phase One',c1:'#162a52',c2:'#8a2e2e'},
  {title:'Captain America: The Winter Soldier',year:'2014',type:'movie',phase:'Phase Two',c1:'#20364b',c2:'#7c8794'},
  {title:'Guardians of the Galaxy',year:'2014',type:'movie',phase:'Phase Two',c1:'#1a2948',c2:'#a84570'},
  {title:'Avengers: Infinity War',year:'2018',type:'movie',phase:'Phase Three',c1:'#3f225c',c2:'#d47f2a'},
  {title:'Avengers: Endgame',year:'2019',type:'movie',phase:'Phase Three',c1:'#25294a',c2:'#7c4b9f'},
  {title:'WandaVision',year:'2021',type:'series',phase:'Phase Four',c1:'#4b101c',c2:'#d6a4a4'},
  {title:'Loki',year:'2021',type:'series',phase:'Phase Four',c1:'#18382d',c2:'#b9903d'},
  {title:'Spider-Man: No Way Home',year:'2021',type:'movie',phase:'Phase Four',c1:'#122342',c2:'#a3242d'},
  {title:'Moon Knight',year:'2022',type:'series',phase:'Phase Four',c1:'#3a3f47',c2:'#d4d1c7'},
  {title:'Werewolf by Night',year:'2022',type:'special',phase:'Phase Four',c1:'#151515',c2:'#696969'},
  {title:'Guardians Holiday Special',year:'2022',type:'special',phase:'Phase Four',c1:'#16422d',c2:'#a02129'},
  {title:'Guardians of the Galaxy Vol. 3',year:'2023',type:'movie',phase:'Phase Five',c1:'#5d203d',c2:'#5e7bb5'},
  {title:'Deadpool & Wolverine',year:'2024',type:'movie',phase:'Phase Five',c1:'#9d1723',c2:'#d3a92e'},
  {title:'Daredevil: Born Again',year:'2025',type:'series',phase:'Phase Five',c1:'#210b0d',c2:'#a51d25'},
  {title:'The Fantastic Four: First Steps',year:'2025',type:'movie',phase:'Phase Six',c1:'#1b5072',c2:'#e3a25d'},
  {title:'Thunderbolts*',year:'2025',type:'movie',phase:'Phase Five',c1:'#4d252a',c2:'#d27b59'},
  {title:'Ironheart',year:'2025',type:'series',phase:'Phase Five',c1:'#40131a',c2:'#7a8b99'}
];

const upcomingItems = [
  {day:'31',month:'JUL 2026',title:'Spider-Man: Brand New Day',detail:'Theatrical release',type:'Movie'},
  {day:'14',month:'OCT 2026',title:'VisionQuest',detail:'Disney+ · Marvel Television',type:'Series'},
  {day:'18',month:'DEC 2026',title:'Avengers: Doomsday',detail:'Theatrical release',type:'Movie'},
  {day:'17',month:'DEC 2027',title:'Avengers: Secret Wars',detail:'Theatrical release',type:'Movie'}
];

const timelineList = document.querySelector('#timelineList');
const phaseGrid = document.querySelector('#phaseGrid');
const libraryGrid = document.querySelector('#libraryGrid');
const upcomingGrid = document.querySelector('#upcomingGrid');
const searchInput = document.querySelector('#librarySearch');
let timelineFilter = 'all';
let libraryFilter = 'all';

function renderTimeline(){
  const visible = timelineItems.filter(item => timelineFilter === 'all' || item.type === timelineFilter);
  timelineList.innerHTML = visible.map(item => `
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <span class="timeline-year">${item.year}</span>
      <div class="timeline-title"><strong>${item.title}</strong><span>${item.phase}</span></div>
      <span class="timeline-type">${item.type === 'movie' ? 'Movie' : 'Series'}</span>
    </article>`).join('');
}

function renderPhases(){
  phaseGrid.innerHTML = phases.map((p,i) => `
    <article class="phase-card" style="--phase-color:${p.color}">
      <span class="phase-number">0${i+1}</span><span class="saga">${p.saga}</span>
      <h3>${p.n}</h3><p>${p.years}</p>
    </article>`).join('');
}

function renderLibrary(){
  const q = searchInput.value.trim().toLowerCase();
  const visible = libraryItems.filter(item => (libraryFilter === 'all' || item.type === libraryFilter) && item.title.toLowerCase().includes(q));
  libraryGrid.innerHTML = visible.length ? visible.map(item => `
    <article class="poster-card">
      <div class="poster-art" style="--poster1:${item.c1};--poster2:${item.c2}"><strong>${item.title}</strong></div>
      <div class="poster-meta"><span>${item.year} · ${item.type === 'movie' ? 'Movie' : item.type === 'series' ? 'Series' : 'Special'}</span><p>${item.phase}</p></div>
    </article>`).join('') : '<p class="section-note">No titles match that search yet.</p>';
}

function renderUpcoming(){
  upcomingGrid.innerHTML = upcomingItems.map(item => `
    <article class="upcoming-card">
      <div class="date-block"><strong>${item.day}</strong><span>${item.month}</span></div>
      <div><h3>${item.title}</h3><p>${item.detail}</p></div>
      <span class="type-badge">${item.type}</span>
    </article>`).join('');
}

document.querySelectorAll('[data-timeline-filter]').forEach(btn => btn.addEventListener('click', () => {
  timelineFilter = btn.dataset.timelineFilter;
  document.querySelectorAll('[data-timeline-filter]').forEach(b => b.classList.toggle('active', b === btn));
  renderTimeline();
}));

document.querySelectorAll('[data-library-filter]').forEach(btn => btn.addEventListener('click', () => {
  libraryFilter = btn.dataset.libraryFilter;
  document.querySelectorAll('[data-library-filter]').forEach(b => b.classList.toggle('active', b === btn));
  renderLibrary();
}));

searchInput.addEventListener('input', renderLibrary);

const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');
menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {mainNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

renderTimeline();
renderPhases();
renderLibrary();
renderUpcoming();
