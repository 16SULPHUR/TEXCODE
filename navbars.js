function copy1() {
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
  height: 60px;
  background-color: #f1f1f1;
  color: #333;
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
  color: #333;
  font-size: 18px;
}

.toggle {
  display: none;
  cursor: pointer;
}

.toggle span {
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background-color: #333;
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
    transform: rotate(900deg) translate(0px, 0px);
  }
}

.dark {
  background-color: #333;
  color: #f1f1f1;
}

.dark .menu a {
  color: #f1f1f1;
}

.dark .toggle span {
  background-color: #f1f1f1;
}
    </style>
</head>
<body>
	<header>
		<nav>
			<div class="logo">
				<a href="#">Logo</a>
			</div>
			<div class="menu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div class="toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	</header>

	<script>
        const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

toggle.addEventListener('click', function toogle(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
  header.classList.toggle('dark');
});
function toogle(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
  header.classList.toggle('dark');
}
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
  document.getElementById("copy2").innerHTML = "COPIED";
}

function copy3() {
  console.log("HIi");
  let copyText = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  
<div class="container">
  <h3>Right Aligned Navbar</h3>
  <p>The .navbar-right class is used to right-align navigation bar buttons.</p>
</div>

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
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  
<div class="container">
  <h3>Right Aligned Navbar</h3>
  <p>The .navbar-right class is used to right-align navigation bar buttons.</p>
</div>

</body>
</html>

`;
  navigator.clipboard.writeText(copyText);
  //  alert("Source code copied to clipboard");
  document.getElementById("copy4").innerHTML = "COPIED";
}
