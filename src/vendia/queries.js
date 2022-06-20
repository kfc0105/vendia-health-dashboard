// Requesting data for single employee
const getEmplQuery = `
  query getEmplData($emplID: ID!) {
  get_Employee($emplID: ID!) {
      _id
      firstName
      lastName
      age
      genderID
      height
      weight
      bodyTemp
      pulseRate
      bloodPressureSystolic
      bloodPressureDiastolic
      respirationRate
      avgWklyExercise
      vacationBalance
      avgWklyHrs
  }
  }
`;

// Requesting data for all employees
const getAllEmplQuery = `
  query getAllEmplData {
    list_EmployeeItems {
      _EmployeeItems {
        _id
        firstName
        lastName
        age
        genderID
        height
        weight
        bodyTemp
        pulseRate
        bloodPressureSystolic
        bloodPressureDiastolic
        respirationRate
        avgWklyExercise
        vacationBalance
        avgWklyHrs
      }
    }
  }
`;

// Creating and adding an employee (example input below)
// { "input": {
//   "age": 50,
//   "avgWklyExercise": 10,
//   "avgWklyHrs": 40,
//   "bloodPressureDiastolic": 80,
//   "bloodPressureSystolic": 120,
//   "bodyTemp": 98,
//   "firstName": "Joseph",
//   "genderID": "male",
//   "height": 60,
//   "lastName": "Keller",
//   "pulseRate": 70,
//   "respirationRate": 12,
//   "vacationBalance": 30,
//   "weight": 180
// 	}
// }
const addEmplMutation = `
  mutation addEmployee($input: Self_Employee_Input_!) {
    add_Employee(input: $input, syncMode: NODE_LEDGERED) {
      result {
        _id
        firstName
        lastName
      }
    }
  }
`;

export { getEmplQuery, getAllEmplQuery, addEmplMutation };
