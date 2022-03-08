window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1026px)").matches) {
    document.getElementById("projectsimage").src ="images/teslaProjectSection.png"
  } else {
    document.getElementById("projectsimage").src ="images/mockup.png"
  }
});
window.addEventListener("load", function() {
  if (window.matchMedia("(min-width: 1026px)").matches) {
    document.getElementById("projectsimage").src ="images/teslaProjectSection.png"
  } else {
    document.getElementById("projectsimage").src ="images/mockup.png"
  }
});
