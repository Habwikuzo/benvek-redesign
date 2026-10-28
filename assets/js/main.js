// Mobile menu toggle
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
// Contact form: opens a pre-filled email (no backend needed). Also reads ?topic= from the URL.
const f=document.getElementById('enquiry');
if(f){const t=new URLSearchParams(location.search).get('topic');if(t){[...f.topic.options].forEach(o=>{if(o.text===t)o.selected=true})}
f.addEventListener('submit',e=>{e.preventDefault();const err=document.getElementById('err');
if(!f.name.value.trim()||!f.email.validity.valid||!f.msg.value.trim()){err.textContent='Please enter your name, a valid email and project details.';return}
err.textContent='';const body=`Name: ${f.name.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nSolution: ${f.topic.value}\n\n${f.msg.value}`;
location.href='mailto:hello@benvek.com?subject='+encodeURIComponent('Website enquiry: '+f.topic.value)+'&body='+encodeURIComponent(body)})}
