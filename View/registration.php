<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <h1>Registration Page</h1>
    <p>Please fill the below details to register.</p>
  
    <form action="../Controller/registrationController.php" method="post">
     <label for="username">Username:</label>
   <input type="text" id="username" name="username" required>
   <br> <br>
   <label for="email">Email</label>
   <input type="email" name="email" id="email" required>
   <br> <br>
   <label for="gender">Gender</label>
   <input type="radio" name="Gender"  value="Male">
   <label for="male">Male</label>
   <input type="radio" name="Gender"  value="Female">
   <label for="female">Female</label>
   <input type="radio" name="Gender" id="Other">
   <label for="Other">Other</label>
   <br> <br>
   <label for="password">Password:</label>
   <input type="password" name="password" id="password" required>
   <br> <br>
   <input type="submit" value="Submit">




    </form>

</body>
</html>