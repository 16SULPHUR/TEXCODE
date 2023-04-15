function copy1() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


    </style>
</head>
<body>
    <div class="container">
  <form id="registration-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required>
    </div>
    <button type="submit">Register</button>
  </form>
</div>



<script>
    const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
  } else {
    // send registration data to server
    alert("Registration successful!");
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: black;
        }
        .container {
  max-width: 400px;
  margin: 0 auto;
}

.card {
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-top: 0;
  font-weight: 700;
  color: #fa0000;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #9476d8;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #fa0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

    </style>
</head>
<body>
    <div class="container">
  <div class="card">
    <h1>Register</h1>
    <form id="registration-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</div>




<script>
    const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
  } else {
    // send registration data to server
    alert("Registration successful!");
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
  max-width: 600px;
  margin: 40px auto;
}

.card {
  background-color: #f0f0f0;
  color: #222;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-top: 0;
  font-weight: bold;
  font-size: 36px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #222;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  padding: 15px 30px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #444;
}

@media only screen and (max-width: 600px) {
  .card {
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
  }
  
 input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  button[type="submit"] {
    font-size: 16px;
  }
}




    </style>
</head>
<body>
    <div class="container">
  <div class="card">
    <h1>Register</h1>
    <form id="registration-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input type="text" id="state" name="state" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</div>




<script>
    const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
  } else {
    // send registration data to server
    alert("Registration successful!");
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