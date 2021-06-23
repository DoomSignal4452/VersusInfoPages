
function BuildBigMonsterList2() { // Add element and affinity pics to show in list.
    let ML="";
    let counter=0;
    for(var i = 0;i<Monster.length;i++) {
        ML+=
        `<div id="Monster${Monster[i].id}" class="TBMonsterList BigMonsterList">

            <div class="BM_small_pic"><img src="../img/${Monster[i].Picture}" alt="Picture of ${Monster[i].Species}" class="BM_small_pic"></div>

            <div><h3>${Monster[i].Species}</h3></div>

            <div>
                Element: ${Monster[i].Element}
                <br>Affinity: ${Monster[i].Affinity}
            </div>
        
        </div>`

        counter++;
    };
    return ML;
};




function BuildBigMonsterList() { // Add element and affinity pics to show in list.
    let ML="";
    let counter=0;
    for(var i = 0;i<Monster.length;i++) {
        ML+=
        `<tr>
          <td class="slimTD"><img src="../img/${Monster[i].Picture}" alt="Picture of ${Monster[i].Species}" class="BM_small_pic"></td>
          <td class="PadLeft">${Monster[i].Species}</td>
          <td class="PadLeft">${Monster[i].Element}</td>
          <td class="PadLeft">${Monster[i].Affinity}</td>
        </tr>`

        counter++;
    };
    return ML;
};