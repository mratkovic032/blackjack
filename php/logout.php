<?php
session_start();
$_SESSION = array();
session_destroy();

die (header('Location: ../index.php?msg=logged_out'));
?>