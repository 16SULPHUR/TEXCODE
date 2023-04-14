// ----------------------------Sidebar----------------------------
let droplist = document.getElementById("catagory-list");
let ham = document.getElementById("hamburger");
let sidebar = document.getElementsByClassName("sidebar")[0];
droplist.style.display = "none";
sidebar.style.display = "none";
function drop() {
    if(droplist.style.display == "none")
    {
        droplist.style.display = "block"; 
      }
    else{
      droplist.style.display = "none";
    }
}

function showsidebar() {
    console.log("hii")
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
    document.getElementById("copy1").innerHTML = "COPIED"
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
  document.getElementById("copy4").innerHTML = "COPIED";
}
function copy5() {
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
  document.getElementById("copy6").innerHTML = "COPIED";
}
function copy7() {
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