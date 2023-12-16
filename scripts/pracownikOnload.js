let main = document.getElementById("main");
console.log(main);
main.style.display = "block";

let imienazwisko = document.getElementsByClassName("imie")[0];
imienazwisko.innerHTML = `${cookies.getCookie("imie")} ${cookies.getCookie("nazwisko")}`;
var podwladni = [];




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

async function checkSubordinates(){
    podwladni = await db.getData('pracownicy_przelozonego');
    if(podwladni.length > 0){
        document.getElementsByClassName("off")[0].style.display = "block";
    }
}

checkSubordinates()
setInterval(checkLoginStatus, 5000);
