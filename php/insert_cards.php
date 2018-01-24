<?php
session_start();
echo "radi";
$card_1 = $_POST['card_1'];
$card_2 = $_POST['card_2'];

$card_1_name = $card_1[0]["cardName"];
$card_2_name = $card_2[0]["cardName"];

//print_r($card_1);   
//print_r($card_2);
//
//echo $card_1_name;

require_once 'database_connection.php';

$prep_insert_cards = $db->prepare("UPDATE cards SET card_1 = ?, card_2 = ? WHERE id_user = ?;");
$prep_insert_cards->execute([$card_1_name, $card_2_name, $_SESSION['id']]);