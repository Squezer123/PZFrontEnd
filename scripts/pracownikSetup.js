const worker = new Worker("../scripts/achivWorker.js");
var dataFromWorker;
const url = 'http://localhost:8080/Osiagniecia';
const token = cookies.getCookie('token');
var globalAchivData = [];


worker.addEventListener('message', (event) => {
    const result = event.data.result;

    if (result === 'success') {
        dataFromWorker = event.data.data;
        console.log('Success:', dataFromWorker);
        createOsiagniecia(dataFromWorker);
    } else {
        const error = event.data.error;
        console.error('Error:', error);
    }
});

worker.postMessage({ url, token });

let createOsiagniecia = (data) => {
    let container = document.getElementsByClassName("zgloszenia")[0];

    data.forEach(element => {
        document.querySelector('.workplace').appendChild(creator.osiagniecie(element));
    });
}

