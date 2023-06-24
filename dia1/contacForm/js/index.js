const openModal = document.querySelector('.modal_open')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')

openModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('modal--show')
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('modal--show')
})