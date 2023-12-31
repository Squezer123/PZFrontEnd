var creator = {
    osiagniecie(element){
        let newOsiagniecie = document.createElement("div");
        newOsiagniecie.style.display = "flex";
        newOsiagniecie.style.alignItems = "center";
        let pola = [];
        globalAchivData.push(new Osiagniecie(element))

        for (let key in element) {
            if(key === 'idOsiagniecia'){
                continue;
            }
            let value = element[key];
            let osiagniecieData = document.createElement("div");
            osiagniecieData.classList.add("osiagnieciapole")
            if(key ==="data"){
            let timestamp = value;
            let date = new Date(timestamp);
            const dzien = ('0' + date.getDate()).slice(-2); 
            const miesiac = ('0' + (date.getMonth() + 1)).slice(-2); 
            const rok = date.getFullYear();
            const sformatowanaData = `${dzien}.${miesiac}.${rok}`;
            value = sformatowanaData;
            }
            if(key === 'podKategoriaNazwa'){
                osiagniecieData.innerHTML = `Kategoria: ${value}`;
                pola.push(osiagniecieData);
                continue;
            }
            if(key === 'idWniosku'){
                continue;
            }
            
            
            if(key === "czyZatwierdzone" && value){
                osiagniecieData.innerHTML = `Zatwierdzone`;
                osiagniecieData.style.color = "green";
            }
            else if(key === "czyZatwierdzone" && !value){
                osiagniecieData.innerHTML = `Niezatwierdzone`;
                osiagniecieData.style.color = "red";

            }
            else{
                osiagniecieData.innerHTML = `${key}: ${value}`;
            }
            pola.push(osiagniecieData);
        }
        pola.forEach((pole) => {
            newOsiagniecie.appendChild(pole);
        })
        newOsiagniecie.classList.add('osiagniecie');
        return newOsiagniecie;
    },

    button(buttontxt){
        let button = document.createElement("button");
        button.innerHTML = buttontxt;
        return button;
    }
}