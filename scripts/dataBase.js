var db = {
    sentAchiv(achiv){
        let token = cookies.getCookie('token');
        achiv.forEach(element => {
            fetch('http://localhost:8080/Osiagniecie', {
                method: 'POST',
                headers: {
                  'Accept': '*/*',
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(element)
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  return response.json();
                })
        }); 
    },
    getData(type) {
        let token = cookies.getCookie('token');
        return fetch(`http://localhost:8080/${type}`, {
          method: 'GET',
          headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          return response.json();
        });
    
      },
      putData(type,body) {
        let token = cookies.getCookie('token');
        return fetch(`http://localhost:8080/${type}`, {
          method: 'PUT',
          headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        .then(response => {
          return response.json();
        });
      },
}