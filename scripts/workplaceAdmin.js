let buttons = document.getElementsByClassName('navButton');
let workplace = document.querySelector(".workplace");
let temporaryAchiv = [];
let title = document.querySelector(".title");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modalContainer");


buttons[0].addEventListener('click',async ()=> {
    let uzytkownicy = await db.getData('Uzytkownicy');
    uzytkownicy.forEach(element => {
        if(element.imiePracownika !== null){
            let uzytkownik = document.createElement("div");
            uzytkownik.innerHTML = `${element.imiePracownika} ${element.nazwiskoPracownika}`;
            uzytkownik.classList.add('uzytkownik');

            uzytkownik.addEventListener('click', () => {
                modalContainer.innerHTML = null;
                modal.classList.add("open")
                modalContainer.addEventListener("click", (e)=>{
                    e.stopPropagation();
                })
                modal.addEventListener("click", ()=> {
                    modal.classList.remove("open");
                })
                for(let key in element){
                    let value = element[key];
                    let tempElement = document.createElement("div");
                    tempElement.innerHTML = `${key}: ${value}`;
                    modalContainer.appendChild(tempElement);
                }                
            })
            workplace.appendChild(uzytkownik)
        }
    });
})

