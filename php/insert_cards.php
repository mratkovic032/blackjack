<?php
session_start();

$card_1 = $_POST['card_1'];
$card_2 = $_POST['card_2'];
$card_1_dealer = $_POST['card_1_dealer'];
$card_2_dealer = $_POST['card_2_dealer'];

$card_1_dealer_name = $card_1_dealer[0]["cardName"];
$card_2_dealer_name = $card_2_dealer[0]["cardName"];
$card_1_name = $card_1[0]["cardName"];
$card_2_name = $card_2[0]["cardName"];
//json_decode($json);
//print_r($card_1);   
//print_r($card_2);
//
//echo $card_1_name;

require_once 'database_connection.php';

$prep_dealer_check = $db->prepare("SELECT game_users.id_user, dealer.card_1, dealer.card_2, dealer.id "
        . "FROM game_users INNER JOIN (game INNER JOIN dealer ON game.id_dealer = dealer.id) ON game_users.id_game = game.id "
        . "WHERE game_users.id_user = ?;");
$prep_dealer_check->execute([$_SESSION['id']]);
$res_dealer_check = $prep_dealer_check->fetchAll(PDO::FETCH_OBJ);

if ($res_dealer_check[0]->card_1 == null) {
    $prep_insert_cards_dealer = $db->prepare("UPDATE dealer SET card_1 = ?, card_2 = ? WHERE id = ?;");
    $prep_insert_cards_dealer->execute([$card_1_dealer_name, $card_2_dealer_name, $res_dealer_check[0]->id]);
}

$prep_insert_cards = $db->prepare("UPDATE cards SET card_1 = ?, card_2 = ? WHERE id_user = ?;");
$prep_insert_cards->execute([$card_1_name, $card_2_name, $_SESSION['id']]);