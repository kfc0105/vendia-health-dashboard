import * as Avg from "./AverageFunctions";

/* Average age tests */
test('should get average age as int', () => {
    let data = [{"age": 2},
                {"age": 8}];
    expect(Avg.getAverageAge(data)).toBe(5);
});

test('should get average age as decimal', () => {
    let data = [{"age": 1},
                {"age": 8}];
    expect(Avg.getAverageAge(data)).toBe(4.5);
});

// test('should get average age as 0', () => {
//     let data = null;
//     expect(Avg.getAverageAge(data)).toBe(0);
// });


/* Average height tests */
test('should get average height as int', () => {
    let data = [{"height": 2},
                {"height": 8}];
    expect(Avg.getAverageHeight(data)).toBe(5);
});

test('should get average height as decimal', () => {
    let data = [{"height": 1},
                {"height": 8}];
    expect(Avg.getAverageHeight(data)).toBe(4.5);
});


/* Average weight tests */
test('should get average weight as int', () => {
    let data = [{"weight": 2},
                {"weight": 8}];
    expect(Avg.getAverageWeight(data)).toBe(5);
});

test('should get average weight as decimal', () => {
    let data = [{"weight": 1},
                {"weight": 8}];
    expect(Avg.getAverageWeight(data)).toBe(4.5);
});


/* Average body temp tests */
test('should get average body temp as int', () => {
    let data = [{"bodyTemp": 2},
                {"bodyTemp": 8}];
    expect(Avg.getAverageBodyTemp(data)).toBe(5);
});

test('should get average body temp as decimal', () => {
    let data = [{"bodyTemp": 1},
                {"bodyTemp": 8}];
    expect(Avg.getAverageBodyTemp(data)).toBe(4.5);
});


/* Average pulse rate tests */
test('should get average pulse rate as int', () => {
    let data = [{"pulseRate": 2},
                {"pulseRate": 8}];
    expect(Avg.getAveragePulseRate(data)).toBe(5);
});

test('should get average pulse rate as decimal', () => {
    let data = [{"pulseRate": 1},
                {"pulseRate": 8}];
    expect(Avg.getAveragePulseRate(data)).toBe(4.5);
});


/* Average blood pressure tests */
test('should get average blood pressure', () => {
    let data = [{"bloodPressureSystolic": 2, "bloodPressureDiastolic": 2},
                {"bloodPressureSystolic": 8, "bloodPressureDiastolic": 8}];
    expect(Avg.getAverageBloodPressure(data)).toBe("5/5");
});

test('should get average blood pressure as int (rounded from decimal)', () => {
    let data = [{"bloodPressureSystolic": 1, "bloodPressureDiastolic": 1},
                {"bloodPressureSystolic": 8, "bloodPressureDiastolic": 8}];
    expect(Avg.getAverageBloodPressure(data)).toBe("5/5");
});

test('should get average systolic blood pressure as int', () => {
    let data = [{"bloodPressureSystolic": 2},
                {"bloodPressureSystolic": 8}];
    expect(Avg.getAverageSysBloodPressure(data)).toBe(5);
});

test('should get average systolic blood pressure as decimal', () => {
    let data = [{"bloodPressureSystolic": 1},
                {"bloodPressureSystolic": 8}];
    expect(Avg.getAverageSysBloodPressure(data)).toBe(4.5);
});

test('should get average diastolic blood pressure as int', () => {
    let data = [{"bloodPressureDiastolic": 2},
                {"bloodPressureDiastolic": 8}];
    expect(Avg.getAverageDiasBloodPressure(data)).toBe(5);
});

test('should get average diastolic blood pressure as decimal', () => {
    let data = [{"bloodPressureDiastolic": 1},
                {"bloodPressureDiastolic": 8}];
    expect(Avg.getAverageDiasBloodPressure(data)).toBe(4.5);
});


/* Average respiration rate tests */
test('should get average respiration rate as int', () => {
    let data = [{"respirationRate": 2},
                {"respirationRate": 8}];
    expect(Avg.getAverageRespirationRate(data)).toBe(5);
});

test('should get average respiration rate as decimal', () => {
    let data = [{"respirationRate": 1},
                {"respirationRate": 8}];
    expect(Avg.getAverageRespirationRate(data)).toBe(4.5);
});


/* Average hours of exercise per week tests */
test('should get average hours of exercise per week as int', () => {
    let data = [{"avgWklyExercise": 2},
                {"avgWklyExercise": 8}];
    expect(Avg.getAverageWklyExercise(data)).toBe(5);
});

test('should get average hours of exercise per week as decimal', () => {
    let data = [{"avgWklyExercise": 1},
                {"avgWklyExercise": 8}];
    expect(Avg.getAverageWklyExercise(data)).toBe(4.5);
});


/* Average hours of work per week tests */
test('should get average hours of work per week as int', () => {
    let data = [{"avgWklyHrs": 2},
                {"avgWklyHrs": 8}];
    expect(Avg.getAverageWklyHrs(data)).toBe(5);
});

test('should get average hours of work per week as decimal', () => {
    let data = [{"avgWklyHrs": 1},
                {"avgWklyHrs": 8}];
    expect(Avg.getAverageWklyHrs(data)).toBe(4.5);
});


/* Average vacation balance tests */
test('should get average vacation balance as int', () => {
    let data = [{"vacationBalance": 2},
                {"vacationBalance": 8}];
    expect(Avg.getAverageVacationBalance(data)).toBe(5);
});

test('should get average vacation balance as decimal', () => {
    let data = [{"vacationBalance": 1},
                {"vacationBalance": 8}];
    expect(Avg.getAverageVacationBalance(data)).toBe(4.5);
});
