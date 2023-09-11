<<<<<<< HEAD
<?php
$file_name = $_FILES['file']['name'];
$tmp_name = $_FILES['file']['tmp_name'];
$file_up_name = time().$file_name;
move_uploaded_file($tmp_name,"php/files/".$file_up_name);
?>
=======
<?php
$file_name = $_FILES['file']['name'];
$tmp_name = $_FILES['file']['tmp_name'];
$file_up_name = time().$file_name;
move_uploaded_file($tmp_name,"php/files/".$file_up_name);
?>
>>>>>>> e820b9e9c331a8e8a64bbc4edd4292e6ff689680
