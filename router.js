(() => {
  const routes = new Set(['home','movies','tv','release-order','phases','trailers']);
  const drawer = document.querySelector('#mobileDrawer');
  const scrim = document.querySelector('#drawerScrim');
  const menuButton = document.querySelector('#menuButton');
  const closeButton = document.querySelector('#drawerClose');
  const moreButton = document.querySelector('#moreButton');

  function openDrawer(){
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
    scrim.hidden=false;
    menuButton.setAttribute('aria-expanded','true');
    document.body.classList.add('drawer-open');
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');
    scrim.hidden=true;
    menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('drawer-open');
  }
  function activeRoute(){
    const raw=location.hash.slice(1) || 'home';
    return routes.has(raw)?raw:'home';
  }
  function syncNav(route){
    document.querySelectorAll('[data-route-link]').forEach(link=>link.classList.toggle('active',link.dataset.routeLink===route));
    const title=route==='home'?'MCU Central':`${route.replace('-', ' ').replace(/\b\w/g,c=>c.toUpperCase())} · MCU Central`;
    document.title=title;
  }
  function route(){
    const current=activeRoute();
    syncNav(current);
    closeDrawer();
    window.MCUApp.renderRoute(current);
  }

  menuButton.addEventListener('click',openDrawer);
  closeButton.addEventListener('click',closeDrawer);
  moreButton.addEventListener('click',openDrawer);
  scrim.addEventListener('click',closeDrawer);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeDrawer));
  window.addEventListener('hashchange',route);
  route();

  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
  }
})();
