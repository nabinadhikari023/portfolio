<?php
    session_start();
    include("database.php")
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="icon" href="assets/images/tab-icon.jpg">
    <title>Login</title>
        
</head>
<body>
    
     <div class="wrapper">
        <div class="logo">
            <img src="assets/images/tab-icon.jpg" alt="">
        </div>
        <div class="text-center mt-4 name">
        AIPedia
        </div>
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post" class="p-3 mt-3" id="login-form">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password">
            </div>
            <button type="submit" name="login" class="btn mt-3" form="login-form">Login</button>
        </form>
        <div class="text-center fs-6 ">
            <a href="#">Forget password?</a>
            <br><a class="fs-7">or</a>
            <br><a class="fs-8" href="registration.php">Sign up</a>
        </div>
    </div>
        
    <script src="index.js"></script>
    </body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $username = filter_input(INPUT_POST, "userName" ,FILTER_SANITIZE_SPECIAL_CHARS );
        $password = filter_input(INPUT_POST, "password" ,FILTER_SANITIZE_SPECIAL_CHARS );
        if(empty($username)
        ){
            echo "Please enter a username";
            //header("Location:home.php");
        }
        elseif(empty($password)){

            echo"Please enter a password";
        }
        else{
            
            $_SESSION["username"] = $username;
            $_SESSION["password"] = $password;
            $hashed_entered_password = password_hash($password, PASSWORD_DEFAULT);

            $sql = "SELECT * FROM user_list where login_id = ('$username')"; 
            

            $result = mysqli_query($conn, $sql );
           
            
            if(mysqli_num_rows($result) >0){
                $hash = mysqli_fetch_assoc($result);
                // echo $hash["password"] ."<br>";
                // echo $hash["login_id"] ."<br>";
                // echo $hashed_entered_password ."<br>";
                // echo $username ."<br>";
                if(password_verify($password, $hash["password"]) && $hash["login_id"] == $username){

                    header("Location: home.php");
                }
                else{
                    echo "The entered credentials doesn't exist";
                }
               }
            }
    }
    

mysqli_close($conn);
?>
