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
            <div class="container">
                <div class="row" style="margin-bottom: 30px;">
                    <div class="page-header text-center">
                        <h1 onclick="window.open('index.php', '_self');">BLACKJACK</h1>
                    </div>                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover" id="user_table">                        
                        <tbody>
                        <?php         
                        $prep_user_list = $db->prepare("SELECT * FROM user_list;");
                        $prep_user_list->execute();
                        $res_user_list = $prep_user_list->fetchAll(PDO::FETCH_OBJ);        
                        
                        if ($res_user[0]->notification > 0) {                        
                            foreach ($res_user_list as $user) {
                                if ($user->username != $_SESSION['username']) {
                                    $smaller = min($_SESSION['id'], $user->id);                                
                                    $bigger = max($_SESSION['id'], $user->id);
                                    if ($_SESSION['id'] == $user->id) {
                                        $id_user = $user->id;
                                    } else {
                                        $id_user = $user->id;
                                    }

                                    $query = "SELECT * FROM relationship WHERE id_user_1 = ? AND id_user_2 = ? AND status = 0 AND id_action_user = " . $id_user . ";";
                                    $prep_relationship = $db->prepare($query);
                                    $prep_relationship->execute([$smaller, $bigger]);

                                    if ($prep_relationship->rowCount() > 0) {
                                        $res_relationship = $prep_relationship->fetchAll(PDO::FETCH_OBJ);

                                        echo "<tr>\n";
                                        if ($user->picture_path != null) {
                                            echo "<td style='border-bottom-width: 1px;'><img src='" . $user->picture_path . "' alt='profile picture' class='img_profile_xs' /></td>\n";                                                                                                
                                        } else {
                                            echo "<td style='border-bottom-width: 1px;'><img src='images/profile_images/profile_blank.jpg' alt='profile picture' class='img_profile_xs' /></td>\n";                                                                                                
                                        }
                                        echo "<td style='border-bottom-width: 1px;'><a id='notification_links' href='profile.php?id=" . $user->id . "'>" . $user->username . "</a> wants to be friends with you</td>\n";
                                        echo "<td style='border-bottom-width: 1px;'><a class='submit btn btn-success btn-xs' href='php/accept_friend.php?id=" . $user->id . "'>accept</a> <a class='submit btn btn-danger btn-xs' href='php/decline_friend.php?id=" . $user->id . "'>decline</a></td>\n";
                                        echo "</tr>\n";
                                    }
                                }                    
                            }
                        } else {
                            echo "<p style='text-align: center;'>you don't have new friend requests</p>\n";
                        }
                        ?> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>