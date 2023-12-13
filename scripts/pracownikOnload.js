let main = document.getElementById("main");
console.log(main);
main.style.display = "block";

let imienazwisko = document.getElementsByClassName("imie")[0];
imienazwisko.innerHTML = `${cookies.getCookie("imie")} ${cookies.getCookie("nazwisko")}`;