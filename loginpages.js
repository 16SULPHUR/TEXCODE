// ----------------------------Copy----------------------------
function copy1() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <style>
        * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #eee;
  font-family: Arial, sans-serif;
}

.container {
  width: 400px;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
}

input[type="text"], input[type="password"] {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

    </style>
  </head>
  <body>
    <div class="container">
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password">
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
    <script>
        const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // perform validation
  if(username.value.trim() === '') {
    alert('Username cannot be blank');
  } else if(password.value.trim() === '') {
    alert('Password cannot be blank');
  } else {
    alert('Login successful!');
    form.reset();
  }
});

    </script>
  </body>
</html>
`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy1").innerHTML = "COPIED";
}

function copy2() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Page</title>
  <style>
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #1f1f1f;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
}

input[type="text"], input[type="password"] {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #1f1f1f;
  color: #fff;
}

button[type="submit"] {
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

.message {
  margin-top: 20px;
  text-align: center;
}

#error-message {
  color: red;
}


  </style>
</head>
<body>
  <div class="container">
    <h1>Login</h1>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password">
      <button type="submit" class="btn">Login</button>
    </form>
    <div id="error-message"></div>
  </div>
  <script>
    const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // perform validation
  if(username.value.trim() === '') {
    errorMessage.innerText = 'Username cannot be blank';
  } else if(password.value.trim() === '') {
    errorMessage.innerText = 'Password cannot be blank';
  } else {
    errorMessage.innerText = '';
    // perform login logic here
    alert('Login successful!');
    form.reset();
  }
});

  </script>
</body>
</html>

`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy2").innerHTML = "COPIED";
}

function copy3() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Page</title>
  <style>
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
}

input[type="text"], input[type="password"] {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #1f1f1f;
  color: #fff;
}

button[type="submit"] {
  padding: 10px;
  background-color: #d91e18;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #c0392b;
}

.message {
  margin-top: 20px;
  text-align: center;
}

#error-message {
  color: #3498db;
  text-shadow: 2px 2px 4px #000000;
}



  </style>
</head>
<body>
  <div class="container">
    <form>
      <h1>Login</h1>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password">
      <button type="submit">Login</button>
    </form>
    <div class="message">
      <p id="error-message"></p>
    </div>
  </div>
  <script>
    const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // perform validation
  if(username.value.trim() === '') {
    errorMessage.innerText = 'Username cannot be blank';
  } else if(password.value.trim() === '') {
    errorMessage.innerText = 'Password cannot be blank';
  } else {
    errorMessage.innerText = '';
    // perform login logic here
    alert('Login successful!');
    form.reset();
  }
});

  </script>
</body>
</html>

`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy3").innerHTML = "COPIED";
}
function copy4() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<style>
  body {
    font-family: "Lato", sans-serif;
}



.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
</head>
<body>
  
<!------ Include the above in your HEAD tag ---------->

<div class="sidenav">
         <div class="login-main-text">
            <h2>Application<br> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>
</body>
</html>
`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy3").innerHTML = "COPIED";
}
function copy5() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
<style>
    /*author:starttemplate*/
/*reference site : starttemplate.com*/
body {
  background-image:url('https://i.redd.it/o8dlfk93azs31.jpg');
  background-position:center;
  background-size:cover;
  
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
  font-family: 'Dancing Script', cursive!important;
}

.container {
    padding: 110px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ffffff!important;
    opacity: 1; /* Firefox */
    font-size:18px!important;
}
.form-login {
    background-color: rgba(0,0,0,0.55);
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    color:white;
    box-shadow:0 1px 0 #cfcfcf;
}
.form-control{
    background:transparent!important;
    color:white!important;
    font-size: 18px!important;
}
h1{
    color:white!important;
}
h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}
.text-white{
    color: white!important;
}
.wrapper {
    text-align: center;
}
.footer p{
    font-size: 18px;
}
</style>
</head>
<body>
    

<!--author:starttemplate-->
<!--reference site : starttemplate.com-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords"
          content="unique login form,leamug login form,boostrap login form,responsive login form,free css html login form,download login form">
    <meta name="author" content="leamug">
    <title>Unique Login Form | Bootstrap Templates</title>
    <link href="css/style.css" rel="stylesheet" id="style">
    <!-- Bootstrap core Library -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <!-- Font Awesome-->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>

<!-- Page Content -->
<div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-4 text-center">
            <h1 class='text-white'>Unique Login Form</h1>
              <div class="form-login"></br>
                <h4>Secure Login</h4>
                </br>
                <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username"/>
                </br></br>
                <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password"/>
                </br></br>
                <div class="wrapper">
                        <span class="group-btn">
                            <a href="#" class="btn btn-danger btn-md">login <i class="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
    </br></br></br>
</div>
</body>
</html>

</body>
</html>
`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy3").innerHTML = "COPIED";
}

