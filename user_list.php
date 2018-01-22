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
        $prep_user_list = $db->prepare("SELECT * FROM user_list;");
        $prep_user_list->execute();
        $res_user_list = $prep_user_list->fetchAll(PDO::FETCH_OBJ);        
        ?>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="page-header text-center">
                        <h1 onclick="window.open('index.php', '_self');">BLACKJACK</h1>
                        <?php
                        if (isset($_GET["msg"]) && $_GET["msg"] == 'declined') {
                            echo "<div id='success_div'>\n";
                            echo "friend request declined\n";
                            echo "</div>\n";
                        }                        
                        if (isset($_GET["msg"]) && $_GET["msg"] == 'accepted') {
                            echo "<div id='success_div'>\n";
                            echo "friend request accepted\n";
                            echo "</div>\n";
                        }                        
                        if (isset($_GET["msg"]) && $_GET["msg"] == 'request_sent') {
                            echo "<div id='success_div'>\n";
                            echo "friend request sent\n";
                            echo "</div>\n";
                        }                        
                        if (isset($_GET["msg"]) && $_GET["msg"] == 'deleted') {
                            echo "<div id='success_div'>\n";
                            echo "friend deleted\n";
                            echo "</div>\n";
                        }
                        ?> 
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4 text-center">
                        <label style="margin-left: -10px;"><span class="glyphicon glyphicon-search"></span><small> &nbsp;&nbsp;SEARCH</small></label>
                        <input type="text" class="form-control login_inputs text-center" placeholder="username" id='search_user' onkeyup="myFunction()" style="margin: auto;"/>
                    </div>
                </div>
                <div class="row" style="margin-top: 15px;">
                    <div class="table-responsive">
                        <table class="table table-hover" id="user_table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>gender</th>
                                    <th>country</th>                                    
                                    <th>friends</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                            <?php                            
                            foreach ($res_user_list as $user) {
                                $smaller = min($_SESSION['id'], $user->id);                                
                                $bigger = max($_SESSION['id'], $user->id);                                
                                
                                $prep_relationship = $db->prepare("SELECT * FROM relationship WHERE id_user_1 = ? AND id_user_2 = ?;");
                                $prep_relationship->execute([$smaller, $bigger]);
                                
                                
                                if ($user->username != $_SESSION['username']) {
                                    echo "<tr>\n";
                                    echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'>" . $user->id . "</td>\n";
                                    if ($user->picture_path != null) {
                                        echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'><img src='" . $user->picture_path . "' class='img_profile_xs'>&nbsp;&nbsp;" . $user->username . "</td>\n";
                                    } else {
                                        echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'><img src='images/profile_images/profile_blank.jpg' class='img_profile_xs'>&nbsp;&nbsp;" . $user->username . "</td>\n";
                                    }
                                    echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'>" . $user->email . "</td>\n";
                                    echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'>" . $user->gender . "</td>\n";
                                    echo "<td class='clickable_row' href='profile.php?id=" . $user->id . "' style='cursor: pointer;'>" . $user->country . "</td>\n";
                                    if ($prep_relationship->rowCount() > 0) {
                                        $res_relationship = $prep_relationship->fetchAll(PDO::FETCH_OBJ);                                    
                                        
                                        if ($res_relationship[0]->status == 0 && $res_relationship[0]->id_action_user == $_SESSION['id']) {
                                            echo "<td><a class='submit btn btn-default btn-xs disabled' href='#'>pending request</a></td>\n";
                                        } else if ($res_relationship[0]->status == 0 && $res_relationship[0]->id_action_user == $user->id) {
                                            echo "<td><a class='submit btn btn-success btn-xs' href='php/accept_friend.php?id=" . $user->id . "'>accept</a> <a class='submit btn btn-danger btn-xs' href='php/decline_friend.php?id=" . $user->id . "'>decline</a></td>\n";
                                        } else if ($res_relationship[0]->status == 1) {
                                            echo "<td><a class='submit btn btn-danger btn-xs' href='php/remove_friend.php?id=" . $user->id . "'>remove friend</a></td>\n";
                                        }
                                    } else {
                                        echo "<td><a class='submit btn btn-primary btn-xs' href='php/add_friend.php?id_user_1=" . $smaller ."&id_user_2=" . $bigger ."'>add friend</a></td>\n";
                                    }
                                    echo "</tr></a>\n";                                
                                }
                            }
                            ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function() {                            
                $('#success_div').delay(3000).slideUp();                                     
        
                $('.clickable_row').click(function() {
                    window.location = $(this).attr("href");
                    return false;
                });                
            });
            function myFunction() {
                var input, filter, table, tr, td, i;
                input = document.getElementById("search_user");
                filter = input.value.toUpperCase();
                table = document.getElementById("user_table");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        </script>
    </body>
</html>