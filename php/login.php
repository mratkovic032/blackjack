<?php
session_start();
    
require_once 'database_connection.php';;

$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

$prep = $db->prepare('SELECT * FROM user_list WHERE username=? AND pass=?;');
$prep->execute([$username, $password]);

if ($prep->rowCount() > 0) {
    $res = $prep->fetchAll(PDO::FETCH_OBJ);
    $_SESSION['username'] = $username;
    $_SESSION['id'] = $res[0]->id;
    $_SESSION['credit'] = $res[0]->credit;   
    
    die (header('Location: ../index.php?msg=success'));
} else {
    die (header('Location: ../index.php?msg=failed'));
}

?>
