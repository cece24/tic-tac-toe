document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square div');
  var lastClassAdded = "nought";
  var square11 = document.querySelector('.s1-1');
  var square12 = document.querySelector('.s1-2');
  var square13 = document.querySelector('.s1-3');
  var square21 = document.querySelector('.s2-1');
  var square22 = document.querySelector('.s2-2');
  var square23 = document.querySelector('.s2-3');
  var square31 = document.querySelector('.s3-1');
  var square32 = document.querySelector('.s3-2');
  var square33 = document.querySelector('.s3-3');

  function threeInRow(element) {
    return element === lastClassAdded;
  }

  function checkWinner() {
    console.log('Checking for pattern');
    var row1Classes = [];
    var row1 = [square11, square12, square13];

    var row2Classes = [];
    var row2 = [square21, square22, square23];

    var row3Classes = [];
    var row3 = [square31, square32, square33];

    var col1Classes = [];
    var col1 = [square11, square21, square31];

    var col2Classes = [];
    var col2 = [square12, square22, square32];

    var col3Classes = [];
    var col3 = [square13, square23, square33];

    var diagonal1Classes = [];
    var diagonal1 = [square11, square22, square33];

    var diagonal2Classes = [];
    var diagonal2 = [square13, square22, square31];


    row1.forEach(function(square) {
      row1Classes.push(square.classList[1]);
    })

    row2.forEach(function(square) {
      row2Classes.push(square.classList[1]);
    })

    row3.forEach(function(square) {
      row3Classes.push(square.classList[1]);
    })

    col1.forEach(function(square) {
      col1Classes.push(square.classList[1]);
    })

    col2.forEach(function(square) {
      col2Classes.push(square.classList[1]);
    })

    col3.forEach(function(square) {
      col3Classes.push(square.classList[1]);
    })

    diagonal1.forEach(function(square) {
      diagonal1Classes.push(square.classList[1]);
    })

    diagonal2.forEach(function(square) {
      diagonal2Classes.push(square.classList[1]);
    })


    if (row1Classes.every(threeInRow)) {
      console.log('Winner First Row!');
    } else if (row2Classes.every(threeInRow)) {
      console.log('Winner Second Row!');
    } else if (row3Classes.every(threeInRow)) {
      console.log('Winner Third Row!');
    } else if (col1Classes.every(threeInRow)) {
      console.log('Winner First Column!');
    } else if (col2Classes.every(threeInRow)) {
      console.log('Winner Second Column!');
    } else if (col3Classes.every(threeInRow)) {
      console.log('Winner Third Column!');
    } else if (diagonal1Classes.every(threeInRow)) {
      console.log('Winner Diagonal 1!');
    } else if (diagonal2Classes.every(threeInRow)) {
      console.log('Winner Diagonal 2!');
    }
  }

  squares.forEach(function(square) {
    square.addEventListener('click', function() {
      this.classList.remove('empty');
      if (lastClassAdded === "nought") {
        this.classList.add('cross');
        lastClassAdded = "cross";
        checkWinner();
      } else {
        this.classList.add('nought');
        lastClassAdded = "nought";
        checkWinner();
      }
    })
  })
})
