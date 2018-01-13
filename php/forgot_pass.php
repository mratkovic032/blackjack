<?php

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Blackjack</title>        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <link href="../components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>         
        <script src="../components/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>                
        <link href="../css/main.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="../images/blackjack/5.png">
        <script>
            $(document).ready(function() {
                $('#logged_out_div').delay(2000).fadeOut();
                $('#success_registration_div').delay(2000).fadeOut();
            });
        </script>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="row login">
                    <div class=" page-header text-center">
                        <h1 onclick="$(this).click(function() {window.location.href = '../index.php'; return false;});">BLACKJACK</h1>
                    </div>
                </div>
                <div class="row">
                    <form action="" method="POST">
                        <div class="col-md-8 col-md-offset-2 text-center">                                                       
                            <input type="email" class="form-control login_inputs" name="email" placeholder="enter your email" />
                            <br />
                            <button class="login_button btn btn-block" type="submit" name="submit">submit</button>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </body>
</html>
