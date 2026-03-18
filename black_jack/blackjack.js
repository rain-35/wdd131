const deck = [
  { name: "ace_of_clubs", value: 11, img: "images/playing_cards/ace_of_clubs.png" },
  { name: "ace_of_diamonds", value: 11, img: "images/playing_cards/ace_of_diamonds.png" },
  { name: "ace_of_hearts", value: 11, img: "images/playing_cards/ace_of_hearts.png" },
  { name: "ace_of_spades", value: 11, img: "images/playing_cards/ace_of_spades.png" },

  { name: "two_of_clubs", value: 2, img: "images/playing_cards/two_of_clubs.png" },
  { name: "two_of_diamonds", value: 2, img: "images/playing_cards/two_of_diamonds.png" },
  { name: "two_of_hearts", value: 2, img: "images/playing_cards/two_of_hearts.png" },
  { name: "two_of_spades", value: 2, img: "images/playing_cards/two_of_spades.png" },

  { name: "three_of_clubs", value: 3, img: "images/playing_cards/three_of_clubs.png" },
  { name: "three_of_diamonds", value: 3, img: "images/playing_cards/three_of_diamonds.png" },
  { name: "three_of_hearts", value: 3, img: "images/playing_cards/three_of_hearts.png" },
  { name: "three_of_spades", value: 3, img: "images/playing_cards/three_of_spades.png" },

  { name: "four_of_clubs", value: 4, img: "images/playing_cards/four_of_clubs.png" },
  { name: "four_of_diamonds", value: 4, img: "images/playing_cards/four_of_diamonds.png" },
  { name: "four_of_hearts", value: 4, img: "images/playing_cards/four_of_hearts.png" },
  { name: "four_of_spades", value: 4, img: "images/playing_cards/four_of_spades.png" },

  { name: "five_of_clubs", value: 5, img: "images/playing_cards/five_of_clubs.png" },
  { name: "five_of_diamonds", value: 5, img: "images/playing_cards/five_of_diamonds.png" },
  { name: "five_of_hearts", value: 5, img: "images/playing_cards/five_of_hearts.png" },
  { name: "five_of_spades", value: 5, img: "images/playing_cards/five_of_spades.png" },

  { name: "six_of_clubs", value: 6, img: "images/playing_cards/six_of_clubs.png" },
  { name: "six_of_diamonds", value: 6, img: "images/playing_cards/six_of_diamonds.png" },
  { name: "six_of_hearts", value: 6, img: "images/playing_cards/six_of_hearts.png" },
  { name: "six_of_spades", value: 6, img: "images/playing_cards/six_of_spades.png" },

  { name: "seven_of_clubs", value: 7, img: "images/playing_cards/seven_of_clubs.png" },
  { name: "seven_of_diamonds", value: 7, img: "images/playing_cards/seven_of_diamonds.png" },
  { name: "seven_of_hearts", value: 7, img: "images/playing_cards/seven_of_hearts.png" },
  { name: "seven_of_spades", value: 7, img: "images/playing_cards/seven_of_spades.png" },

  { name: "eight_of_clubs", value: 8, img: "images/playing_cards/eight_of_clubs.png" },
  { name: "eight_of_diamonds", value: 8, img: "images/playing_cards/eight_of_diamonds.png" },
  { name: "eight_of_hearts", value: 8, img: "images/playing_cards/eight_of_hearts.png" },
  { name: "eight_of_spades", value: 8, img: "images/playing_cards/eight_of_spades.png" },

  { name: "nine_of_clubs", value: 9, img: "images/playing_cards/nine_of_clubs.png" },
  { name: "nine_of_diamonds", value: 9, img: "images/playing_cards/nine_of_diamonds.png" },
  { name: "nine_of_hearts", value: 9, img: "images/playing_cards/nine_of_hearts.png" },
  { name: "nine_of_spades", value: 9, img: "images/playing_cards/nine_of_spades.png" },

  { name: "ten_of_clubs", value: 10, img: "images/playing_cards/ten_of_clubs.png" },
  { name: "ten_of_diamonds", value: 10, img: "images/playing_cards/ten_of_diamonds.png" },
  { name: "ten_of_hearts", value: 10, img: "images/playing_cards/ten_of_hearts.png" },
  { name: "ten_of_spades", value: 10, img: "images/playing_cards/ten_of_spades.png" },

  { name: "jack_of_clubs", value: 10, img: "images/playing_cards/jack_of_clubs.png" },
  { name: "jack_of_diamonds", value: 10, img: "images/playing_cards/jack_of_diamonds.png" },
  { name: "jack_of_hearts", value: 10, img: "images/playing_cards/jack_of_hearts.png" },
  { name: "jack_of_spades", value: 10, img: "images/playing_cards/jack_of_spades.png" },

  { name: "queen_of_clubs", value: 10, img: "images/playing_cards/queen_of_clubs.png" },
  { name: "queen_of_diamonds", value: 10, img: "images/playing_cards/queen_of_diamonds.png" },
  { name: "queen_of_hearts", value: 10, img: "images/playing_cards/queen_of_hearts.png" },
  { name: "queen_of_spades", value: 10, img: "images/playing_cards/queen_of_spades.png" },

  { name: "king_of_clubs", value: 10, img: "images/playing_cards/king_of_clubs.png" },
  { name: "king_of_diamonds", value: 10, img: "images/playing_cards/king_of_diamonds.png" },
  { name: "king_of_hearts", value: 10, img: "images/playing_cards/king_of_hearts.png" },
  { name: "king_of_spades", value: 10, img: "images/playing_cards/king_of_spades.png" }
];

let draw_pile = [...deck];

let player_hand = [];
let dealer_hand = [];

function resetGame() {
    player_hand = [];
    dealer_hand = [];
    draw_pile = [...deck];
}

function setPlayerHiddenCard(hidden_card) {

}

function setPlayerCard(card) {

}

function setDealerHiddenCard(hidden_card) {

}

function setDealerCard(card) {

}

function getRandomCard() {
    let random_card_index = Math.floor(Math.random() * draw_pile.length);
    let random_card = draw_pile[random_card_index];
    draw_pile.splice(random_card_index, 1);
    return random_card;
}


function drawPlayercard() {
    let card = getRandomCard();
    player_hand.push(card);
}

function drawDealerCard() {
    let card = getRandomCard();
    dealer_hand.push(card);
}



nav_box = document.getElementById("nav_box");
menu_button = document.getElementById("menu_button");

menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav_box.classList.toggle("hidden");
}