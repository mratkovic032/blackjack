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
        <?php                
        if (!isset($_GET['id'])) {
            $prep_user = $db->prepare("SELECT * FROM user_list WHERE username = ?;");
            $prep_user->execute([$_SESSION['username']]);
            $res_user = $prep_user->fetchAll(PDO::FETCH_OBJ);            
        } else {
            $prep_user = $db->prepare("SELECT * FROM user_list WHERE id = ?;");
            $prep_user->execute([$_GET['id']]);
            $res_user = $prep_user->fetchAll(PDO::FETCH_OBJ);
        }        
        ?>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="page-header text-center">
                        <h1 onclick="window.open('index.php', '_self');">BLACKJACK</h1>
                        <?php
                        if (isset($_GET["msg"]) && $_GET["msg"] == 'request_sent') {
                            echo "<div id='success_div'>\n";
                            echo "friend request sent\n";
                            echo "</div>\n";
                        }
                        ?>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-2">
                        <div id="profile_img_holder">
                            <?php
                            if ($res_user[0]->picture_path != null) {
                                echo "<img src='" . $res_user[0]->picture_path . "' alt='profile picture'  />\n";                                                                                                
                            } else {
                                echo "<img id='default_profile_pic' src='images/profile_images/profile_blank.jpg' alt='profile picture'/>\n";                                                                                                
                            }
                            ?>
                        </div>
                        <div class="form-group">
                            <?php                            
                            if (!isset($_GET['id'])) {
                                if ($_SESSION['username'] == $res_user[0]->username) {
                                    echo "<button type='submit' name='submit' class='btn btn-default play' style='width: 250px; margin-top: 30px;'>Edit profile</button>\n";
                                }                                                                    
                            } else {
                                $smaller = min($_SESSION['id'], $_GET['id']);
                                $bigger = max($_SESSION['id'], $_GET['id']);
                                $prep_checking_friends = $db->prepare("SELECT * FROM relationship WHERE id_user_1 = ? AND id_user_2 = ?;");
                                $prep_checking_friends->execute([$smaller, $bigger]);
                                if ($prep_checking_friends->rowCount() > 0) {
                                    $res_checking_friends = $prep_checking_friends->fetchAll(PDO::FETCH_OBJ);
                                    if ($res_checking_friends[0]->status == 0 && $res_checking_friends[0]->id_action_user == $_SESSION['id']) {
                                        echo "<a href='#' class='btn btn-default play disabled' style='width: 250px; margin-top: 30px;'>pending request</a>\n";
                                    } else if ($res_checking_friends[0]->status == 0 && $res_checking_friends[0]->id_action_user == $_GET['id']) {
                                        echo "<a href='php/accept_friend.php?id=" . $_GET['id'] . "' class='btn btn-default play' style='width: 250px; margin-top: 30px;'>accept friend</a>\n";
                                    } else if ($res_checking_friends[0]->status == 1) {
                                        echo "<a href='php/remove_friend.php?id=" . $_GET['id'] . "' class='btn btn-default play' style='width: 250px; margin-top: 30px;'>remove friend</a>\n";
                                    }
                                } else {
                                    echo "<a href='php/add_friend.php?id_user_1=" . $smaller ."&id_user_2=" . $bigger ."' class='btn btn-default play' style='width: 250px; margin-top: 30px;'>add friend</a>\n";                                
                                }
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
                <div class="row" style="margin-top: 15px;">
                    <?php 
                    if (!isset($_GET['id'])) {
                        $prep_friend_list_count = $db->prepare("SELECT COUNT(relationship.id) AS 'total_friends' FROM relationship WHERE (id_user_1 = ? OR id_user_2 = ?) AND status = 1;");
                        $prep_friend_list_count->execute([$_SESSION['id'], $_SESSION['id']]);
                        $res_friend_list_count = $prep_friend_list_count->fetchAll(PDO::FETCH_OBJ);      
                    } else {
                        $prep_friend_list_count = $db->prepare("SELECT COUNT(relationship.id) AS 'total_friends' FROM relationship WHERE (id_user_1 = ? OR id_user_2 = ?) AND status = 1;");
                        $prep_friend_list_count->execute([$_GET['id'], $_GET['id']]);
                        $res_friend_list_count = $prep_friend_list_count->fetchAll(PDO::FETCH_OBJ); 
                    }                                                
                    ?>
                    <div class="col-md-8 col-md-offset-2">
                    <?php 
                    if (!isset($_GET['id'])) {
                        ?>
                        <label class="pull-left">you have <span style="color: #d43f3a;"><?php echo $res_friend_list_count[0]->total_friends; ?></span> friends</label>                        
                    <?php
                    } else {
                        ?>
                        <label class="pull-left"><?php echo $res_user[0]->username; ?> has <span style="color: #d43f3a;"><?php echo $res_friend_list_count[0]->total_friends; ?></span> friends</label>                        
                    <?php    
                    }
                    ?>
                    </div>
                    <div class="col-md-8 col-md-offset-2 friend_list_divs">
                        <?php                                                  
                        if (!isset($_GET['id'])) {
                            $prep_friend_list = $db->prepare("SELECT relationship.* FROM relationship WHERE (id_user_1 = ? OR id_user_2 = ?) AND status = 1;");
                            $prep_friend_list->execute([$_SESSION['id'], $_SESSION['id']]);
                            $res_friend_list = $prep_friend_list->fetchAll(PDO::FETCH_OBJ);      
                        } else {
                            $prep_friend_list = $db->prepare("SELECT relationship.* FROM relationship WHERE (id_user_1 = ? OR id_user_2 = ?) AND status = 1;");
                            $prep_friend_list->execute([$_GET['id'], $_GET['id']]);
                            $res_friend_list = $prep_friend_list->fetchAll(PDO::FETCH_OBJ); 
                        }                                                                                                
                        
                        if ($prep_friend_list->rowCount() > 0) {
                            foreach ($res_friend_list as $friend) {
                                if (!isset($_GET['id'])) {
                                    if ($_SESSION['id'] == $friend->id_user_1) {                                        
                                        $id_friend = "2";
                                    } else {
                                        $id_friend = "1";
                                    }                                    
                                    $smaller = min($_SESSION['id'], $friend->id_user_1, $friend->id_user_2);
                                    $bigger = max($_SESSION['id'], $friend->id_user_1, $friend->id_user_2);
                                } else {
                                    if ($_GET['id'] == $friend->id_user_1) {
                                        $id_friend = "2";
                                    } else {
                                        $id_friend = "1";
                                    }
                                    $smaller = min($_GET['id'], $friend->id_user_1, $friend->id_user_2);
                                    $bigger = max($_GET['id'], $friend->id_user_1, $friend->id_user_2);
                                }                                
                                $query = "SELECT relationship.*, user_list.* FROM relationship INNER JOIN user_list ON relationship.id_user_" . $id_friend . " = user_list.id WHERE (id_user_1 = ? AND id_user_2 = ?) AND status = 1;";
//                                echo $query;
                                $prep_friend_info = $db->prepare($query);
                                $prep_friend_info->execute([$smaller, $bigger]);
                                $res_friend_info = $prep_friend_info->fetchAll(PDO::FETCH_OBJ);                                
                                
                                echo "<div style='margin: 10px; display: inline;'>\n";
                                if ($res_friend_info[0]->picture_path != null) {
                                    echo "<a href='profile.php?id=" . $res_friend_info[0]->id . "'><img src='" . $res_friend_info[0]->picture_path . "' class='img_profile_xs profile_friend_list' data-toggle='tooltip' data-placement='top' title='" . $res_friend_info[0]->username . "'></a>\n";
                                } else {
                                    echo "<a href='profile.php?id=" . $res_friend_info[0]->id . "'><img src='images/profile_images/profile_blank.jpg' class='img_profile_xs profile_friend_list' data-toggle='tooltip' data-placement='top' title='" . $res_friend_info[0]->username . "'></a>\n";
                                }                                                                
                                echo "</div>\n";
                            }
                        } else {
                            echo "<p>your friend list is empty, add your first friend <a href='user_list.php'>here</a></p>\n";
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            $(document).ready(function() {                
                $('#success_div').delay(3000).slideUp();                                                                     
                $('.profile_friend_list').tooltip();
            });
        </script>
    </body>
</html>