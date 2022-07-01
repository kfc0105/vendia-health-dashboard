import * as Mode from "./ModeFunctions";

test('should get mode age', () => {
    let data = [{"age": 1},
                {"age": 2}];
    expect(Mode.getModeAge(data)).toEqual([1,2]);
});

test('should get mode height', () => {
    let data = [{"height": 1},
                {"height": 2}];
    expect(Mode.getModeHeight(data)).toEqual([1,2]);
});

test('should get mode weight', () => {
    let data = [{"weight": 1},
                {"weight": 2}];
    expect(Mode.getModeWeight(data)).toEqual([1,2]);
});

test('should get mode body temp', () => {
    let data = [{"bodyTemp": 1},
                {"bodyTemp": 2}];
    expect(Mode.getModeBodyTemp(data)).toEqual([1,2]);
});

test('should get mode pulse rate', () => {
    let data = [{"pulseRate": 1},
                {"pulseRate": 2}];
    expect(Mode.getModePulseRate(data)).toEqual([1,2]);
});

test('should get mode systolic blood pressure', () => {
    let data = [{"bloodPressureSystolic": 1},
                {"bloodPressureSystolic": 2}];
    expect(Mode.getModeSysBloodPressure(data)).toEqual([1,2]);
});

test('should get mode diastolic blood pressure', () => {
    let data = [{"bloodPressureDiastolic": 1},
                {"bloodPressureDiastolic": 2}];
    expect(Mode.getModeDiasBloodPressure(data)).toEqual([1,2]);
});

test('should get mode respiration rate', () => {
    let data = [{"respirationRate": 1},
                {"respirationRate": 2}];
    expect(Mode.getModeRespirationRate(data)).toEqual([1,2]);
});

test('should get mode hours of exercise per week', () => {
    let data = [{"avgWklyExercise": 1},
                {"avgWklyExercise": 2}];
    expect(Mode.getModeWklyExercise(data)).toEqual([1,2]);
});

test('should get mode hours of work per week', () => {
    let data = [{"avgWklyHrs": 1},
                {"avgWklyHrs": 2}];
    expect(Mode.getModeWklyHrs(data)).toEqual([1,2]);
});

test('should get mode vacation balance', () => {
    let data = [{"vacationBalance": 1},
                {"vacationBalance": 2}];
    expect(Mode.getModeVacationBalance(data)).toEqual([1,2]);
});
