<?php 
session_start();
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
                    <a class="navbar-brand" id="big-logo-brand" href="#myPage"><img class="img-responsive" id="logo_pic" src="images/blackjack/2.png" alt="Logo" /></a>                      
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="user_list.php">user list</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"><?php echo $_SESSION['username']; ?> <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="profile.php">your profile</a></li>
                            </ul>
                        </li>
                        <li><a href="php/logout.php">log out</a></li>
                    </ul>
                </div>                
            </div>
        </nav>
        <?php 
        require_once 'php/database_connection.php';
        $prep_user = $db->prepare("SELECT * FROM user_list WHERE username = ?;");
        $prep_user->execute([$_SESSION['username']]);
        $res_user = $prep_user->fetchAll(PDO::FETCH_OBJ);
        ?>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="page-header text-center">
                        <h1 onclick="window.open('index.php', '_self');">BLACKJACK</h1>
                    </div>                    
                </div>
                <div class="row">                    
                    <div class="col-md-4 col-md-offset-2">
                        <div id="profile_img_holder">
                            <?php
                            if ($res_user[0]->picture_path != null) {
                                echo "<img src='" . $res_user[0]->picture_path . "' alt='profile picture'  />\n";                                                                                                
                            } else {
                                echo "<img src='images/profile_images/profile_blank.jpg' alt='profile picture'  />\n";                                                                                                
                            }
                            ?>
                        </div>
                        <div class="form-group">
                            <?php
                            if ($_SESSION['username'] == $res_user[0]->username) {
                                echo "<button type='submit' name='submit' class='btn btn-default' style='width: 250px; margin-top: 30px;'>Edit profile</button>";
                            } else {
                                echo "<button type='submit' name='submit' class='btn btn-default' style='width: 250px; margin-top: 30px;'>Add friend</button>";                                
                            }
                            ?>                            
                        </div>
                    </div>
                    <div class="col-md-4">
                        <ul style="padding-left: 0px;">
                            <li class="list-group-item"><?php echo $res_user[0]->username; ?></li>
                            <li class="list-group-item"><?php echo $res_user[0]->email; ?></li>
                            <li class="list-group-item"><?php echo number_format($res_user[0]->credit) ?> $</li>
                            <li class="list-group-item"><?php echo $res_user[0]->gender; ?></li>
                            <li class="list-group-item"><?php echo $res_user[0]->birthday; ?></li>
                            <li class="list-group-item"><?php echo $res_user[0]->country; ?></li>
                        </ul>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <?php 
                        
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>