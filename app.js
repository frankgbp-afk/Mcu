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

// MCU projects in actual release order, not in-universe chronology.
const timelineItems = [
  {date:'MAY 2008',title:'Iron Man',type:'movie',phase:'Phase One'},
  {date:'JUN 2008',title:'The Incredible Hulk',type:'movie',phase:'Phase One'},
  {date:'MAY 2010',title:'Iron Man 2',type:'movie',phase:'Phase One'},
  {date:'MAY 2011',title:'Thor',type:'movie',phase:'Phase One'},
  {date:'JUL 2011',title:'Captain America: The First Avenger',type:'movie',phase:'Phase One'},
  {date:'MAY 2012',title:'The Avengers',type:'movie',phase:'Phase One'},
  {date:'MAY 2013',title:'Iron Man 3',type:'movie',phase:'Phase Two'},
  {date:'NOV 2013',title:'Thor: The Dark World',type:'movie',phase:'Phase Two'},
  {date:'APR 2014',title:'Captain America: The Winter Soldier',type:'movie',phase:'Phase Two'},
  {date:'AUG 2014',title:'Guardians of the Galaxy',type:'movie',phase:'Phase Two'},
  {date:'MAY 2015',title:'Avengers: Age of Ultron',type:'movie',phase:'Phase Two'},
  {date:'JUL 2015',title:'Ant-Man',type:'movie',phase:'Phase Two'},
  {date:'MAY 2016',title:'Captain America: Civil War',type:'movie',phase:'Phase Three'},
  {date:'NOV 2016',title:'Doctor Strange',type:'movie',phase:'Phase Three'},
  {date:'MAY 2017',title:'Guardians of the Galaxy Vol. 2',type:'movie',phase:'Phase Three'},
  {date:'JUL 2017',title:'Spider-Man: Homecoming',type:'movie',phase:'Phase Three'},
  {date:'NOV 2017',title:'Thor: Ragnarok',type:'movie',phase:'Phase Three'},
  {date:'FEB 2018',title:'Black Panther',type:'movie',phase:'Phase Three'},
  {date:'APR 2018',title:'Avengers: Infinity War',type:'movie',phase:'Phase Three'},
  {date:'JUL 2018',title:'Ant-Man and the Wasp',type:'movie',phase:'Phase Three'},
  {date:'MAR 2019',title:'Captain Marvel',type:'movie',phase:'Phase Three'},
  {date:'APR 2019',title:'Avengers: Endgame',type:'movie',phase:'Phase Three'},
  {date:'JUL 2019',title:'Spider-Man: Far From Home',type:'movie',phase:'Phase Three'},
  {date:'JAN 2021',title:'WandaVision',type:'series',phase:'Phase Four'},
  {date:'MAR 2021',title:'The Falcon and the Winter Soldier',type:'series',phase:'Phase Four'},
  {date:'JUN 2021',title:'Loki',type:'series',phase:'Phase Four'},
  {date:'JUL 2021',title:'Black Widow',type:'movie',phase:'Phase Four'},
  {date:'SEP 2021',title:'Shang-Chi and the Legend of the Ten Rings',type:'movie',phase:'Phase Four'},
  {date:'NOV 2021',title:'Eternals',type:'movie',phase:'Phase Four'},
  {date:'DEC 2021',title:'Spider-Man: No Way Home',type:'movie',phase:'Phase Four'},
  {date:'MAR 2022',title:'Moon Knight',type:'series',phase:'Phase Four'},
  {date:'MAY 2022',title:'Doctor Strange in the Multiverse of Madness',type:'movie',phase:'Phase Four'},
  {date:'JUN 2022',title:'Ms. Marvel',type:'series',phase:'Phase Four'},
  {date:'JUL 2022',title:'Thor: Love and Thunder',type:'movie',phase:'Phase Four'},
  {date:'AUG 2022',title:'She-Hulk: Attorney at Law',type:'series',phase:'Phase Four'},
  {date:'NOV 2022',title:'Black Panther: Wakanda Forever',type:'movie',phase:'Phase Four'},
  {date:'FEB 2023',title:'Ant-Man and the Wasp: Quantumania',type:'movie',phase:'Phase Five'},
  {date:'MAY 2023',title:'Guardians of the Galaxy Vol. 3',type:'movie',phase:'Phase Five'},
  {date:'JUN 2023',title:'Secret Invasion',type:'series',phase:'Phase Five'},
  {date:'OCT 2023',title:'Loki Season 2',type:'series',phase:'Phase Five'},
  {date:'NOV 2023',title:'The Marvels',type:'movie',phase:'Phase Five'},
  {date:'JAN 2024',title:'Echo',type:'series',phase:'Phase Five'},
  {date:'JUL 2024',title:'Deadpool & Wolverine',type:'movie',phase:'Phase Five'},
  {date:'SEP 2024',title:'Agatha All Along',type:'series',phase:'Phase Five'},
  {date:'FEB 2025',title:'Captain America: Brave New World',type:'movie',phase:'Phase Five'},
  {date:'MAR 2025',title:'Daredevil: Born Again',type:'series',phase:'Phase Five'},
  {date:'MAY 2025',title:'Thunderbolts*',type:'movie',phase:'Phase Five'},
  {date:'JUN 2025',title:'Ironheart',type:'series',phase:'Phase Five'},
  {date:'JUL 2025',title:'The Fantastic Four: First Steps',type:'movie',phase:'Phase Six'},
  {date:'JUL 2026',title:'Spider-Man: Brand New Day',type:'movie',phase:'Phase Six'}
];

