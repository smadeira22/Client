const teacherBtn = document.querySelector('#btn-1');
const studentBtn = document.querySelector('#btn-2');
const studentBtn1 = document.querySelector('#btn-3');


teacherBtn.onclick = function(e) {
    e.preventDefault();
  
    // Replace localhost and the folder name
    // based on your setup
    location.href = '/performance.html';
  }

studentBtn.onclick = function(e) {
  e.preventDefault();
  
  location.href = '/test.html';
}

studentBtn1.onclick = function(e) {
  e.preventDefault();
  
  location.href = '/test.html';
}

