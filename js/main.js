var cards = [];
var card_1;
var card_2;

$(document).ready(function() {
    
    
    var cards = [
        {cardName: 'clubsA', cardPoints: 0, type: "ace"},
        {cardName: 'clubs2', cardPoints: 2, type: "two"},
        {cardName: 'clubs3', cardPoints: 3, type: "three"},
        {cardName: 'clubs4', cardPoints: 4, type: "four"},
        {cardName: 'clubs5', cardPoints: 5, type: "five"},
        {cardName: 'clubs6', cardPoints: 6, type: "six"},
        {cardName: 'clubs7', cardPoints: 7, type: "seven"},
        {cardName: 'clubs8', cardPoints: 8, type: "eight"},
        {cardName: 'clubs9', cardPoints: 9, type: "nine"},
        {cardName: 'clubs10', cardPoints: 10, type: "ten"},
        {cardName: 'clubsJ', cardPoints: 10, type: "ten"},
        {cardName: 'clubsQ', cardPoints: 10, type: "ten"},
        {cardName: 'clubsK', cardPoints: 10, type: "ten"},
        {cardName: 'diamondsA', cardPoints: 0, type: "ace"},
        {cardName: 'diamonds2', cardPoints: 2, type: "two"},
        {cardName: 'diamonds3', cardPoints: 3, type: "three"},
        {cardName: 'diamonds4', cardPoints: 4, type: "four"},
        {cardName: 'diamonds5', cardPoints: 5, type: "five"},
        {cardName: 'diamonds6', cardPoints: 6, type: "six"},
        {cardName: 'diamonds7', cardPoints: 7, type: "seven"},
        {cardName: 'diamonds8', cardPoints: 8, type: "eight"},
        {cardName: 'diamonds9', cardPoints: 9, type: "nine"},
        {cardName: 'diamonds10', cardPoints: 10, type: "ten"},
        {cardName: 'diamondsJ', cardPoints: 10, type: "ten"},
        {cardName: 'diamondsQ', cardPoints: 10, type: "ten"},
        {cardName: 'diamondsK', cardPoints: 10, type: "ten"},
        {cardName: 'heartsA', cardPoints: 0, type: "ace"},
        {cardName: 'hearts2', cardPoints: 2, type: "two"},
        {cardName: 'hearts3', cardPoints: 3, type: "three"},
        {cardName: 'hearts4', cardPoints: 4, type: "four"},
        {cardName: 'hearts5', cardPoints: 5, type: "five"},
        {cardName: 'hearts6', cardPoints: 6, type: "six"},
        {cardName: 'hearts7', cardPoints: 7, type: "seven"},
        {cardName: 'hearts8', cardPoints: 8, type: "eight"},
        {cardName: 'hearts9', cardPoints: 9, type: "nine"},
        {cardName: 'hearts10', cardPoints: 10, type: "ten"},
        {cardName: 'heartsJ', cardPoints: 10, type: "ten"},
        {cardName: 'heartsQ', cardPoints: 10, type: "ten"},
        {cardName: 'heartsK', cardPoints: 10, type: "ten"},
        {cardName: 'spadesA', cardPoints: 0, type: "ace"},
        {cardName: 'spades2', cardPoints: 2, type: "two"},
        {cardName: 'spades3', cardPoints: 3, type: "three"},
        {cardName: 'spades4', cardPoints: 4, type: "four"},
        {cardName: 'spades5', cardPoints: 5, type: "five"},
        {cardName: 'spades6', cardPoints: 6, type: "six"},
        {cardName: 'spades7', cardPoints: 7, type: "seven"},
        {cardName: 'spades8', cardPoints: 8, type: "eight"},
        {cardName: 'spades9', cardPoints: 9, type: "nine"},
        {cardName: 'spades10', cardPoints: 10, type: "ten"},
        {cardName: 'spadesJ', cardPoints: 10, type: "ten"},
        {cardName: 'spadesQ', cardPoints: 10, type: "ten"},
        {cardName: 'spadesK', cardPoints: 10, type: "ten"}
    ];       
    console.log(cards);
    deal_cards();
    
    
    
    //mesanje karata
    function shuffle() {
        var i, j, x;
        for (i = cards.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));        
            x = cards[i];
            cards[i] = cards[j];
            cards[j] = x;
        }
        console.log(cards);
    }

    //podela karata
    function deal_cards() {
        shuffle();

        var x = Math.floor(Math.random() * cards.length);
        var card_1 = cards.splice(x, 1);
        console.log(card_1);
        var y = Math.floor(Math.random() * cards.length);
        var card_2 = cards.splice(y, 1);
        console.log(card_2);
        var z = Math.floor(Math.random() * cards.length);
        var card_1_dealer = cards.splice(z, 1);
        console.log(card_1_dealer);
        var k = Math.floor(Math.random() * cards.length);
        var card_2_dealer = cards.splice(k, 1);
        console.log(card_2_dealer);

        var player_cards = {
           card_1_dealer: card_1_dealer,
           card_2_dealer: card_2_dealer,
           card_1: card_1,
           card_2: card_2
        };                
        console.log(player_cards);
        $.ajax({
            type: "POST",
            url: "php/insert_cards.php",
            data: player_cards,
            success: function(data) {
                console.log(data);
            }
        });           
}
    $('#dealer_div').load("php/load_dealer.php");
    setInterval(function() {        
        $('#player_div').load("php/init.php");                
    }, 1700);
    
    $('#player_div').load("php/init.php");               

    setTimeout(function(){
      $('.modal').modal('hide')
    }, 3000);

});


