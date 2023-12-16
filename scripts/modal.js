let modalHandler = async () => {
    let form = document.getElementsByTagName("form")[0];
    let workplace = document.querySelector(".workplace");
    var nazwa = document.getElementById('nazwa').value;
    var iloscPunktow = parseInt(document.getElementById('iloscPunktow').value);
    var data = document.getElementById('data').value;
    var podKategoriaNazwa = document.getElementById('podKategoria').value;
    let wnioskiTemp = await db.getData('Wnioski');
    let wniosekTempId;
    wnioskiTemp.forEach((element) => {
        let obecnyRok = new Date().getFullYear();
        let data = new Date(element.dataKoncowa).getFullYear();
        if(data === obecnyRok)
        wniosekTempId = element.idWniosku;
    });

    console.log(podKategoriaNazwa);


    var osiagniecie = {
        idOsiagniecia: 0,
        nazwa: nazwa,
        iloscPunktow: iloscPunktow,
        data: data,
        czyZatwierdzone: false,
        podKategoriaNazwa: podKategoriaNazwa,
        idWniosku: wniosekTempId
    };

    if (temporaryAchiv.length === 0) {
        temporaryAchiv[0] = osiagniecie;
    } else {
        temporaryAchiv[temporaryAchiv.length] = osiagniecie;
    }

    let tempAchiv = creator.osiagniecie(osiagniecie);
    let dodajButton = document.querySelector(".dodaj");
    let tempAchivContainer = document.createElement("div");
    tempAchivContainer.appendChild(tempAchiv);
    workplace.insertBefore(tempAchivContainer, dodajButton);

    let modal = document.querySelector(".modal");
    form.reset();
    modal.classList.remove("open");
}


let modalHandlerEdit = async (element,temp,arr) => {
    let form = document.getElementsByTagName("form")[0];
    let workplace = document.querySelector(".workplace");
    var nazwa = document.getElementById('nazwa').value;
    var iloscPunktow = parseInt(document.getElementById('iloscPunktow').value);
    var data = document.getElementById('data').value;
    var podKategoriaNazwa = document.getElementById('podKategoria').value;
    let czyZatwierdzone = Boolean(document.getElementById('czyZatwierdzone').value);
    let newDate = new Date(data);
    var year = newDate.getFullYear();
    var month = ('0' + (newDate.getMonth() + 1)).slice(-2); 
    var day = ('0' + newDate.getDate()).slice(-2); 
    var hours = ('0' + newDate.getHours()).slice(-2); 
    var minutes = ('0' + newDate.getMinutes()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
    formattedDate = String(formattedDate);
    console.log(formattedDate)
    


    var osiagniecie = {
        idOsiagniecia: element.idOsiagniecia,
        nazwa: nazwa,
        iloscPunktow: iloscPunktow,
        data: formattedDate,
        czyZatwierdzone: czyZatwierdzone,
        podKategoriaNazwa: podKategoriaNazwa,
        idWniosku: element.idWniosku
    };

    if(osiagniecie.czyZatwierdzone !== element.czyZatwierdzone){
        db.putData(`OsiagniecieZatwierdz/${element.idOsiagniecia}`)
    }
    console.log(osiagniecie);
    if(!temp)
    db.putData(`Osiagniecie/${element.idOsiagniecia}`,osiagniecie);
    else{
    arr.forEach(element=>{
        if(element.idOsiagniecia = osiagniecie.idOsiagniecia)
        element = osiagniecie;
    })
    }

    let modal = document.querySelector(".modal");
    form.reset();
    modal.classList.remove("open");
    return arr;
}