import * as Avg from "./AverageFunctions";

export function getStdDevAge(_data) {
    const avg = Avg.getAverageAge(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].age - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevHeight(_data) {
    const avg = Avg.getAverageHeight(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].height - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevWeight(_data) {
    const avg = Avg.getAverageWeight(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].weight - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevBodyTemp(_data) {
    const avg = Avg.getAverageBodyTemp(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].bodyTemp - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevPulseRate(_data) {
    const avg = Avg.getAveragePulseRate(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].pulseRate - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevBloodPressure(_data) {
    const avgSys = Avg.getAverageSysBloodPressure(_data);
    const avgDias = Avg.getAverageDiasBloodPressure(_data);
    let summationSys = 0;
    let summationDias = 0;
    for (let i = 0; i < _data.length; i++) {
        summationSys += Math.pow((_data[i].bloodPressureSystolic - avgSys), 2);
        summationDias += Math.pow((_data[i].bloodPressureDiastolic - avgDias), 2);
    }
    const stdDevSys = Math.sqrt(summationSys / _data.length);
    const stdDevDias = Math.sqrt(summationDias / _data.length);

    const stdDev = Math.round(stdDevSys) + "/" + Math.round(stdDevDias);
    return stdDev;
}

export function getStdDevSysBloodPressure(_data) {
    const avgSys = Avg.getAverageSysBloodPressure(_data);
    let summationSys = 0;
    for (let i = 0; i < _data.length; i++) {
        summationSys += Math.pow((_data[i].bloodPressureSystolic - avgSys), 2);
    }
    const stdDevSys = Math.sqrt(summationSys / _data.length);

    return stdDevSys;
}

export function getStdDevDiasBloodPressure(_data) {
    const avgDias = Avg.getAverageDiasBloodPressure(_data);
    let summationDias = 0;
    for (let i = 0; i < _data.length; i++) {
        summationDias += Math.pow((_data[i].bloodPressureDiastolic - avgDias), 2);
    }
    const stdDevDias = Math.sqrt(summationDias / _data.length);

    return stdDevDias;
}

export function getStdDevRespirationRate(_data) {
    const avg = Avg.getAverageRespirationRate(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].respirationRate - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevWklyExercise(_data) {
    const avg = Avg.getAverageWklyExercise(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].avgWklyExercise - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevWklyHrs(_data) {
    const avg = Avg.getAverageWklyHrs(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].avgWklyHrs - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}

export function getStdDevVacationBalance(_data) {
    const avg = Avg.getAverageVacationBalance(_data);
    let summation = 0;
    for (let i = 0; i < _data.length; i++) {
        summation += Math.pow((_data[i].vacationBalance - avg), 2);
    }
    const stdDev = Math.sqrt(summation / _data.length);
    return stdDev;
}
