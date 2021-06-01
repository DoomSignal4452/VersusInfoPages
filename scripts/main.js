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

    frontPage: {
        monsterSpot: {
            selectMon: '',
        },

    },

    teamMaker: {
        selectMon:  '',

        team: [],

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
    document.getElementById('app').innerHTML = `
        ViewIndex() Running
    `;
}


// ###############################################################
// ##                       Controller                          ##
// ############################################################### <div></div>

