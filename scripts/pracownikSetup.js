const worker = new Worker("../scripts/achivWorker.js");
var dataFromWorker;
const url = 'http://localhost:8080/Osiagniecia';
const token = cookies.getCookie('token');

worker.addEventListener('message', (event) => {
    const result = event.data.result;

    if (result === 'success') {
        dataFromWorker = event.data.data;
        console.log('Success:', dataFromWorker);
        createOsiagniecia(dataFromWorker); // Call the function with the data
    } else {
        const error = event.data.error;
        console.error('Error:', error);
    }
});

worker.postMessage({ url, token });

let createOsiagniecia = (data) => {
    let container = document.getElementsByClassName("zgloszenia")[0];

    data.forEach(element => {
        creator.osiagniecie(element);
    });
}
