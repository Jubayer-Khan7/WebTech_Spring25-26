<?php
require_once '../Model/connection.php';

function loginUser($user){
    //only database
    $conn = dbConnection(); //return conn
    $Query="SELECT * FROM users WHERE usename = '{$user['username']}' AND password = '{$user['password']}'";
   $result = mysqli_query($conn,$Query);
   $count = mysqli_num_rows($result);
if($count>1){
    return false;
}
else{
    return mysqli_fetch_assoc($result); //associative array

}


    }

?>