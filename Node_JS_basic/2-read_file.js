const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path);

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

module.exports = countStudents;
