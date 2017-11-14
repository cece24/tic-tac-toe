document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square div');
  var lastClassAdded = "nought";
  var winner = document.querySelector('.winner');
  var square11 = document.querySelector('.s1-1');
  var square12 = document.querySelector('.s1-2');
  var square13 = document.querySelector('.s1-3');
  var square21 = document.querySelector('.s2-1');
  var square22 = document.querySelector('.s2-2');
  var square23 = document.querySelector('.s2-3');
  var square31 = document.querySelector('.s3-1');
  var square32 = document.querySelector('.s3-2');
  var square33 = document.querySelector('.s3-3');

  var winningCombinations = [
    [square11, square12, square13],
    [square21, square22, square23],
    [square31, square32, square33],
    [square11, square21, square31],
    [square12, square22, square32],
    [square13, square23, square33],
    [square11, square22, square33],
    [square13, square22, square31]
  ]

  function threeInRow(element) {
    return element === lastClassAdded;
  }

  function checkWinner() {
    winningCombinations.forEach(function(combination) {
      var combinationClasses = [];

      combination.forEach(function(square) {
        combinationClasses.push(square.classList[1]);
      })

      if (combinationClasses.every(threeInRow)) {
        showWinner(combination);
      }
    })
  }

  function showWinner(winningSquares) {
    winningSquares.forEach(function(square) {
      square.parentElement.classList.add('winning-square');
    })

    if (lastClassAdded === "nought") {
      winner.innerHTML = "<h2>The winner is noughts!</h2>";
    } else {
      winner.innerHTML = "<h2>The winner is crosses!</h2>";
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
