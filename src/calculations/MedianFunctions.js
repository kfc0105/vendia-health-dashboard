import { median } from "mathjs";

export function getMedianAge(_data) {
    // Get array of just ages
    const employeeAges = _data.map( a => a.age);
    return median(employeeAges);
}

export function getMedianHeight(_data) {
    const employeeHeights = _data.map( a => a.height);
    return median(employeeHeights);
}

export function getMedianWeight(_data) {
    const employeeWeights = _data.map( a => a.weight);
    return median(employeeWeights);
}

export function getMedianBodyTemp(_data) {
    const employeeBodyTemps = _data.map( a => a.bodyTemp);
    return median(employeeBodyTemps);
}

export function getMedianPulseRate(_data) {
    const employeePulseRates = _data.map( a => a.pulseRate);
    return median(employeePulseRates);
}

export function getMedianBloodPressure(_data) {
    const employeeSysBloodPressures = _data.map( a => a.bloodPressureSystolic);
    const employeeDiasBloodPressures = _data.map( a => a.bloodPressureDiastolic);

    const medianBloodPressure = Math.round(median(employeeSysBloodPressures)) + "/" + Math.round(median(employeeDiasBloodPressures));
    return medianBloodPressure;
}

export function getMedianSysBloodPressure(_data) {
    const employeeSysBloodPressures = _data.map( a => a.bloodPressureSystolic);
    return median(employeeSysBloodPressures);
}

export function getMedianDiasBloodPressure(_data) {
    const employeeDiasBloodPressures = _data.map( a => a.bloodPressureDiastolic);
    return median(employeeDiasBloodPressures);
}

export function getMedianRespirationRate(_data) {
    const employeeRespirationRates = _data.map( a => a.respirationRate);
    return median(employeeRespirationRates);
}

export function getMedianWklyExercise(_data) {
    const employeesWklyExercise = _data.map( a => a.avgWklyExercise);
    return median(employeesWklyExercise);
}

export function getMedianWklyHrs(_data) {
    const employeesWklyHrs = _data.map( a => a.avgWklyHrs);
    return median(employeesWklyHrs);
}

export function getMedianVacationBalance(_data) {
    const employeeVacationBalances = _data.map( a => a.vacationBalance);
    return median(employeeVacationBalances);
}