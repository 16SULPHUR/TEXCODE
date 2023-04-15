// ----------------------------Sidebar----------------------------
let droplist = document.getElementById("catagory-list");
let ham = document.getElementById("hamburger");
let sidebar = document.getElementsByClassName("sidebar")[0];
droplist.style.display = "none";
sidebar.style.display = "none";
function drop() {
  if (droplist.style.display == "none") {
    droplist.style.display = "block";
  } else {
    droplist.style.display = "none";
  }
}

function showsidebar() {
  console.log("hii");
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}
