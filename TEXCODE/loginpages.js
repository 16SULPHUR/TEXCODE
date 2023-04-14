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

