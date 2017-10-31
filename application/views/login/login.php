<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="vendor/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="vendor/css/login.css">
</head>
<body>
  <div class="container">
  <div class="login-page">
    <h1>Login Form Admin</h1>

    <div class="form">
      <form class="login-form"  method="post" action="login">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
         <?php
          if(isset($data) ==1):
      ?>
       <div class="alert alert-danger">
        <strong>Danger!</strong> Login Fail.
      </div>
      <?php endif; ?>
        <div class="form-group">
          <input type="text" placeholder="username" class="form-control" name="username" required />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="password" name="password" required />
        </div>
        <button style="submit" name="subLogin">login</button>
      </form>
    </div>
  </div>
</div>
</body>
</html>
<script type="text/javascript" src="vendor/js/bootstrap.min.js"></script>
<script type="text/javascript" src="vendor/js/jquery.min.js"></script>