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

let player_stand = 0;
let dealer_stand = 0;
let play_check = 0;
let player_turn = 1;

let draw_pile = [...deck];

let player_hand = [];
let dealer_hand = [];

//start the game
start_button.addEventListener("click", startGame);
function startGame() {

    // reset the game
    resetGame();
    // draw starting cards
    drawDealerCard();
    drawPlayercard();
    drawDealerCard();
    drawPlayercard();
    // display starting hands
    displayInitialHands();
    displayDealerTotal(getVisibleTotal(dealer_hand));
    displayPlayerTotal(getTotal(player_hand));
    playerStartTurn();
}
//

//dealer turn
async function dealerTurn(){
    //make sure no one has won
    if (play_check == 0) {return}
    clearMessage();
    displayMessage("Dealer's Turn");
    await sleep(800);
    //dealer decides whether to hit or stand
    if (dealer_stand == 1) {
        dealerTurnStand();
    }else if (getTotal(dealer_hand) < 17){
        dealerTurnHit();
    }else if (getTotal(dealer_hand) < getVisibleTotal(player_hand)){
        dealerTurnHit();
    }    else{
        dealerTurnStand();
    }//end if
    await sleep(3000);
    if (checkBust(dealer_hand) == true) {
        await sleep(500);
        clearMessage();
        displayMessage("Dealer Busts");
        await sleep(200);
        showDealerHiddenCard();
        await sleep(200);
        displayDealerTotal(getTotal(dealer_hand));
        await sleep(100);
        displayMessage("You Win!");
        play_check = 0;
    }else if (check21(dealer_hand) == true) {
        dealer_blackjack = 1;
        dealer_stand = 1;
    }
    playerStartTurn();
}

//dealer options
async function dealerTurnHit() {
    clearMessage();
    await sleep(1000);
    displayMessage("Dealer Hits");
    await sleep(800);
    drawDealerCard();
    setDealerCard(dealer_hand[dealer_hand.length - 1]);
    await sleep(100);
    displayDealerTotal(getVisibleTotal(dealer_hand));
}
async function dealerTurnStand() {
    await sleep(1000);
    displayMessage("Dealer Stands");
    await sleep(1000);
    dealer_stand = 1;
    checkStand();
}
//

async function playerStartTurn(){
    //make sure no one has won
    if (play_check == 0) {return}
    clearMessage();
    await sleep(500);
    player_turn = 1;
    displayMessage("Your Turn");
    if (check21(player_hand) == true && player_blackjack == 0){
        player_turn = 0;
        displayMessage("You have Blackjack!");
        await sleep(1000);
        displayMessage("Automaticily Stands");
        player_blackjack = 1;
        await sleep(1000);
        player_stand = 1;
        playerEndTurn();
    } else if (player_blackjack == 1){
        displayMessage("Blackjack automatically stands");
    } else if (player_stand == 1){
        playerTurnStand();
    }
}

async function playerEndTurn() {
    //make sure no one has won
    if (play_check == 0) {return}
    await sleep(2000);
    if (checkBust(player_hand)==true){
        showPlayerHiddenCard();
        await sleep(200);
        displayMessage("You Bust!");

        play_check = 0;
    }else if (check21(player_hand)==true && player_blackjack == 0){
        displayMessage("You have Blackjack!");
        await sleep(1000);
        displayMessage("Automaticily Stands");
        player_blackjack = 1;
        await sleep(1000);
        player_stand = 1;
    }
    dealerTurn();


}

//player options
hit_button.addEventListener("click", playerTurnHit);
function playerTurnHit() {
    //make sure no one has won
    if (play_check == 0) {return}
    //make sure it is the playrs turn
    if (player_turn == 0) {return}
    player_turn = 0;
    drawPlayercard();
    setPlayerCard(player_hand[player_hand.length - 1]);
    displayPlayerTotal(getTotal(player_hand));
    playerEndTurn();
    
}

stand_button.addEventListener("click", playerTurnStand);
async function playerTurnStand() {
    //make sure no one has won
    if (play_check == 0) {return}
    //make sure it is the players turn
    if (player_turn == 0) {return}
    player_stand = 1;
    player_turn = 0;
    await sleep(100);
    displayMessage("You Stand!");
    checkStand();
    playerEndTurn();
}
//

