
function ViewMonsterList() {
    document.getElementById('app').innerHTML = `
        <div class="spacer"></div>

        <div class="infoBox infoBoxWide">
            ${BuildBigMonsterList()}
        </div>
    `;
}
