const FinishTest = document.querySelector('#FinishBtn');

FinishTest.addEventListener('click', function(e) {
    console.log('hello')
    e.preventDefault()
    location.href = '/leaving.html'
  })
