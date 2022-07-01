import * as Median from "./MedianFunctions";

test('should get median age', () => {
    let data = [{"age": 1},
                {"age": 2}];
    expect(Median.getMedianAge(data)).toBe(1.5);
});

test('should get median height', () => {
    let data = [{"height": 1},
                {"height": 2}];
    expect(Median.getMedianHeight(data)).toBe(1.5);
});

test('should get median weight', () => {
    let data = [{"weight": 1},
                {"weight": 2}];
    expect(Median.getMedianWeight(data)).toBe(1.5);
});

test('should get median body temp', () => {
    let data = [{"bodyTemp": 1},
                {"bodyTemp": 2}];
    expect(Median.getMedianBodyTemp(data)).toBe(1.5);
});

test('should get median pulse rate', () => {
    let data = [{"pulseRate": 1},
                {"pulseRate": 2}];
    expect(Median.getMedianPulseRate(data)).toBe(1.5);
});

test('should get median blood pressure', () => {
    let data = [{"bloodPressureSystolic": 1, "bloodPressureDiastolic": 1},
                {"bloodPressureSystolic": 2, "bloodPressureDiastolic": 2}];
    expect(Median.getMedianBloodPressure(data)).toBe("2/2");
});

test('should get median systolic blood pressure', () => {
    let data = [{"bloodPressureSystolic": 1},
                {"bloodPressureSystolic": 2}];
    expect(Median.getMedianSysBloodPressure(data)).toBe(1.5);
});

test('should get median diastolic blood pressure', () => {
    let data = [{"bloodPressureDiastolic": 1},
                {"bloodPressureDiastolic": 2}];
    expect(Median.getMedianDiasBloodPressure(data)).toBe(1.5);
});

test('should get median respiration rate', () => {
    let data = [{"respirationRate": 1},
                {"respirationRate": 2}];
    expect(Median.getMedianRespirationRate(data)).toBe(1.5);
});

test('should get median hours of exercise per week', () => {
    let data = [{"avgWklyExercise": 1},
                {"avgWklyExercise": 2}];
    expect(Median.getMedianWklyExercise(data)).toBe(1.5);
});

test('should get median hours of work per week', () => {
    let data = [{"avgWklyHrs": 1},
                {"avgWklyHrs": 2}];
    expect(Median.getMedianWklyHrs(data)).toBe(1.5);
});

test('should get median vacation balance', () => {
    let data = [{"vacationBalance": 1},
                {"vacationBalance": 2}];
    expect(Median.getMedianVacationBalance(data)).toBe(1.5);
});
