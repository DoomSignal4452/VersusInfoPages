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