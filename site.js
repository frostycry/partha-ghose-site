const b=document.querySelector('.burger'),n=document.querySelector('nav');
if(b)b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const list=document.getElementById('pubs');
if(list){fetch('publications.json').then(r=>r.json()).then(d=>{
const q=document.getElementById('q'),t=document.getElementById('t'),s=document.getElementById('s'),y=document.getElementById('y'),c=document.getElementById('count'),m=document.getElementById('more');let lim=40;
[...new Set(d.map(p=>p.year))].sort((a,b)=>b-a).forEach(v=>y.add(new Option(v,v)));
[...new Set(d.map(p=>p.type))].forEach(v=>t.add(new Option(v,v)));
[...new Set(d.map(p=>p.subject))].forEach(v=>s.add(new Option(v,v)));
const esc=x=>String(x||'').replace(/[&<>]/g,k=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[k]));
function draw(){const k=q.value.toLowerCase();
const r=d.filter(p=>(!t.value||p.type===t.value)&&(!s.value||p.subject===s.value)&&(!y.value||String(p.year)===y.value)&&(!k||(p.title+p.authors+p.venue+p.subject).toLowerCase().includes(k)));
c.textContent=r.length+' of '+d.length+' entries';
list.innerHTML=r.slice(0,lim).map(p=>`<li><span class="yr">${p.year||''}</span><div><span class="t">${p.link?`<a href="${esc(p.link)}">${esc(p.title)}</a>`:esc(p.title)}</span><span class="a">${esc(p.authors)}</span><br><span class="v"><span class="tag">${esc(p.type)}</span>${esc(p.venue)}</span></div></li>`).join('');
m.style.display=r.length>lim?'block':'none'}
[q,t,s,y].forEach(e=>e.addEventListener('input',()=>{lim=40;draw()}));m.addEventListener('click',()=>{lim+=60;draw()});draw()})}
