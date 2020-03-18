const buttonFull = document.querySelector('.fullScreen')

buttonFull.addEventListener('click', function() {
  document.querySelector('ul').requestFullscreen()
})
