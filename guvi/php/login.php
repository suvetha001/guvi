<?php
$email=$_POST['email'];
$password=$_POST['password'];
$conn = mysqli_connect('localhost','root','','guvi');
if($conn->connect_error){
    die("Connection failure: " . $conn->connect_error);
}
$select = "select * from register where email='$email'";
$result = mysqli_query($conn, $select);
$count = mysqli_num_rows($result);

if ($count >0) {
    $data=$result->fetch_assoc();
    if($data['pass']===$password){
        echo "login successfully";
        header("location: /guvi/profile.html");
        die;
    }
else {
    echo "Invalid password";
}
}
else{
    echo 2;
    exit;  
}
?>