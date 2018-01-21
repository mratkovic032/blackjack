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
        $prep_user_list = $db->prepare("SELECT * FROM user_list;");
        $prep_user_list->execute();
        $res_user_list = $prep_user_list->fetchAll(PDO::FETCH_OBJ);
        ?>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4 text-center">
                        <label style="margin-left: -10px;"><span class="glyphicon glyphicon-search"></span><small> &nbsp;&nbsp;SEARCH USER</small></label>
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

                                echo "<tr>\n";
                                echo "<td class='por'>" . $user->id . "</td>\n";
                                if ($user->picture_path != null) {
                                    echo "<td><img src='" . $user->picture_path . "' class='img_prifile_xs'>&nbsp;&nbsp;" . $user->username . "</td>\n";
                                } else {
                                    echo "<td><img src='images/profile_images/profile_blank.jpg' class='img_prifile_xs'>&nbsp;&nbsp;" . $user->username . "</td>\n";
                                }
                                echo "<td class='por'>" . $user->email . "</td>\n";
                                echo "<td class='por'>" . $user->gender . "</td>\n";
                                echo "<td class='por'>" . $user->country . "</td>\n";                                                                                                
                                echo "</tr> \n";                                
                            }
                            ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script>
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