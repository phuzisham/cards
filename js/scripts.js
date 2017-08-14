$(document).ready(function(){
  var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      $("#output ul").append("<li>"+card+' of '+suit+"</li>");
    });
  });
});
