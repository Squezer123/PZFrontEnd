

function redirection(role,id){
    window.location.href = `http://127.0.0.1:5500/${role}Page.html`;
    
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
      console.log(role)
      if(role === "pracownik");
      {
        console.log(role)
        pracownikSetup(data);
      }

      
      if (role) {
          redirection(role);
      } else {
          alert('Błąd logowania. Spróbuj ponownie.');
      }
  })
  .catch(error => console.error('Błąd ładowania danych z serwera:', error));
}
