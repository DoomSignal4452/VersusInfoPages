ViewHeader()

function ViewHeader() {
    document.getElementById('header').innerHTML = `
    <div class=headerWrap>

        <div class=headerTop>I is Header</div>

        <div class=headerBot>

            <div class="navBar">
                <div class="hoverRed"><a href="index.html">Home</a></div>

                <div class="hoverRed"><a href="pages/MonsterList.html">Monster List</a></div>

                <div class="hoverRed"><a href="pages/ElementsAndAffinity.html">Elements & Affinity</a></div>

                <div class="hoverRed"><a href="pages/Ghosts.html">Ghosts: Special Monsters</a></div>

                <div class="hoverRed"><a href="pages/TeamBuilder.html">Team Builder</a></div>

                <div class="hoverRed floatRight"><a href="pages/About.html">About</a></div>

            </div>

        </div>

    </div>
    `;
}




// <div></div>