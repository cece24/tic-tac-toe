document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square div');
  var lastClassAdded = "nought";

  squares.forEach(function(square) {
    square.addEventListener('click', function() {
      this.classList.remove('empty');
      if (lastClassAdded === "nought") {
        this.classList.add('cross');
        lastClassAdded = "cross";
      } else {
        this.classList.add('nought');
        lastClassAdded = "nought";
      }
    })
  })
})
