const gElMain = document.querySelector('.main-content')

function toggleMenu() {
  document.body.classList.toggle('menu-open')
}

function showModal() {
  console.log(gElMain)
  document.body.classList.add('modal-open')
}

function closeModal() {
  document.body.classList.remove('modal-open')
}
