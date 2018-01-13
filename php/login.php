<?php
session_start();
    
$db = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'root', '');
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

$prep = $db->prepare('SELECT * FROM user_list WHERE username=? AND pass=?;');
$prep->execute([$username, $password]);

if ($prep->rowCount() > 0) {
    $res = $prep->fetchAll();
    $_SESSION['username'] = $username;
    
    die (header('Location: ../index.php?msg=success'));
} else {
    die (header('Location: ../index.php?msg=failed'));
}

?>
