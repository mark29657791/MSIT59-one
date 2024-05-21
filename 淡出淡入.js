document.addEventListener("DOMContentLoaded",function(){
  var footer = document.getElementById('footer');
  var isVisible = false;

  function checkScroll() {
    if (!isVisible && window.scrollY > 100) { // Adjust this value as needed
      footer.classList.add('visible');
      isVisible = true;
    }
  }
  window.addEventListener('scroll', checkScroll);

})