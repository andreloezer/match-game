var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready (function() {
  var $game = $('#game');
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

// MatchGame.generateCardValues();

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

  var colors = ['hsl(25, 85%, 65%)',
                'hsl(55, 85%, 65%)',
                'hsl(90, 85%, 65%)',
                'hsl(160, 85%, 65%)',
                'hsl(220, 85%, 65%)',
                'hsl(265, 85%, 65%)',
                'hsl(310, 85%, 65%)',
                'hsl(360, 85%, 65%)'];
  $game.empty();

  for (var i = 0; i < 16; i++) {
    var $newCard = $('<div class="card col-xs-3"></div>');
    $newCard.data('value', cardValues);
    $newCard.data('flipped', false);
    $newCard.data('color', colors[i - 1]);
    $newCard.data('cardValue', cardValues[i]);
    $game.append($newCard);
  }

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
