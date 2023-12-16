let buttons = document.getElementsByClassName('navButton');
let workplace = document.querySelector(".workplace");
let temporaryAchiv = [];
let title = document.querySelector(".title");


buttons[0].addEventListener('click', ()=> {
    title.innerHTML = "Zarządzanie zgłoszeniami";

    workplace.innerHTML = null;
    
    globalAchivData.forEach(element => {
        if(element.zatwierdzone === false)
        creator.osiagniecie(element);
    });


    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttonsContainer");
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
        utils.redirection('pracownik');
    })
    buttonsContainer.appendChild(addButton);
    buttonsContainer.appendChild(SendButton);
    workplace.appendChild(buttonsContainer);

})


buttons[1].addEventListener('click',async ()=> {
   
    
})

try{
    buttons[2].addEventListener('click', async ()=> {
        workplace.innerHTML = null;
        let podwladni = await db.getData('pracownicy_przelozonego')
        podwladni.forEach(element => {
            let helpDiv = document.createElement("div");
            helpDiv.innerHTML = `${element.imie} ${element.nazwisko}`;
            workplace.appendChild(helpDiv);
        })
    })   
}catch(e){

}

