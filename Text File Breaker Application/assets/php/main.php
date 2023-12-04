<?php
    $target_dir = "files/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    //echo $target_file;
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    if(isset($_POST["submit"])) {
        $check = filesize($_FILES["fileToUpload"]["tmp_name"]);
        // getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
          echo "File is all right- " . $check["mime"] . ".";
          $uploadOk = 1;
        } else {
          echo "File is not supported.";
          $uploadOk = 0;
        }
      }
      if($fileType != "xlsx" && $fileType != "csv" && $fileType != "txt"
        && $fileType != "pdf" ) {
        echo "Sorry, only XLSX, JCSV, TXT & PDF files are allowed.";
        $uploadOk = 0;
        }
    if ($uploadOk == 0) {
         echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
        }
?>
