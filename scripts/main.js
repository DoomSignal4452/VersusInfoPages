// ###############################################################
// ##                          Model                            ##
// ###############################################################

const model = {
    inputs: {
        monsterList: {
            search: '',
        },

        teamMaker: {
            search: '',
        },
    },

    tempStyles: {
        TeamBuilder: {
            ListSelection: '',
            TeamSelection: '',
        },
    },

    frontPage: {
        monsterSpot: {
            selectMon: '',
        },
    },

    teamMaker: {
        select: {
            list:  {},
            team: {},
        },

        marker: {
            list: undefined,
            team: undefined,
        },

        team: [

        ],

        weakness: {
            monster: [],
            element: [],
            affinity: [],
        },

        strength: {
            monster: [],
            element: [],
            affinity: [],
        },
    },

    monsterList: {
        selectMon:  '',
    },
}



// ###############################################################
// ##                          View                             ##
// ############################################################### <div></div>


function ViewIndex() {  
    // Notes: 

    //      infoShortAbout: Must write up info about game and short info about the sorld. Needs worldbuilding.

    //      infoGmaeVersion: Add a seperate model for storing info, to look at and excange easily? Also set up a page solely for "patch notes"

    //      infoRandomMon: Add controller to choose presented monster. Info about monsters needs to be added to MonsterList.js.


    document.getElementById('app').innerHTML = `
        <div id="infoShortAbout" class="infoBox infoBoxWide">
            <h2>infoShortAbout</h2>

            <div class="spacer"></div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet diam a neque euismod, blandit consectetur leo dapibus. 
                Duis feugiat enim quis leo aliquet tempus. Cras finibus est est, quis laoreet lorem gravida ut. Vestibulum ante ipsum primis 
                in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sit amet diam leo. Etiam imperdiet congue molestie. Maecenas 
                tristique metus nulla, quis fermentum nunc placerat nec. Vestibulum finibus vestibulum dolor id gravida.
            </p>

            <div class="spacer"></div>

            <p>
                In velit nunc, auctor et suscipit id, luctus quis libero. Vestibulum vehicula est in elit tincidunt, quis egestas tortor euismod. 
                Aliquam et porttitor ex. Mauris suscipit sodales odio sed fringilla. Nunc posuere neque arcu, quis vulputate nisi dapibus nec. 
                Nunc pellentesque volutpat volutpat. Cras nunc mi, hendrerit vel nunc at, congue viverra tortor. Etiam rhoncus nisl vel lectus 
                porta ultricies a sed magna. Quisque vel est eget nunc cursus aliquet. Quisque placerat, massa vitae luctus gravida, nisl mi faucibus 
                est, et viverra metus turpis eget erat. Aliquam luctus mauris in facilisis bibendum. Nam imperdiet massa sed justo tincidunt sagittis.
            </p>
        </div>

        <div id="infoGameVersion" class="infoBox infoBoxNarrow">

            <h2>infoGameVersion</h2>

            <div class="spacer"></div>

            <p>
                Sed sit amet lectus quis est egestas dignissim. Ut quis lobortis est. Suspendisse nec felis eu risus mollis tempus. Donec elementum tincidunt 
                felis mattis vestibulum. In leo nisi, accumsan vitae blandit quis, pulvinar ut massa. Etiam feugiat et diam sed vulputate. Curabitur porttitor 
                bibendum facilisis. Nulla ultrices erat ac enim lobortis feugiat.
            </p>
        
        </div>

        <div id="infoRandomMon" class="infoBox infoBoxMid">

        
            <h2>infoRandomMon</h2>

            <div class="spacer"></div>

            <p>
                Nullam pellentesque, nulla ac pretium dictum, sapien arcu tincidunt enim, vel semper augue magna vitae ligula. Sed nec justo odio. Fusce pellentesque 
                justo et lorem iaculis dictum id non nulla. Duis sed eleifend ante. Morbi vel mollis sapien. Vivamus nec mauris non augue varius tincidunt. Praesent 
                egestas dapibus neque in consequat. Fusce vel arcu quis quam egestas lobortis quis at ex. Nullam orci est, semper vel nunc vel, auctor ultricies diam. 
                In quis convallis libero.
            </p>

            <div class="spacer"></div>
    
            <p>
                Nam suscipit malesuada justo, ut pellentesque orci convallis sollicitudin. Suspendisse dictum dolor in nisi vestibulum efficitur. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam in lacus a risus mollis congue. Nulla posuere mattis odio, quis lobortis 
                nulla semper porttitor. Integer non convallis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
        
        </div>
    `;
}





function ViewMonsterList() {
    document.getElementById('app').innerHTML = `
    ViewMonsterList() Running
`;
}

// ###############################################################
// ##                       Controller                          ##
// ############################################################### <div></div>

