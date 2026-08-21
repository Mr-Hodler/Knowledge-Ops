const D=__DATA__, $=s=>document.querySelector(s);
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('on',x===b));
 document.querySelectorAll('section').forEach(s=>s.classList.toggle('on',s.id===b.dataset.t));window.scrollTo(0,0);});
function goSkill(n){
 document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('on',x.dataset.t==='skills'));
 document.querySelectorAll('section').forEach(s=>s.classList.toggle('on',s.id==='skills'));
 showS(n); window.scrollTo(0,0);}
$('#mnav').innerHTML=D.miss.map(m=>`<button class="item" data-m="${m.id}">${m.t}</button>`).join('');
function showM(id){
 const m=D.miss.find(x=>x.id===id)||D.miss[0];
 document.querySelectorAll('#mnav .item').forEach(b=>b.classList.toggle('on',b.dataset.m===m.id));
 $('#mpanel').innerHTML=`<p class="pq">${m.t}</p><p class="pj">${m.j}</p>
 <div class="fld"><div class="h">The chain &mdash; and what each hands to the next</div><div class="chain">${
  m.chain.map(c=>`<div class="cr"><div class="s" data-go="${c.s.replace(/<[^>]*>/g,'').trim().split(/\s+/)[0]}">${c.s}</div><div class="h">${c.h}</div></div>`).join('')}</div></div>
 <div class="fld"><div class="h">What makes it work</div><div class="rules">${
  m.rules.map(r=>`<div class="r"><b>${r.h}</b><span>${r.b}</span></div>`).join('')}</div></div>
 ${m.ex.s.length?`<div class="fld"><div class="h">In practice</div><div class="ex"><div class="t">${m.ex.t}</div>${
  m.ex.s.map(s=>`<div class="step"><div class="w">${s[0]}</div><div class="c">${s[1]}</div></div>`).join('')}</div></div>`:''}
 <div class="fld"><div class="h">What breaks it</div>${m.br.map(b=>`<div class="br">${b}</div>`).join('')}</div>`;
 $('#mpanel').querySelectorAll('[data-go]').forEach(c=>{
  if(D.skills.find(k=>k.n===c.dataset.go)) c.onclick=()=>goSkill(c.dataset.go);});
 location.hash='m/'+m.id;}
document.querySelectorAll('#mnav .item').forEach(b=>b.onclick=()=>showM(b.dataset.m));
const GR=[...new Set(D.skills.map(s=>s.g))];
$('#snav').innerHTML=GR.map(g=>`<div class="grp">${g}</div>`+D.skills.filter(s=>s.g===g)
 .map(s=>`<button class="item mono" data-n="${s.n}">${s.n}</button>`).join('')).join('');
function showS(n){
 const s=D.skills.find(x=>x.n===n); if(!s)return;
 document.querySelectorAll('#snav .item').forEach(b=>b.classList.toggle('on',b.dataset.n===n));
 $('#spanel').innerHTML=`<div class="pname">${s.n}</div><p class="pq">${s.q}</p>
 <div class="fld"><div class="h">Reach for it when</div><ul>${s.reach.map(r=>`<li>${r}</li>`).join('')}</ul></div>
 <div class="fld"><div class="h">You get</div><ul>${s.gives.map(r=>`<li>${r}</li>`).join('')}</ul></div>
 <div class="fld"><div class="h">The rule that makes it different</div><div class="r"><span>${s.rule}</span></div></div>
 ${s.nf.length?`<div class="fld"><div class="h">Not here &mdash; go to</div>${s.nf.map(x=>
   `<div class="nfr"><span>${x.w}</span><span class="chip ${D.skills.find(k=>k.n===x.o)?'':'na'}" data-go="${x.o}">${x.o}</span></div>`).join('')}</div>`:''}
 ${s.feeds.length?`<div class="fld"><div class="h">Feeds</div><div class="chips">${s.feeds.map(f=>
   `<span class="chip ${D.skills.find(k=>k.n===f)?'':'na'}" data-go="${f}">${f}</span>`).join('')}</div></div>`:''}`;
 $('#spanel').querySelectorAll('[data-go]').forEach(c=>{
  if(D.skills.find(k=>k.n===c.dataset.go)) c.onclick=()=>showS(c.dataset.go);});
 location.hash='s/'+n;}
document.querySelectorAll('#snav .item').forEach(b=>b.onclick=()=>showS(b.dataset.n));
const GG=[...new Set(D.gloss.map(g=>g.g))];
$('#gt').innerHTML=GG.map(grp=>`<h3 class="gh">${grp}</h3><table>${
 D.gloss.filter(g=>g.g===grp).map(g=>
 `<tr><td><b>${g.t}</b>${g.e?`<br><span style="color:var(--faint);font-size:12px">${g.e}</span>`:''}</td><td>${g.d}</td><td class="own">${g.o}</td></tr>`).join('')}</table>`).join('');
if($('#own'))$('#own').innerHTML='<table><tr><th>Object</th><th>Owner</th><th>Holds</th><th>Never holds</th></tr>'+D.own.map(o=>
 `<tr><td><code>${o.id}</code></td><td class="own">${o.o}</td><td>${o.has}</td><td>${o.not}</td></tr>`).join('')+'</table>';

if($('#readers'))$('#readers').innerHTML=D.readers.map(r=>`<div class="rd"><div class="who">${r.w}</div><div class="q">${r.q}</div><span class="f">${r.f}</span></div>`).join('');
if($('#lean'))$('#lean').innerHTML=D.lean.map(l=>`<div class="ls"><span class="n"></span><span class="b">${l}</span></div>`).join('');
if($('#add'))$('#add').innerHTML='<table><tr><th>Add</th><th>When</th><th>The question it answers</th></tr>'+D.add.map(a=>
 `<tr><td>${a.a}</td><td>${a.w}</td><td><i>${a.q}</i></td></tr>`).join('')+'</table>';
if($('#envs'))$('#envs').innerHTML='<table><tr><th>Environment</th><th>Value axis</th><th>Delivery axis</th><th>How they join</th></tr>'+D.envs.map(e=>
 `<tr><td>${e.e}</td><td>${e.v}</td><td>${e.d}</td><td>${e.j}</td></tr>`).join('')+'</table>';
if($('#breaks'))$('#breaks').innerHTML=D.breaks.map(b=>`<div class="r stop"><b>${b.h}</b><span>${b.b}</span></div>`).join('');
const h=location.hash.slice(1);
if(h.startsWith('s/')){document.querySelector('nav button[data-t=skills]').click();showS(h.slice(2));showM(D.miss[0].id);}
else{showM(h.startsWith('m/')?h.slice(2):D.miss[0].id);showS(D.skills[0].n);}
