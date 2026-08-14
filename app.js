const releaseStackItems = [
  {status:'NEXT',date:'OCT 14, 2026',title:'VisionQuest',detail:'Disney+ · Marvel Television',url:'https://www.marvel.com/articles/tv-shows/marvel-television-visionquest-release-date'},
  {status:'COMING',date:'DEC 18, 2026',title:'Avengers: Doomsday',detail:'In theaters',url:'https://www.marvel.com/movies/avengers-doomsday'},
  {status:'COMING',date:'DEC 17, 2027',title:'Avengers: Secret Wars',detail:'In theaters',url:'https://www.marvel.com/movies/avengers-secret-wars'}
];

const recentItems = [
  {title:'Spider-Man: Brand New Day',year:'2026',type:'Movie',image:'https://i.ytimg.com/vi/8TZMtslA3UY/maxresdefault.jpg',url:'https://www.marvel.com/movies/spider-man-brand-new-day'},
  {title:'The Fantastic Four: First Steps',year:'2025',type:'Movie',image:'https://i.ytimg.com/vi/pAsmrKyMqaA/maxresdefault.jpg',url:'https://www.marvel.com/movies/the-fantastic-four-first-steps'},
  {title:'Thunderbolts*',year:'2025',type:'Movie',image:'',url:'https://www.marvel.com/movies/thunderbolts'},
  {title:'Daredevil: Born Again',year:'2025',type:'Series',image:'',url:'https://www.marvel.com/tv-shows/daredevil-born-again/1'}
];

const timelineItems = [
  {year:'2008',title:'Iron Man',type:'movie',phase:'Phase One'},
  {year:'2011',title:'Thor',type:'movie',phase:'Phase One'},
  {year:'2011',title:'Captain America: The First Avenger',type:'movie',phase:'Phase One'},
  {year:'2012',title:'The Avengers',type:'movie',phase:'Phase One'},
  {year:'2014',title:'Captain America: The Winter Soldier',type:'movie',phase:'Phase Two'},
  {year:'2014',title:'Guardians of the Galaxy',type:'movie',phase:'Phase Two'},
  {year:'2016',title:'Captain America: Civil War',type:'movie',phase:'Phase Three'},
  {year:'2018',title:'Avengers: Infinity War',type:'movie',phase:'Phase Three'},
  {year:'2019',title:'Avengers: Endgame',type:'movie',phase:'Phase Three'},
  {year:'2021',title:'WandaVision',type:'series',phase:'Phase Four'},
  {year:'2021',title:'Loki',type:'series',phase:'Phase Four'},
  {year:'2021',title:'Spider-Man: No Way Home',type:'movie',phase:'Phase Four'},
  {year:'2024',title:'Deadpool & Wolverine',type:'movie',phase:'Phase Five'},
  {year:'2025',title:'Daredevil: Born Again',type:'series',phase:'Phase Five'},
  {year:'2025',title:'Thunderbolts*',type:'movie',phase:'Phase Five'},
  {year:'2025',title:'The Fantastic Four: First Steps',type:'movie',phase:'Phase Six'},
  {year:'2026',title:'Spider-Man: Brand New Day',type:'movie',phase:'Current release'}
];

const phases = [
  {n:'PHASE ONE',saga:'Infinity Saga',years:'2008–2012',desc:'Origins, first meetings, and the formation of the Avengers.'},
  {n:'PHASE TWO',saga:'Infinity Saga',years:'2013–2015',desc:'The universe gets bigger while cracks form inside Earth’s defenses.'},
  {n:'PHASE THREE',saga:'Infinity Saga',years:'2016–2019',desc:'Civil War, Thanos, the Snap, and the end of the Infinity Saga.'},
  {n:'PHASE FOUR',saga:'Multiverse Saga',years:'2021–2022',desc:'A new generation arrives as the multiverse begins opening up.'},
  {n:'PHASE FIVE',saga:'Multiverse Saga',years:'2023–2025',desc:'Street-level, cosmic and multiversal stories collide.'},
  {n:'PHASE SIX',saga:'Multiverse Saga',years:'2025–2027',desc:'The Fantastic Four arrive and the road leads toward Doomsday and Secret Wars.'}
];

