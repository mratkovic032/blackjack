<?php
session_start();
require_once 'php/database_connection.php';
$prep_delete_notifications = $db->prepare("UPDATE user_list SET notification = 0 WHERE username = ?");
$prep_delete_notifications->execute([$_SESSION['username']]);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Blackjack</title>        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">                               
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link href="components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/> 
        <script src="components/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>                     
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
        <link href="css/signup.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="images/blackjack/5.png">
        <script>
            $(document).ready(function() {
                $('#success_div').delay(2000).fadeOut();                         
            });
        </script>
    </head>
    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>                    
                    <a class="navbar-brand" id="big-logo-brand" href="index.php"><img class="img-responsive" id="logo_pic" src="images/blackjack/2.png" alt="Logo" /></a>                      
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="user_list.php">user list</a></li>
                        <li class="dropdown">                                                                                                                                                                        
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"><?php echo $_SESSION['username']; ?>  <span class="caret"></span></a>                            
                            
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="profile.php">your profile</a></li>
                                <li><a href="notification.php">notifications</a></li>
                            </ul>
                        </li>
                        <li><a href="php/logout.php">log out</a></li>
                    </ul>
                </div>                
            </div>
        </nav>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="page-header text-center">
                        <h1 onclick="window.open('index.php', '_self');">BLACKJACK</h1>
                    </div>                    
                </div>                
            </div>
        </div>
    </body>
</html>