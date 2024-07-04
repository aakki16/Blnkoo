/** Topoffcanvas **/
const mobile_nav = document.querySelector(".off-canvas-active");
const nav_header = document.querySelector(".off-canvas");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

function hide() {
  var x = document.getElementById("off-canvas-d");
    x.style.visibility = "hidden";
}

/** Sidebar **/
function openNav(){
  document.getElementById("myNav").style.width = "70%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
