<?php
$firstName = $_POST['firstName'];
$userName = $_POST['userName'];
$email = $_POST['email'];
$password = $_POST['password'];

if (!empty($firstName) || !empty($userName) || !empty($email) || !empty($password)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "users";
} else {
    echo "All field are required";
    die();
}
?>