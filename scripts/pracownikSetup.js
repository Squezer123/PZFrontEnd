function pracownikSetup(data){
    cookies.setCookie('userRole', data.rola, 5);
    cookies.setCookie('token', data.token, 5);
    let pracownikInfo = data.pracownik;
    let arr = ['imie','nazwisko','idPracownika'];

    arr.forEach(element => {
        console.log(pracownikInfo[element]);
        cookies.setCookie(`${element}`, pracownikInfo[element], 5);
        console.log(cookies.getCookie(element));
    });
}



