<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        Enter Your Fav Color : <input type="text" name="favcolor">
        <input type="submit" name="submit" value="Check now">
    </form>

    <p>
        <?php
            if(isset($_POST['submit'])){
                $favcolor = $_POST['favcolor'] ;
            switch($favcolor){
                case "blue": echo'your fav color is blue' ;
                            break;
                case "red": echo'your fav color is red' ;
                            break;
                case "black": echo'your fav color is black' ;
                            break;
                default: echo 'Sorry, I am not sure about your fav color' ;
            }
            }
        ?>
    </p>
</body>
</html>