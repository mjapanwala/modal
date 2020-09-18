const toggle =document.getElementById('toggle')
const close =document.getElementById('close')
const open =document.getElementById('open')
const modal =document.getElementById('modal')

function toggleHandler(e) {
  e.preventDefault();
  document.body.classList.toggle('show-nav')
}

open.addEventListener('click',()=> {
  modal.classList.add('show-modal')
})

toggle.addEventListener('click', toggleHandler)

close.addEventListener('click', ()=> {
  modal.classList.remove('show-modal')
})

window.addEventListener('click',e=>e.target==modal? modal.classList.remove('show-modal'): false)