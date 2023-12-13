const url = 'http://localhost:8080/Osiagniecia';
const token = cookies.getCookie('token');
console.log(token);

fetch(url, {
  method: 'GET',
  headers: {
    'Accept': '*/*',
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });