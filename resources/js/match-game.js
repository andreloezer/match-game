var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready (function() {
  var $game = jQuery($('#game')[0]);
  MatchGame.renderCards(MatchGame.generateCardValues(), $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var sequentialOrdered = [];
  for (var i = 1; i <= 8; i++) {
    sequentialOrdered.push(i);
    var randomOrdered = [];
  }
  while (sequentialOrdered.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialOrdered.length);
    randomOrdered.push(sequentialOrdered[randomIndex]);
    sequentialOrdered.splice(randomIndex, 1);
  }
  return randomOrdered;
};

/*
Function taken from:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
MatchGame.shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.data('flippedCards', []);

  var colors = ['hsl(25, 85%, 65%)',
                'hsl(55, 85%, 65%)',
                'hsl(90, 85%, 65%)',
                'hsl(160, 85%, 65%)',
                'hsl(220, 85%, 65%)',
                'hsl(265, 85%, 65%)',
                'hsl(310, 85%, 65%)',
                'hsl(360, 85%, 65%)'];
  $game.empty();

  var something = [];
  for (var i = 0; i < 16; i++) {
    something.push(cardValues[Math.floor(i / 2)]);
  }

  MatchGame.shuffle(something);

  for (var i = 0; i < 16; i++) {
    var $card = jQuery($('<div class="card col-xs-3"></div>')[0]);

    $card.data('flipped', false);
    $card.data('color', colors[something[i] - 1]);
    $card.data('cardValue', something[i]);

    $card.click(function() {
      MatchGame.flipCard($(this), $game);
    });
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */
var cards = [];

MatchGame.flipCard = function($card, $game) {

  if (!$card.data('flipped')) {
    $card.css('background-color', $card.data('color'));
    $card.text($card.data('cardValue'));
    $card.data('flipped', true);
    var flippedCards = $game.data('flippedCards');
    flippedCards.push($card);
    cards.push($card.data('cardValue'));
  } else {
    return;
  }
  if (flippedCards.length === 2) {

    if (flippedCards[0].data('cardValue') ===       flippedCards[1].data('cardValue')) {
      flippedCards[0].css('color', 'rgb(204, 204, 204)')
                     .css('background-color', 'rgb(153, 153, 153)');

      flippedCards[1].css('color', 'rgb(204, 204, 204)')
                     .css('background-color', 'rgb(153, 153, 153)');
    } else {
      window.setTimeout(function() {
        flippedCards[0].css('background-color', 'rgb(32, 64, 86)')
                       .text('')
                       .data('flipped', false);

        flippedCards[1].css('background-color', 'rgb(32, 64, 86)')
                       .text('')
                       .data('flipped', false);
      }, 500);
    }
    $game.data('flippedCards', []);
  }
};
