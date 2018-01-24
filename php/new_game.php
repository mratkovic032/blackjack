<?php
session_start();
require_once 'database_connection.php';
$prep_id_game = $db->prepare('SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?;');
$prep_id_game->execute(['blackjack', 'game']);
$res_id_game = $prep_id_game->fetchAll(PDO::FETCH_OBJ);

$prep_id_dealer = $db->prepare('SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?;');
$prep_id_dealer->execute(['blackjack', 'dealer']);
$res_id_dealer = $prep_id_dealer->fetchAll(PDO::FETCH_OBJ);

$prep_check_games = $db->prepare("SELECT * FROM game;");
$prep_check_games->execute();

if ($prep_check_games->rowCount() > 0) {
    $res_check_games = $prep_check_games->fetchAll(PDO::FETCH_OBJ);
    $sat;
    foreach ($res_check_games as $game) {
        if ($game->seats_taken < 3) {
            $prep_sit_on_table = $db->prepare("UPDATE game SET seats_taken = seats_taken + 1 WHERE id = ?;");
            $prep_sit_on_table->execute([$game->id]);            
            
            $sat = true;            
            
            $prep_cards = $db->prepare("INSERT INTO cards (id_user) VALUES (?);");
            $prep_cards->execute([$_SESSION['id']]);
            
            $prep_link_game_user = $db->prepare("INSERT INTO game_users (id_game, id_user, move) VALUES (?, ?, ?);");
            $prep_link_game_user->execute([$game->id, $_SESSION['id'], 0]);
        } else {
            $sat = false;
        }
    }
    if ($sat == false) { 
        $prep_dealer = $db->prepare("INSERT INTO dealer () VALUES ();");
        $prep_dealer->execute();
        
        $prep_cards = $db->prepare("INSERT INTO cards (id_user) VALUES (?);");
        $prep_cards->execute([$_SESSION['id']]);
        
        $prep_new_game = $db->prepare("INSERT INTO game (seats_taken) VALUES (1, ?);");
        $prep_new_game->execute([$res_id_dealer[0]->AUTO_INCREMENT]);        
        
        $prep_link_game_user = $db->prepare("INSERT INTO game_users (id_game, id_user, move) VALUES (?, ?, ?);");
        $prep_link_game_user->execute([$res_id_game[0]->AUTO_INCREMENT, $_SESSION['id'], 1]);
    }
} else {
    $prep_dealer = $db->prepare("INSERT INTO dealer () VALUES ();");
    $prep_dealer->execute();
    
    $prep_cards = $db->prepare("INSERT INTO cards (id_user) VALUES (?);");
    $prep_cards->execute([$_SESSION['id']]);
    
    $prep_new_game = $db->prepare("INSERT INTO game (seats_taken, id_dealer) VALUES (1, ?);");
    $prep_new_game->execute([$res_id_dealer[0]->AUTO_INCREMENT]);
    
    $prep_link_game_user = $db->prepare("INSERT INTO game_users (id_game, id_user, move) VALUES (?, ?, ?);");
    $prep_link_game_user->execute([$res_id_game[0]->AUTO_INCREMENT, $_SESSION['id'], 1]);      
}


die (header('Location: ../play.php'));
