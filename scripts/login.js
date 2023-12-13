// script.js

function setCookie(name, value, minutes) {
    var expires = '';
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

function redirection(role){
    window.location.href = `http://127.0.0.1:5500/${role}Page.html`;
    setCookie('userRole', role, 5);
}


function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    fetch('users.json')
      .then(response => response.json())
      .then(data => {
        var user = data.users.find(user => user.username === username && user.password === password);
        let role = user.role;

        if (user) {
            switch(role){
                case "admin":
                    redirection(role)
                    break;
                case "user":
                    redirection(role)
                    break;
                case "supervisor":
                    redirection(role);
                    break;
            }
          
        } else {
          alert('Błąd logowania. Spróbuj ponownie.');
        }
      })
      .catch(error => console.error('Błąd ładowania danych z pliku JSON:', error));
  }
  