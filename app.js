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
  {n:'PHASE ONE',saga:'Infinity Saga',years:'2008–2012',color:'#55a8ff',desc:'The Avengers assemble and the Infinity Saga begins.'},
  {n:'PHASE TWO',saga:'Infinity Saga',years:'2013–2015',color:'#67c68d',desc:'The universe expands from Earth to Knowhere and beyond.'},
  {n:'PHASE THREE',saga:'Infinity Saga',years:'2016–2019',color:'#d9a441',desc:'Civil War fractures the heroes before the battle with Thanos.'},
  {n:'PHASE FOUR',saga:'Multiverse Saga',years:'2021–2022',color:'#b57cff',desc:'New heroes rise as reality itself starts to fracture.'},
  {n:'PHASE FIVE',saga:'Multiverse Saga',years:'2023–2025',color:'#ef5960',desc:'Street-level stories and cosmic threats collide.'},
  {n:'PHASE SIX',saga:'Multiverse Saga',years:'2025–2027',color:'#70d6d1',desc:'The Fantastic Four arrive as the road to the next Avengers era begins.'}
];

const libraryItems = [
  {title:'Iron Man',year:'2008',type:'movie',phase:'Phase One',c1:'#7b0f15',c2:'#d79b33',desc:'Tony Stark builds the armor that launches the MCU.'},
  {title:'The Avengers',year:'2012',type:'movie',phase:'Phase One',c1:'#162a52',c2:'#8a2e2e',desc:'Earth’s mightiest heroes assemble for the first time.'},
  {title:'Captain America: The Winter Soldier',year:'2014',type:'movie',phase:'Phase Two',c1:'#20364b',c2:'#7c8794',desc:'Steve Rogers uncovers a conspiracy buried inside S.H.I.E.L.D.'},
  {title:'Guardians of the Galaxy',year:'2014',type:'movie',phase:'Phase Two',c1:'#1a2948',c2:'#a84570',desc:'A group of cosmic outlaws becomes an unlikely family.'},
  {title:'Avengers: Infinity War',year:'2018',type:'movie',phase:'Phase Three',c1:'#3f225c',c2:'#d47f2a',desc:'Thanos hunts the Infinity Stones as the MCU converges.'},
  {title:'Avengers: Endgame',year:'2019',type:'movie',phase:'Phase Three',c1:'#25294a',c2:'#7c4b9f',image:'https://media.vogue.mx/photos/5cc326b7224e5635d0ca74b9/2:3/w_1280,c_limit/avengers-endgame.jpg',desc:'The Avengers make one final stand to undo the Snap.'},
  {title:'WandaVision',year:'2021',type:'series',phase:'Phase Four',c1:'#4b101c',c2:'#d6a4a4',desc:'Wanda and Vision live an impossible suburban life.'},
  {title:'Loki',year:'2021',type:'series',phase:'Phase Four',c1:'#18382d',c2:'#b9903d',image:'https://bkimg.cdn.bcebos.com/pic/a8773912b31bb051f819a95bf42dcdb44aed2e734a32',desc:'A stolen Tesseract sends Loki into the machinery of time.'},
  {title:'Spider-Man: No Way Home',year:'2021',type:'movie',phase:'Phase Four',c1:'#122342',c2:'#a3242d',desc:'Peter Parker’s secret identity tears open the multiverse.'},
  {title:'Moon Knight',year:'2022',type:'series',phase:'Phase Four',c1:'#3a3f47',c2:'#d4d1c7',desc:'Marc Spector and Steven Grant are pulled into a war among Egyptian gods.'},
  {title:'Werewolf by Night',year:'2022',type:'special',phase:'Phase Four',c1:'#151515',c2:'#696969',desc:'Marvel Studios dives into classic monster horror.'},
  {title:'Guardians Holiday Special',year:'2022',type:'special',phase:'Phase Four',c1:'#16422d',c2:'#a02129',desc:'The Guardians try to give Peter Quill a Christmas to remember.'},
  {title:'Guardians of the Galaxy Vol. 3',year:'2023',type:'movie',phase:'Phase Five',c1:'#5d203d',c2:'#5e7bb5',desc:'Rocket’s past forces the Guardians into one last mission together.'},
  {title:'Deadpool & Wolverine',year:'2024',type:'movie',phase:'Phase Five',c1:'#9d1723',c2:'#d3a92e',desc:'Deadpool and Wolverine crash headfirst into the MCU multiverse.'},
  {title:'Daredevil: Born Again',year:'2025',type:'series',phase:'Phase Five',c1:'#210b0d',c2:'#a51d25',desc:'Matt Murdock and Wilson Fisk return to the streets of New York.'},
  {title:'The Fantastic Four: First Steps',year:'2025',type:'movie',phase:'Phase Six',c1:'#1b5072',c2:'#e3a25d',image:'https://i.ytimg.com/vi/pAsmrKyMqaA/maxresdefault.jpg',desc:'Marvel’s First Family enters a retro-futuristic new world.'},
  {title:'Thunderbolts*',year:'2025',type:'movie',phase:'Phase Five',c1:'#4d252a',c2:'#d27b59',desc:'A team of damaged antiheroes is forced into a dangerous mission.'},
  {title:'Ironheart',year:'2025',type:'series',phase:'Phase Five',c1:'#40131a',c2:'#7a8b99',desc:'Riri Williams brings cutting-edge armor back to the MCU.'}
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
      <h3>${p.n}</h3><p>${p.years}</p><small>${p.desc}</small>
    </article>`).join('');
}

function renderLibrary(){
  const q = searchInput.value.trim().toLowerCase();
  const visible = libraryItems.filter(item => (libraryFilter === 'all' || item.type === libraryFilter) && item.title.toLowerCase().includes(q));
  libraryGrid.innerHTML = visible.length ? visible.map(item => `
    <article class="poster-card">
      <div class="poster-art ${item.image ? 'has-image' : ''}" style="--poster1:${item.c1};--poster2:${item.c2};${item.image ? `background-image:linear-gradient(180deg,transparent 30%,rgba(5,6,9,.94)),url('${item.image}')` : ''}"><strong>${item.title}</strong></div>
      <div class="poster-meta"><span>${item.year} · ${item.type === 'movie' ? 'Movie' : item.type === 'series' ? 'Series' : 'Special'}</span><p>${item.phase}</p><small>${item.desc}</small></div>
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
