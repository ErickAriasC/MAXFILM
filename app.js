document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navBar = document.querySelector(".content-nav-bar");
  
    menuButton.addEventListener("click", function () {
      navBar.classList.toggle("active");
    });
  });