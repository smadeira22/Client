const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', function (e) {
    console.log('hello')
    e.preventDefault()
    location.href = '/menu.html'
})

btn2.addEventListener('click', function (e) {
    console.log('hello')
    e.preventDefault()
    location.href = '/performance.html'
})


