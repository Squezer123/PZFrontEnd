
function pracownikSetup(data){
    cookies.setCookie('userRole', data.rola, 1000);
    cookies.setCookie('token', data.token, 1000);
    let pracownikInfo = data.pracownik;
    if(data.rola !== 'ADMIN'){
        let arr = ['imie','nazwisko','idPracownika'];

        arr.forEach(element => {
            cookies.setCookie(`${element}`, pracownikInfo[element], 1000);
        });
    }
    
}
function redirection(role){
    if(role === "index") window.location.href = 'http://127.0.0.1:5500/index.html'
    else window.location.href = `http://127.0.0.1:5500/${role}Page.html`;
}


function validateLogin() {
  var login = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var data = {
      login: login,
      password: password
  };

  fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      var role = data.rola.toLowerCase();
      if(role === "pracownik");
      {
        pracownikSetup(data);
      }

      
      if (role) {
        pracownikSetup(data);
        redirection(role);
      } else {
          alert('Błąd logowania. Spróbuj ponownie.');
      }
  })
  .catch(error => console.error('Błąd ładowania danych z serwera:', error));
}
