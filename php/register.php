<?php 
if (isset($_POST['submit'])) {
    $db = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    
    $email = htmlspecialchars($_POST['email']);
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);
    $country = htmlspecialchars($_POST['country']);
    $birthday = htmlspecialchars($_POST['birthday']);
    $gender = htmlspecialchars($_POST['gender']);
    $credit = 5000;
    
    if ($password !== $password2) {
        die (header('Location: ../signup.php?msg=pass'));
    } else {
        $prep = $db->prepare('SELECT username FROM user_list WHERE username=?;');
        $prep->execute([$username]);
        
        if ($prep->rowCount() > 0) {
            die (header('Location: ../signup.php?msg=user'));
        } else {
            $prep = $db->prepare('INSERT INTO user_list (username, pass, credit, gender, birthday, country, email) VALUES (?, ?, ?, ?, ?, ?, ?);');
            $prep->execute([$username, $password, $credit, $gender, $birthday, $country, $email]);
            die (header('Location: ../index.php?msg=success_registration'));
        }
    }
}
?>