//check if game is over
function checkStand(){
    if (player_stand == 1 && dealer_stand == 1) {
        play_check = 0;
        endGame();
    }
}
//run if both players have stood
async function endGame() {
    //chceck who won
        await sleep(500);    
    if (getTotal(player_hand) > getTotal(dealer_hand) ) {
        showDealerHiddenCard();
        await sleep(200);
        displayDealerTotal(getTotal(dealer_hand));
        clearMessage();
        await sleep(200);
        displayMessage("You Win!");
    }else if (getTotal(player_hand) < getTotal(dealer_hand)) {
        showDealerHiddenCard();
        await sleep(200);
        displayDealerTotal(getTotal(dealer_hand));
        clearMessage();
        await sleep(200);
        displayMessage("You Lose!");
    }else{
        showDealerHiddenCard();
        await sleep(200);
        displayDealerTotal(getTotal(dealer_hand));
        clearMessage();
        await sleep(200);
        displayMessage("It's a Tie!");
    }
}
//

function check21(hand) {
    if (getTotal(hand) == 21) {
        return true;
    }
}
function checkBust(hand) {
    if (getTotal(hand) > 21) {
        play_check = 0;
        return true;
    }
}

// message display
function displayMessageDelay(message, delay) {
        setTimeout(displayMessage, delay, message);
}
function displayMessage(message) {
    message_div.innerHTML += `<h3 class="status_message">${message}</h3>`;
}
function clearMessage(){
    message_div.innerHTML = "";
} 
//

// get hand total while accounting for aces
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
function getVisibleTotal(hand){
    let total = 0;
    let ace_count = 0;

    for (let i = 1; i < hand.length; i++) {
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
//

// get card html
function getCardHtml(card) {
    return `<img class="card card_visible" src="${card.img}" alt="${card.name}">`;  
}
function getHiddenPlayerCardHtml(card) {
    return`<img id="card_player_hidden" class="card"  src="${card.img}" alt="${card.name}">`
}
function getHiddenDealerCardHtml(card) {
    return `<img id="card_dealer_hidden" class="card"  src="images/card_back.png" alt="${card.name}">`
}
//

// display hand totals
function displayDealerTotal(visible_total){
    dealer_score_h3.innerHTML = "Visible Score: " + visible_total;
}
function displayPlayerTotal(total){
    player_score_h3.innerHTML = "Score: " + total;
}
//

function clearHands() {
    player_hand = [];
    dealer_hand = [];
    player_hand_div.innerHTML = "";
    dealer_hand_div.innerHTML = "";
}

function resetGame() {
    player_blackjack = 0;
    dealer_blackjack = 0;
    player_stand = 0;
    dealer_stand = 0;
    player_turn = 1;
    play_check = 1;
    clearMessage();
    clearHands();
    draw_pile = [...deck];
}

function displayInitialHands() {
    setPlayerHiddenCard(player_hand[0]);
    setDealerHiddenCard(dealer_hand[0]);
    setPlayerCard(player_hand[1]);
    setDealerCard(dealer_hand[1]);
}

//Set cards
function setPlayerHiddenCard(hidden_card) {
    player_hand_div.innerHTML += getHiddenPlayerCardHtml(hidden_card);
}
function setPlayerCard(card) {
    player_hand_div.innerHTML += getCardHtml(card);
}
function showPlayerHiddenCard(){
    hidden_card = document.getElementById("card_player_hidden");
    hidden_card.removeAttribute("card_player_hidden");
}
function setDealerHiddenCard(hidden_card) {
    dealer_hand_div.innerHTML += getHiddenDealerCardHtml(hidden_card);
}
function setDealerCard(card) {
    dealer_hand_div.innerHTML += getCardHtml(card);
}
function showDealerHiddenCard(){
    hidden_card = document.getElementById("card_dealer_hidden");
    hidden_card.src = dealer_hand[0].img;
}
//

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// menu button functionality
nav_box = document.getElementById("nav_box");
menu_button = document.getElementById("menu_button");

menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav_box.classList.toggle("hidden");
}
// end menu button functionality