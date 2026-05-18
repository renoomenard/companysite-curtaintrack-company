
const input=document.querySelector('[data-search]');
if(input){
  const cards=[...document.querySelectorAll('[data-post-card]')];
  const count=document.querySelector('[data-count]');
  input.addEventListener('input',()=>{
    const q=input.value.toLowerCase().trim();
    let shown=0;
    cards.forEach(card=>{
      const hit=card.textContent.toLowerCase().includes(q);
      card.style.display=hit?'flex':'none';
      if(hit) shown++;
    });
    if(count) count.textContent=shown + ' posts shown';
  });
}
