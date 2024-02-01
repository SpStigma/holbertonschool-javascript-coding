/* const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');
    const NUMBER_OF_STUDENTS = lines.length - 1;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    const header = lines[0].split(',');
    const rows = lines.slice(1).map((line) => line.split(','));
    const FirstNameCS = [];
    const FirstNameSWE = [];
    let NbrCs = 0;
    let NbrSwe = 0;

    rows.forEach((row) => {
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');
      const field = row[fieldIndex];

      if (field === 'CS') {
        NbrCs += 1;
        FirstNameCS.push(row[firstNameIndex]);
      } else if (field === 'SWE') {
        NbrSwe += 1;
        FirstNameSWE.push(row[firstNameIndex]);
      }
    });

    console.log(`Number of students in CS: ${NbrCs}. List: ${FirstNameCS.join(', ')}`);
    console.log(`Number of students in SWE: ${NbrSwe}. List: ${FirstNameSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents; */

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously.
    const data = fs.readFileSync(path, 'utf8').trim();

    // Split the data by lines.
    const lines = data.split('\n');

    // Initialize variables to count students in each field.
    let csCount = 0;
    const csList = [];
    let sweCount = 0;
    const sweList = [];

    // Iterate through each line.
    for (const line of lines) {
      const fields = line.split(',');
      const [firstName, lastName, age, field] = fields;

      // Check if the line is not empty
      if (firstName && lastName && age && field) {
        if (field === 'CS') {
          csCount += 1;
          csList.push(firstName);
        } else if (field === 'SWE') {
          sweCount += 1;
          sweList.push(firstName);
        }
      }
    }

    // Log the number of students and their lists.
    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
