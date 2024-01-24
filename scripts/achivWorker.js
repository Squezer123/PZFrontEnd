self.addEventListener('message', (event) => {
  const url = event.data.url; // Access the url from the data
  const token = event.data.token;

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
      self.postMessage({ result: 'success', data }); // Send data back to the main thread
    })
    .catch(error => {
      self.postMessage({ result: 'error', error: error.message }); // Send error back to the main thread
    });
});