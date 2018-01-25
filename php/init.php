<?php
session_start();
require_once 'database_connection.php';

$prep_players = $db->prepare("SELECT user_list.username, user_list.credit, user_list.picture_path, user_list.bet, user_list.points,"
        . "game_users.*, game.*, dealer.* FROM user_list INNER JOIN "
        . "((game_users INNER JOIN game ON game_users.id_game) "
        . "INNER JOIN dealer ON game.id_dealer = dealer.id) ON user_list.id = game_users.id_user;");
$prep_players->execute();

if ($prep_players->rowCount() > 0) {
    $res_players = $prep_players->fetchAll(PDO::FETCH_OBJ);
    
    foreach ($res_players as $player) {        
        $prep_player_cards = $db->prepare("SELECT * FROM cards WHERE id_user = ?;");
        $prep_player_cards->execute([$player->id_user]);
        $res_player_cards = $prep_player_cards->fetchAll(PDO::FETCH_OBJ);
//        print_r($res_player_cards);
        ?>
        <div class='col-md-4'>
            <div class='col-md-12 text-center'>
                <div>
                    <?php if ($player->picture_path != null) { ?>
                        <img class='img_profile_md' src='" . $player->picture_path . "' alt='profile picture' /><br />\
                    <?php } else { ?>
                        <img class='img_profile_md' src='images/profile_images/profile_blank.jpg' alt='profile picture' /><br />
                    <?php } ?>
                    <span class='money' style='color: #ff0000;'><?php echo $player->username; ?></span>
                    <span class='money' style='color: #ff0000;'><?php echo number_format($player->credit); ?> $</span>

                </div>
            </div>
            <div id='card_container_ <?php echo $player->username ?>' class='col-md-12 text-center'>
                <?php foreach ($res_player_cards as $card) {
                    if ($card->card_1 != null) {
                        ?>
                        <img src="images/cards/<?php echo $card->card_1 ?>.png" alt="card" />                
                    <?php    
                    }
                    if ($card->card_2 != null) {
                     ?>
                        <img src="images/cards/<?php echo $card->card_2 ?>.png" alt="card" />                     
                    <?php         
                    }
                    if ($card->card_3 != null) {
                        ?>
                        <img src="images/cards/<?php echo $card->card_3 ?>.png" alt="card" />                
                    <?php    
                    }
                    if ($card->card_4 != null) {
                        ?>
                        <img src="images/cards/<?php echo $card->card_4 ?>.png" alt="card" />                
                    <?php    
                    }
                    if ($card->card_5 != null) {
                        ?>
                        <img src="images/cards/<?php echo $card->card_5 ?>.png" alt="card" />                
                    <?php    
                    }
                    ?>
                <?php
                } ?>                                
            </div>
        </div>
    <?php    
    }
} else {
    echo "Nema nikog za stolom!";
}
