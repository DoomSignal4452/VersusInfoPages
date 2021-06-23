
function ViewMonsterList2() {
    document.getElementById('app').innerHTML = `
        <div class="spacer"></div>

        <div class="infoBox infoBoxWide">
            ${BuildBigMonsterList()}
        </div>
    `;
}


function ViewMonsterList() {
    document.getElementById('app').innerHTML = `
        <div class="spacer"></div>

        <div class="infoBox infoBoxWide BigMonsterList">
            <table style="width:100%" class="">
                <tr>
                    <th>Picture</th>
                    <th>Species</th>
                    <th>Element</th>
                    <th>Affinity</th>
                </tr>
                ${BuildBigMonsterList()}
            </table>
        </div>
    `;
}