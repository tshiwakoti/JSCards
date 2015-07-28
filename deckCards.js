var Card = function (rank, suit) {
  this.rank = rank;
  this.suit = suit;
};

var Deck = function () {
  this.reset();
  this.shuffle();
}

Deck.prototype.shuffle = function () {
  var len = this.cards.length;
  var index, temp;

  for (var i = 0; i < len; i++) {
    index = Math.floor(Math.random()*len);
    temp = this.cards[i];
    this.cards[i] = this.cards[index];
    this.cards[index] = temp;
  }
}

Deck.prototype.reset = function () {
  var ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
  var suits = ['d', 'c', 'h', 's'];
  this.cards = [];
  for (rank in ranks) {
    for (suit in suits) {
      var r = ranks[rank];
      var s = suits[suit];
      this.cards.push(new Card(r, s));
    }
  }
  this.shuffle();
}

Deck.prototype.deal = function () {
  return this.cards.pop();
}

var Player = function (name, deck) {
  this.name = name;
  this.hand = [];
  if (!deck) {
    this.deck = new Deck();
  }
  else {
    this.deck = deck;
  }
}

Player.prototype.draw = function () {
  this.hand.push(this.deck.deal());
}

// Player.prototype.discard = function () {
//   this.hand.pop();
// }
