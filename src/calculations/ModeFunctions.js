import { mode } from "mathjs";

export function getModeAge(_data) {
    // Get array of just ages
    const employeeAges = _data.map( a => a.age);
    const modeAge = mode(employeeAges);

    if (modeAge.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeAge;
}

export function getModeHeight(_data) {
    const employeeHeights = _data.map( a => a.height);
    const modeHeight = mode(employeeHeights);

    if (modeHeight.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeHeight;
}

export function getModeWeight(_data) {
    const employeeWeights = _data.map( a => a.weight);
    const modeWeight = mode(employeeWeights);

    if (modeWeight.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeWeight;
}

export function getModeBodyTemp(_data) {
    const employeeBodyTemps = _data.map( a => a.bodyTemp);
    const modeTemp = mode(employeeBodyTemps);

    if (modeTemp.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeTemp;
}

export function getModePulseRate(_data) {
    const employeePulseRates = _data.map( a => a.pulseRate);
    const modePulse = mode(employeePulseRates);

    if (modePulse.length === _data.length) {
        return "Unique Datapoints";
    }

    return modePulse;
}

export function getModeSysBloodPressure(_data) {
    const employeeSysBloodPressures = _data.map( a => a.bloodPressureSystolic);
    const modeSys = mode(employeeSysBloodPressures);

    if (modeSys.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeSys;
}

export function getModeDiasBloodPressure(_data) {
    const employeeDiasBloodPressures = _data.map( a => a.bloodPressureDiastolic);
    const modeDias = mode(employeeDiasBloodPressures);

    if (modeDias.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeDias;
}

export function getModeRespirationRate(_data) {
    const employeeRespirationRates = _data.map( a => a.respirationRate);
    const modeResp = mode(employeeRespirationRates);

    if (modeResp.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeResp;
}

export function getModeWklyExercise(_data) {
    const employeesWklyExercise = _data.map( a => a.avgWklyExercise);
    const modeExercise = mode(employeesWklyExercise);

    if (modeExercise.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeExercise;
}

export function getModeWklyHrs(_data) {
    const employeesWklyHrs = _data.map( a => a.avgWklyHrs);
    const modeHrs = mode(employeesWklyHrs);

    if (modeHrs.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeHrs;
}

export function getModeVacationBalance(_data) {
    const employeeVacationBalances = _data.map( a => a.vacationBalance);
    const modeVacation = mode(employeeVacationBalances);

    if (modeVacation.length === _data.length) {
        return "Unique Datapoints";
    }

    return modeVacation;
}
