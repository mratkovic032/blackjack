<?php 
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
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="row login">
                    <div class="page-header text-center">
                        <h1 onclick="$(this).click(function() {window.location.href = 'index.php'; return false;});">BLACKJACK</h1>
                    </div>
                    <form action="php/register.php" method="POST">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'pass') {
                                echo "<div class='warning_div_sign_up'>\n";
                                echo "<span class='warning'>passwords do not match</span>\n";                                
                                echo "</div>\n";
                            }
                            ?>
                            <?php
                            if (isset($_GET["msg"]) && $_GET["msg"] == 'user') {
                                echo "<div class='warning_div_sign_up'>\n";
                                echo "<span class='warning'>that username already taken, please select different username</span>\n";                                
                                echo "</div>\n";
                            }
                            ?>
                            <input type="email" class="form-control login_inputs" name="email" placeholder="email" />
                            <br />
                            <input type="text" class="form-control login_inputs" name="username" placeholder="username" />
                            <br />
                            <input type="password" class="form-control login_inputs" name="password" placeholder="password" />
                            <br />
                            <input type="password" class="form-control login_inputs" name="password2" placeholder="re-type password" />
                            <br />
                            <input type="text" class="form-control login_inputs" name="country" placeholder="country" />
                            <br />
                            <input type="date" class="form-control login_inputs" name="birthday" />
                            <br />
                            <select name="gender">
                                <option>gender</option>
                                <option value="Male">male</option>
                                <option value="Female">female</option>
                            </select><br /><br />
                            <button class="login_button btn btn-block" type="submit" name="submit">sign up</button>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
<?php
    exit;
} else {
    die (header('Location: index.php'));
}
?>

            