<?php
session_start();
require_once 'database_connection.php';
$ids = [$_GET['id_user_1'], $_GET['id_user_2'], "0", $_SESSION['id']];
$repetitions = array_count_values($ids);
$id_for_notification = array_search(min($repetitions), $repetitions);
//echo $id_for_notification;
    
$prep_add_friend = $db->prepare("INSERT INTO relationship (id_user_1, id_user_2, status, id_action_user) VALUES (?, ?, ?, ?);");
if ($prep_add_friend->execute([$_GET['id_user_1'], $_GET['id_user_2'], "0", $_SESSION['id']])) {
    $prep_send_notification = $db->prepare("UPDATE user_list SET notification = notification + 1 WHERE id = ?;");
    $prep_send_notification->execute([$id_for_notification]);
}

die (header('Location: ../user_list.php?msg=request_sent'));
?>
