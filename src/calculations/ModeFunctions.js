import { mode } from "mathjs";

export function getModeAge(_data) {
    // Get array of just ages
    const employeeAges = _data.map( a => a.age);
    return mode(employeeAges);
}

export function getModeHeight(_data) {
    const employeeHeights = _data.map( a => a.height);
    return mode(employeeHeights);
}

export function getModeWeight(_data) {
    const employeeWeights = _data.map( a => a.weight);
    return mode(employeeWeights);
}

export function getModeBodyTemp(_data) {
    const employeeBodyTemps = _data.map( a => a.bodyTemp);
    return mode(employeeBodyTemps);
}

export function getModePulseRate(_data) {
    const employeePulseRates = _data.map( a => a.pulseRate);
    return mode(employeePulseRates);
}

export function getModeSysBloodPressure(_data) {
    const employeeSysBloodPressures = _data.map( a => a.bloodPressureSystolic);
    return mode(employeeSysBloodPressures);
}

export function getModeDiasBloodPressure(_data) {
    const employeeDiasBloodPressures = _data.map( a => a.bloodPressureDiastolic);
    return mode(employeeDiasBloodPressures);
}

export function getModeRespirationRate(_data) {
    const employeeRespirationRates = _data.map( a => a.respirationRate);
    return mode(employeeRespirationRates);
}

export function getModeWklyExercise(_data) {
    const employeesWklyExercise = _data.map( a => a.avgWklyExercise);
    return mode(employeesWklyExercise);
}

export function getModeWklyHrs(_data) {
    const employeesWklyHrs = _data.map( a => a.avgWklyHrs);
    return mode(employeesWklyHrs);
}

export function getModeVacationBalance(_data) {
    const employeeVacationBalances = _data.map( a => a.vacationBalance);
    return mode(employeeVacationBalances);
}