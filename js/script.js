const buttons=document.querySelectorAll('.problem');
const response=document.getElementById('response');
const title=document.getElementById('selected-problem');
const wa=document.getElementById('problem-wa');
buttons.forEach(button=>button.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const problem=button.dataset.problem;
  title.textContent=problem;
  wa.href='https://wa.me/917829043467?text='+encodeURIComponent('Hi Excellent Cool Service Point, I need appliance repair. My refrigerator problem is: '+problem);
  response.hidden=false;
  response.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
}));
