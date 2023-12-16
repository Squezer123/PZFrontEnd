let buttons = document.getElementsByClassName('navButton');
let workplace = document.querySelector(".workplace");
let temporaryAchiv = [];
let title = document.querySelector(".title");
let modal = document.querySelector(".modal");
let modalContainer = document.querySelector(".modalContainer");
let helpArray = [];
let currentOpen;
function removeAllEventListeners(element) {
    // Pobierz klon elementu, aby zachować jego atrybuty
    const clonedElement = element.cloneNode(true);

    // Zastąp element klonem
    element.parentNode.replaceChild(clonedElement, element);

    // Przypisz nowy element do oryginalnej zmiennej
    // (teraz element nie ma żadnych listenerów)
    element = clonedElement;
}

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

buttons[0].addEventListener('click', async ()=> {
    title.innerHTML = "Zarządzanie zgłoszeniami";
    document.querySelector('.submitButton').innerHTML = "Dodaj";
    removeAllEventListeners(document.querySelector('.submitButton'));
    document.querySelector('.submitButton').addEventListener('click',()=> modalHandler())

    workplace.innerHTML = null


    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttonsContainer");
    let addButton = creator.button('Dodaj');
    let SendButton = creator.button('Wyslij');
    let osArr = await db.getData('Osiagniecia');

    addButton.addEventListener("click", () => {
        document.getElementById('czyZatwierdzone').style.display = 'none';
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
    title.innerHTML = "Statystyka";
    
    workplace.style.overflowY = "hidden";
    workplace.innerHTML = null;
    let oceny = await db.getData('Oceny');

    let wnioski = await db.getData('Wnioski');

    let kryteria = await db.getData('kryteriumOceny');

    let osiagnieciaPom = await db.getData('Osiagniecia');
    let przelozony;
    try{
        przelozony = db.getData('pracownik_przelozony')}
    catch(e){
    }
    

    

    

    let obecnyWniosek = () => {
        let obecnyRok = new Date().getFullYear();
        let wniosek;
        wnioski.forEach((element) => {
            const data = new Date(element.dataKoncowa).getFullYear();
            if(data === obecnyRok)
            wniosek = element;
        })
        return wniosek;
    }

    let idWniosku = obecnyWniosek().idWniosku;

    let punkty = 0;
    osiagnieciaPom.forEach((element) => {
        if(element.idWniosku === idWniosku && element.czyZatwierdzone)
        punkty += element.iloscPunktow;
    })

    if(kryteria.rodzajDzialalnosciNazwa === 'DYDAKTYCZNO-ORGANIZACYJNA'){
        if(punkty >= kryteria.progPozytywnejOcenyDO && punkty < kryteria.progOcenyZWyroznieniemDO)
        ocena = "Pozytywna"
        else if(punkty >= kryteria.progOcenyZWyroznieniemDO)
        ocena = "Pozytywna z wyróżnieniem";
        else ocena = "Negatywna";
    }
    else if(kryteria.rodzajDzialalnosciNazwa === 'NAUKOWO-BADAWCZA'){
        if(punkty >= kryteria.progPozytywnejOcenyNB && punkty < kryteria.progOcenyZWyroznieniemNB)
        ocena = "Pozytywna"
        else if(punkty >= kryteria.progOcenyZWyroznieniemNB)
        ocena = "Pozytywna z wyróżnieniem";
        else ocena = "Negatywna";
    }

    let statystyka = document.createElement("div");
    statystyka.classList.add("statystyka")

    let obecnyWniosekDiv = document.createElement("div");
    obecnyWniosekDiv.innerHTML = `ID obecnego wniosku: <span style="font-weight:bold;">${obecnyWniosek().idWniosku}</span> <br> Okres Rozliczeniowy Obecnego wniosku: <span style="font-weight:bold;">${obecnyWniosek().dataPoczatkowa} - ${obecnyWniosek().dataKoncowa}</span>  `
    let przewidywanaOcena = document.createElement("div");
    przewidywanaOcena.innerHTML = `Przewidywana ocena: <span style="font-weight:bold;">${ocena}</span> `;
    let punktyDiv = document.createElement("div");
    punktyDiv.innerHTML = `Liczba puntków: <span style="font-weight:bold;">${punkty}</span>`

    statystyka.appendChild(obecnyWniosekDiv);
    statystyka.appendChild(przewidywanaOcena);
    statystyka.appendChild(punktyDiv);

    if(ocena !== "Pozytywna z wyróżnieniem")
    {
        let brakujacePunkty;
        if(kryteria.rodzajDzialalnosciNazwa === 'DYDAKTYCZNO-ORGANIZACYJNA'){
            if(punkty < kryteria.progPozytywnejOcenyDO)
            brakujacePunkty = kryteria.progPozytywnejOcenyDO - punkty
            else if(punkty < kryteria.progOcenyZWyroznieniemDO)
            brakujacePunkty = kryteria.progOcenyZWyroznieniemDO - punkty;
        }
        else if(kryteria.rodzajDzialalnosciNazwa === 'NAUKOWO-BADAWCZA'){
            if(punkty < kryteria.progPozytywnejOcenyNB)
            brakujacePunkty = kryteria.progPozytywnejOcenyNB - punkty;
            else if(punkty < kryteria.progOcenyZWyroznieniemNB)
            brakujacePunkty = kryteria.progOcenyZWyroznieniemNB - punkty;
        }
        let brakujacePunktyDiv = document.createElement("div");
        brakujacePunktyDiv.innerHTML = `Liczba puntków potrzebna do wyższej oceny: <span style="font-weight:bold;">${brakujacePunkty}</span>`
        statystyka.appendChild(brakujacePunktyDiv);
    }
    if(przelozony.imie){
        
        let przelozonyDiv = document.createElement("div");
        przelozonyDiv.innerHTML = `Przełożony: <span style="font-weight:bold;">${przelozony.imie} ${przelozony.nazwisko}</span>`;
        statystyka.appendChild(przelozonyDiv);
    }

    let historiaOcenData = await db.getData('Oceny');
    console.log(historiaOcenData);
    let historiaOcen = document.createElement("div");
    historiaOcen.innerHTML = `Historia Ocen:`;
    
    historiaOcenData.forEach(element => {
        historiaOcenPom = document.createElement("div");
        let rok = new Date(element.data).getFullYear();
        let nazwa = element.nazwa;
        historiaOcenPom.innerHTML = `<span style="font-weight:bold;">${rok}: ${nazwa}</span>`;
        historiaOcen.appendChild(historiaOcenPom);
    })
    statystyka.appendChild(historiaOcen);

   
    workplace.appendChild(statystyka);
    
})

try{
    buttons[2].addEventListener('click', async ()=> {
        workplace.innerHTML = null;
        title.innerHTML = "Podwladny";
        workplace.style.overflowY = `scroll`;
        document.querySelector('.submitButton').innerHTML = "Zmien";
        removeAllEventListeners(document.querySelector('.submitButton'));
        document.querySelector('.submitButton').addEventListener('click',() => {modalHandlerEdit(currentOpen);podwaldniLoad();})
        let podwladni = await db.getData('pracownicy_przelozonego')
        async function podwaldniLoad(){
            workplace.innerHTML = null;
        podwladni.forEach(element => {
            let helpDiv = document.createElement("div");
            helpDiv.classList.add('podwladny');
            helpDiv.innerHTML = `${element.imie} ${element.nazwisko}`;
            helpDiv.addEventListener('click', async () =>{  
                let osiagnieciaPodwladnego = await db.getData(`OsiagnieciaPoId/${element.idPracownika}`);
                helpArray = osiagnieciaPodwladnego;
                workplace.innerHTML = null;
                osiagnieciaPodwladnego.forEach(element => {
                    podAchiv = creator.osiagniecie(element)
                    podAchiv.style.cursor = "pointer";
                    podAchiv.addEventListener("click", async () => {
                        currentOpen = element; 
                        console.log(currentOpen);
                        modal.classList.add('open');
                        modalContainer.addEventListener("click", (e)=>{
                            e.stopPropagation();
                        })
                        modal.addEventListener("click", ()=> {
                            modal.classList.remove("open");
                        })
                        document.getElementById('czyZatwierdzone').style.display = 'block';
                        var orginalDate = new Date(element.data);
                        var year = orginalDate.getFullYear();
                        var month = ('0' + (orginalDate.getMonth() + 1)).slice(-2); 
                        var day = ('0' + orginalDate.getDate()).slice(-2); 
                        var hours = ('0' + orginalDate.getHours()).slice(-2); 
                        var minutes = ('0' + orginalDate.getMinutes()).slice(-2);
                        var formattedDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
                        console.log(orginalDate);
                        document.getElementById('nazwa').value = element.nazwa;
                        document.getElementById('iloscPunktow').value = element.iloscPunktow;
                        document.getElementById('data').value = formattedDate;
                        document.getElementById('czyZatwierdzone').value = element.czyZatwierdzone;
                        document.getElementById('podKategoria').value = element.podKategoriaNazwa;
                    })
                   
                    workplace.appendChild(podAchiv);
                })
            })
            workplace.appendChild(helpDiv);
        })
    }
    podwaldniLoad();
    })   
}catch(e){

}

