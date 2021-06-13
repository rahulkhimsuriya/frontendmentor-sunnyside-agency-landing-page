const headerContainer = document.getElementsByTagName('nav')[0]

window.addEventListener('scroll', function () {
  let scrollPosition = window.pageYOffset

  if (scrollPosition >= 30) {
    headerContainer.classList.add('d-none')
  } else {
    headerContainer.classList.remove('d-none')
  }
})
