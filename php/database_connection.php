<?php
$db = new PDO('mysql:host=localhost;dbname=blackjack;charset=utf8', 'root', '');
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);