

function BuildMonsterList() { // Add element and affinity pics to show in list.
    let ML="";
    let counter=0;
    for(var i = 0;i<Monster.length;i++) {
        // console.log(Monster[i])
        
        ML+=
        `<div id="Monster${Monster[i].id}" class="TBMonsterList ${model.tempStyles.TeamBuilder.ListSelection} ${isIselectedList(counter)}" onclick="SelectFromList(this.id)">
        ${Monster[i].Species}
        </div>`
        
        // $.('#myList').append("<option>"+Monster[i]+"</option>");
        counter++;
    }
    return ML;
}

function SelectFromList(DivId) {
    let OnlyNum = DivId.replace('Monster', '') // Removes 'Monster' from DivId
    let MonId = parseFloat(OnlyNum); // Makes string into mumber

    //console.log('monster id is '+ MonId);
    //let index = Monster.findIndex(MonId)


    let index = Monster.findIndex( element => {
        if (element.id === MonId) {
          return true;
        }
    });
    //console.log('index is '+ index);

    //console.log(index);
    //console.log(model.teamMaker.marker.list)
    model.teamMaker.select.list = Monster[index];
    model.teamMaker.marker.list = index;
    //console.log(model.teamMaker.marker.list)
    ViewTeamBuild();
}

function AddToTeam() {
    if (model.teamMaker.team.length < 3 && model.teamMaker.select.list.Species != undefined){ // checks to ensure there is never more than 3 monsters in team & that selection is not empty(undefined)
        model.teamMaker.team.push(model.teamMaker.select.list);
        ViewTeamBuild();
    }
}

function BuildTeamList() { // Add element and affinity pics to show in list.
    let ML=``;
    let counter=0;
    for(var i = 0;i<model.teamMaker.team.length;i++) {  //  onclick="SelectFromList(this.id)"

        ML+=
        `<div id="Team${counter}" class="TBMonsterTeam ${isIselected(counter)}" onclick="SelectFromTeam(this.id)">
        ${model.teamMaker.team[i].Species}
        <br>Element: ${model.teamMaker.team[i].Element} - Affinity: ${model.teamMaker.team[i].Affinity}
        </div>`
        counter++;
    }
    return ML;
}

function SelectFromTeam(DivId) {    
    let OnlyNum = DivId.replace('Team', '') // Removes 'Team' from DivId
    let index = parseFloat(OnlyNum); // Makes string into mumber

    model.teamMaker.select.team = model.teamMaker.team[index];
    model.teamMaker.marker.team = index;

    //console.log(model.teamMaker.team[index]);
    ViewTeamBuild();
}

function isIselected(counter) {
    //console.log('counter Team '+counter)
    if(counter == model.teamMaker.marker.team) {return 'isSelected'}
    else {return ''};
}

function isIselectedList(counter) {
    //console.log('counter List '+counter)
    if(counter == model.teamMaker.marker.list) {return 'isSelected'}
    else {return ''};
}

function removeFromTeam() {

    if (model.teamMaker.marker.team == undefined) {
        return
    } else {
        model.teamMaker.team.splice(model.teamMaker.marker.team, 1);
        model.teamMaker.marker.team = undefined;
    };

    //console.log(index);
    ViewTeamBuild();
}