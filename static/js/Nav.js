const takeTest = document.querySelector('#Test')

takeTest.addEventListener('click', function(e) {
    console.log('hello')
    e.preventDefault()
    location.href = '/test.html'
  })
