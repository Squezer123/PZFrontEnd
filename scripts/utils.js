var utils = { 
    redirection(role){
        if(role === "index") window.location.href = 'http://127.0.0.1:5500/index.html'
        else window.location.href = `http://127.0.0.1:5500/${role}Page.html`;
    }
}