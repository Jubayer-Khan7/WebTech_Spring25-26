<?php
session_start();
require_once "../Model/users.php";

function loginController(){
$username = trim($_POST['username']);
$password = trim($_POST['password']);

$user = [
    "username" => $username,
    "password" => $password
];
$status = loginUser($user);
 if($status){
    $_SESSION['username'] = $status['usename'];
    $_SESSION['email'] = $status['email'];
    $_SESSION['gender'] = $status['gender'];
    $_SESSION['password'] = $status['password'];
    $_SESSION['logged_in'] = true;
    //print_r($_SESSION);
    header('location:../View/dashboard.php');
    exit();
 }
 else {
    echo"Invalid Credential";
 }

}
if($_SERVER['REQUEST_METHOD'] == "POST"){
    loginController();
}
else{
    echo"invalid";
}

?>