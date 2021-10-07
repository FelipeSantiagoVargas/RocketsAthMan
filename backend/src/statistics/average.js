const average = {
    getAverageAll: new Function(),
    getAverageMale: new Function(),
    getAverageFemale: new Function(),
    getUnderAverageAll: new Function(),
    getUnderAverageMale: new Function(),
    getUnderAverageFemale: new Function(),
    getOverAverageAll: new Function(),
    getOverAverageMale: new Function(),
    getOverAverageFemale: new Function(),

    getAverageProof: new Function(),
    getAverageProofMale: new Function(),
    getAverageProofFemale: new Function(),
    getUnderAverageProof: new Function(),
    getUnderAverageProofMale: new Function(),
    getUnderAverageProofFemale: new Function(),
    getOverAverageProof: new Function(),
    getOverAverageProofMale: new Function(),
    getOverAverageProofFemale: new Function(),
}

function getAverageAll(array) {
    let average = 0
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                average += el.result
                cont++
            })
        }
    })
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}

function getAverageMale(array) {
    let average = 0
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Male') {
                    average += el.result
                    cont++
                }
            })
        }
    })
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}

function getAverageFemale(array) {
    let average = 0
    let cont = 0
    array.forEach(e => {
        if (e.listPlayers.length > 0) {
            e.listPlayers.forEach(el => {
                if (el.playerId.gender == 'Female') {
                    average += el.result
                    cont++
                }
            })
        }
    })
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}


function getAverageProof(proof) {
    let average = 0
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            average += el.result
            cont++
        })
    }
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}

function getAverageProofMale(proof) {
    let average = 0
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Male') {
                average += el.result
                cont++
            }
        })
    }
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}

function getAverageProofFemale(proof) {
    let average = 0
    let cont = 0
    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (el.playerId.gender == 'Female') {
                average += el.result
                cont++
            }
        })
    }
    if (average == 0 && cont == 0) {
        return 0;
    }
    average = average / cont
    return average;
}

average.getAverageAll = (array) => { return getAverageAll(array) }
average.getAverageMale = (array) => { return getAverageMale(array) }
average.getAverageFemale = (array) => { return getAverageFemale(array) }

average.getAverageProof = (proof) => { return getAverageProof(proof) }
average.getAverageProofMale = (proof) => { return getAverageProofMale(proof) }
average.getAverageProofFemale = (proof) => { return getAverageProofFemale(proof) }

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


average.getUnderAverageProof = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average > el.result) {
                cont++
            }
        })
    }

    return cont;
}

average.getUnderAverageProofMale = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average > el.result) {
                if (el.playerId.gender == 'Male') {
                    cont++
                }
            }
        })
    }

    return cont;
}

average.getUnderAverageProofFemale = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average > el.result) {
                if (el.playerId.gender == 'Female') {
                    cont++
                }
            }
        })
    }

    return cont;
}

average.getOverAverageProof = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average <= el.result) {
                cont++
            }
        })
    }

    return cont;
}

average.getOverAverageProofMale = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average <= el.result) {
                if (el.playerId.gender == 'Male') {
                    cont++
                }
            }
        })
    }

    return cont;
}

average.getOverAverageProofFemale = (proof) => {
    let average = getAverageProof(proof)
    let cont = 0

    if (proof.listPlayers.length > 0) {
        proof.listPlayers.forEach(el => {
            if (average <= el.result) {
                if (el.playerId.gender == 'Female') {
                    cont++
                }
            }
        })
    }

    return cont;
}

export default average