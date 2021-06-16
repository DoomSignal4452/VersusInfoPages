
function BuildBigMonsterList() { // Add element and affinity pics to show in list.
    let ML="";
    let counter=0;
    for(var i = 0;i<Monster.length;i++) {
        ML+=
        `<div id="Monster${Monster[i].id}" class="TBMonsterList" onclick="SelectFromList(this.id)">
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