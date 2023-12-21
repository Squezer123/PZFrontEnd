let buttons = document.getElementsByClassName('navButton');
let workplace = document.querySelector(".workplace");
let temporaryAchiv = [];
let title = document.querySelector(".title");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modalContainer");


buttons[0].addEventListener('click',async ()=> {
    workplace.innerHTML = null;
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

buttons[1].addEventListener('click',async ()=> {
                modal.classList.add("open")
                modalContainer.addEventListener("click", (e)=>{
                    e.stopPropagation();
                })
                modal.addEventListener("click", ()=> {
                modal.classList.remove("open");
                })
                document.querySelector(".submitButton").addEventListener("click", function() {
                    let max = 100;
                    let min = 1;
                    let randomId = Math.floor(Math.random() * (max - min + 1)) + min;
                    var formData = {
                        id: randomId,
                        login: document.getElementById("login").value,
                        haslo: document.getElementById("czyZatwierdzone").value,
                        nazwaRoli: document.getElementById("podKategoria").value,
                        idPracownika: Math.floor(Math.random() * (max - min + 1)) + min,
                        imiePracownika: document.getElementById("Imie").value,
                        nazwiskoPracownika: document.getElementById("Nazwisko").value
                      };
                      let type = `Uzytkownik`

                      console.log(formData);

                      db.PostData(type,formData)
                  });


})


buttons[2].addEventListener('click',async ()=> {
    workplace.innerHTML = null;
    let toDelete = document.createElement("div");
    let input = document.createElement("input");
    input.type = "number"; // Ustawienie typu na number
    input.id = "ID"; // Ustawienie id na ID
    
    // Tworzenie elementu input typu submit
    let submitButton = document.createElement("input");
    submitButton.innerHTML = 'Usun';
    submitButton.type = "submit"; // Ustawienie typu na submit
    submitButton.value = "Submit";
    toDelete.appendChild(input);
    toDelete.appendChild(submitButton);
    workplace.appendChild(toDelete);
    submitButton.onclick = function() {
        let inputValue = input.value;
        let string = `Uzytkownik/${inputValue}`;
        db.DeleteData(string);
    };
})

