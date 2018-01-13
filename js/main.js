
var app = angular.module("myApp", ['ngAnimate']);
app.controller("ctrl", function ($scope) {
    var vm = this;
    vm.players = 1;
    vm.homepage = false;
    vm.gameplay = false;
    vm.playerArr = [];
    vm.prestart = false;
    vm.readOnly = false;
    vm.dealButton = false;
    vm.totalCardPointsDealer = 0;
    vm.turns = false;
    vm.turnsMsg = "";
    vm.controlButtons1 = false;
    vm.controlButtons2 = false;
    vm.controlButtons3 = false;
    vm.controlButtons4 = false;
    vm.controlButtons5 = false;
    vm.showCards = false;
    vm.dealerCards = false;
    vm.dealerCardPic22 = "";
    vm.dealerCardPic2 = "";
    vm.showCardDealer = false;
    vm.showDealerPoints = false;
    vm.dealer = [
        {blackjack: false, srcUserPicture: "images/user_picture/dealer.png"}
    ];
    vm.cards = [
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

    vm.right = function () {
        if (vm.players < 2) {
            vm.players++;
        }
    };

    vm.left = function () {
        if (vm.players <= 3) {
            if (vm.players !== 1) {
                vm.players--;
            }
        }
    };

    vm.start = function () {
        vm.prestart = false;
        vm.gameplay = true;
        vm.dealButton = true;
        for (i in vm.playerArr) {
            if (vm.playerArr[i].gender == "male") {
                vm.playerArr[i].srcUserPicture = "images/user_picture/male2.png";
            } else {
                vm.playerArr[i].srcUserPicture = "images/user_picture/female.png";
            }
        }
        console.log("Stampanje liste igraca nakon starta: ", vm.playerArr);
    };

    vm.play = function () {
        vm.homepage = true;
        vm.prestart = true;
        vm.fillPlayerArr();
    };

    //pravljenje playerArr niza sa objektima igraca
    vm.fillPlayerArr = function () {
        for (var i = 1; i <= vm.players; i++) {
            var red = {
                name: "",
                totalCash: null,
                betAmount: null,
                cards: [],
                totalCardPoints: 0,
                blackjack: false,
                gender: "",
                srcUserPicture: "",
                lost: false,
                split: false,
                splitHand1Lost: false,
                splitHand2Lost: false,
                splitHand1Blackjack: false,
                splitHand2Blackjack: false,
                showCards: false,
                showCardsSplit: false,
                next: false,
                cardPic1: "",
                cardPic2: "",
                cardPic3: "",
                showCard3: false,
                cardPic4: "",
                showCard4: false,
                cardPic5: "",
                showCard5: false,
                cardPic6: "",
                showCard6: false,
                cardPic1Split1: "",
                cardPic2Split1: "",
                showCard2Split1: false,
                cardPic3Split1: "",
                showCard3Spit1: false,
                cardPic4Split1: "",
                showCard4Spit1: false,
                cardPic1Split2: "",
                cardPic2Split2: "",
                showCard2Split2: false,
                cardPic3Split2: "",
                showCard3Split2: false,
                cardPic4Split2: "",
                showCard4Split2: false
            };
            vm.playerArr.push(red);
        }
    };

    //mesanje karata
    vm.shuffle = function () {
        var i, j, x;
        for (i = vm.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = vm.cards[i];
            vm.cards[i] = vm.cards[j];
            vm.cards[j] = x;
        }
    };

    vm.deal = function () {
        vm.notEnoughMoney = false;
        vm.dealerCardPic3 = "";
        vm.dealerCardPic4 = "";
        vm.dealerCardPic5 = "";
        vm.showCard3Dealer = false;
        vm.showCard4Dealer = false;
        vm.showCard5Dealer = false;
        vm.cardNamesDealer = [];
        vm.showCardsArrDealer = [];
        vm.showCardsDealer = false;
        vm.totalCardPointsDealer = 0;
        vm.showDealerPoints = false;
        for (var i in vm.playerArr) {
            vm.playerArr[i].totalCardPoints = 0;
            vm.playerArr[i].showCard3 = false;
            vm.playerArr[i].showCard4 = false;
            vm.playerArr[i].showCard5 = false;
            vm.playerArr[i].showCard6 = false;
            vm.playerArr[i].showCards = false;
            vm.playerArr[i].showCardsSplit = false;
            vm.playerArr[i].showCard2Split1 = false;
            vm.playerArr[i].showCard2Split2 = false;
            vm.playerArr[i].showCard3Split1 = false;
            vm.playerArr[i].showCard3Split2 = false;
            vm.playerArr[i].showCard4Split1 = false;
            vm.playerArr[i].showCard4Split2 = false;
        }
        if (vm.playerArr.length == 2) {
            vm.totalCash1 = vm.playerArr[0].totalCash;
            vm.totalCash2 = vm.playerArr[1].totalCash;
        } else {
            vm.totalCash1 = vm.playerArr[0].totalCash;
        }
        for (var i in vm.playerArr) {
            //obracun novca
            console.log(vm.playerArr[i].betAmount);
            if (parseFloat(vm.playerArr[i].betAmount) <= vm.playerArr[i].totalCash) {
                vm.playerArr[i].totalCash -= parseFloat(vm.playerArr[i].betAmount);
                console.log("Preostali novac igracu: " + vm.playerArr[i].name + " je " + vm.playerArr[i].totalCash);
            } else {
                alert(vm.playerArr[i].name + " nema dovoljno novca");
                vm.notEnoughMoney = true;
            }
        }

        if (vm.notEnoughMoney == true) {
            if (vm.playerArr.length == 2) {
                vm.playerArr[0].totalCash = vm.totalCash1;
                vm.playerArr[1].totalCash = vm.totalCash2;
            } else {
                vm.playerArr[0].totalCash = vm.totalCash1;
            }
            return;
        }
        vm.readOnly = true;

        //podela karata igracima
        for (var i in vm.playerArr) {
            vm.shuffle();
            console.log("Stanje karata nakon mesanja: ", vm.cards);
            var x = Math.floor(Math.random() * vm.cards.length);
            var card1 = vm.cards.splice(x, 1);
            vm.playerArr[i].cards.push(card1[0]);
            vm.playerArr[i].cardPic1 = "images/cards/" + card1[0].cardName + ".png";
            var y = Math.floor(Math.random() * vm.cards.length);
            var card2 = vm.cards.splice(y, 1);
            vm.playerArr[i].cards.push(card2[0]);
            vm.playerArr[i].cardPic2 = "images/cards/" + card2[0].cardName + ".png";
            console.log("Karte od igraca: ", vm.playerArr[i].cards);

            //proveravanje da li neko od igraca ima blackjack
            if (vm.playerArr[i].cards[0].cardName == "clubsA" || vm.playerArr[i].cards[0].cardName == "diamondsA" || vm.playerArr[i].cards[0].cardName == "heartsA" || vm.playerArr[i].cards[0].cardName == "spadesA") {
                console.log("Usao je u if nakon sto je otkrio da je prva karta AS");
                if (vm.playerArr[i].cards[1].cardPoints == 10) {
                    vm.playerArr[i].blackjack = true;
                    vm.playerArr[i].srcUserPicture = "images/blackjack/2.png";
                    vm.playerArr[i].cards[0].cardPoints = 11;
                    console.log("Igrac " + vm.playerArr[i].name + " je dobio BLACKJACK!!!");
                } else {
                    vm.playerArr[i].cards[0].cardPoints = 11;
                }
            }

            if (vm.playerArr[i].cards[1].cardName == "clubsA" || vm.playerArr[i].cards[1].cardName == "diamondsA" || vm.playerArr[i].cards[1].cardName == "heartsA" || vm.playerArr[i].cards[1].cardName == "spadesA") {
                console.log("Usao je u if nakon sto je otkrio da je druga karta AS");
                if (vm.playerArr[i].cards[0].cardPoints == 10) {
                    vm.playerArr[i].blackjack = true;
                    vm.playerArr[i].srcUserPicture = "images/blackjack/2.png";
                    vm.playerArr[i].cards[1].cardPoints = 11;
                    console.log("Igrac " + vm.playerArr[i].name + " je dobio BLACKJACK!!!");
                } else {
                    vm.playerArr[i].cards[1].cardPoints = 11;
                }
            }
            vm.playerArr[i].showCards = true;
        }

        //podela karata dileru
        var z = Math.floor(Math.random() * vm.cards.length);
        var card1 = vm.cards.splice(z, 1);
        vm.dealer.push(card1[0]);
        vm.dealerCardPic1 = "images/cards/" + vm.dealer[1].cardName + ".png";
        var k = Math.floor(Math.random() * vm.cards.length);
        var card2 = vm.cards.splice(k, 1);
        vm.dealer.push(card2[0]);
        vm.dealerCardPic22 = "images/cards/" + vm.dealer[2].cardName + ".png";
        vm.dealerCardPic2 = "images/back_card/3.png";

        //provera da li diler ima blackjack
        if (vm.dealer[1].cardName == "clubsA" || vm.dealer[1].cardName == "diamondsA" || vm.dealer[1].cardName == "heartsA" || vm.dealer[1].cardName == "spadesA") {
            console.log("Usao je u if nakon sto je otkrio da je dealer-ova prva karta AS");
            if (vm.dealer[2].cardPoints == 10) {
                vm.dealer[0].blackjack = true;
                vm.dealerBlackjackModal.style.display = "block";        
                vm.dealer[0].srcUserPicture = "images/blackjack/2.png";
                console.log("Dealer je dobio BLACKJACK!!!");
                vm.dealerCardPic2 = "images/cards/" + vm.dealer[2].cardName + ".png";
                for (var i = 1; i < vm.dealer.length; i++) {
                    vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                }
                vm.sleep(1000);
                vm.showDealerPoints = true;
                for (var i in vm.playerArr) {
                    if (vm.playerArr[i].blackjack == true) {
                        console.log("Dealer i igrac " + vm.playerArr[i].name + " imaju BLACKJACK!!!");
                        vm.playerArr[i].totalCash += parseFloat(vm.playerArr[i].betAmount);
                        vm.playerArr[i].betAmount = 0;
                    } else {
                        vm.playerArr[i].betAmount = 0;
                    }
                }
            } else {
                vm.dealer[1].cardPoints = 11;
            }
        }

        if (vm.dealer[2].cardName == "clubsA" || vm.dealer[2].cardName == "diamondsA" || vm.dealer[2].cardName == "heartsA" || vm.dealer[2].cardName == "spadesA") {
            console.log("Usao je u if nakon sto je otkrio da je dealer-ova druga karta AS");
            if (vm.dealer[1].cardPoints == 10) {
                vm.dealer[0].blackjack = true;
                vm.dealerBlackjackModal.style.display = "block";        
                vm.dealer[0].srcUserPicture = "images/blackjack/2.png";
                console.log("Dealer je dobio BLACKJACK!!!");
                vm.dealerCardPic2 = "images/cards/" + vm.dealer[2].cardName + ".png";
                for (var i = 1; i < vm.dealer.length; i++) {
                    vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                }
                vm.sleep(1000);
                vm.showDealerPoints = true;
                for (var i in vm.playerArr) {
                    if (vm.playerArr[i].blackjack == true) {
                        console.log("Dealer i igrac " + vm.playerArr[i].name + " imaju BLACKJACK!!!");
                        vm.playerArr[i].totalCash += parseFloat(vm.playerArr[i].betAmount);
                        vm.playerArr[i].betAmount = 0;
                    } else {
                        vm.playerArr[i].betAmount = 0;
                    }
                }
            } else {
                vm.dealer[2].cardPoints = 11;
            }
        }

        //stampanje u konzolu
        console.log("Lista igraca nakon dodele karata: ", vm.playerArr);
        console.log("Dealer-ove karte: ", vm.dealer);

        for (var i in vm.playerArr) {
            for (var j in vm.playerArr[i].cards) {
                vm.playerArr[i].totalCardPoints += vm.playerArr[i].cards[j].cardPoints;
            }
        }
        for (var i = 1; i < vm.dealer.length; i++) {
            vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
        }

        vm.showCardsDealer = true;
        vm.dealButton = false;
        vm.controlButtons1 = true;
        vm.turnsMsg = vm.playerArr[0].name + "'s turn to play";
        vm.turns = true;
        if (vm.dealer[0].blackjack == true) {
            vm.dealerCardPic2 = vm.dealerCardPic22;
            vm.showDealerPoints = true;
            vm.dealAgain();
        }
    };

    vm.stand1Check = function () {
        if (vm.playerArr[0].split == false) {
            console.log("stand1Check je pozvana");
            vm.dealerCardPic2 = vm.dealerCardPic22;
            vm.showDealerPoints = true;
            vm.totalCardPointsDealer = 0;
            vm.playerArr[0].totalCardPoints = 0;

            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }

            if ((vm.playerArr[0].cards[0].cardName == "clubsA" || vm.playerArr[0].cards[0].cardName == "diamondsA" || vm.playerArr[0].cards[0].cardName == "heartsA" || vm.playerArr[0].cards[0].cardName == "spadesA") && (vm.playerArr[0].cards[1].cardName == "clubsA" || vm.playerArr[0].cards[1].cardName == "diamondsA" || vm.playerArr[0].cards[1].cardName == "heartsA" || vm.playerArr[0].cards[1].cardName == "spadesA")) {
                console.log("Imaju dva asa");
                vm.playerArr[0].cards[0].cardPoints = 11;
                vm.playerArr[0].cards[1].cardPoints = 1;
            }

            for (var i in vm.playerArr[0].cards) {
                vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
            }
            console.log("Ukupni poeni dealer 1: " + vm.totalCardPointsDealer);
            console.log("Ukupni poeni igraca 1: " + vm.playerArr[0].totalCardPoints);

            if (vm.totalCardPointsDealer <= vm.playerArr[0].totalCardPoints) {
                vm.dealerPlays();
                vm.sleep(1000);
            }

            if (vm.totalCardPointsDealer <= 21) {
                if (vm.playerArr[0].totalCardPoints > vm.totalCardPointsDealer) {
                    console.log("Pobedio je igrac 1");
                    vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
                } else if (vm.playerArr[0].totalCardPoints < vm.totalCardPointsDealer) {
                    console.log("Pobedio je dealer 1");
                    vm.playerArr[0].betAmount = 0;
//                    if (vm.playerArr[0].totalCash == 0) {
//                        vm.playerArr.splice(0, 1);
//                    }
                } else if (vm.playerArr[0].totalCardPoints == vm.totalCardPointsDealer) {
                    console.log("Nereseno 1");
                    vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount);
                }
            } else {
                vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
            }
        } else {
            vm.dealerCardPic2 = vm.dealerCardPic22;
            vm.showDealerPoints = true;
            console.log("Pozvana je stand1Check ali ima split");
            console.log("Igrac 1, hand 1 je izgubio: ", vm.playerArr[0].splitHand1Lost);
            if (vm.playerArr[0].splitHand1Lost == false) {
                vm.totalCardPointsDealer = 0;
                for (var i = 1; i < vm.dealer.length; i++) {
                    vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                }
                vm.totalCardPointsHand11 = 0;
                for (var i in vm.player1Hand1) {
                    vm.totalCardPointsHand11 += vm.player1Hand1[i].cardPoints;
                }

                if (vm.totalCardPointsDealer <= vm.totalCardPointsHand11) {
                    vm.dealerPlays();
                    vm.sleep(1000);
                }
                console.log("Poeni player 1 hand 1", vm.totalCardPointsHand11);
                console.log("Poeni dealer hand 1", vm.totalCardPointsDealer);

                if (vm.totalCardPointsDealer <= 21) {
                    if (vm.totalCardPointsHand11 > vm.totalCardPointsDealer) {
                        console.log("Pobedio je igrac 1, Hand 1");
                        vm.playerArr[0].totalCash += parseFloat(vm.betAmount11) + (vm.betAmount11 * 1.5);
                    } else if (vm.totalCardPointsHand11 < vm.totalCardPointsDealer) {
                        console.log("Pobedio je dealer 1");
                        vm.playerArr[0].betAmount = 0;
                    } else if (vm.totalCardPointsHand11 == vm.totalCardPointsDealer) {
                        console.log("Nereseno 1, Hand 1");
                        vm.playerArr[0].totalCash += parseFloat(vm.betAmount11);
                    }
                } else {
                    vm.playerArr[0].totalCash += parseFloat(vm.betAmount11) + (vm.betAmount11 * 1.5);
                }
            }
            console.log("Igrac 1, hand 2 je izgubio: ", vm.playerArr[0].splitHand2Lost);
            if (vm.playerArr[0].splitHand2Lost == false) {
                vm.totalCardPointsDealer = 0;
                for (var i = 1; i < vm.dealer.length; i++) {
                    vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                }
                vm.totalCardPointsHand12 = 0;
                for (var i in vm.player1Hand2) {
                    vm.totalCardPointsHand12 += vm.player1Hand2[i].cardPoints;
                }
                console.log("Poeni player 1 hand 2", vm.totalCardPointsHand12);
                console.log("Poeni dealer hand 2", vm.totalCardPointsDealer);

                if (vm.totalCardPointsDealer <= vm.totalCardPointsHand12) {
                    vm.dealerPlays();
                }

                if (vm.totalCardPointsDealer <= 21) {
                    if (vm.totalCardPointsHand12 > vm.totalCardPointsDealer) {
                        console.log("Pobedio je igrac 1, Hand 2");
                        vm.playerArr[0].totalCash += parseFloat(vm.betAmount12) + (vm.betAmount12 * 1.5);
                    } else if (vm.totalCardPointsHand12 < vm.totalCardPointsDealer) {
                        console.log("Pobedio je dealer 1");
                        vm.playerArr[0].betAmount = 0;
                    } else if (vm.totalCardPointsHand12 == vm.totalCardPointsDealer) {
                        console.log("Nereseno 1, Hand 2");
                        vm.playerArr[0].totalCash += parseFloat(vm.betAmount12);
                    }
                } else {
                    vm.playerArr[0].totalCash += parseFloat(vm.betAmount12) + (vm.betAmount12 * 1.5);
                }
            }
//            if (vm.playerArr[0].totalCash == 0) {
//                vm.playerArr.splice(0, 1);
//            }            
        }
    };

    vm.stand1 = function () {
        console.log("Usao je u stand 1");
        console.log(vm.playerArr[1]);
        if (vm.playerArr[0].split == false) {
            if (vm.playerArr[1] != undefined) {
                console.log("Ima sledeci igrac posle 1");
                vm.controlButtons1 = false;
                vm.controlButtons2 = true;
                vm.dealButton = false;
                vm.turns = true;
                vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
            } else {
                console.log("Nema vise igraca u stand 1");
                vm.dealerCardPic2 = vm.dealerCardPic22;
                vm.showDealerPoints = true;
                vm.totalCardPointsDealer = 0;
                vm.playerArr[0].totalCardPoints = 0;

                for (var i = 1; i < vm.dealer.length; i++) {
                    vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                }

                if ((vm.playerArr[0].cards[0].cardName == "clubsA" || vm.playerArr[0].cards[0].cardName == "diamondsA" || vm.playerArr[0].cards[0].cardName == "heartsA" || vm.playerArr[0].cards[0].cardName == "spadesA") && (vm.playerArr[0].cards[1].cardName == "clubsA" || vm.playerArr[0].cards[1].cardName == "diamondsA" || vm.playerArr[0].cards[1].cardName == "heartsA" || vm.playerArr[0].cards[1].cardName == "spadesA")) {
                    console.log("Imaju dva asa");
                    vm.playerArr[0].cards[0].cardPoints = 11;
                    vm.playerArr[0].cards[1].cardPoints = 1;
                }

                for (var i in vm.playerArr[0].cards) {
                    vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
                }
                console.log("Ukupni poeni dealer 1: " + vm.totalCardPointsDealer);
                console.log("Ukupni poeni igraca 1: " + vm.playerArr[0].totalCardPoints);

                if (vm.totalCardPointsDealer <= vm.playerArr[0].totalCardPoints) {
                    vm.dealerPlays();
//                    vm.sleep(1000);
                }

                if (vm.totalCardPointsDealer <= 21) {
                    if (vm.playerArr[0].totalCardPoints > vm.totalCardPointsDealer) {
                        console.log("Pobedio je igrac 1");
                        vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
                    } else if (vm.playerArr[0].totalCardPoints < vm.totalCardPointsDealer) {
                        console.log("Pobedio je dealer 1");
                        vm.playerArr[0].betAmount = 0;
//                        if (vm.playerArr[0].totalCash == 0) {
//                            vm.playerArr.splice(0, 1);
//                        }
                    } else if (vm.playerArr[0].totalCardPoints == vm.totalCardPointsDealer) {
                        console.log("Nereseno 1");
                        vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount);
                    }
                } else {
                    vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
                }
                vm.dealAgain();
            }
        } else {
            console.log("Usao je u stand1 split");
            if (vm.playerArr[0].splitHand1Lost == false && vm.playerArr[0].next == false) {
                vm.turnsMsg = vm.playerArr[0].name + "'s turn to play. Hand 2";
                vm.playerArr[0].next = true;
            } else {
                console.log("Igrac 1, hand 1 je izgubio: ", vm.playerArr[0].splitHand1Lost);
                vm.dealerCardPic2 = vm.dealerCardPic22;
                vm.showDealerPoints = true;
                if (vm.playerArr[0].splitHand1Lost == false) {
                    if (vm.playerArr[1] != undefined) {
                        console.log("Ima sledeci igrac posle 1");
                        vm.controlButtons1 = false;
                        vm.controlButtons2 = true;
                        vm.dealButton = false;
                        vm.turns = true;
                        vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                    } else {
                        vm.totalCardPointsDealer = 0;
                        for (var i = 1; i < vm.dealer.length; i++) {
                            vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                        }
                        vm.totalCardPointsHand11 = 0;
                        for (var i in vm.player1Hand1) {
                            vm.totalCardPointsHand11 += vm.player1Hand1[i].cardPoints;
                        }
                        console.log("Poeni player 1 hand 1", vm.totalCardPointsHand11);
                        console.log("Poeni dealer hand 1", vm.totalCardPointsDealer);

                        if (vm.totalCardPointsDealer <= vm.totalCardPointsHand11) {
                            vm.dealerPlays();
                            //                            vm.sleep(1000);
                        }

                        if (vm.totalCardPointsDealer <= 21) {
                            if (vm.totalCardPointsHand11 > vm.totalCardPointsDealer) {
                                console.log("Pobedio je igrac 1, Hand 1");
                                vm.playerArr[0].totalCash += parseFloat(vm.betAmount11) + (vm.betAmount11 * 1.5);
                            } else if (vm.totalCardPointsHand11 < vm.totalCardPointsDealer) {
                                console.log("Pobedio je dealer 1");
                                vm.playerArr[0].betAmount = 0;
                            } else if (vm.totalCardPointsHand11 == vm.totalCardPointsDealer) {
                                console.log("Nereseno 1, Hand 1");
                                vm.playerArr[0].totalCash += parseFloat(vm.betAmount11);
                            }
                        } else {
                            console.log("Pobedio je igrac 1, Hand 1");
                            vm.playerArr[0].totalCash += parseFloat(vm.betAmount11) + (vm.betAmount11 * 1.5);
                        }
                    }
                    console.log("Igrac 1, hand 2 je izgubio: ", vm.playerArr[0].splitHand2Lost);
                    if (vm.playerArr[0].splitHand2Lost == false) {
                        if (vm.playerArr[1] != undefined) {
                            console.log("Ima sledeci igrac posle 1");
                            vm.controlButtons1 = false;
                            vm.controlButtons2 = true;
                            vm.dealButton = false;
                            vm.turns = true;
                            vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                        } else {
                            vm.totalCardPointsDealer = 0;
                            for (var i = 1; i < vm.dealer.length; i++) {
                                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                            }
                            vm.totalCardPointsHand12 = 0;
                            for (var i in vm.player1Hand2) {
                                vm.totalCardPointsHand12 += vm.player1Hand2[i].cardPoints;
                            }
                            console.log("Poeni player 1 hand 2", vm.totalCardPointsHand12);
                            console.log("Poeni dealer hand 2", vm.totalCardPointsDealer);

                            if (vm.totalCardPointsDealer <= vm.totalCardPointsHand12) {
                                vm.dealerPlays();
                            }

                            if (vm.totalCardPointsDealer <= 21) {
                                if (vm.totalCardPointsHand12 > vm.totalCardPointsDealer) {
                                    console.log("Pobedio je igrac 1, Hand 2");
                                    vm.playerArr[0].totalCash += parseFloat(vm.betAmount12) + (vm.betAmount12 * 1.5);
                                } else if (vm.totalCardPointsHand12 < vm.totalCardPointsDealer) {
                                    console.log("Pobedio je dealer 1");
                                    vm.playerArr[0].betAmount = 0;
                                } else if (vm.totalCardPointsHand12 == vm.totalCardPointsDealer) {
                                    console.log("Nereseno 1, Hand 2");
                                    vm.playerArr[0].totalCash += parseFloat(vm.betAmount12);
                                }
                            } else {
                                console.log("Pobedio je igrac 1, Hand 2");
                                vm.playerArr[0].totalCash += parseFloat(vm.betAmount12) + (vm.betAmount12 * 1.5);
                            }
//                            if (vm.playerArr[0].totalCash == 0) {
//                                vm.playerArr.splice(0, 1);
//                            }
                            vm.dealAgain();
                        }
                    }
                }
            }
            vm.dealAgain();
        }
    };

    vm.cardNames1 = [];
    vm.showCardsArr1 = [];
    vm.cardNames1Split1 = [];
    vm.showCardsArr1Split1 = [];
    vm.cardNames1Split2 = [];
    vm.showCardsArr1Split2 = [];
    vm.hit1 = function () {
        if (vm.playerArr[0].split == false) {
            vm.playerArr[0].totalCardPoints = 0;
            for (var i in vm.playerArr[0].cards) {
                vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
            }

            if ((vm.playerArr[0].cards[0].cardName == "clubsA" || vm.playerArr[0].cards[0].cardName == "diamondsA" || vm.playerArr[0].cards[0].cardName == "heartsA" || vm.playerArr[0].cards[0].cardName == "spadesA") && (vm.playerArr[0].cards[1].cardName == "clubsA" || vm.playerArr[0].cards[1].cardName == "diamondsA" || vm.playerArr[0].cards[1].cardName == "heartsA" || vm.playerArr[0].cards[1].cardName == "spadesA")) {
                console.log("Imaju dva asa");
                vm.playerArr[0].cards[0].cardPoints = 11;
                vm.playerArr[0].cards[1].cardPoints = 1;
            }

            var x = Math.floor(Math.random() * vm.cards.length);
            console.log("Hit 1 random broj: " + x);
            var card = vm.cards.splice(x, 1);
            console.log(vm.playerArr[0].totalCardPoints);

            vm.cardNames1.push(card[0].cardName);
            vm.playerArr[0].cardPic3 = "images/cards/" + vm.cardNames1[0] + ".png";
            vm.playerArr[0].cardPic4 = "images/cards/" + vm.cardNames1[1] + ".png";
            vm.playerArr[0].cardPic5 = "images/cards/" + vm.cardNames1[2] + ".png";
            vm.playerArr[0].cardPic6 = "images/cards/" + vm.cardNames1[3] + ".png";
            vm.showCardsArr1.push(true);
            vm.playerArr[0].showCard3 = vm.showCardsArr1[0];
            vm.playerArr[0].showCard4 = vm.showCardsArr1[1];
            vm.playerArr[0].showCard5 = vm.showCardsArr1[2];
            vm.playerArr[0].showCard6 = vm.showCardsArr1[3];


            if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                console.log("Izvucena karta je as");
                for (var i in vm.playerArr[0].cards) {
                    if (vm.playerArr[0].cards[i].cardName == "clubsA" || vm.playerArr[0].cards[i].cardName == "diamondsA" || vm.playerArr[0].cards[i].cardName == "heartsA" || vm.playerArr[0].cards[i].cardName == "spadesA") {
                        card[0].cardPoints = 1;
                        console.log("Postoji jos jedan as kod igraca, tako da se ovaj postavlja na jedan poen");
                    }
                }
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.playerArr[0].totalCardPoints <= 10)) {
                card[0].cardPoints = 11;
                console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11");
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.playerArr[0].totalCardPoints >= 11)) {
                card[0].cardPoints = 1;
                console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1");
            }

            vm.playerArr[0].cards.push(card[0]);
            console.log("Igrac 1 je izvukao: ", card);

            vm.playerArr[0].totalCardPoints = 0;
            for (var i in vm.playerArr[0].cards) {
                vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
            }
            console.log("Ukupan broj poena igraca 1 je: " + vm.playerArr[0].totalCardPoints);

            if (vm.playerArr[0].totalCardPoints > 21) {
                console.log("Broj poena je veci od 21");
                for (var i in vm.playerArr[0].cards) {
                    if (vm.playerArr[0].cards[i].cardName == "clubsA" || vm.playerArr[0].cards[i].cardName == "diamondsA" || vm.playerArr[0].cards[i].cardName == "heartsA" || vm.playerArr[0].cards[i].cardName == "spadesA") {
                        console.log("Ispravlja keca na 1 poen");
                        vm.playerArr[0].cards[i].cardPoints = 1;
                    }
                }
            }

            vm.playerArr[0].totalCardPoints = 0;
            for (var i in vm.playerArr[0].cards) {
                vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
            }
            console.log(vm.playerArr[0].totalCardPoints);

            if (vm.playerArr[0].totalCardPoints == 21) {
                vm.modalPlayer1Blackjack.style.display = "block"; 
                console.log("Igrac 1 je dobio BLACKJACK!!!");
                vm.playerArr[0].srcUserPicture = "images/blackjack/2.png";
                vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
                if (vm.playerArr[1] != undefined) {
                    console.log("Ima sledeci igrac posle 1");
                    vm.controlButtons1 = false;
                    vm.controlButtons2 = true;
                    vm.dealButton = false;
                    vm.turns = true;
                    vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                } else {
                    vm.dealerCardPic2 = vm.dealerCardPic22;
                    vm.showDealerPoints = true;
                    vm.dealAgain();
                }
            }
            if (vm.playerArr[0].totalCardPoints > 21) {                
                vm.modalPlayer1Lost.style.display = "block";
                vm.playerArr[0].lost = true;
                vm.playerArr[0].betAmount = 0;
                if (vm.playerArr[1] != undefined) {
                    console.log("Ima sledeci igrac posle 1");
                    vm.controlButtons1 = false;
                    vm.controlButtons2 = true;
                    vm.dealButton = false;
                    vm.turns = true;
                    vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                } else {
                    vm.dealAgain();
                }
//                if (vm.playerArr[0].totalCash == 0) {
//                    vm.playerArr.splice(0, 1);
//                }
            }
        } else {
            console.log("Usao je u Hit 1 -> Split 1");
            if (vm.playerArr[0].splitHand1Lost == false && vm.playerArr[0].splitHand1Blackjack == false && vm.playerArr[0].next == false) {
                vm.totalCardPointsHand11 = 0;
                for (var i in vm.player1Hand1) {
                    vm.totalCardPointsHand11 += vm.player1Hand1[i].cardPoints;
                }
                console.log("Poeni hand 1:" + vm.totalCardPointsHand11);

                var x = Math.floor(Math.random() * vm.cards.length);
                console.log("Hit 1, split, hand 1 random broj: " + x);
                var card = vm.cards.splice(x, 1);
                console.log("Hit 1, split, hand 1", vm.totalCardPointsHand11);

                vm.cardNames1Split1.push(card[0].cardName);
                vm.playerArr[0].cardPic3Split1 = "images/cards/" + vm.cardNames1Split1[0] + ".png";
                vm.playerArr[0].cardPic4Split1 = "images/cards/" + vm.cardNames1Split1[1] + ".png";
                vm.showCardsArr1Split1.push(true);
                vm.playerArr[0].showCard3Split1 = vm.showCardsArr1Split1[0];
                vm.playerArr[0].showCard4Split1 = vm.showCardsArr1Split1[1];

                if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                    console.log("Izvucena karta u split 1 je as");
                    for (var i in vm.player1Hand1) {
                        if (vm.player1Hand1[i].cardName == "clubsA" || vm.player1Hand1[i].cardName == "diamondsA" || vm.player1Hand1[i].cardName == "heartsA" || vm.player1Hand1[i].cardName == "spadesA") {
                            card[0].cardPoints = 1;
                            console.log("Postoji jos jedan as ko igraca, tako da se ovaj postavlja na jedan poen, u split 1");
                        }
                    }
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand11 <= 10)) {
                    card[0].cardPoints = 11;
                    console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11, split 1");
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand11 >= 11)) {
                    card[0].cardPoints = 1;
                    console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1, split 1");
                }
                vm.player1Hand1.push(card[0]);
                console.log("Igrac 1, hand 1 je izvukao: ", card);

                vm.totalCardPointsHand11 = 0;
                for (var i in vm.player1Hand1) {
                    vm.totalCardPointsHand11 += vm.player1Hand1[i].cardPoints;
                }

                if (vm.totalCardPointsHand11 > 21) {
                    console.log("Broj poena je veci od 21, igrac 1, hand 1");
                    for (var i in vm.player1Hand1) {
                        if (vm.player1Hand1[i].cardName == "clubsA" || vm.player1Hand1[i].cardName == "diamondsA" || vm.player1Hand1[i].cardName == "heartsA" || vm.player1Hand1[i].cardName == "spadesA") {
                            console.log("Ispravlja se kec na 1 poen");
                            vm.player1Hand1[i].cardPoints = 1;
                        }
                    }
                }
                vm.totalCardPointsHand11 = 0;
                for (var i in vm.player1Hand1) {
                    vm.totalCardPointsHand11 += vm.player1Hand1[i].cardPoints;
                }
                console.log("Ukupno poena u hand 1 nakon hit-a", vm.totalCardPointsHand11);

                if (vm.totalCardPointsHand11 == 21) {
                    alert("Igrac 1 Hand 1 je dobio BLACKJACK!!!");
                    console.log("Igrac 1 Hand 1 je dobio blackjack");
                    vm.playerArr[0].splitHand1Blackjack = true;
                    vm.playerArr[0].next = true;
                    vm.turnsMsg = vm.playerArr[0].name + "'s turn to play. Hand 2";
                }
                if (vm.totalCardPointsHand11 > 21) {
                    alert("Igrac 1, Hand 1 je izgubio");
                    console.log("Igrac 1 Hand 1 je izgubio");
                    vm.playerArr[0].splitHand1Lost = true;
                    vm.playerArr[0].next = true;
                    vm.turnsMsg = vm.playerArr[0].name + "'s turn to play. Hand 2";
                    vm.betAmount11 = 0;
                }
            } else {
                vm.totalCardPointsHand12 = 0;
                for (var i in vm.player1Hand2) {
                    vm.totalCardPointsHand12 += vm.player1Hand2[i].cardPoints;
                }
                console.log("Poeni hand 2:" + vm.totalCardPointsHand12);

                var x = Math.floor(Math.random() * vm.cards.length);
                console.log("Hit 1, split, hand 2 random broj: " + x);
                var card = vm.cards.splice(x, 1);
                console.log("Hit 1, split, hand 2", vm.totalCardPointsHand12);

                vm.cardNames1Split2.push(card[0].cardName);
                vm.playerArr[0].cardPic3Split2 = "images/cards/" + vm.cardNames1Split2[0] + ".png";
                vm.playerArr[0].cardPic4Split2 = "images/cards/" + vm.cardNames1Split2[1] + ".png";
                vm.showCardsArr1Split2.push(true);
                vm.playerArr[0].showCard3Split2 = vm.showCardsArr1Split2[0];
                vm.playerArr[0].showCard4Split2 = vm.showCardsArr1Split2[1];

                if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                    console.log("Izvucena karta u split 2 je as");
                    for (var i in vm.player1Hand2) {
                        if (vm.player1Hand2[i].cardName == "clubsA" || vm.player1Hand2[i].cardName == "diamondsA" || vm.player1Hand2[i].cardName == "heartsA" || vm.player1Hand2[i].cardName == "spadesA") {
                            card[0].cardPoints = 1;
                            console.log("Postoji jos jedan as ko igraca, tako da se ovaj postavlja na jedan poen, u split 2");
                        }
                    }
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand12 <= 10)) {
                    card[0].cardPoints = 11;
                    console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11, split 2");
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand12 >= 11)) {
                    card[0].cardPoints = 1;
                    console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1, split 2");
                }
                vm.player1Hand2.push(card[0]);
                console.log("Igrac 1, hand 2 je izvukao: ", card);

                vm.totalCardPointsHand12 = 0;
                for (var i in vm.player1Hand2) {
                    vm.totalCardPointsHand12 += vm.player1Hand2[i].cardPoints;
                }

                if (vm.totalCardPointsHand12 > 21) {
                    console.log("Broj poena je veci od 21, igrac 1, hand 2");
                    for (var i in vm.player1Hand2) {
                        if (vm.player1Hand2[i].cardName == "clubsA" || vm.player1Hand2[i].cardName == "diamondsA" || vm.player1Hand2[i].cardName == "heartsA" || vm.player1Hand2[i].cardName == "spadesA") {
                            console.log("Ispravlja se kec na 1 poen");
                            vm.player1Hand2[i].cardPoints = 1;
                        }
                    }
                }
                vm.totalCardPointsHand12 = 0;
                for (var i in vm.player1Hand2) {
                    vm.totalCardPointsHand12 += vm.player1Hand2[i].cardPoints;
                }
                console.log("Ukupno poena u hand 2 nakon hit-a", vm.totalCardPointsHand12);

                if (vm.totalCardPointsHand12 == 21) {
                    alert("Igrac 1 Hand 2 je dobio BLACKJACK!!!");
                    console.log("Igrac 1 Hand 2 je dobio blackjack");
                    console.log("Igrac 1 Hand 2 je izgubio");
                    vm.playerArr[0].splitHand2Blackjack = true;
                    if (vm.playerArr[1] != undefined) {
                        console.log("Ima sledeci igrac posle 1");
                        vm.controlButtons1 = false;
                        vm.controlButtons2 = true;
                        vm.dealButton = false;
                        vm.turns = true;
                        vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                    } else {
                        vm.stand1Check();
                    }
                }
                if (vm.totalCardPointsHand12 > 21) {
                    alert("Igrac 1, Hand 2 je izgubio");
                    console.log("Igrac 1 Hand 2 je izgubio");
                    vm.playerArr[0].splitHand2Lost = true;
                    vm.betAmount12 = 0;
                    if (vm.playerArr[1] != undefined) {
                        console.log("Ima sledeci igrac posle 1");
                        vm.controlButtons1 = false;
                        vm.controlButtons2 = true;
                        vm.dealButton = false;
                        vm.turns = true;
                        vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
                    } else {
                        vm.stand1Check();
                    }
                }
            }
        }
    };

    vm.double1 = function () {
        vm.playerArr[0].totalCardPoints = 0;
        for (var i in vm.playerArr[0].cards) {
            vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
        }
        console.log("Ukupno ponea: " + vm.playerArr[0].totalCardPoints);
        if (vm.playerArr[0].totalCardPoints == 9 || vm.playerArr[0].totalCardPoints == 10 || vm.playerArr[0].totalCardPoints == 11) {
            vm.playerArr[0].totalCash -= parseFloat(vm.playerArr[0].betAmount);
            vm.playerArr[0].betAmount *= 2;

            var x = Math.floor(Math.random() * vm.cards.length);
            console.log("Double 1 random broj: " + x);
            var card = vm.cards.splice(x, 1);
            console.log("Igrac je na double 1 izvukao ", card);

            vm.cardNames1.push(card[0].cardName);
            vm.playerArr[0].cardPic3 = "images/cards/" + vm.cardNames1[0] + ".png";
            vm.showCardsArr1.push(true);
            vm.playerArr[0].showCard3 = vm.showCardsArr1[0];

            if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                if (vm.playerArr[0].totalCardPoints == 11) {
                    card[0].cardPoints = 1;
                } else {
                    card[0].cardPoints = 11;
                }
            }

            vm.playerArr[0].cards.push(card[0]);
            vm.playerArr[0].totalCardPoints = 0;
            for (var i in vm.playerArr[0].cards) {
                vm.playerArr[0].totalCardPoints += vm.playerArr[0].cards[i].cardPoints;
            }
            vm.totalCardPointsDealer = 0;
            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }
            console.log("Ukupan broj poena igraca 1 je: " + vm.playerArr[0].totalCardPoints);
            console.log("Ukupan broj poena dealera 1 je: " + vm.totalCardPointsDealer);

            if (vm.totalCardPointsDealer <= vm.playerArr[0].totalCardPoints) {
                vm.dealerPlays();
            }

            if (vm.totalCardPointsDealer <= 21) {
                if (vm.playerArr[0].totalCardPoints > vm.totalCardPointsDealer) {
                    console.log("Pobedio je igrac 1");
                    vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
                } else if (vm.playerArr[0].totalCardPoints < vm.totalCardPointsDealer) {
                    console.log("Pobedio je dealer 1");
                    vm.playerArr[0].lost = true;
                    vm.playerArr[0].betAmount = 0;
                } else if (vm.playerArr[0].totalCardPoints == vm.totalCardPointsDealer) {
                    console.log("Nereseno 1");
                    vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount);
                }
            } else {
                vm.playerArr[0].totalCash += parseFloat(vm.playerArr[0].betAmount) + (vm.playerArr[0].betAmount * 1.5);
            }
            if (vm.playerArr[1] != undefined) {
                console.log("Ima sledeci igrac posle 1");
                vm.controlButtons1 = false;
                vm.controlButtons2 = true;
                vm.dealButton = false;
                vm.turns = true;
                vm.turnsMsg = vm.playerArr[1].name + "'s turn to play";
            } else {
                vm.dealAgain();
            }
        } else {
             vm.modalDouble.style.display = "block";  
        }
    };

    vm.player1Hand1 = [];
    vm.player1Hand2 = [];
    vm.betAmount11 = 0;
    vm.betAmount12 = 0;
    vm.split1 = function () {
        console.log(vm.playerArr[0].cards[0].type, vm.playerArr[0].cards[1].type);
        if (vm.playerArr[0].cards[0].type == vm.playerArr[0].cards[1].type) {
            vm.playerArr[0].split = true;
            vm.playerArr[0].showCards = false;
            vm.playerArr[0].showCardsSplit = true;
            vm.betAmount11 = parseFloat(vm.playerArr[0].betAmount);
            vm.betAmount12 = parseFloat(vm.playerArr[0].betAmount);
            vm.playerArr[0].totalCash -= parseFloat(vm.playerArr[0].betAmount);
            vm.playerArr[0].betAmount *= 2;

            var card1 = vm.playerArr[0].cards.splice(0, 1);
            var card2 = vm.playerArr[0].cards.splice(0, 1);
            vm.player1Hand1.push(card1[0]);
            vm.player1Hand2.push(card2[0]);
            vm.playerArr[0].cardPic1Split1 = "images/cards/" + card1[0].cardName + ".png";
            vm.playerArr[0].cardPic1Split2 = "images/cards/" + card2[0].cardName + ".png";

            var x = Math.floor(Math.random() * vm.cards.length);
            var card1random = vm.cards.splice(x, 1);
            vm.player1Hand1.push(card1random[0]);
            vm.playerArr[0].cardPic2Split1 = "images/cards/" + card1random[0].cardName + ".png";
            vm.playerArr[0].showCard2Split1 = true;
            console.log("Karte Hand1 player1", vm.player1Hand1);
            var y = Math.floor(Math.random() * vm.cards.length);
            var card2random = vm.cards.splice(y, 1);
            vm.player1Hand2.push(card2random[0]);
            vm.playerArr[0].cardPic2Split2 = "images/cards/" + card2random[0].cardName + ".png";
            vm.playerArr[0].showCard2Split2 = true;
            console.log("Karte Hand2 player1", vm.player1Hand2);
            vm.turnsMsg += ". Hand 1";

            //proveravanje da li ima blackjack u hand 1 ili hand 2
            if (vm.player1Hand1[0].cardName == "clubsA" || vm.player1Hand1[0].cardName == "diamondsA" || vm.player1Hand1[0].cardName == "heartsA" || vm.player1Hand1[0].cardName == "spadesA") {
                if (vm.player1Hand1[1].cardPoints == 10) {
                    vm.playerArr[0].splitHand1Blackjack = true;
                    vm.player1Hand1[0].cardPoints = 11;
                } else {
                    vm.player1Hand1[0].cardPoints = 11;
                }
            }
            if (vm.player1Hand1[1].cardName == "clubsA" || vm.player1Hand1[1].cardName == "diamondsA" || vm.player1Hand1[1].cardName == "heartsA" || vm.player1Hand1[1].cardName == "spadesA") {
                if (vm.player1Hand1[0].cardPoints == 10) {
                    vm.playerArr[0].splitHand1Blackjack = true;
                    vm.player1Hand1[1].cardPoints = 11;
                } else {
                    vm.player1Hand1[1].cardPoints = 11;
                }
            }
            if (vm.player1Hand2[0].cardName == "clubsA" || vm.player1Hand2[0].cardName == "diamondsA" || vm.player1Hand2[0].cardName == "heartsA" || vm.player1Hand2[0].cardName == "spadesA") {
                if (vm.player1Hand2[1].cardPoints == 10) {
                    vm.playerArr[0].splitHand2Blackjack = true;
                    vm.player1Hand2[0].cardPoints = 11;
                } else {
                    vm.player1Hand2[0].cardPoints = 11;
                }
            }
            if (vm.player1Hand2[1].cardName == "clubsA" || vm.player1Hand2[1].cardName == "diamondsA" || vm.player1Hand2[1].cardName == "heartsA" || vm.player1Hand2[1].cardName == "spadesA") {
                if (vm.player1Hand2[0].cardPoints == 10) {
                    vm.playerArr[0].splitHand2Blackjack = true;
                    vm.player1Hand2[1].cardPoints = 11;
                } else {
                    vm.player1Hand2[1].cardPoints = 11;
                }
            }
        } else {
            vm.modalSplit.style.display = "block";  
        }
    };

    vm.stand2 = function () {
        console.log("Usao je u stand 2");
        if (vm.playerArr[1].split == false) {
            if (vm.playerArr[0].lost == false) {
                vm.stand1Check();
            }
            vm.dealerCardPic2 = vm.dealerCardPic22;
            vm.showDealerPoints = true;
            console.log("Nema vise igraca u stand 2");
            vm.totalCardPointsDealer = 0;
            vm.playerArr[1].totalCardPoints = 0;

            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }

            if ((vm.playerArr[1].cards[0].cardName == "clubsA" || vm.playerArr[1].cards[0].cardName == "diamondsA" || vm.playerArr[1].cards[0].cardName == "heartsA" || vm.playerArr[1].cards[0].cardName == "spadesA") && (vm.playerArr[1].cards[1].cardName == "clubsA" || vm.playerArr[1].cards[1].cardName == "diamondsA" || vm.playerArr[1].cards[1].cardName == "heartsA" || vm.playerArr[1].cards[1].cardName == "spadesA")) {
                console.log("Imaju dva asa");
                vm.playerArr[1].cards[0].cardPoints = 11;
                vm.playerArr[1].cards[1].cardPoints = 1;
            }

            for (var i in vm.playerArr[1].cards) {
                vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
            }
            console.log("Ukupni poeni dealer 2: " + vm.totalCardPointsDealer);
            console.log("Ukupni poeni igraca 2: " + vm.playerArr[1].totalCardPoints);

            if (vm.totalCardPointsDealer < vm.playerArr[1].totalCardPoints) {
                vm.dealerPlays();
//                    vm.sleep(1000);
            }

            if (vm.totalCardPointsDealer <= 21) {
                if (vm.playerArr[1].totalCardPoints > vm.totalCardPointsDealer) {
                    console.log("Pobedio je igrac 2");
                    vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount) + (vm.playerArr[1].betAmount * 1.5);
                } else if (vm.playerArr[1].totalCardPoints < vm.totalCardPointsDealer) {
                    console.log("Pobedio je dealer 2");
                    vm.playerArr[1].betAmount = 0;
//                        if (vm.playerArr[1].totalCash == 0) {
//                            if (vm.playerArr.length == 2) {
//                                vm.playerArr.splice(1, 1);
//                            } else {
//                                vm.playerArr.splice(0, 1);
//                            }
//                        }
                } else if (vm.playerArr[1].totalCardPoints == vm.totalCardPointsDealer) {
                    console.log("Nereseno 2");
                    vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount);
                }
            } else {
                vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount) + (vm.playerArr[1].betAmount * 1.5);
            }
            vm.dealAgain();
        } else {
            if (vm.playerArr[1].splitHand1Lost == false && vm.playerArr[1].next == false) {
                vm.turnsMsg = vm.playerArr[1].name + "'s turn to play. Hand 2";
                vm.playerArr[1].next = true;
            } else {
                console.log("Igrac 2, hand 1 je izgubio: ", vm.playerArr[1].splitHand1Lost);
                vm.dealerCardPic2 = vm.dealerCardPic22;
                vm.showDealerPoints = true;
                if (vm.playerArr[1].splitHand1Lost == false) {
                    vm.totalCardPointsDealer = 0;
                    for (var i = 1; i < vm.dealer.length; i++) {
                        vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                    }
                    vm.totalCardPointsHand21 = 0;
                    for (var i in vm.player2Hand1) {
                        vm.totalCardPointsHand21 += vm.player2Hand1[i].cardPoints;
                    }
                    console.log("Poeni player 2 hand 1", vm.totalCardPointsHand21);
                    console.log("Poeni dealer hand 1", vm.totalCardPointsDealer);

                    if (vm.totalCardPointsDealer <= vm.totalCardPointsHand21) {
                        vm.dealerPlays();
//                            vm.sleep(1000);
                    }

                    if (vm.totalCardPointsDealer <= 21) {
                        if (vm.totalCardPointsHand21 > vm.totalCardPointsDealer) {
                            console.log("Pobedio je igrac 2, Hand 1");
                            vm.playerArr[1].totalCash += parseFloat(vm.betAmount21) + (vm.betAmount21 * 1.5);
                        } else if (vm.totalCardPointsHand21 < vm.totalCardPointsDealer) {
                            console.log("Pobedio je dealer 2");
                            vm.playerArr[1].betAmount = 0;
                        } else if (vm.totalCardPointsHand21 == vm.totalCardPointsDealer) {
                            console.log("Nereseno 2, Hand 1");
                            vm.playerArr[1].totalCash += parseFloat(vm.betAmount21);
                        }
                    } else {
                        console.log("Pobedio je igrac 2, Hand 1");
                        vm.playerArr[1].totalCash += parseFloat(vm.betAmount21) + (vm.betAmount21 * 1.5);
                    }
                }
                console.log("Igrac 2, hand 2 je izgubio: ", vm.playerArr[1].splitHand2Lost);
                if (vm.playerArr[1].splitHand2Lost == false) {
                    vm.totalCardPointsDealer = 0;
                    for (var i = 1; i < vm.dealer.length; i++) {
                        vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
                    }
                    vm.totalCardPointsHand22 = 0;
                    for (var i in vm.player2Hand2) {
                        vm.totalCardPointsHand22 += vm.player2Hand2[i].cardPoints;
                    }
                    console.log("Poeni player 2 hand 2", vm.totalCardPointsHand22);
                    console.log("Poeni dealer hand 2", vm.totalCardPointsDealer);

                    if (vm.totalCardPointsDealer <= vm.totalCardPointsHand22) {
                        vm.dealerPlays();
                    }

                    if (vm.totalCardPointsDealer <= 21) {
                        if (vm.totalCardPointsHand22 > vm.totalCardPointsDealer) {
                            console.log("Pobedio je igrac 2, Hand 2");
                            vm.playerArr[1].totalCash += parseFloat(vm.betAmount22) + (vm.betAmount22 * 1.5);
                        } else if (vm.totalCardPointsHand22 < vm.totalCardPointsDealer) {
                            console.log("Pobedio je dealer 2");
                            vm.playerArr[1].betAmount = 0;
                        } else if (vm.totalCardPointsHand22 == vm.totalCardPointsDealer) {
                            console.log("Nereseno 2, Hand 2");
                            vm.playerArr[1].totalCash += parseFloat(vm.betAmount22);
                        }
                    } else {
                        console.log("Pobedio je igrac 2, Hand 2");
                        vm.playerArr[1].totalCash += parseFloat(vm.betAmount22) + (vm.betAmount22 * 1.5);
                    }
                }
//                    if (vm.playerArr[1].totalCash == 0) {
//                        if (vm.playerArr.length == 2) {
//                            vm.playerArr.splice(1, 1);
//                        } else {
//                            vm.playerArr.splice(0, 1);
//                        }
//                    }
                vm.dealAgain();
            }
        }
    };
    vm.cardNames2 = [];
    vm.showCardsArr2 = [];
    vm.cardNames2Split1 = [];
    vm.showCardsArr2Split1 = [];
    vm.cardNames2Split2 = [];
    vm.showCardsArr2Split2 = [];
    vm.hit2 = function () {
        if (vm.playerArr[1].split == false) {
            vm.playerArr[1].totalCardPoints = 0;
            for (var i in vm.playerArr[1].cards) {
                vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
            }

            if ((vm.playerArr[1].cards[0].cardName == "clubsA" || vm.playerArr[1].cards[0].cardName == "diamondsA" || vm.playerArr[1].cards[0].cardName == "heartsA" || vm.playerArr[1].cards[0].cardName == "spadesA") && (vm.playerArr[1].cards[1].cardName == "clubsA" || vm.playerArr[1].cards[1].cardName == "diamondsA" || vm.playerArr[1].cards[1].cardName == "heartsA" || vm.playerArr[1].cards[1].cardName == "spadesA")) {
                console.log("Imaju dva asa");
                vm.playerArr[1].cards[0].cardPoints = 11;
                vm.playerArr[1].cards[1].cardPoints = 1;
            }

            var x = Math.floor(Math.random() * vm.cards.length);
            console.log("Hit 2 random broj: " + x);
            var card = vm.cards.splice(x, 1);
            console.log(vm.playerArr[1].totalCardPoints);

            vm.cardNames2.push(card[0].cardName);
            vm.playerArr[1].cardPic3 = "images/cards/" + vm.cardNames2[0] + ".png";
            vm.playerArr[1].cardPic4 = "images/cards/" + vm.cardNames2[1] + ".png";
            vm.playerArr[1].cardPic5 = "images/cards/" + vm.cardNames2[2] + ".png";
            vm.playerArr[1].cardPic6 = "images/cards/" + vm.cardNames2[3] + ".png";
            vm.showCardsArr2.push(true);
            vm.playerArr[1].showCard3 = vm.showCardsArr2[0];
            vm.playerArr[1].showCard4 = vm.showCardsArr2[1];
            vm.playerArr[1].showCard5 = vm.showCardsArr2[2];
            vm.playerArr[1].showCard6 = vm.showCardsArr2[3];

            if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                console.log("Izvucena karta je as");
                for (var i in vm.playerArr[1].cards) {
                    if (vm.playerArr[1].cards[i].cardName == "clubsA" || vm.playerArr[1].cards[i].cardName == "diamondsA" || vm.playerArr[1].cards[i].cardName == "heartsA" || vm.playerArr[1].cards[i].cardName == "spadesA") {
                        card[0].cardPoints = 1;
                        console.log("Postoji jos jedan as kod igraca, tako da se ovaj postavlja na jedan poen");
                    }
                }
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.playerArr[1].totalCardPoints <= 10)) {
                card[0].cardPoints = 11;
                console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11");
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.playerArr[1].totalCardPoints >= 11)) {
                card[0].cardPoints = 1;
                console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1");
            }

            vm.playerArr[1].cards.push(card[0]);
            console.log("Igrac 2 je izvukao: ", card);

            vm.playerArr[1].totalCardPoints = 0;
            for (var i in vm.playerArr[1].cards) {
                vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
            }
            console.log("Ukupan broj poena igraca 2 je: " + vm.playerArr[1].totalCardPoints);

            if (vm.playerArr[1].totalCardPoints > 21) {
                console.log("Broj poena je veci od 21");
                for (var i in vm.playerArr[1].cards) {
                    if (vm.playerArr[1].cards[i].cardName == "clubsA" || vm.playerArr[1].cards[i].cardName == "diamondsA" || vm.playerArr[1].cards[i].cardName == "heartsA" || vm.playerArr[1].cards[i].cardName == "spadesA") {
                        console.log("Ispravlja keca na 1 poen");
                        vm.playerArr[1].cards[i].cardPoints = 1;
                    }
                }
            }

            vm.playerArr[1].totalCardPoints = 0;
            for (var i in vm.playerArr[1].cards) {
                vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
            }
            console.log("Hit 2, ukupna broj poena: " + (vm.playerArr[1].totalCardPoints));

            if (vm.playerArr[1].totalCardPoints == 21) {
                vm.modalPlayer2Blackjack.style.display = "block"; 
                console.log("Igrac 2 je dobio BLACKJACK!!!");
                vm.playerArr[1].srcUserPicture = "images/blackjack/2.png";
                vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount) + (vm.playerArr[1].betAmount * 1.5);
                if (vm.playerArr[0].lost == false) {
                    vm.stand1Check();
                }
                vm.dealAgain();
            }
            if (vm.playerArr[1].totalCardPoints > 21) {
                vm.modalPlayer2Lost.style.display = "block"; 
                console.log("Igrac 2 je izgubio");
                vm.playerArr[1].lost = true;
                vm.playerArr[1].betAmount = 0;
//                    if (vm.playerArr[1].totalCash == 0) {
//                        if (vm.playerArr.length == 2) {
//                            vm.playerArr.splice(1, 1);
//                        } else {
//                            vm.playerArr.splice(0, 1);
//                        }
//                    }
                if (vm.playerArr[0].lost == false) {
                    vm.stand1Check();
                }
                vm.sleep(500);
                vm.dealAgain();
            }
        } else {
            console.log("Usao je u Hit 2 -> Split");
            if (vm.playerArr[1].splitHand1Lost == false && vm.playerArr[1].splitHand1Blackjack == false && vm.playerArr[1].next == false) {
                vm.totalCardPointsHand21 = 0;
                for (var i in vm.player2Hand1) {
                    vm.totalCardPointsHand21 += vm.player2Hand1[i].cardPoints;
                }
                console.log("Poeni hand 1:" + vm.totalCardPointsHand21);

                var x = Math.floor(Math.random() * vm.cards.length);
                console.log("Hit 2, split, hand 1 random broj: " + x);
                var card = vm.cards.splice(x, 1);
                console.log("Hit 2, split, hand 1", vm.totalCardPointsHand21);

                vm.cardNames2Split1.push(card[0].cardName);
                vm.playerArr[1].cardPic3Split1 = "images/cards/" + vm.cardNames2Split1[0] + ".png";
                vm.playerArr[1].cardPic4Split1 = "images/cards/" + vm.cardNames2Split1[1] + ".png";
                vm.showCardsArr2Split1.push(true);
                vm.playerArr[1].showCard3Split1 = vm.showCardsArr2Split1[0];
                vm.playerArr[1].showCard4Split1 = vm.showCardsArr2Split1[1];

                if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                    console.log("Izvucena karta u split 1 je as");
                    for (var i in vm.player2Hand1) {
                        if (vm.player2Hand1[i].cardName == "clubsA" || vm.player2Hand1[i].cardName == "diamondsA" || vm.player2Hand1[i].cardName == "heartsA" || vm.player2Hand1[i].cardName == "spadesA") {
                            card[0].cardPoints = 1;
                            console.log("Postoji jos jedan as ko igraca, tako da se ovaj postavlja na jedan poen, u split 1");
                        }
                    }
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand21 <= 10)) {
                    card[0].cardPoints = 11;
                    console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11, split 1");
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand21 >= 11)) {
                    card[0].cardPoints = 1;
                    console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1, split 1");
                }
                vm.player2Hand1.push(card[0]);
                console.log("Igrac 2, hand 1 je izvukao: ", card);

                vm.totalCardPointsHand21 = 0;
                for (var i in vm.player1Hand1) {
                    vm.totalCardPointsHand21 += vm.player2Hand1[i].cardPoints;
                }

                if (vm.totalCardPointsHand21 > 21) {
                    console.log("Broj poena je veci od 21, igrac 2, hand 1");
                    for (var i in vm.player2Hand1) {
                        if (vm.player2Hand1[i].cardName == "clubsA" || vm.player2Hand1[i].cardName == "diamondsA" || vm.player2Hand1[i].cardName == "heartsA" || vm.player2Hand1[i].cardName == "spadesA") {
                            console.log("Ispravlja se kec na 1 poen");
                            vm.player2Hand1[i].cardPoints = 1;
                        }
                    }
                }
                vm.totalCardPointsHand21 = 0;
                for (var i in vm.player2Hand1) {
                    vm.totalCardPointsHand21 += vm.player2Hand1[i].cardPoints;
                }
                console.log("Ukupno poena u hand 2 nakon hit-a", vm.totalCardPointsHand21);

                if (vm.totalCardPointsHand21 == 21) {
                    alert("Igrac 2 Hand 1 je dobio BLACKJACK!!!");
                    console.log("Igrac 2 Hand 1 je dobio blackjack");
                    vm.playerArr[1].splitHand1Blackjack = true;
                    vm.playerArr[1].next = true;
                    vm.turnsMsg = vm.playerArr[1].name + "'s turn to play. Hand 2";
                }
                if (vm.totalCardPointsHand21 > 21) {
                    alert("Igrac 2, Hand 1 je izgubio");
                    console.log("Igrac 2 Hand 1 je izgubio");
                    vm.playerArr[1].splitHand1Lost = true;
                    vm.playerArr[1].next = true;
                    vm.turnsMsg = vm.playerArr[1].name + "'s turn to play. Hand 2";
                    vm.betAmount21 = 0;
                }
            } else {
                vm.totalCardPointsHand22 = 0;
                for (var i in vm.player2Hand2) {
                    vm.totalCardPointsHand22 += vm.player2Hand2[i].cardPoints;
                }
                console.log("Poeni hand 2:" + vm.totalCardPointsHand22);

                var x = Math.floor(Math.random() * vm.cards.length);
                console.log("Hit 2, split, hand 2 random broj: " + x);
                var card = vm.cards.splice(x, 1);
                console.log("Hit 2, split, hand 2", vm.totalCardPointsHand22);

                vm.cardNames2Split2.push(card[0].cardName);
                vm.playerArr[1].cardPic3Split2 = "images/cards/" + vm.cardNames2Split2[0] + ".png";
                vm.playerArr[1].cardPic4Split2 = "images/cards/" + vm.cardNames2Split2[1] + ".png";
                vm.showCardsArr2Split2.push(true);
                vm.playerArr[1].showCard3Split2 = vm.showCardsArr2Split2[0];
                vm.playerArr[1].showCard4Split2 = vm.showCardsArr2Split2[1];

                if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                    console.log("Izvucena karta u split 2 je as");
                    for (var i in vm.player2Hand2) {
                        if (vm.player2Hand2[i].cardName == "clubsA" || vm.player2Hand2[i].cardName == "diamondsA" || vm.player2Hand2[i].cardName == "heartsA" || vm.player2Hand2[i].cardName == "spadesA") {
                            card[0].cardPoints = 1;
                            console.log("Postoji jos jedan as ko igraca, tako da se ovaj postavlja na jedan poen, u split 2");
                        }
                    }
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand22 <= 10)) {
                    card[0].cardPoints = 11;
                    console.log("Izvucena karta je as a zbir karata u ruci je ispod 10, tako da on vredi 11, split 2");
                }
                if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsHand22 >= 11)) {
                    card[0].cardPoints = 1;
                    console.log("Izvucena karta je as a zvir karata u ruci je preko 11, tako da on vredi 1, split 2");
                }
                vm.player2Hand2.push(card[0]);
                console.log("Igrac 2, hand 2 je izvukao: ", card);

                vm.totalCardPointsHand22 = 0;
                for (var i in vm.player2Hand2) {
                    vm.totalCardPointsHand22 += vm.player2Hand2[i].cardPoints;
                }

                if (vm.totalCardPointsHand22 > 21) {
                    console.log("Broj poena je veci od 21, igrac 2, hand 2");
                    for (var i in vm.player2Hand2) {
                        if (vm.player2Hand2[i].cardName == "clubsA" || vm.player2Hand2[i].cardName == "diamondsA" || vm.player2Hand2[i].cardName == "heartsA" || vm.player2Hand2[i].cardName == "spadesA") {
                            console.log("Ispravlja se kec na 1 poen");
                            vm.player2Hand2[i].cardPoints = 1;
                        }
                    }
                }
                vm.totalCardPointsHand22 = 0;
                for (var i in vm.player2Hand2) {
                    vm.totalCardPointsHand22 += vm.player2Hand2[i].cardPoints;
                }
                console.log("Ukupno poena u hand 2 nakon hit-a", vm.totalCardPointsHand22);

                if (vm.totalCardPointsHand22 == 21) {
                    alert("Igrac 2 Hand 2 je dobio BLACKJACK!!!");
                    console.log("Igrac 2 Hand 2 je dobio blackjack");
                    vm.playerArr[1].splitHand2Blackjack = true;
                    vm.stand2();
                }
                if (vm.totalCardPointsHand22 > 21) {
                    alert("Igrac 2, Hand 2 je izgubio");
                    console.log("Igrac 2 Hand 2 je izgubio");
                    vm.playerArr[1].splitHand2Lost = true;
                    vm.betAmount22 = 0;
                    vm.stand2();
                }
            }
        }
    };

    vm.double2 = function () {
        vm.playerArr[1].totalCardPoints = 0;
        for (var i in vm.playerArr[1].cards) {
            vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
        }
        console.log("Ukupno poena: " + vm.playerArr[1].totalCardPoints);
        if (vm.playerArr[1].totalCardPoints == 9 || vm.playerArr[1].totalCardPoints == 10 || vm.playerArr[1].totalCardPoints == 11) {
            vm.playerArr[1].totalCash -= parseFloat(vm.playerArr[1].betAmount);
            vm.playerArr[1].betAmount *= 2;


            var x = Math.floor(Math.random() * vm.cards.length);
            console.log("Double 2 random broj: " + x);
            var card = vm.cards.splice(x, 1);
            console.log("Igrac je na double 2 izvukao ", card);

            vm.cardNames2.push(card[0].cardName);
            vm.playerArr[1].cardPic3 = "images/cards/" + vm.cardNames2[0] + ".png";
            vm.showCardsArr2.push(true);
            vm.playerArr[1].showCard3 = vm.showCardsArr2[0];

            if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                if (vm.playerArr[1].totalCardPoints == 11) {
                    card[0].cardPoints = 1;
                } else {
                    card[0].cardPoints = 11;
                }
            }

            vm.playerArr[1].cards.push(card[0]);
            vm.playerArr[1].totalCardPoints = 0;
            for (var i in vm.playerArr[1].cards) {
                vm.playerArr[1].totalCardPoints += vm.playerArr[1].cards[i].cardPoints;
            }
            vm.totalCardPointsDealer = 0;
            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }
            console.log("Ukupan broj poena igraca 2 je: " + vm.playerArr[1].totalCardPoints);
            console.log("Ukupan broj poena dealera 2 je: " + vm.totalCardPointsDealer);

            if (vm.totalCardPointsDealer <= vm.playerArr[1].totalCardPoints) {
                vm.dealerPlays();
            }

            if (vm.totalCardPointsDealer <= 21) {
                if (vm.playerArr[1].totalCardPoints > vm.totalCardPointsDealer) {
                    console.log("Pobedio je igrac 2");
                    vm.stand2();
                } else if (vm.playerArr[1].totalCardPoints < vm.totalCardPointsDealer) {
                    console.log("Pobedio je dealer 2");
                    vm.playerArr[1].lost = true;
                    vm.playerArr[1].betAmount = 0;
                } else if (vm.playerArr[1].totalCardPoints == vm.totalCardPointsDealer) {
                    console.log("Nereseno 2");
                    vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount);
                }
            } else {
                vm.playerArr[1].totalCash += parseFloat(vm.playerArr[1].betAmount) + (vm.playerArr[1].betAmount * 1.5);
            }            
            if (vm.playerArr[0].lost == false) {
                vm.stand1Check();
            }
            
        } else {
            vm.modalDouble.style.display = "block";  
        }
    };

    vm.player2Hand1 = [];
    vm.player2Hand2 = [];
    vm.betAmount21 = 0;
    vm.betAmount22 = 0;
    vm.split2 = function () {
        if (vm.playerArr[1].cards[0].type == vm.playerArr[1].cards[1].type) {
            vm.playerArr[1].split = true;
            vm.playerArr[1].showCards = false;
            vm.playerArr[1].showCardsSplit = true;
            vm.betAmount21 = parseFloat(vm.playerArr[1].betAmount);
            vm.betAmount22 = parseFloat(vm.playerArr[1].betAmount);
            vm.playerArr[1].totalCash -= parseFloat(vm.playerArr[1].betAmount);
            vm.playerArr[1].betAmount *= 2;

            var card1 = vm.playerArr[1].cards.splice(0, 1);
            var card2 = vm.playerArr[1].cards.splice(0, 1);
            vm.player2Hand1.push(card1[0]);
            vm.player2Hand2.push(card2[0]);
            vm.playerArr[1].cardPic1Split1 = "images/cards/" + card1[0].cardName + ".png";
            vm.playerArr[1].cardPic1Split2 = "images/cards/" + card2[0].cardName + ".png";

            var x = Math.floor(Math.random() * vm.cards.length);
            var card1random = vm.cards.splice(x, 1);
            vm.player2Hand1.push(card1random[0]);
            vm.playerArr[1].cardPic2Split1 = "images/cards/" + card1random[0].cardName + ".png";
            vm.playerArr[1].showCard2Split1 = true;
            console.log("Karte Hand1 player2", vm.player2Hand1);
            var y = Math.floor(Math.random() * vm.cards.length);
            var card2random = vm.cards.splice(y, 1);
            vm.player2Hand2.push(card2random[0]);
            vm.playerArr[1].cardPic2Split2 = "images/cards/" + card2random[0].cardName + ".png";
            vm.playerArr[1].showCard2Split2 = true;
            console.log("Karte Hand2 player2", vm.player2Hand2);
            vm.turnsMsg += ". Hand 1";

            //proveravanje da li ima blackjack u hand 1 ili hand 2
            if (vm.player2Hand1[0].cardName == "clubsA" || vm.player2Hand1[0].cardName == "diamondsA" || vm.player2Hand1[0].cardName == "heartsA" || vm.player2Hand1[0].cardName == "spadesA") {
                if (vm.player2Hand1[1].cardPoints == 10) {
                    vm.playerArr[1].splitHand1Blackjack = true;
                    vm.player2Hand1[0].cardPoints = 11;
                } else {
                    vm.player2Hand1[0].cardPoints = 11;
                }
            }
            if (vm.player2Hand1[1].cardName == "clubsA" || vm.player2Hand1[1].cardName == "diamondsA" || vm.player2Hand1[1].cardName == "heartsA" || vm.player2Hand1[1].cardName == "spadesA") {
                if (vm.player2Hand1[0].cardPoints == 10) {
                    vm.playerArr[1].splitHand1Blackjack = true;
                    vm.player2Hand1[1].cardPoints = 11;
                } else {
                    vm.player2Hand1[1].cardPoints = 11;
                }
            }
            if (vm.player2Hand2[0].cardName == "clubsA" || vm.player2Hand2[0].cardName == "diamondsA" || vm.player2Hand2[0].cardName == "heartsA" || vm.player2Hand2[0].cardName == "spadesA") {
                if (vm.player2Hand2[1].cardPoints == 10) {
                    vm.playerArr[1].splitHand2Blackjack = true;
                    vm.player2Hand2[0].cardPoints = 11;
                } else {
                    vm.player2Hand2[0].cardPoints = 11;
                }
            }
            if (vm.player2Hand2[1].cardName == "clubsA" || vm.player2Hand2[1].cardName == "diamondsA" || vm.player2Hand2[1].cardName == "heartsA" || vm.player2Hand2[1].cardName == "spadesA") {
                if (vm.player2Hand2[0].cardPoints == 10) {
                    vm.playerArr[1].splitHand2Blackjack = true;
                    vm.player2Hand2[1].cardPoints = 11;
                } else {
                    vm.player2Hand2[1].cardPoints = 11;
                }
            }
        } else {
            vm.modalSplit.style.display = "block";  
        }
    };

    vm.dealAgain = function () {
        console.log("dealAgain: DEAL-UJE OPET");
        vm.prestart = false;
        vm.gameplay = true;
        vm.dealButton = true;
        vm.controlButtons1 = false;
        vm.controlButtons2 = false;
        vm.cardNames1 = [];
        vm.showCardsArr1 = [];
        vm.cardNames1Split1 = [];
        vm.showCardsArr1Split1 = [];
        vm.cardNames1Split2 = [];
        vm.showCardsArr1Split2 = [];
        vm.player1Hand1 = [];
        vm.player1Hand2 = [];
        vm.cardNames2 = [];
        vm.showCardsArr2 = [];
        vm.cardNames2Split1 = [];
        vm.showCardsArr2Split1 = [];
        vm.cardNames2Split2 = [];
        vm.showCardsArr2Split2 = [];
        vm.player2Hand1 = [];
        vm.player2Hand2 = [];
        vm.readOnly = false;
        vm.turns = false;
        vm.dealer[0].srcUserPicture = "images/user_picture/dealer.png";
        vm.dealer[0].blackjack = false;
        vm.dealer.splice(1, vm.dealer.length);
        for (var i in vm.playerArr) {
            if (vm.playerArr[i].gender == "male") {
                vm.playerArr[i].srcUserPicture = "images/user_picture/male2.png";
            } else {
                vm.playerArr[i].srcUserPicture = "images/user_picture/female.png";
            }
            vm.playerArr[i].blackjack = false;
            vm.playerArr[i].cards = [];
            vm.playerArr[i].betAmount = 0;
            vm.playerArr[i].lost = false;
            vm.playerArr[i].splitHand1Blackjack = false;
            vm.playerArr[i].splitHand2Blackjack = false;
            vm.playerArr[i].splitHand1Lost = false;
            vm.playerArr[i].splitHand2Lost = false;
            vm.playerArr[i].next = false;
            vm.playerArr[i].split = false;
        }
        vm.cards = [
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
    };

    vm.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };

    vm.myTimer = function (idBar) {
        console.log("Usao je u myTimer, bar ID: " + idBar);
        var elem = document.getElementById(idBar);
        var width = 100;
        var id = setInterval(frame, 50);
        function frame() {
            if (width <= 0) {
                clearInterval(id);
            } else {
                console.log("smanjuje width");
                width--;
                elem.style.width = width + '%';
            }
        }
    };

    vm.cardNamesDealer = [];
    vm.showCardsArrDealer = [];
    vm.showCard3Dealer = false;
    vm.showCard4Dealer = false;
    vm.showCard5Dealer = false;
    vm.dealerCardPic3 = "";
    vm.dealerCardPic4 = "";
    vm.dealerCardPic5 = "";
    vm.dealerPlays = function () {
        console.log("Usao je u dealerPlays()");
        vm.dealerCardPic2 = vm.dealerCardPic22
        vm.showDealerPoints = true;;
        vm.totalCardPointsDealer = 0;
        for (var i = 1; i < vm.dealer.length; i++) {
            vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
        }
        while (vm.totalCardPointsDealer <= 16) {
            console.log("Dealer izvlaci kartu");
            var x = Math.floor(Math.random() * vm.cards.length);
            var card = vm.cards.splice(x, 1);

            vm.cardNamesDealer.push(card[0].cardName);
            vm.dealerCardPic3 = "images/cards/" + vm.cardNamesDealer[0] + ".png";
            vm.dealerCardPic4 = "images/cards/" + vm.cardNamesDealer[1] + ".png";
            vm.dealerCardPic5 = "images/cards/" + vm.cardNamesDealer[2] + ".png";
            vm.showCardsArrDealer.push(true);
            vm.showCard3Dealer = vm.showCardsArrDealer[0];
            vm.showCard4Dealer = vm.showCardsArrDealer[1];
            vm.showCard5Dealer = vm.showCardsArrDealer[2];

            console.log("Dealer je izvukao: ", card);

            if (card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") {
                for (var i = 1; i < vm.dealer.length; i++) {
                    if (vm.dealer[i].cardName == "clubsA" || vm.dealer[i].cardName == "diamondsA" || vm.dealer[i].cardName == "heartsA" || vm.dealer[i].cardName == "spadesA") {
                        card[0].cardPoints = 1;
                    }
                }
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsDealer <= 10)) {
                card[0].cardPoints = 11;
            }
            if ((card[0].cardName == "clubsA" || card[0].cardName == "diamondsA" || card[0].cardName == "heartsA" || card[0].cardName == "spadesA") && (vm.totalCardPointsDealer >= 11)) {
                card[0].cardPoints = 1;
            }

            vm.dealer.push(card[0]);

            vm.totalCardPointsDealer = 0;
            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }

            if (vm.totalCardPointsDealer > 21) {
                for (var i = 1; i < vm.dealer.length; i++) {
                    if (vm.dealer[i].cardName == "clubsA" || vm.dealer[i].cardName == "diamondsA" || vm.dealer[i].cardName == "heartsA" || vm.dealer[i].cardName == "spadesA") {
                        vm.dealer[i].cardPoints = 1;
                        break;
                    }
                }
            }

            vm.totalCardPointsDealer = 0;
            for (var i = 1; i < vm.dealer.length; i++) {
                vm.totalCardPointsDealer += vm.dealer[i].cardPoints;
            }

            console.log("Ukupan broj poena Dealera je: " + vm.totalCardPointsDealer);
            if (vm.totalCardPointsDealer == 21) {
                console.log("Dealer je izvukao blackjack");
                vm.dealerBlackjackModal.style.display = "block";        
                vm.dealer[0].blackjack = true;
                vm.dealer[0].srcUserPicture = "images/blackjack/2.png";
            }
        }
    };
    
    vm.modalPlayer1Lost = document.getElementById("player1-lost");
    vm.modalPlayer1Blackjack = document.getElementById("player1-blackjack");
    vm.modalPlayer2Lost = document.getElementById("player2-lost");
    vm.modalPlayer2Blackjack = document.getElementById("player2-blackjack");
    vm.dealerBlackjackModal = document.getElementById("dealer-blackjack");
    vm.modalDouble = document.getElementById("double-modal");
    vm.modalSplit = document.getElementById("split-modal");
    
    vm.closePlayerLost1 = function () {
        vm.modalPlayer1Lost.style.display = "none";        
    }
    vm.closePlayer1Blackjack = function () {
        vm.modalPlayer1Blackjack.style.display = "none";        
    }
    vm.closePlayerLost2 = function () {
        vm.modalPlayer2Lost.style.display = "none";        
    }
    vm.closePlayer2Blackjack = function () {
        vm.modalPlayer2Blackjack.style.display = "none";        
    }
    vm.closeDealerModal = function () {
        vm.dealerBlackjackModal.style.display = "none";                
    }
    vm.closeDoubleModal = function () {
        vm.modalDouble.style.display = "none";        
    }
    vm.closeSplitModal = function () {
        vm.modalSplit.style.display = "none";        
    }
});