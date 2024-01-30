const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (request, response) => {
    response.setHeader('Content-Type', 'text/plan');
    
    if (request.url === '/') {
        response.statusCode = 200;
        response.end('Hello Holberton School!\n');
    }
    else if (request.url === '/students') {
        const databaseName = 'database.csv';

        try {
            const studentsData = await countStudents(databaseName);

            response.statusCode = 200;
            response.end(`This is the list of our students\n${studentsData}`);
        }
        catch (error) {
            response.statusCode = 500;
            response.end('Internal error serveur\n')
            console.error(error.message);
        }
    }
    else {
        response.statusCode = 404;
        response.end('Not found\n');
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;