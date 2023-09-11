<?php
    
    include("database.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="icon" href="assets/images/tab-icon.jpg">
    <title>Registration</title>
    <style class="background">
        body {
            background-image: url('assets/images/body-image.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
        }
        </style>
        
</head>
<body>
    
     <div class="wrapper">
        <div class="logo">
            <img src="assets/images/tab-icon.jpg" alt="">
        </div>
        <div class="text-center mt-4 name">
        AIPedia
        </div>
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post" class="p-3 mt-3 ">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password">
            </div>
            <div class="submit-button">
                <input type="submit" name="submit" value="Register" style="display:flex; margin: auto; height:50px; width:50%; justify-content:center; align-items: center; border-radius: 25px; background-color:aquamarine">
            </div>

            
            <!-- <button class="btn mt-3">Login</button> -->
        </form>
        <div class="text-center fs-6 align-items-center">
            <!-- <a href="#">Forget password?</a> -->
            <br><a class="fs-7" style=" margin: 0px 20px 20px 50px">or</a>
            <br><a class="fs-8" href="login.php" style="font-size: 1.4rem; margin: 0px 30px 20px 30px">Login</a>
        </div>
    </div>
        
    <script src="index.js"></script>
    </body>
</html>

<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $username = filter_input(INPUT_POST, "userName", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        if(empty($username)){
            echo "Please enter a username";
            }
        elseif(empty($password)){
            echo "Please enter a password";
        }
    else{
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO user_list(login_id, password) VALUES ('$username', '$hash')";
        try{
            mysqli_query($conn, $sql);
            echo "You are now registered";
        }
        catch(mysqli_sql_exception){
            echo "That is username is already taken";
        }
        
    }
    mysqli_close($conn);
}
?>