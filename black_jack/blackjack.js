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

const player_hand_div = document.getElementById("player_hand");
const dealer_hand_div = document.getElementById("dealer_hand");
const player_score_h3 = document.getElementById("player_score");
const dealer_score_h3 = document.getElementById("dealer_score");
const message_div = document.getElementById("message_area");

start_button = document.getElementById("start_button");
hit_button = document.getElementById("hit_button");
stand_button = document.getElementById("stand_button");

let player_score = 0;
let dealer_score = 0;

let draw_pile = [...deck];

let player_hand = [];
let dealer_hand = [];

let win_status = 0;

start_button.addEventListener("click", startGame);


function startGame() {
    // reset the game
    resetGame();
    // draw srarting cards
    drawDealerCard();
    drawPlayercard();
    drawDealerCard();
    drawPlayercard();
    // display starting hands
    displayInitialHands();
    displayDealerTotal();
    displayPlayerTotal();
}


function playerTurnHit() {
    if (check21(player_hand) == true) {
        return
    }
    drawPlayercard();
    setPlayerCard(player_hand[player_hand.length - 1]);
    getTotal(player_hand);
}

function check21(hand) {
    if (getTotal(hand) == 21) {
        clearMessage();
        displayMessage("Blackjack! You win!");
        return true;
    }
}

function displayMessage(message) {
    message_div.innerHTML += message;
}

function clearMessage(){
    message_div.innerHTML = "";
} 

// get hand total whyle accounting for aces
function getTotal(hand) {
    let total = 0;
    let ace_count = 0;

    for (let i = 0; i < hand.length; i++) {
        total += hand[i].value;
        if (hand[i].name.includes("ace")) {
            ace_count++;
        }
    }

    while (total > 21 && ace_count > 0) {
        total -= 10;
        ace_count--;
    }

    return total;

}

function getCardHtml(card) {
    return `<img class="card card_visible" src="${card.img}" alt="${card.name}">`;  
}

function getHiddenPlayerCardHtml(card) {
    return`<img class="card card_player_hidden"  src="${card.img}" alt="${card.name}">`
}

function getHiddenDealerCardHtml(card) {
    return `<img class="card card_dealer_hidden"  src="images/card_back.png" alt="${card.name}">`
}

function displayDealerTotal(){
    total = getTotal(dealer_hand);
    total = total - dealer_hand[0].value;
    dealer_score_h3.innerHTML = "Visible Score: " + total;
}

function displayPlayerTotal(){
    total = getTotal(player_hand);
    player_score_h3.innerHTML = "Visible Score: " + total;
}

function clearHands() {
    player_hand_div.innerHTML = "";
    dealer_hand_div.innerHTML = "";
}

function resetGame() {
    clearHands();
    draw_pile = [...deck];
}

function displayInitialHands() {
    setPlayerHiddenCard(player_hand[0]);
    setDealerHiddenCard(dealer_hand[0]);
    setPlayerCard(player_hand[1]);
    setDealerCard(dealer_hand[1]);
}

function setPlayerHiddenCard(hidden_card) {
    player_hand_div.innerHTML += getHiddenPlayerCardHtml(hidden_card);
}

function setPlayerCard(card) {
    player_hand_div.innerHTML += getCardHtml(card);
}

function setDealerHiddenCard(hidden_card) {
    dealer_hand_div.innerHTML += getHiddenDealerCardHtml(hidden_card);
}

function setDealerCard(card) {
    dealer_hand_div.innerHTML += getCardHtml(card);
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



// menu button functionality
nav_box = document.getElementById("nav_box");
menu_button = document.getElementById("menu_button");

menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav_box.classList.toggle("hidden");
}
// end menu button functionality