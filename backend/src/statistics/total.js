const total = {
    getTotalAll: new Function(),
    getTotalMale: new Function(),
    getTotalFemale: new Function(),

    getTotalProof: new Function(),
    getTotalProofMale: new Function(),
    getTotalProofFemale: new Function()
}

total.getTotalAll = (array) => {
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                cont++
            })
        }
    })
    return cont;
}

total.getTotalMale = (array) => {
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Male') {
                    cont++
                }
            })
        }
    })
    return cont;
}

total.getTotalFemale = (array) => {
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Female') {
                    cont++
                }
            })
        }
    })
    return cont;
}


total.getTotalProof = (proof) => {
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            cont++
        })
    }
    return cont;
}

total.getTotalProofMale = (proof) => {
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Male') {
                cont++
            }
        })
    }
    return cont;
}

total.getTotalProofFemale = (proof) => {
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Female') {
                cont++
            }
        })
    }
    return cont;
}

export default total