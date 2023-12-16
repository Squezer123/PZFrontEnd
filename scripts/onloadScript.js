document.addEventListener("DOMContentLoaded", function () {
    var header = document.createElement("header");
    header.innerHTML = '<img src="./assets/pblogo.png" alt="pb logo">';
    var mainElement = document.getElementById("main");
    var logOutButton = document.createElement("button")
    logOutButton.classList.add("logout");
    logOutButton.innerHTML="Logout";
    console.log(cookies.checkCookies("userRole"));
    if(cookies.checkCookies("userRole")){
      console.log("wykonało się");
      logout(logOutButton);
      header.appendChild(logOutButton);
    }
    document.body.insertBefore(header, mainElement,);
  });

