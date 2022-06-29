
export function getRangeAge(_data) {
    // Get array of just ages
    const employeeAges = _data.map( a => a.age);

    // Sort ascending order
    employeeAges.sort( (a, b) => {
        return a - b;
    });

    const range = employeeAges[employeeAges.length - 1] - employeeAges[0];
    return range;
}

export function getRangeHeight(_data) {
    const employeeHeights = _data.map( a => a.height);

    employeeHeights.sort( (a, b) => {
        return a - b;
    });

    const range = employeeHeights[employeeHeights.length - 1] - employeeHeights[0];
    return range;
}

export function getRangeWeight(_data) {
    const employeeWeights = _data.map( a => a.weight);

    employeeWeights.sort( (a, b) => {
        return a - b;
    });

    const range = employeeWeights[employeeWeights.length - 1] - employeeWeights[0];
    return range;
}

export function getRangeBodyTemp(_data) {
    const employeeBodyTemps = _data.map( a => a.bodyTemp);

    employeeBodyTemps.sort( (a, b) => {
        return a - b;
    });

    const range = employeeBodyTemps[employeeBodyTemps.length - 1] - employeeBodyTemps[0];
    return range;
}

export function getRangePulseRate(_data) {
    const employeePulseRates = _data.map( a => a.pulseRate);

    employeePulseRates.sort( (a, b) => {
        return a - b;
    });

    const range = employeePulseRates[employeePulseRates.length - 1] - employeePulseRates[0];
    return range;
}

export function getRangeBloodPressure(_data) {
    const employeeSysBloodPressures = _data.map( a => a.bloodPressureSystolic);
    const employeeDiasBloodPressures = _data.map( a => a.bloodPressureDiastolic);

    employeeSysBloodPressures.sort( (a, b) => {
        return a - b;
    });
    employeeDiasBloodPressures.sort( (a, b) => {
        return a - b;
    });

    const rangeSys = employeeSysBloodPressures[employeeSysBloodPressures.length - 1] - employeeSysBloodPressures[0];
    const rangeDias = employeeDiasBloodPressures[employeeDiasBloodPressures.length - 1] - employeeDiasBloodPressures[0];

    const range = rangeSys + "/" + rangeDias;
    return range;
}

export function getRangeRespirationRate(_data) {
    const employeeRespirationRates = _data.map( a => a.respirationRate);

    employeeRespirationRates.sort( (a, b) => {
        return a - b;
    });

    const range = employeeRespirationRates[employeeRespirationRates.length - 1] - employeeRespirationRates[0];
    return range;
}

export function getRangeWklyExercise(_data) {
    const employeesWklyExercise = _data.map( a => a.avgWklyExercise);

    employeesWklyExercise.sort( (a, b) => {
        return a - b;
    });

    const range = employeesWklyExercise[employeesWklyExercise.length - 1] - employeesWklyExercise[0];
    return range;
}

export function getRangeWklyHrs(_data) {
    const employeesWklyHrs = _data.map( a => a.avgWklyHrs);

    employeesWklyHrs.sort( (a, b) => {
        return a - b;
    });

    const range = employeesWklyHrs[employeesWklyHrs.length - 1] - employeesWklyHrs[0];
    return range;
}

export function getRangeVacationBalance(_data) {
    const employeeVacationBalances = _data.map( a => a.vacationBalance);

    employeeVacationBalances.sort( (a, b) => {
        return a - b;
    });

    const range = employeeVacationBalances[employeeVacationBalances.length - 1] - employeeVacationBalances[0];
    return range;
}
