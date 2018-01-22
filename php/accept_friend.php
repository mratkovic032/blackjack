<?php
session_start();
require_once 'database_connection.php';

$smaller = min($_SESSION['id'], $_GET['id']);
$bigger = max($_SESSION['id'], $_GET['id']);

$prep_accept_friend = $db->prepare("UPDATE relationship SET status = 1, id_action_user = ? WHERE id_user_1 = ? AND id_user_2 = ?;");
if ($prep_accept_friend->execute([$_SESSION['id'], $smaller, $bigger])) {
    $prep_remove_notification = $db->prepare("UPDATE user_list SET notification = notification - 1 WHERE id = ? AND notification > 0;");
    $prep_remove_notification->execute([$_SESSION['id']]);
}

die (header('Location: ../user_list.php?msg=accepted'));

?>
