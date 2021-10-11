const best = {
    getBestAll: new Function(),
    getBestMale: new Function(),
    getBestFemale: new Function(),

    getBestProof: new Function(),
    getBestProofMale: new Function(),
    getBestProofFemale: new Function(),
}

best.getBestAll = (array) => {
    let best = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.result >= best) {
                    best = el.result
                }
            })
        }
    })
    return best;
}

best.getBestMale = (array) => {
    let best = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Male') {
                    if (el.result >= best) {
                        best = el.result
                    }
                }
            })
        }
    })
    return best;
}

best.getBestFemale = (array) => {
    let best = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Female') {
                    if (el.result >= best) {
                        best = el.result
                    }
                }
            })
        }
    })
    return best;
}



best.getBestProof = (proof) => {
    let best = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.result >= best) {
                best = el.result
            }
        })
    }
    return best;
}

best.getBestProofMale = (proof) => {
    let best = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Male') {
                if (el.result >= best) {
                    best = el.result
                }
            }
        })
    }
    return best;
}

best.getBestProofFemale = (proof) => {
    let best = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Female') {
                if (el.result >= best) {
                    best = el.result
                }
            }
        })
    }
    return best;
}

export default best