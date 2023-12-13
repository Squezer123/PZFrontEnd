const url = 'http://localhost:8080/Osiagniecia';
const token = cookies.getCookie('token');
console.log(token);

fetch(url, {
  method: 'GET',
  headers: {
    'Accept': '*/*',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQUkFDT1dOSUsiLCJleHAiOjE5MTg1MDAzNzZ9.BSDyxIcv_NeLx-8lyj7K1OhD3d50A_s6bKrMK3rxGvs`
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