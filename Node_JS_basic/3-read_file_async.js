const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

        const NUMBER_OF_STUDENTS = lines.length - 1;

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

        const result = `Number of students: ${NUMBER_OF_STUDENTS}\nNumber of students in CS: ${NbrCs}. List: ${FirstNameCS.join(', ')}\nNumber of students in SWE: ${NbrSwe}. List: ${FirstNameSWE.join(', ')}`;

        console.log(result);
        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
