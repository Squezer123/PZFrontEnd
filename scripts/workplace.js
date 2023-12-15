let buttons = document.getElementsByClassName('navButton');
let workplace = document.querySelector(".workplace");
let temporaryAchiv = [];
let title = document.querySelector(".title");

let sentAchiv = (achiv) =>{
        
        let token = cookies.getCookie('token');
        achiv.forEach(element => {
            console.log(JSON.stringify(element));
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
}

buttons[0].addEventListener('click', ()=> {
    title.innerHTML = "Zarządzanie zgłoszeniami";

    workplace.innerHTML = null;
    
    globalAchivData.forEach(element => {
        if(element.zatwierdzone === false)
        creator.osiagniecie(element);
    });

    let addButton = creator.button('Dodaj');
    let SendButton = creator.button('Wyslij');

    addButton.addEventListener("click", () => {
        let modal = document.querySelector(".modal");
        let modalContainer = document.querySelector(".modalContainer");
        modal.classList.add("open")
        modalContainer.addEventListener("click", (e)=>{
            e.stopPropagation();
        })
        modal.addEventListener("click", ()=> {
            modal.classList.remove("open");
        })
    })
    SendButton.addEventListener("click", () => {
        sentAchiv(temporaryAchiv);
    })
    workplace.appendChild(addButton);
    workplace.appendChild(SendButton);

})


buttons[1].addEventListener('click', ()=> {
    title.innerHTML = "Statystyka";
    workplace.style.overflowY = "hidden";
    workplace.innerHTML = null;
    
})


