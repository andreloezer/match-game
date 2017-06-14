var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var sequentialOrdered = [];
  for (var i = 1; i <= 8; i++) {
    sequentialOrdered.push(i);
    var randomOrdered = [];
    // console.log('sequentialOrdered = ' + sequentialOrdered);
  }
  while (sequentialOrdered.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialOrdered.length);
    randomOrdered.push(sequentialOrdered[randomIndex]);
    sequentialOrdered.splice(randomIndex, 1);
    // console.log('randomOrdered = ' + randomOrdered);
  }

  // console.log('sequentialOrdered final= ' + sequentialOrdered);
  // console.log('randomOrdered final= ' + randomOrdered);
  return randomOrdered;
};

// MatchGame.generateCardValues();

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
