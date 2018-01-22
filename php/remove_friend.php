<?php
session_start();
require_once 'database_connection.php';
$smaller = min($_SESSION['id'], $_GET['id']);
$bigger = max($_SESSION['id'], $_GET['id']);

$prep_remove_friend = $db->prepare("DELETE FROM relationship WHERE id_user_1 = ? AND id_user_2 = ?;");
$prep_remove_friend->execute([$smaller, $bigger]);

die (header('Location: ../user_list.php?msg=deleted'));
?>
