const average = {
    getUnderAverageAll: new Function(),
    getUnderAverageMale: new Function(),
    getUnderAverageFemale: new Function(),
    getOverAverageAll: new Function(),
    getOverAverageMale: new Function(),
    getOverAverageFemale: new Function(),

}

average.getUnderAverageAll = (array) => {
    let average = getAverageAll(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average > el.result) {
                    cont++
                }
            })
        }
    })
    return cont;
}

average.getUnderAverageMale = (array) => {
    let average = getAverageMale(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average > el.result) {
                    if (el.playerId.gender == 'Male') {
                        cont++
                    }
                }

            })
        }
    })
    return cont;
}

average.getUnderAverageFemale = (array) => {
    let average = getAverageFemale(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average > el.result) {
                    if (el.playerId.gender == 'Female') {
                        cont++
                    }
                }

            })
        }
    })
    return cont;
}

average.getOverAverageAll = (array) => {
    let average = getAverageAll(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average <= el.result) {
                    cont++
                }
            })
        }
    })
    return cont;
}

average.getOverAverageMale = (array) => {
    let average = getAverageMale(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average <= el.result) {
                    if (el.playerId.gender == 'Male') {
                        cont++
                    }
                }

            })
        }
    })
    return cont;
}

average.getOverAverageFemale = (array) => {
    let average = getAverageFemale(array)
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (average <= el.result) {
                    if (el.playerId.gender == 'Female') {
                        cont++
                    }
                }

            })
        }
    })
    return cont;
}

export default average