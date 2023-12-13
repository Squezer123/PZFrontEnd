function logout(button){
    button.addEventListener("click",() =>{
        cookies.clearCookies();
        window.location.href = `http://127.0.0.1:5500`;
    })
}
