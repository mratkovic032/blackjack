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
        <script src="js/main.js" type="text/javascript"></script>
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
                        <?php 
                        require_once 'php/database_connection.php';
                        $prep_user = $db->prepare("SELECT notification FROM user_list WHERE username = ?;");
                        $prep_user->execute([$_SESSION['username']]);
                        $res_user = $prep_user->fetchAll(PDO::FETCH_OBJ);

                        if ($res_user[0]->notification > 0) {
                            ?>
                        <li><a href="notification.php">friend requests &nbsp;&nbsp;<sup style="color: #f00; font-size: 100%;"><?php echo $res_user[0]->notification ?></sup></a></li>                            
                        <?php
                        } else {
                            ?>
                        <li><a href="notification.php">friend requests</a></li>                            
                        <?php
                        }
                        ?>                        
                        <li><a href="profile.php"><?php echo $_SESSION['username']; ?></a></li> 
                        <li><a href="php/logout.php">log out</a></li>
                    </ul>
                </div>                
            </div>
        </nav>
        <div class="wrapper">
            <div class="container-fluid" style="position: relative;">
                <div class="row">
                    <div class="col-md-4" id="play_buttons">                        
                        <div style="margin: 20px auto 0 auto; width: 50%;">                            
                            <span style="font-size: 20px;">your bet: <span id="bet_amout"></span></span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div style='text-align: center;'>
                            <label style='margin: auto;'>dealer</label>
                        </div>
                        <div class="text-center">
                            <img src="images/cards/clubs6.png" alt=""/>
                            <img src="images/cards/clubsA.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div id="chatbox">
                            <span>chatbox</span><br />
                            <textarea id="chatbox_textarea" rows="3" cols="20"></textarea>
                            <div class="outer">
                                <div id="chatbox_output">

                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="row">
                    <?php
                    $prep_users = $db->prepare("SELECT * FROM game_users WHERE game_users.id_game IN (SELECT game_users.id_game FROM game_users WHERE id_user = ?) ORDER BY id ASC;");
                    $prep_users->execute([$_SESSION['id']]);
                    $res_users = $prep_users->fetchAll(PDO::FETCH_OBJ);
    //                print_r($res_playerss);
                    
                    foreach ($res_users as $user) {
                        $prep_user_info = $db->prepare("SELECT user_list.username, user_list.picture_path, user_list.credit FROM user_list WHERE id = ?;");
                        $prep_user_info->execute([$user->id_user]);
                        $res_user_info = $prep_user_info->fetchAll(PDO::FETCH_OBJ);
                        
                        echo "<div class='col-md-4'>";
                            echo "<div class='col-md-12 text-center'>";
                                echo "<div>";
                                    if ($res_user_info[0]->picture_path != null) {
                                        echo "<img class='img_profile_md' src='" . $res_user_info[0]->picture_path . "' alt='profile picture' /><br />\n";
                                    } else {
                                        echo "<img class='img_profile_md' src='images/profile_images/profile_blank.jpg' alt='profile picture' /><br />\n";
                                    }
                                    echo "<span class='money' style='color: #ff0000;'>" . $res_user_info[0]->username . "</span>";
                                    echo " / <span class='money' style='color: #ff0000;'>" . number_format($res_user_info[0]->credit) . " $</span>\n";
                                    
                                echo "</div>";
                            echo "</div>";
                            echo "<div id='card_container' class='col-md-12 text-center'>";                                         
                            echo "</div>";
                        echo "</div>";
                    }
                    ?>                    
                </div>
                <div class="col-md-12" style="margin-top: 20px;">                    
                    <div class="text-center">                                                                                    
                        <img class="chips" src="images/chips/5.png" alt="chips"/>                            
                        <img class="chips" src="images/chips/10.png" alt="chips"/>                           
                        <img class="chips" src="images/chips/50.png" alt="chips"/>
                        <img class="chips" src="images/chips/100.png" alt="chips"/>
                        <img class="chips" src="images/chips/500.png" alt="chips"/>                            
                    </div>
                    <div class="text-center" style="margin-top: 5px;">
                        <button id="double" class="btn btn-default">double</button>
                        <button id="split" class="btn btn-default">split</button>
                        <button id="hit" class="btn btn-default">hit</button>
                        <button id="stand" class="btn btn-default">stand</button>
                    </div>
                    <div id="ovajdiv"></div>
                </div>
            </div>
        </div>
        
        <!-- modal -->
        <div class="modal fade in">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <p id="modal_header"></p>
                </div>
                <div class="modal-body">
                    <p id="modal_body"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        <script></script>
    </body>
</html> 