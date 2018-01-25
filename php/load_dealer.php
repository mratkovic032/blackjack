<?php
session_start();
require_once 'database_connection.php';

$prep_load_dealer = $db->prepare("SELECT game_users.id_user, dealer.* "
        . "FROM game_users INNER JOIN (game INNER JOIN dealer ON game.id_dealer = dealer.id) ON game_users.id_game = game.id "
        . "WHERE game_users.id_user = ?;");
$prep_load_dealer->execute([$_SESSION['id']]);
$res_load_dealer = $prep_load_dealer->fetchAll(PDO::FETCH_OBJ);

?>
<img src="images/cards/<?php echo $res_load_dealer[0]->card_1 ?>.png" alt="card" />
<img src="images/cards/<?php echo $res_load_dealer[0]->card_2 ?>.png" alt="card" />