const phases = [
  {n:'PHASE ONE',saga:'Infinity Saga',years:'2008–2012',desc:'Origins, first meetings, and the formation of the Avengers.'},
  {n:'PHASE TWO',saga:'Infinity Saga',years:'2013–2015',desc:'The universe gets bigger while cracks form inside Earth’s defenses.'},
  {n:'PHASE THREE',saga:'Infinity Saga',years:'2016–2019',desc:'Civil War, Thanos, the Snap, and the end of the Infinity Saga.'},
  {n:'PHASE FOUR',saga:'Multiverse Saga',years:'2021–2022',desc:'A new generation arrives as the multiverse begins opening up.'},
  {n:'PHASE FIVE',saga:'Multiverse Saga',years:'2023–2025',desc:'Street-level, cosmic and multiversal stories collide.'},
  {n:'PHASE SIX',saga:'Multiverse Saga',years:'2025–2027',desc:'The Fantastic Four arrive and the road leads toward Doomsday and Secret Wars.'}
];

const libraryItems = timelineItems
  .filter(x => x.type === 'movie' || x.type === 'series')
  .map(x => ({title:x.title,year:x.date.slice(-4),type:x.type,phase:x.phase,
    image:x.title==='The Fantastic Four: First Steps'?'https://i.ytimg.com/vi/pAsmrKyMqaA/maxresdefault.jpg':x.title==='Spider-Man: Brand New Day'?'https://i.ytimg.com/vi/8TZMtslA3UY/maxresdefault.jpg':''}));

const releaseStack = document.querySelector('#releaseStack');
const recentGrid = document.querySelector('#recentGrid');
const timelineList = document.querySelector('#timelineList');
const phaseGrid = document.querySelector('#phaseGrid');
const libraryGrid = document.querySelector('#libraryGrid');
const searchInput = document.querySelector('#librarySearch');
let timelineFilter='movie', libraryFilter='all';

releaseStack.innerHTML = releaseStackItems.map((item,i)=>`<a class="release-row" href="${item.url}" target="_blank" rel="noopener"><div><span class="status ${i===0?'next':''}">${item.status}</span><strong>${item.date}</strong></div><div><h3>${item.title}</h3><p>${item.detail}</p></div><b>↗</b></a>`).join('');
recentGrid.innerHTML = recentItems.map(item=>`<a class="recent-card" href="${item.url}" target="_blank" rel="noopener">${item.image?`<img src="${item.image}" alt="${item.title}">`:`<div class="recent-placeholder">${item.title.split(' ').map(w=>w[0]).join('').slice(0,3)}</div>`}<div><span>${item.year} · ${item.type}</span><h3>${item.title}</h3></div></a>`).join('');

function renderTimeline(){
  const visible=timelineItems.filter(x=>timelineFilter==='all'||x.type===timelineFilter);
  timelineList.innerHTML=visible.map(x=>`<article class="timeline-item"><span class="timeline-year">${x.date}</span><div><strong>${x.title}</strong><small>${x.phase}</small></div><span>${x.type==='movie'?'Movie':'Series'}</span></article>`).join('');
}
function renderPhases(){phaseGrid.innerHTML=phases.map((p,i)=>`<article class="phase-card"><span>0${i+1} · ${p.saga}</span><h3>${p.n}</h3><b>${p.years}</b><p>${p.desc}</p></article>`).join('')}
function renderLibrary(){
  const q=searchInput.value.trim().toLowerCase();
  const visible=libraryItems.filter(x=>(libraryFilter==='all'||x.type===libraryFilter)&&x.title.toLowerCase().includes(q));
  libraryGrid.innerHTML=visible.map(x=>`<article class="poster-card">${x.image?`<img src="${x.image}" alt="${x.title}">`:`<div class="poster-placeholder"><span>${x.phase}</span><strong>${x.title}</strong></div>`}<div class="poster-copy"><span>${x.year} · ${x.type==='movie'?'Movie':'Series'}</span><h3>${x.title}</h3><p>${x.phase}</p></div></article>`).join('') || '<p class="section-note">No matches.</p>';
}

document.querySelectorAll('[data-timeline-filter]').forEach(btn=>btn.onclick=()=>{timelineFilter=btn.dataset.timelineFilter;document.querySelectorAll('[data-timeline-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderTimeline()});
document.querySelectorAll('[data-library-filter]').forEach(btn=>btn.onclick=()=>{libraryFilter=btn.dataset.libraryFilter;document.querySelectorAll('[data-library-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderLibrary()});
searchInput.addEventListener('input',renderLibrary);
const menuButton=document.querySelector('#menuButton'),mainNav=document.querySelector('#mainNav');
menuButton.onclick=()=>mainNav.classList.toggle('open');
mainNav.querySelectorAll('a').forEach(a=>a.onclick=()=>mainNav.classList.remove('open'));

// Default the release-order section to Movies.
document.querySelectorAll('[data-timeline-filter]').forEach(b=>b.classList.toggle('active',b.dataset.timelineFilter==='movie'));
renderTimeline();renderPhases();renderLibrary();
