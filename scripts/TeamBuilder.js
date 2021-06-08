
function MakeTeamBuilder() {
    return  `       
    <div id="AppTeamBuilder" class="infoBox infoBoxWide">

        <h2>AppTeamBuilder</h2>

        <div class="spacer"></div>

        ${DisplayCurrentTeam()}

        ${DisplayMonsterSelector()}

        <div class="spacer"></div>

        <p>
            Sed sit amet lectus quis est egestas dignissim. Ut quis lobortis est. Suspendisse nec felis eu risus mollis tempus. Donec elementum tincidunt 
            felis mattis vestibulum. In leo nisi, accumsan vitae blandit quis, pulvinar ut massa. Etiam feugiat et diam sed vulputate. Curabitur porttitor 
            bibendum facilisis. Nulla ultrices erat ac enim lobortis feugiat.
        </p>

    </div>`;

}

function DisplayCurrentTeam() {
    return `       
    <div id="TeamBox" class="infoBox infoBoxNarrow">

        <div>
            ${model.teamMaker.team} test
        </div>

    </div>`

}

function DisplayMonsterSelector() {
    return `       
    <div id="MonsterWrap" class="infoBox infoBoxNarrow">
    ` 
    

    + 
    `<div>
        ${BuildMonsterList()}
    </div>`

    + 
    `</div>`
}

function BuildMonsterList() {
    let ML="";
    for(var i = 0;i<Monster.length;i++) {
        // console.log(Monster[i])
        
        ML+=
        `<div id="${Monster[i].id}" class="TBMonsterList ${model.tempStyles.TeamBuilder.ListSelection}" onclick="SelectFormList(this.id)">
        ${Monster[i].Species}
        </div>`
        
        // $.('#myList').append("<option>"+Monster[i]+"</option>");
    }
    return ML;
}

function SelectFormList(MonId) {
    console.log(MonId);
}