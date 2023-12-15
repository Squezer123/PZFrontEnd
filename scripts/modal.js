let modalHandler = () => {
    let form = document.getElementsByTagName("form")[0];
    let workplace = document.querySelector(".workplace");
    var nazwa = document.getElementById('nazwa').value;
    var iloscPunktow = parseInt(document.getElementById('iloscPunktow').value);
    var data = document.getElementById('data').value;
    var podKategoriaNazwa = document.getElementById('podKategoria').value;
    var osiagniecie = {
        idOsiagniecia: 0,
        nazwa: nazwa,
        iloscPunktow: iloscPunktow,
        data: data,
        czyZatwierdzone: false,
        podKategoriaNazwa: podKategoriaNazwa,
        idWniosku: 251
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
