const worst = {
    getWorstAll: new Function(),
    getWorstMale: new Function(),
    getWorstFemale: new Function(),

    getWorstProof: new Function(),
    getWorstProofMale: new Function(),
    getWorstProofFemale: new Function()
}

worst.getWorstAll = (array) => {
    let worst = 9876
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.result <= worst) {
                    worst = el.result
                }
            })
        }
    })
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

worst.getWorstMale = (array) => {
    let worst = 9876
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Male') {
                    if (el.result <= worst) {
                        worst = el.result
                    }
                }
            })
        }
    })
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

worst.getWorstFemale = (array) => {
    let worst = 9876
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Female') {
                    if (el.result <= worst) {
                        worst = el.result
                    }
                }
            })
        }
    })
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

worst.getWorstProof = (proof) => {
    let worst = 9876
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.result <= worst) {
                worst = el.result
            }
        })
    }
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

worst.getWorstProofMale = (proof) => {
    let worst = 9876
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Male') {
                if (el.result <= worst) {
                    worst = el.result
                }
            }
        })
    }
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

worst.getWorstProofFemale = (proof) => {
    let worst = 9876
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Female') {
                if (el.result <= worst) {
                    worst = el.result
                }
            }
        })
    }
    if (worst ==9876) {
        return 0;
    }
    return worst;
}

export default worst