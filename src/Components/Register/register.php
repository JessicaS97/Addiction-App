<?php
    $firstName = $_POST['firstName'];
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'users');
    if ($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into registration(firstName, userName, email, password)
            values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $firstName, $userName, $email, $password);
        $stmt->execute();
        echo "Registration was successful";
        $stmt->close();
        $conn->close();
    }
?>