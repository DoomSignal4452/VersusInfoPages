
function ViewTeamBuild() { // Main View function, is to be called for visual updates.
    document.getElementById('app').innerHTML = `
    <div id="infoTeamBuilder" class="infoBox infoBoxWide">
        <h2>Team Builder</h2>

        <div class="spacer"></div>

            <p>
                Put togheter a team of three monsters, 
                <br>see their strenghts(not currently implemented) and their weaknesses(not currently implemented).
            </p>

        </div>

        <div class="spacer"></div>

        <div id="AppTeamBuilder" class="infoBox infoBoxWide">

            <div id="TeamBox" class="infoBox infoBoxMid">

                <button onclick="removeFromTeam()">Remove from Team</button>

                <div class="spacer"></div>

                <div class="noselect">
                ${BuildTeamList()}
                </div>

            </div>

        <div class="spacer"></div>

        <div id="MonsterWrap" class="infoBox infoBoxNarrow">
            <div class="scrollingList noselect">
                ${BuildMonsterList()}
            </div>

            <div class="spacer"></div>

            <button onclick="AddToTeam()">Add to Team</button>
        </div>

        <div class="spacer"></div>

        <p>
            (Description of team strenghts/weaknesses.)
        </p>

    </div>`;
}