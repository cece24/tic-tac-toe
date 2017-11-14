document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square div');

  squares.forEach(function(square) {
    square.addEventListener('click', function() {
      this.classList.remove('empty');
      this.classList.add('nought');
    })
  })
})
