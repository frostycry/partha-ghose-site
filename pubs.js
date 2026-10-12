// Add entries to publications.json: {"title","authors","year","type":"Paper|Preprint|Essay|In progress","subject","link"}
fetch("publications.json").then(r=>r.json()).then(d=>{
const q=document.getElementById("q"),t=document.getElementById("t"),y=document.getElementById("y"),ul=document.getElementById("list"),none=document.getElementById("none");
[...new Set(d.map(p=>p.year))].sort().reverse().forEach(v=>y.add(new Option(v,v)));
function draw(){const s=q.value.toLowerCase();const r=d.filter(p=>(!t.value||p.type===t.value)&&(!y.value||String(p.year)===y.value)&&(!s||JSON.stringify(p).toLowerCase().includes(s)));
ul.innerHTML=r.map(p=>`<li>${p.link?`<a href="${p.link}">${p.title}</a>`:p.title}<br><small>${p.authors||""} · ${p.year||""} · ${p.type||""} ${p.subject?"· "+p.subject:""}</small></li>`).join("");
none.style.display=d.length?"none":"block"}
[q,t,y].forEach(e=>e.addEventListener("input",draw));draw()});