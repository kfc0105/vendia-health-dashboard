import * as SD from "./StdDevFunctions";

test('should get standard deviation of age', () => {
    let data = [{"age": 1},
                {"age": 2}];
    expect(SD.getStdDevAge(data)).toBe(0.5);
});

test('should get standard deviation of height', () => {
    let data = [{"height": 1},
                {"height": 2}];
    expect(SD.getStdDevHeight(data)).toBe(0.5);
});

test('should get standard deviation of weight', () => {
    let data = [{"weight": 1},
                {"weight": 2}];
    expect(SD.getStdDevWeight(data)).toBe(0.5);
});

test('should get standard deviation of body temp', () => {
    let data = [{"bodyTemp": 1},
                {"bodyTemp": 2}];
    expect(SD.getStdDevBodyTemp(data)).toBe(0.5);
});

test('should get standard deviation of pulse rate', () => {
    let data = [{"pulseRate": 1},
                {"pulseRate": 2}];
    expect(SD.getStdDevPulseRate(data)).toBe(0.5);
});

test('should get standard deviation of systolic blood pressure', () => {
    let data = [{"bloodPressureSystolic": 1},
                {"bloodPressureSystolic": 2}];
    expect(SD.getStdDevSysBloodPressure(data)).toBe(0.5);
});

test('should get standard deviation of diastolic blood pressure', () => {
    let data = [{"bloodPressureDiastolic": 1},
                {"bloodPressureDiastolic": 2}];
    expect(SD.getStdDevDiasBloodPressure(data)).toBe(0.5);
});

test('should get standard deviation of respiration rate', () => {
    let data = [{"respirationRate": 1},
                {"respirationRate": 2}];
    expect(SD.getStdDevRespirationRate(data)).toBe(0.5);
});

test('should get standard deviation of hours of exercise per week', () => {
    let data = [{"avgWklyExercise": 1},
                {"avgWklyExercise": 2}];
    expect(SD.getStdDevWklyExercise(data)).toBe(0.5);
});

test('should get standard deviation of hours of work per week', () => {
    let data = [{"avgWklyHrs": 1},
                {"avgWklyHrs": 2}];
    expect(SD.getStdDevWklyHrs(data)).toBe(0.5);
});

test('should get standard deviation of vacation balance', () => {
    let data = [{"vacationBalance": 1},
                {"vacationBalance": 2}];
    expect(SD.getStdDevVacationBalance(data)).toBe(0.5);
});
