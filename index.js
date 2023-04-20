// ----------------------------Sidebar----------------------------
// let droplist = document.getElementById("catagory-list");
let ham = document.getElementById("hamburger");
let sidebar = document.getElementsByClassName("sidebar")[0];
// droplist.style.display = "none";
sidebar.style.display = "none";
// function drop() {
//   if (droplist.style.display == "none") {
//     droplist.style.display = "block";
//   } else {
//     droplist.style.display = "none";
//   }
// }

function showsidebar() {
  console.log("hii");
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}
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
  document.getElementById("copy4").innerHTML = "COPIED";
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
  document.getElementById("copy5").innerHTML = "COPIED";
}
function copy6() {
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
  document.getElementById("copy6").innerHTML = "COPIED";
}
function copy7() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html>
<head>
	<title>Navbar Example</title>
	<style>
        header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #222;
  color: #fff;
  z-index: 9999;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.menu ul {
  display: flex;
  list-style: none;
}

.menu li {
  margin-left: 20px;
}

.menu a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  transition: all 0.3s ease;
  position: relative;
}

.menu a:hover {
  color: #f00;
}

.menu a::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #f00;
  transition: all 0.3s ease;
}

.menu a:hover::before {
  width: 100%;
}

.toggle {
  display: none;
  cursor: pointer;
}

.toggle span {
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background-color: #fff;
  transition: all 0.3s ease;
}

.toggle span:nth-child(2) {
  width: 20px;
}

@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  .toggle {
    display: block;
  }

  .toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .menu.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    z-index: 999;
    opacity: 0;
   
     }
    </style>
</head>
<body>
	<header>
		<nav>
			<div class="logo">
				<a>Logo</a>
			</div>
			<div class="menu">
				<ul>
					<li><a>Home</a></li>
					<li><a>About</a></li>
					<li><a>Services</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
			<div class="toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	</header>
</body>
</html>



`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy7").innerHTML = "COPIED";
}

// -----------------------SLIDESHOW-----------------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
