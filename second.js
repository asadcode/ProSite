var same = document.querySelector('.same');
var attantion = document.querySelector('.attantion')

same.addEventListener('click', function(){
  same.classList.toggle('red')
  attantion.classList.toggle('show')
});