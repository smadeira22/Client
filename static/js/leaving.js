const BackMenu = document.querySelector('#BackMenu')

BackMenu.addEventListener('click', function(e) {
    console.log('hello')
    e.preventDefault()
    location.href = '/menu.html'
  })
