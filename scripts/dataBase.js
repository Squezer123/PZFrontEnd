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
    getSubordinates(){
        let token = cookies.getCookie('token');
            fetch('http://localhost:8080/pracownicy_przelozonego', {
                method: 'POST',
                headers: {
                  'Accept': '*/*',
                  'Authorization': `Bearer ${token}`,
                }
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  return response.json();
                })
    }
}