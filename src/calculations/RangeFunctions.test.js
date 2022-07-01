import * as Range from "./RangeFunctions";

test('should get range age', () => {
    let data = [{"age": 1},
                {"age": 2}];
    expect(Range.getRangeAge(data)).toBe(1);
});

test('should get range height', () => {
    let data = [{"height": 1},
                {"height": 2}];
    expect(Range.getRangeHeight(data)).toBe(1);
});

test('should get range weight', () => {
    let data = [{"weight": 1},
                {"weight": 2}];
    expect(Range.getRangeWeight(data)).toBe(1);
});

test('should get range body temp', () => {
    let data = [{"bodyTemp": 1},
                {"bodyTemp": 2}];
    expect(Range.getRangeBodyTemp(data)).toBe(1);
});

test('should get range pulse rate', () => {
    let data = [{"pulseRate": 1},
                {"pulseRate": 2}];
    expect(Range.getRangePulseRate(data)).toBe(1);
});

test('should get range systolic blood pressure', () => {
    let data = [{"bloodPressureSystolic": 1},
                {"bloodPressureSystolic": 2}];
    expect(Range.getRangeSysBloodPressure(data)).toBe(1);
});

test('should get range diastolic blood pressure', () => {
    let data = [{"bloodPressureDiastolic": 1},
                {"bloodPressureDiastolic": 2}];
    expect(Range.getRangeDiasBloodPressure(data)).toBe(1);
});

test('should get range respiration rate', () => {
    let data = [{"respirationRate": 1},
                {"respirationRate": 2}];
    expect(Range.getRangeRespirationRate(data)).toBe(1);
});

test('should get range hours of exercise per week', () => {
    let data = [{"avgWklyExercise": 1},
                {"avgWklyExercise": 2}];
    expect(Range.getRangeWklyExercise(data)).toBe(1);
});

test('should get range hours of work per week', () => {
    let data = [{"avgWklyHrs": 1},
                {"avgWklyHrs": 2}];
    expect(Range.getRangeWklyHrs(data)).toBe(1);
});

test('should get range vacation balance', () => {
    let data = [{"vacationBalance": 1},
                {"vacationBalance": 2}];
    expect(Range.getRangeVacationBalance(data)).toBe(1);
});
