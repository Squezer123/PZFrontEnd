class Osiagniecie{
    constructor(config){
        this.idOsiagniecia = config.id;
        this.nazwa = config.nazwa;
        this.iloscPunktow = config.punkty;
        this.data = config.data;
        this.czyZatwierdzone = config.zatwierdzone;
        this.podKategoriaNazwa = config.kategoria;
        this.idWniosku = config.idWniosku;
    }
}