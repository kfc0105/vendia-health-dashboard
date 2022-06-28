
export function getAverageAge(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].age;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageHeight(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].height;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageWeight(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].weight;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageBodyTemp(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].bodyTemp;
    }
    avg /= _data.length;
    return avg;
}

export function getAveragePulseRate(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].pulseRate;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageBloodPressure(_data) {
    let avgSystolic = 0;
    let avgDiastolic = 0;
    for (let i = 0; i < _data.length; i++) {
        avgSystolic += _data[i].bloodPressureSystolic;
        avgDiastolic += _data[i].bloodPressureDiastolic;
    }
    avgSystolic /= _data.length;
    avgDiastolic /= _data.length;

    let avgBloodPressure = Math.round(avgSystolic) + " / " + Math.round(avgDiastolic);
    return avgBloodPressure;
}

export function getAverageRespirationRate(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].respirationRate;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageWklyExercise(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].avgWklyExercise;
    }
    avg /= _data.length;
    return avg;
}

export function getAverageWklyHrs(_data) {
    let avg = 0;
    for (let i = 0; i < _data.length; i++) {
        avg += _data[i].avgWklyHrs;
    }
    avg /= _data.length;
    return avg;
}
