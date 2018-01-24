<?php
session_start();
require_once 'database_connection.php';

$prep_user = $db->prepare("SELECT * FROM user_list WHERE id = ?;");
$prep_user->execute([$_SESSION['id']]);

if ($prep_user->rowCount() > 0) {
    $res_user = $prep_user->fetchAll(PDO::FETCH_OBJ);
    
?>
<img src='images/cards/<?php echo $c1 ?>.png' alt='card' />
<img src='images/cards/<?php echo $c2 ?>.png' alt='card' />
<?php
    
} else {
    echo "nema nista";
}