const libraryItems = [
  {title:'Iron Man',year:'2008',type:'movie',phase:'Phase One'},
  {title:'The Avengers',year:'2012',type:'movie',phase:'Phase One'},
  {title:'Captain America: The Winter Soldier',year:'2014',type:'movie',phase:'Phase Two'},
  {title:'Guardians of the Galaxy',year:'2014',type:'movie',phase:'Phase Two'},
  {title:'Captain America: Civil War',year:'2016',type:'movie',phase:'Phase Three'},
  {title:'Avengers: Infinity War',year:'2018',type:'movie',phase:'Phase Three'},
  {title:'Avengers: Endgame',year:'2019',type:'movie',phase:'Phase Three'},
  {title:'WandaVision',year:'2021',type:'series',phase:'Phase Four'},
  {title:'Loki',year:'2021',type:'series',phase:'Phase Four'},
  {title:'Spider-Man: No Way Home',year:'2021',type:'movie',phase:'Phase Four'},
  {title:'Moon Knight',year:'2022',type:'series',phase:'Phase Four'},
  {title:'Werewolf by Night',year:'2022',type:'special',phase:'Phase Four'},
  {title:'The Guardians of the Galaxy Holiday Special',year:'2022',type:'special',phase:'Phase Four'},
  {title:'Guardians of the Galaxy Vol. 3',year:'2023',type:'movie',phase:'Phase Five'},
  {title:'Deadpool & Wolverine',year:'2024',type:'movie',phase:'Phase Five'},
  {title:'Captain America: Brave New World',year:'2025',type:'movie',phase:'Phase Five'},
  {title:'Daredevil: Born Again',year:'2025',type:'series',phase:'Phase Five'},
  {title:'Thunderbolts*',year:'2025',type:'movie',phase:'Phase Five'},
  {title:'Ironheart',year:'2025',type:'series',phase:'Phase Five'},
  {title:'The Fantastic Four: First Steps',year:'2025',type:'movie',phase:'Phase Six',image:'https://i.ytimg.com/vi/pAsmrKyMqaA/maxresdefault.jpg'},
  {title:'Spider-Man: Brand New Day',year:'2026',type:'movie',phase:'Current',image:'https://i.ytimg.com/vi/8TZMtslA3UY/maxresdefault.jpg'}
];

const releaseStack = document.querySelector('#releaseStack');
const recentGrid = document.querySelector('#recentGrid');
const timelineList = document.querySelector('#timelineList');
const phaseGrid = document.querySelector('#phaseGrid');
const libraryGrid = document.querySelector('#libraryGrid');
const searchInput = document.querySelector('#librarySearch');
let timelineFilter='all', libraryFilter='all';

releaseStack.innerHTML = releaseStackItems.map((item,i)=>`<a class="release-row" href="${item.url}" target="_blank" rel="noopener"><div><span class="status ${i===0?'next':''}">${item.status}</span><strong>${item.date}</strong></div><div><h3>${item.title}</h3><p>${item.detail}</p></div><b>↗</b></a>`).join('');
recentGrid.innerHTML = recentItems.map(item=>`<a class="recent-card" href="${item.url}" target="_blank" rel="noopener">${item.image?`<img src="${item.image}" alt="${item.title}">`:`<div class="recent-placeholder">${item.title.split(' ').map(w=>w[0]).join('').slice(0,3)}</div>`}<div><span>${item.year} · ${item.type}</span><h3>${item.title}</h3></div></a>`).join('');

function renderTimeline(){
  const visible=timelineItems.filter(x=>timelineFilter==='all'||x.type===timelineFilter);
  timelineList.innerHTML=visible.map(x=>`<article class="timeline-item"><span class="timeline-year">${x.year}</span><div><strong>${x.title}</strong><small>${x.phase}</small></div><span>${x.type==='movie'?'Movie':'Series'}</span></article>`).join('');
}
function renderPhases(){phaseGrid.innerHTML=phases.map((p,i)=>`<article class="phase-card"><span>0${i+1} · ${p.saga}</span><h3>${p.n}</h3><b>${p.years}</b><p>${p.desc}</p></article>`).join('')}
function renderLibrary(){
  const q=searchInput.value.trim().toLowerCase();
  const visible=libraryItems.filter(x=>(libraryFilter==='all'||x.type===libraryFilter)&&x.title.toLowerCase().includes(q));
  libraryGrid.innerHTML=visible.map(x=>`<article class="poster-card">${x.image?`<img src="${x.image}" alt="${x.title}">`:`<div class="poster-placeholder"><span>${x.phase}</span><strong>${x.title}</strong></div>`}<div class="poster-copy"><span>${x.year} · ${x.type==='movie'?'Movie':x.type==='series'?'Series':'Special'}</span><h3>${x.title}</h3><p>${x.phase}</p></div></article>`).join('') || '<p class="section-note">No matches.</p>';
}

document.querySelectorAll('[data-timeline-filter]').forEach(btn=>btn.onclick=()=>{timelineFilter=btn.dataset.timelineFilter;document.querySelectorAll('[data-timeline-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderTimeline()});
document.querySelectorAll('[data-library-filter]').forEach(btn=>btn.onclick=()=>{libraryFilter=btn.dataset.libraryFilter;document.querySelectorAll('[data-library-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderLibrary()});
searchInput.addEventListener('input',renderLibrary);
const menuButton=document.querySelector('#menuButton'),mainNav=document.querySelector('#mainNav');
menuButton.onclick=()=>mainNav.classList.toggle('open');
mainNav.querySelectorAll('a').forEach(a=>a.onclick=()=>mainNav.classList.remove('open'));
renderTimeline();renderPhases();renderLibrary();
