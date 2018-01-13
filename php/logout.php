<?php
session_start();

session_destroy();

die (header('Location: ../index.php?msg=logged_out'));
?>