<?php 
session_start();
if (!isset($_SESSION['username'])) {
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
        <div class="wrapper">
            <div class="container">
                <div class="row login">
                    <div class="page-header text-center">
                        <h1 onclick="$(this).click(function() {window.location.href = 'index.php'; return false;});">BLACKJACK</h1>
                    </div>
                    <form action="php/login.php" method="POST">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'failed') {
                                echo "<div class='warning_div'>\n";
                                echo "<span class='warning'>wrong username or password, please try again.</span><br />\n";
                                echo "if you forgot your password click <a href='php/forgot_pass.php'>here</a>\n";
                                echo "</div>\n";
                            }
                            ?>
                            <input type="text" class="form-control login_inputs" name="username" placeholder="username" />
                            <br />
                            <input type="password" class="form-control login_inputs" name="password" placeholder="password" />
                            <br />
                            <button class="login_button btn btn-block" type="submit" name="submit">log in</button>
                            <br />
                            <div class="additional_options">
                                need an accoutn? <a href="signup.php">sign up</a>                            
                            </div>
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'logged_out') {
                                echo "<div id='success_div'>\n";
                                echo "you have successfully logged out\n";
                                echo "</div>\n";
                            }
                            ?>
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'success_registration') {
                                echo "<div id='success_div'>\n";
                                echo "you have registered successfully\n";
                                echo "</div>\n";
                            }
                            ?>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
<?php
    exit;
}
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
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"><?php echo $_SESSION['username']; ?> <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">your profile</a></li>
                            </ul>
                        </li>
                        <li><a href="php/logout.php">log out</a></li>
                    </ul>
                </div>                
            </div>
        </nav>
        <div class="wrapper">
            <div class="container">
                <div class="row login">
                    <div class="page-header text-center">
                        <h1 onclick="$(this).click(function() {window.location.href = 'index.php'; return false;});">BLACKJACK</h1>
                    </div>                    
                        <div class="col-md-4 col-md-offset-4 text-center">                            
                            <button class="play btn btn-block" >PLAY</button>
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'success') {
                                echo "<div id='success_div'>\n";
                                echo "you have successfully logged in\n";
                                echo "</div>\n";
                            }
                            ?>                                                      
                        </div>                    
                </div>
            </div>
        </div>
    </body>
</html>     