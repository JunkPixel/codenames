// RANDOM COLORS //

let colors = ['#006442', '#87D37C', '#26A65B', '#26C281', '#049372'];

// Generate a random color from color palette
function generateRandomColor() {
  return colors[Math.floor(Math.random() * (colors.length - 1))];
}

function changeColor() {
  let letters = document.querySelector('h1');
  let letter = letters.innerText;
  let split = letter.split('');
  let colorLetter = split.map(el => {
    let color = generateRandomColor();
    return `<span style='color: ${color}'>${el}</span>`;
  });
  let join = colorLetter.join('');
  // console.log(join);
  letters.innerHTML = join;
}

// SHOW/HIDE INSTRUCTIONS //

let $instructions = document.querySelector('.instructions');
let $rules = document.querySelector('.rules');

$instructions.addEventListener('click', function() {
  $rules.classList.toggle('hidden');
});

// RANDOM CARDS //

// card slots in game board
let $cardSlot = document.getElementsByClassName('word');

// array of initial symbols on cards
let initialCards = [];

for (let i = 0; i < $cardSlot.length; i++) {
  let word = document.querySelectorAll('.word')[i].innerText;

  initialCards.push(word);
}

// empty array for randomized cards in play
let currentCards = [];

// Canvas
const $canvas = document.querySelector('canvas');
const canvas = new Canvas($canvas);

// choose a random card

function generateRandomCard() {
  return words[Math.floor(Math.random() * (words.length - 1))];
}

function addRandomCards() {
  currentCards = [];

  while (currentCards.length < $cardSlot.length) {
    let card = generateRandomCard();

    // make sure the generated cards are unique
    if (currentCards.indexOf(card) === -1) {
      currentCards.push(card);
    }
  }

  for (let i = 0; i < $cardSlot.length; i++) {
    $cardSlot[i].innerText = currentCards[i].word;
  }
}

// CATEGORIES //

let $points = document.getElementById('point-amount');
let $categoryInput = document.querySelector('.category-input');
let $categoriesCorrect = document.getElementById('categories-correct');

let totalPoints = 0;

let currentCategories = [];

// GUESSING CATEGORIES INPUT //

$categoryInput.addEventListener('submit', guessCategory);

function guessCategory(e) {
  e.preventDefault();

  let newGuess = document.getElementById('guess').value.toLowerCase();

  let correctCategory = document.createElement('li');

  let categoryCounter = 0;

  if (currentCategories.indexOf(newGuess) == -1) {
    for (let i = 0; i < currentCards.length; i++) {
      if (currentCards[i].categories.indexOf(newGuess) != -1) {
        categoryCounter++;
        $cardSlot[i].style.backgroundColor = '#66b933';
        $cardSlot[i].style.color = 'black';
        setTimeout(function() {
          $cardSlot[i].style.backgroundColor = 'black';
          $cardSlot[i].style.color = '#66b933';
        }, 1000);
        $categoryInput.reset();
      }
    }

    if (categoryCounter > 1) {
      correctCategory.appendChild(
        document.createTextNode(newGuess + ' / ' + categoryCounter + ' points')
      );
      console.log('C', categoryCounter);
      totalPoints += categoryCounter;
      console.log('T', totalPoints);
      currentCategories.push(newGuess);

      $categoriesCorrect.appendChild(correctCategory);
      canvas.hidden = false;
      canvas.loop();

      $categoryInput.reset();
    }

    $points.innerText = totalPoints;
  }
}
