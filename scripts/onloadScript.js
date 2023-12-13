document.addEventListener("DOMContentLoaded", function () {
    var header = document.createElement("header");
    header.innerHTML = '<img src="./assets/pblogo.png" alt="pb logo">';
    var mainElement = document.getElementById("main");
    document.body.insertBefore(header, mainElement);
  });