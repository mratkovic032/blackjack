<?php
session_start();
    
require_once 'database_connection.php';;

$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

$prep = $db->prepare('SELECT * FROM user_list WHERE username=? AND pass=?;');
$prep->execute([$username, $password]);

if ($prep->rowCount() > 0) {
    
    $_SESSION['username'] = $username;
    
    die (header('Location: ../index.php?msg=success'));
} else {
    die (header('Location: ../index.php?msg=failed'));
}

?>
