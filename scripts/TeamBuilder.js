
function ViewTeamBuild() { // Main View function, is to be called for visual updates.
    document.getElementById('app').innerHTML = `
    <div id="infoTeamBuilder" class="infoBox infoBoxWide">
            <h2>infoTeamBuilder</h2>

            <div class="spacer"></div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet diam a neque euismod, blandit consectetur leo dapibus. 
                Duis feugiat enim quis leo aliquet tempus. Cras finibus est est, quis laoreet lorem gravida ut. Vestibulum ante ipsum primis 
                in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sit amet diam leo. Etiam imperdiet congue molestie. Maecenas 
                tristique metus nulla, quis fermentum nunc placerat nec. Vestibulum finibus vestibulum dolor id gravida.
            </p>

        </div>

        <div class="spacer"></div>

        ${MakeTeamBuilder()}

        `;

}

function MakeTeamBuilder() {
    return  `       
    <div id="AppTeamBuilder" class="infoBox infoBoxWide">

        <h2>AppTeamBuilder</h2>

        <div class="spacer"></div>

        <div id="TeamBox" class="infoBox infoBoxMid">
            <div>
                ${BuildTeamList()}
            </div>
        </div>

        <div id="MonsterWrap" class="infoBox infoBoxNarrow">
            <div class="scrollingList">
                ${BuildMonsterList()}
            </div>

            <div class="spacer"></div>

            <button onclick="AddToTeam()">Add to Team</button>
        </div>

        <div class="spacer"></div>

        <p>
            Sed sit amet lectus quis est egestas dignissim. Ut quis lobortis est. Suspendisse nec felis eu risus mollis tempus. Donec elementum tincidunt 
            felis mattis vestibulum. In leo nisi, accumsan vitae blandit quis, pulvinar ut massa. Etiam feugiat et diam sed vulputate. Curabitur porttitor 
            bibendum facilisis. Nulla ultrices erat ac enim lobortis feugiat.
        </p>

    </div>`;

}


function BuildMonsterList() { // Add element and affinity pics to show in list.
    let ML="";
    for(var i = 0;i<Monster.length;i++) {
        // console.log(Monster[i])
        
        ML+=
        `<div id="${Monster[i].id}" class="TBMonsterList ${model.tempStyles.TeamBuilder.ListSelection}" onclick="SelectFromList(this.id)">
        ${Monster[i].Species}
        </div>`
        
        // $.('#myList').append("<option>"+Monster[i]+"</option>");
    }
    return ML;
}

function SelectFromList(DivId) {
    let MonId = parseFloat(DivId); // Makes string into mumber

    //console.log('monster id is '+ MonId);
    //let index = Monster.findIndex(MonId)


    let index = Monster.findIndex( element => {
        if (element.id === MonId) {
          return true;
        }
    });
    //console.log('index is '+ index);

    //console.log(Monster[index]);
    model.teamMaker.select.list = Monster[index];

}

function AddToTeam() {
    if (model.teamMaker.team.length < 3 && model.teamMaker.select.list.Species != undefined){ // checks to ensure there is never more than 3 monsters in team & that selection is not empty(undefined)
        model.teamMaker.team.push(model.teamMaker.select.list);
        ViewTeamBuild();
    }
}

function BuildTeamList() { // Add element and affinity pics to show in list.
    let ML="";
    for(var i = 0;i<model.teamMaker.team.length;i++) {  //  onclick="SelectFromList(this.id)"

        ML+=
        `<div id="Team${model.teamMaker.team[i].id}" class="TBMonsterTeam ">
        ${model.teamMaker.team[i].Species}
        <br>Element: ${model.teamMaker.team[i].Element} - Affinity: ${model.teamMaker.team[i].Affinity}
        </div>`
        
    }
    return ML;
}