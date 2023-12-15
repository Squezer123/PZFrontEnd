var creator = {
    osiagniecie(element){
        let newOsiagniecie = document.createElement("div");
        newOsiagniecie.style.display = "flex";
        newOsiagniecie.style.alignItems = "center";
        let pola = [];
        

        for (let key in element) {
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
            
            
            if(key === "czyZatwierdzone" && value){
                osiagniecieData.innerHTML = `Zatwierdzone`;
                osiagniecieData.style.color = "green";
            }
            else if(key === "czyZatwierdzone" && !value){
                osiagniecieData.innerHTML = `Odrzucone`;
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

        document.getElementsByClassName('zgloszenia')[0].appendChild(newOsiagniecie);
    },
}