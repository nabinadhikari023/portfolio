<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    This is the home page <br>
    <form action="home.php" method="post">
        <input type="submit" name="logout" value="Logout">
    </form>
    <a href="#"></a>
</body>
</html>
<?php
    if(isset($_POST["logout"])){
        session_destroy();
        header("Location: login.php");
    }
?>