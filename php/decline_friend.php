<?php
session_start();
require_once 'database_connection.php';
$smaller = min($_SESSION['id'], $_GET['id']);
$bigger = max($_SESSION['id'], $_GET['id']);

$prep_remove_friend = $db->prepare("DELETE FROM relationship WHERE id_user_1 = ? AND id_user_2 = ? AND status = 0;");
if ($prep_remove_friend->execute([$smaller, $bigger])) {
    $prep_remove_notification = $db->prepare("UPDATE user_list SET notification = notification - 1 WHERE id = ? AND notification > 0;");
    $prep_remove_notification->execute([$_SESSION['id']]);
}

die (header('Location: ../user_list.php?msg=declined'));
?>