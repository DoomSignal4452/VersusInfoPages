
function BuildMonsterList() { // Add element and affinity pics to show in list.
    let ML="";
    let counter=0;
    for(var i = 0;i<Monster.length;i++) {
        ML+=
        `<div id="Monster${Monster[i].id}" class="TBMonsterList ${model.tempStyles.TeamBuilder.ListSelection} ${isIselectedList(counter)}" onclick="SelectFromList(this.id)">
        ${Monster[i].Species}
        </div>`

        counter++;
    };
    return ML;
};

function SelectFromList(DivId) {
    let OnlyNum = DivId.replace('Monster', '') // Removes 'Monster' from DivId
    let MonId = parseFloat(OnlyNum); // Makes string into mumber

    let index = Monster.findIndex( element => {
        if (element.id === MonId) {
          return true;
        }
    });

    model.teamMaker.select.list = Monster[index];
    model.teamMaker.marker.list = index;
    ViewTeamBuild();
};

function AddToTeam() {
    if (model.teamMaker.team.length < 3 && model.teamMaker.select.list.Species != undefined){ // checks to ensure there is never more than 3 monsters in team & that selection is not empty(undefined)
        model.teamMaker.team.push(model.teamMaker.select.list);
        ViewTeamBuild();
    };
};

function BuildTeamList() { // Add element and affinity pics to show in list.
    let ML=``;
    let counter=0;
    for(var i = 0;i<model.teamMaker.team.length;i++) {

        ML+=
        `<div id="Team${counter}" class="TBMonsterTeam ${isIselected(counter)}" onclick="SelectFromTeam(this.id)">
        ${model.teamMaker.team[i].Species}
        <br>Element: ${model.teamMaker.team[i].Element} - Affinity: ${model.teamMaker.team[i].Affinity}
        </div>`
        counter++;
    }
    return ML;
};

function SelectFromTeam(DivId) {    
    let OnlyNum = DivId.replace('Team', '') // Removes 'Team' from DivId
    let index = parseFloat(OnlyNum); // Makes string into mumber

    model.teamMaker.select.team = model.teamMaker.team[index];
    model.teamMaker.marker.team = index;

    ViewTeamBuild();
};

function isIselected(counter) {
    if (typeof model.teamMaker.marker.team != 'number') {return '';}

    else if(counter === model.teamMaker.marker.team) {return 'isSelected';}

    else {return ''};
};

function isIselectedList(counter) {
    if (typeof model.teamMaker.marker.list != 'number') {return '';}

    else if(counter === model.teamMaker.marker.list) {return 'isSelected';}

    else {return ''};
};

function removeFromTeam() {
    if (typeof model.teamMaker.marker.team != 'number' || model.teamMaker.marker.team < 0 || model.teamMaker.marker.team > 3) {
        return false;
    } else {
        model.teamMaker.team.splice(model.teamMaker.marker.team, 1);
        model.teamMaker.marker.team = undefined;
        ViewTeamBuild();
        return true;
    };
};