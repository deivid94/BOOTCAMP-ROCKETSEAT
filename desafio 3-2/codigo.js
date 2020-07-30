

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


for (let card of cards){
  card.addEventListener("click",function(){
    const videoID = card.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoID}`
    
  })
}

document.querySelector('.close-modal').addEventListener("click",function(){
  modalOverlay.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener("click",function(){
  modalOverlay.querySelector('.modal').classList.toggle("maximize")
})

