let main = document.getElementById("main");
console.log(main);
main.style.display = "block";

let imienazwisko = document.getElementsByClassName("imie")[0];
imienazwisko.innerHTML = `${cookies.getCookie("imie")} ${cookies.getCookie("nazwisko")}`;

console.log(db.getSubordinates());


async function isLogged() {
    const isLoggedIn = await cookies.checkCookies('token');
    return isLoggedIn;
}

async function checkLoginStatus() {
    const isLoggedIn = await isLogged();

    if (!isLoggedIn) {
        cookies.clearCookies();
        utils.redirection('index');
    }
}


setInterval(checkLoginStatus, 5000);
checkLoginStatus();