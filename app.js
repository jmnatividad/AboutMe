const target=document.querySelector('#typed-name');
const name='Jeric Marx Natividad';
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(target){if(reduced){target.textContent=name}else{let i=0;const type=()=>{target.textContent=name.slice(0,i++);if(i<=name.length)setTimeout(type,75)};type()}}
const moreButton=document.querySelector('.more-button');
const moreProjects=document.querySelector('#more-projects');
if(moreButton&&moreProjects){moreButton.addEventListener('click',()=>{const open=moreProjects.classList.toggle('is-open');moreButton.classList.toggle('is-open',open);moreButton.setAttribute('aria-expanded',String(open));moreButton.innerHTML=open?'Show less work <span>↑</span>':'View more work <span>↓</span>'})}
const trackedSections=['about','work','certifications','approach','contact'].map(id=>document.getElementById(id)).filter(Boolean);
const trackerLinks=document.querySelectorAll('[data-track]');
if(trackedSections.length&&trackerLinks.length){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){trackerLinks.forEach(link=>link.classList.toggle('active',link.dataset.track===entry.target.id))}})},{rootMargin:'-35% 0px -55% 0px',threshold:0});trackedSections.forEach(section=>observer.observe(section))}
