<?php
session_start();
require_once 'database_connection.php';

$prep_check_cards = $db->prepare("SELECT * FROM cards WHERE id_user = ?;");
$prep_check_cards->execute([$_SESSION['id']]);

if ($prep_check_cards->rowCount() > 0) {
    $res_cards = $prep_check_cards->fetchAll(PDO::FETCH_OBJ);
    $c1 = $res_cards[0]->card_1;
    $c2 = $res_cards[0]->card_2;
    $obj = [$c1, $c2];
    
    echo json_encode($obj);
} else {
    echo "nema nista";
}